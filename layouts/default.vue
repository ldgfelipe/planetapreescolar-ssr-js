<template>
  <v-app>
    <Menulat
      :drawer="drawer"
    />

    <v-app-bar :clipped-left="clipped"  app class="morado white--text">
      <v-icon class="white--text" @click.stop="drawer = !drawer"> {{ !drawer ? 'mdi-menu' : 'mdi-backburger' }}
      </v-icon>
      <v-btn to="/" class="morado" color="morado" elevation="0">
        <v-avatar color="morado" class="text--white" >
          <img src="/images/logos/planeta_preescolar_bco.png" style="width:55px; height: 40px;">
        </v-avatar>
      </v-btn>
      <v-spacer />
      <v-btn class="morado white--text no-text-transform" to="/login">
        Iniciar Sesión
      </v-btn>
      <v-btn class="melon white--text no-text-transform" to="/register">
        Registro
      </v-btn>
    </v-app-bar>
    <v-main class="workarea">
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>

    <v-footer :absolute="!fixed" app class="morado white--text">
      <span>Planeta Preesolar &copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>
<script>
import Menulat from '@/components/headers/menu.vue'
export default {
  name: 'DefaultLayout',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Menulat
  },
  props: {
  },
  data () {
    return {
      fixed: false,
      drawer: true,
      clipped: false
    }
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
}
</style>
