<template>
  <v-app>
    <client-only class="ma-0 pa-0">
    <Menulat
      :drawer="drawer"
    />
  </client-only>
 
    <v-app-bar  app class="morado white--text " >
      <client-only class="ma-0 pa-0">
      <v-icon class="white--text" @click.stop="drawer = !drawer"> mdi-menu
      </v-icon>
      <v-btn to="/" class="morado" color="morado" elevation="0">
        <v-avatar color="morado" class="text--white" >
          <img src="/images/logos/planeta_preescolar_bco.png" style="width:55px; height: 40px;">
        </v-avatar>
      </v-btn>
      <v-spacer />
      <v-btn v-if="!is_login" class="morado white--text no-text-transform" to="/login">
        Iniciar Sesión
      </v-btn>
      <v-btn v-if="!is_login"  class="melon white--text no-text-transform" to="/register">
        Registro
      </v-btn>

    </client-only>
      
    </v-app-bar>
    <v-main class="workarea">
      <v-container class="pa-0">
        <Nuxt />
      </v-container>
    </v-main>

    <v-footer :absolute="!fixed" app class="morado white--text ma-0" style="z-index:99999999999999999999999999;">
      <Footer />
    </v-footer>
  
  </v-app>
</template>
<script>
import {mapState} from 'vuex'
import Menulat from '@/components/headers/menu.vue'
import Footer from '@/layouts/footer.vue'
export default {
  name: 'DefaultLayout',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Menulat,
    Footer
  },
  props: {
  },
  data () {
    return {
      fixed: false,
      drawer: true,
      clipped: false
    }
  },
  computed:{
    ...mapState(['is_login'])
  }
}
</script>
<style scoped>
  .no-text-transform{
   text-transform:none;
  }

</style>
<style>
.workarea {
  background-image: url('/fondo/fondomorado.png');
  background-size: 10%;
  background-repeat: repeat;
  padding:0px;
  margin:0px;
}
</style>
