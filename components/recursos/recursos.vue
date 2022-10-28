<template>
  <div>
    <v-row>
      <v-col
        cols="12"
        xl="2"
        lg="3"
        md="3"
        sm="4"
        xs="6"
        v-for="(key, index) in items"
        :key="'recurso' + index"
      >
        <v-card elevation="0">
          <v-card-text class="pa-0 grey areaRecurso" @click="SelectRecurso(key)">
            <div
              elevation="2"
              :class="
                key.premium ? 'labeltp labelPremium' : ' labeltp labelFree'
              "
            >
              {{ key.premium ? "PREMIUM" : "FREE" }}
            </div>

            <img :src="key.urlImagen" height="100%" />
          </v-card-text>
          <v-card-text>
            <h3>{{ key.titulo }}</h3>
            {{ key.materia }}<br />
            <p>{{ key.sinopsis.substr(0, 109) }}</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<style>
.areaRecurso {
  height: 150px;
  text-align: center;
  overflow: hidden;
  cursor: pointer;
}

.areaRecurso:hover {
  opacity: 0.8;
}

.spminirecurso {
  background-color: grey;
  border: solid #f6f7f8 1px; 
}
.labeltp {
  position: absolute;
  z-index: 1;
  right: 3px;
  top: 3px;
  width: 80px;
  border-radius: 5px;
  font-size: 10px;
  color: #fff;
}
.labelPremium {
  background-color: #ff6c5c;
}
.labelFree {
  background-color: #ad227d;
}
</style>
<script>
import {mapState,mapMutations} from 'vuex'
export default {
  data() {
    return {};
  },
  computed:{
    ...mapState(['dialogfase1','recursoSelect'])
  },
  methods: {
    ...mapMutations(['seleccionaRecurso','agregaRelacionados','vistafase1']),
    SelectRecurso(p){
      this.seleccionaRecurso(p)
 

      new Promise((solve)=>{
        var relacion=[...this.items]
      var posicion=relacion.indexOf(p)
        if(this.dialogfase1===false){
          relacion.splice(posicion,1)
        }else{
       // this.scrollToTop()
          this.vistafase1(false)
          relacion.push(this.recursoSelect)
          relacion.splice(posicion,1)

        
        }
        solve(relacion)
      })
      .then((relacion)=>{
        this.agregaRelacionados(relacion)
        this.vistafase1(true)
      })
     
    },

  },
  props: {
    items: [],
  },
};
</script>
