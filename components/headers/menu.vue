<template>
  <v-navigation-drawer
   
    v-model="drawerMenu"
    class="morado "
    fixed
app
    style="height:100%; min-height:100%;"
  >

    <v-list>
      <v-list-item v-for="(item, i) in items" :key="i" :to="item.to"  v-if="validaMenu(item) === true"  router exact>
        <v-list-item-action>
          <v-icon class="white--text">{{ item.icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title class="white--text">{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script>

import {mapState} from 'vuex'
export default {
  props: {
    // eslint-disable-next-line vue/require-prop-types
    drawer: {
      default: true,
      type: Boolean
    }
  },
  data () {
    return {
      drawerMenu: true,
      items: [
        {
          icon: 'mdi-home',
          title: 'Inicio',
          to: '/',
          admin:false,
          login:false
        },
        {
          icon: 'mdi-check-bold ',
          title: 'Recomendaciones',
          to: '/recomendaciones',
          admin:false,
          login:false
        },
        {
          icon: 'mdi-notebook',
          title: 'Planeaciones',
          to: '/planeaciones',
          admin:false,
          login:false
        },
        {
          icon: 'mdi-file-document-multiple-outline',
          title: 'Hojas de trabajo',
          to: '/hojas-de-trabajo',
          admin:false,
          login:false
        }, 
        {
          icon: 'mdi-scissors-cutting',
          title: 'Material didáctico',
          to: '/material-didactico',
          admin:false,
          login:false
        },
        {
          icon: 'mdi-draw',
          title: 'Hojas para colorear',
          to: '/hojas-para-colorear',
          admin:false,
          login:false
        },
        {
          icon: 'mdi-checkerboard',
          title: 'Interactivos',
          to: '/interactivos',
          admin:false,
          login:false
        },
        {
          icon: 'mdi-file-tree-outline',
          title: 'Administración',
          to: '/administracion',
          admin:false,
          login:false
        },
        {
          icon: 'mdi-post',
          title: 'Blog',
          to: '/blog',
          admin:false,
          login:false
        },
        {
          icon: 'mdi-forum',
          title: 'foro',
          to: '/foro',
          admin:false,
          login:false
        },
        {
          icon: 'mdi-book-multiple',
          title: 'Alianzas',
          to: '/alianzas',
          admin:false,
          login:false
        },
        {
          icon: 'mdi-cog-outline',
          title: 'Administrador',
          to: '/administrador',
          admin:true,
          login:true
        },
        {
          icon: 'mdi-logout',
          title: 'logout',
          to: '/logout',
          admin:false,
          login:true
        }
      ],
      rightDrawer: false

    }
  },
  computed:{
    ...mapState(['is_login','claims']),
    
  },
  methods:{
    validaMenu(p){
      var ret=true
      p.login ? 
        this.is_login ? 
          p.admin ? 
            this.claims.admin ? 
              ret=true : 
              ret=false 
          : ret=true 
        : ret=false 
      : ret=true

    

      console.log(ret)
      return ret
    }
  },
  watch: {
    drawer () {
      this.drawerMenu = this.drawer
    }
  }
}
</script>
