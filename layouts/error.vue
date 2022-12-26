<template>
  <v-card>
    <v-card-title class="melon white--text"> 
      Ocurrió algo inesperado
    </v-card-title>
    <v-card-text>
     <p>Estamos trabajando en este problema y ya fue reportado con nuestra area de sistemas vuelva a actualizar o regrese mas tarte.</p> 
     <v-btn class="melon white--text" @click="reloadpage()"> <v-icon>mdi-reload</v-icon> Actualizar </v-btn>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'EmptyLayout',
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred'
    } 
  },
  head () {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  },
  methods:{
    reloadpage(){
      window.location.reload()
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
