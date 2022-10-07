<template>
  <v-navigation-drawer
    v-model="drawerMenu"
    :mini-variant="miniVariant"
    :clipped="clipped"
    class="morado "
    fixed
    app
  >
    <v-list>
      <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" router exact>
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
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Planeaciones',
          to: '/planeaciones'
        }
      ],
      clipped: false,
      miniVariant: false,
      right: true,
      rightDrawer: false

    }
  },
  watch: {
    drawer () {
      this.drawerMenu = this.drawer
    }
  }
}
</script>
