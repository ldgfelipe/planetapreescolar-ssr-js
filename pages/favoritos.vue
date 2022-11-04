<template>
  <div>
    <buscador></buscador>

    <v-card v-if="Object.keys(userdatacollect).length>0" >
      <v-card-text>
        <h2 class="primary--text">{{ titulo }}</h2>
<v-btn class="melon white--text" @click="cargafavoritos()"  ><v-icon>mdi-reload</v-icon></v-btn>
        <br />
        <br />
        <listaRecursos :items="arrayrecursos"></listaRecursos>

        <dialogfase1></dialogfase1>
      </v-card-text>
    </v-card>
  </div>
</template>
<script>
import buscador from "@/components/content/buscador";
import listaRecursos from "@/components/recursos/recursos";
import dialogfase1 from "@/components/recursos/pfase1/tipo1.vue";
import { mapState } from "vuex";

export default {
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
      titulo: "Favoritos",

      subtipo: "planeacion",
      buscando: false,
      arrayrecursos: [],
      last: null,
    };
  },
  computed: {
    ...mapState(["userdatacollect"]),
  },
  mounted() {
    setTimeout(()=>{
      this.cargafavoritos();
    },2000)
  
  },
  methods: {
    async cargafavoritos() {
      this.arrayrecursos=[]
      try{
      await new Promise((solve) => {
        solve(this.userdatacollect);
      }).then((lo) => {
        this.$fire.firestore
          .collection("CATEGORIAS")
          .where("favoritos", "array-contains", this.userdatacollect.uid)
          .get()
          .then((p) => {
            p.forEach((i) => {
              this.arrayrecursos.push(i.data());
            });
          });
      });
    }catch(error){
      console.log(error)
    }


    },
  },
  components: {
    buscador,
    listaRecursos,
    dialogfase1,
  },
};
</script>