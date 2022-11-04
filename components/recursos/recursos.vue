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
          <v-card-text class="pa-0 grey areaRecurso" >
            <div
              v-if="key.tipoRecurso!=='link'" 
              elevation="2"
              :class="
                key.premium ? 'labeltp labelPremium' : ' labeltp labelFree'
              "
            >
              {{ key.premium ? "PREMIUM" : "FREE" }}
            </div>


            <!-----seccion video ---->
            <div 
            v-if="key.tipoRecurso==='link'" 
            class="videoBtn"
            @click="SelectRecurso(key)"
            >
            <v-icon class="white--text">mdi-arrow-expand</v-icon>
            </div>

            <div class="commentchip" v-if="key.comentarios">
             {{(ncomentarios(key.comentarios))}} <v-icon class="melon--text icono">mdi-chat</v-icon> 
            </div>

            <div class="favoritosicon" @click="addfavoritos(key)">
              <v-icon class="melon--text iconofav" >{{key.favoritos && key.favoritos.length > 0 ? key.favoritos.indexOf(userdatacollect.uid)>0 ? 'mdi-cards-heart' : 'mdi-cards-heart-outline' : 'mdi-cards-heart-outline'}}</v-icon>
            </div>

            <iframe
            v-if="key.tipoRecurso==='link'"
            width="auto" height="auto"
            :src="key.urlVista.replace('watch?v=', 'embed/')"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>


            <img v-if="key.tipoRecurso!=='link'" :src="key.urlImagen" height="100%"  @click="SelectRecurso(key)" />
            

            
          </v-card-text>
          <v-card-text >
            {{key.tipoRecurso}}
            {{key.tipo}}
            <h3>{{ key.titulo }}</h3>
            <p>{{ key.sinopsis ? key.sinopsis.substr(0, 109) : ''}}</p>
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
  position:relative;
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
.videoBtn{
  border-radius:50%;
  width:30px;
  height:30px;
  position:absolute;
  z-index:2;
  top:3px;
  left:3px;
  background-color:#ad227d;
  color:#fff;
  padding:1px;
}

.commentchip{
  border-radius:5px;
  width:50px;
  height:20px;
  position:absolute;
  z-index:2;
  top:120px;
  font-size:10px;
  right:3px;
  background-color:#fff;
  color:#000;
  padding:1px;
}


.commentchip .icono{
  font-size:16px;
}


.favoritosicon{
  border-radius:5px;
  width:25px;
  height:20px;
  position:absolute;
  z-index:2;
  top:120px;
  font-size:10px;
  left:3px;
  background-color:#fff;
  color:#000;
  padding:1px;
}

.favoritosicon .iconofav{
  font-size:16px;
}
</style>
<script>
import {mapState,mapMutations} from 'vuex'
export default {
  data() {
    return {};
  },
  computed:{
    ...mapState(['dialogfase1','recursoSelect','userdatacollect'])
  },
  methods: {
    ...mapMutations(['seleccionaRecurso','agregaRelacionados','vistafase1','camiaStatusAudio']),
    SelectRecurso(p){
      this.seleccionaRecurso(p)
      if(p.tipoRecurso==='audio'){
            this.camiaStatusAudio(true)
          }

      new Promise((solve)=>{
        var relacion=[...this.items]
      var posicion=relacion.indexOf(p)
        if(this.dialogfase1===false){
          relacion.splice(posicion,1)
        }else{ 
              
          //this.vistafase1(false)
          relacion.push(this.recursoSelect)
          relacion.splice(posicion,1)

          this.scrollToTop() 
        }
        solve(relacion)
      })
      .then((relacion)=>{
        this.agregaRelacionados(relacion)
        this.vistafase1(true)
      })
     
    },
    scrollToTop() {
      console.log('Scroll data')
      window.scrollTo(0, 0);
  },
    ncomentarios(p){
      var cant=0;
      if(p.length>0){
          p.map((t)=>{
            if(t.status === true){
              cant=cant+1
            }
          })
      }

      return cant;
    },
    addfavoritos(p){
      var addfave=p
      var posicion=addfave.favoritos.indexOf(this.userdatacollect.uid)
          if(posicion <= 0){
            addfave.favoritos.push(this.userdatacollect.uid)
            this.$fire.firestore.collection('CATEGORIAS').doc(p.idRecurso).update(addfave)
            .then((l)=>{
            })
          }else{
            addfave.favoritos.splice(posicion, 1)
            this.$fire.firestore.collection('CATEGORIAS').doc(p.idRecurso).update(addfave)
            .then((l)=>{
            })
          }
    }
  },
  props: {
    items: [],
  },
};
</script>
