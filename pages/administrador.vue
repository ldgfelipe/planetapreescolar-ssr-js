<template>
     <v-sheet
      

    style="position: relative; min-height: 500px; height:100%; overflow:auto;"
  >
    <v-container >
        <v-btn
          color="pink"
          dark
          @click.stop="drawer = !drawer"
        >
          <v-icon>mdi-menu</v-icon>


        </v-btn>



        <component :is="comselect"></component>
    </v-container>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >




      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          @click="cargacomponente(item.comp)"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-sheet>
</template>
<script>

import usuarios from '@/pages/adminpages/usuarios.vue'
import recursos from '@/pages/adminpages/recursos.vue'
import {mapState} from 'vuex'
  export default {
    data () {
      return {
        comselect:'',
        drawer: null,
        items: [
        { title: 'Dashboard', icon: 'mdi-view-dashboard' },
          { title: 'Usuarios', icon: 'mdi-account', comp:'usuarios' },
          { title: 'Recursos', icon: 'mdi-notebook', comp: 'recursos' },
          { title: 'Landing page', icon: 'mdi-page-layout-header-footer' },
          { title: 'Empresas', icon: 'mdi-factory' },
          { title: 'Foro', icon: 'mdi-forum' },
          { title: 'Soporte', icon: 'mdi-face-agent' },
          { title: 'Blog', icon: 'mdi-post' },
          { title: 'Sistemas de pago', icon: 'mdi-credit-card-outline' },
          { title: 'Pruebas de Servidor', icon: 'mdi-server' },
        ],
      }
    },
    computed:{
      ...mapState(['claims','is_login'])
    },
    mounted(){
      this.validsesion()
    },
    methods:{
        cargacomponente(p){
            this.comselect=p
            this.drawer=false
        },
        validsesion(){
          if(!this.is_login || this.claims.level<2 ){
            this.$router.push("/")
          }
        }
    },
    components:{
        usuarios,
        recursos
    }
  }
</script>
