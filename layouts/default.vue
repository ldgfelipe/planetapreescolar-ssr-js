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

      <perfilusuario v-if="is_login"></perfilusuario>

      <v-spacer />

      <v-btn v-if="is_login" icon class="morado white--text" elevation="0"><v-icon>mdi-bell</v-icon></v-btn>
      <v-btn v-if="is_login" icon class="morado white--text" elevation="0" to="/favoritos"><v-icon>mdi-cards-heart</v-icon></v-btn>

      <v-btn v-if="!is_login"  class="morado white--text no-text-transform" @click="cambiaLoginPop(true)">
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
      <div style="width:100%; height: 400px;">

      </div>
    </v-main>
<LoginPop></LoginPop>
    <v-footer :absolute="!fixed" app class="morado white--text ma-0" style="z-index:99999999999999999999999999;">
      <Footerlayout></Footerlayout>
    </v-footer>
  
  </v-app>
</template>
<script>
import {mapState,mapMutations} from 'vuex'
import Menulat from '@/components/headers/menu.vue'
import LoginPop from '@/components/acceso/loginpop.vue'
import perfilusuario from '@/components/headers/menuperfil.vue'
import Footerlayout from '@/layouts/footer.vue'
export default {
  name: 'DefaultLayout',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Menulat,
    Footerlayout,
    perfilusuario,
    LoginPop
  },
  methods:{
    ...mapMutations(['cambiaLoginPop'])
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
