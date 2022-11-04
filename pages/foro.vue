<template>
    <v-card>
        <v-card-text>
        
            <v-row>
                
                    <v-col  cols="12" v-for="(key, index) in arrayrecursos" :key="'foro'+index">
                        <v-card>
                            <v-card-text>
                        <h3 class="primary--text">{{key.titulo}}</h3>
                        <p v-html="key.cuerpo.substr(0,200)"></p>
                        <v-row>
                            <v-col cols="5">
                                <v-icon>mdi-star</v-icon> <v-icon>mdi-star</v-icon> <v-icon>mdi-star</v-icon> <v-icon>mdi-star</v-icon> <v-icon>mdi-star</v-icon>
                            </v-col>
                            <v-col cols="2">
                                <v-icon>mdi-eye</v-icon>
                            </v-col>
                            <v-col cols="2">
                                0 comentarios
                            </v-col>
                            <v-col cols="3">
                                <v-btn class="melon white--text" @click="gotoforo(key.idForo)">Leer Foro</v-btn>
                            </v-col>
                        </v-row>
                    </v-card-text>
                    </v-card>
                    </v-col>
                

            </v-row>
        
        
        </v-card-text>
    </v-card>
</template>
<script>
export default {
 async asyncData({ app, params, error }){
    var arraydata=[]
return app.$fire.firestore.collection('foro')
       
        .orderBy('fechapub')
        .limit(12)
        .get()
        .then((res)=>{
            res.forEach((res)=>{
              let recurso=[]
              recurso=res.data()
              recurso.idForo=res.id
                arraydata.push(recurso)
            })
            return {
                arrayrecursos:arraydata
            }
        })
  },
  methods:{
    gotoforo(p){
        this.$router.push('/foros/'+p)
    }
  }
}
</script>