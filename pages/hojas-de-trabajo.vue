<template>
    <div>
      <buscador></buscador>
    
      <v-card>
        <v-card-text>
          <h2 class="primary--text">{{ titulo }}</h2>
          <h3 class="melon--text">{{ subtitulo }}</h3>
  
          <br />  <br />
          <listaRecursos :items="arrayrecursos"></listaRecursos>
                  
          <v-row>
              <v-col cols="12" class="text-center">
                  <listaRecursos :items="arrayrecursosMas"></listaRecursos>
              </v-col>
              <v-col cols="12" class="text-center">
                  <v-btn class="melon white--text" @click="cargarmasrecursos()">Cargar Más...</v-btn>
              </v-col>
          </v-row>
          <dialogfase1></dialogfase1>
        </v-card-text>
      </v-card>
    </div>
  </template>
  <script>
  import buscador from "@/components/content/buscador";
  import listaRecursos from '@/components/recursos/recursos'
  import dialogfase1 from '@/components/recursos/pfase1/tipo1.vue'
  var last=null
  export default {
   async asyncData({ app, params, error }){
      var arraydata=[]
  return app.$fire.firestore.collection('CATEGORIAS')
          .where('tipo','==','hojatrabajo')
          .orderBy('fecha')
          .limit(12)
          .get()
          .then((res)=>{
             
             // app.store.commit( 'updatelast',)
              res.forEach((res)=>{
                let recurso=[]
              recurso=res.data()
              recurso.idRecurso=res.id
                arraydata.push(recurso)
              })
              return {
                  arrayrecursos:arraydata
              }
          })
    },
    head() {
      return {
        title: this.titulo,
        meta: [
          {
            hid: "description",
            name: "description",
            content: this.subtitulo,
          },
          {
            hid: "keywords",
            name: "keywords",
            content: "Recursos, Planeaciones, Tareas, Planetapreescolar",
          },
          {
            hid: "robots",
            name: "robots",
            content: "all",
          },
          {
            hid: "googlebot-news",
            name: "googlebot-news",
            content: "all",
          },
          {
            hid: "googlebot",
            name: "googlebot",
            content: "all",
          },
        ],
      };
    },
    data() {
      return {
        titulo:"Hojas de trabajo para los niños",
            subtitulo:"Actividades para reforzar los aprendizajes en forma divertida",
            subtipo:"hojatrabajo",
        buscando: false,
        arrayrecursosMas:[],
        last:null
      };
    },
   created(){
      this.buscalast()
   },
    methods: {
      cargarmasrecursos(){
          this.$fire.firestore.collection('CATEGORIAS')
          .where('tipo','==',this.subtipo)
          .orderBy('fecha')
          .limit(12)
          .startAfter(this.last)
          .get()
          .then((res)=>{
            this.last=res.docs[res.docs.length-1] 
            res.forEach((snap)=>{
              let recurso=[]
              recurso=snap.data()
              recurso.idRecurso=snap.id
                this.arrayrecursos.push(recurso)
              })
          })
  
      },
      buscalast(){
          this.$fire.firestore.collection('CATEGORIAS')
          .where('tipo','==',this.subtipo)
          .orderBy('fecha')
          .limit(12)
          .get()
          .then((res)=>{
            this.last=res.docs[res.docs.length-1] 
          })
      }
    },
    components: {
      buscador,
      listaRecursos,
      dialogfase1
    },
  };
  </script>
  