<template>
  <v-row >
    <v-col cols="12" >
      <!------sección de notificaciones------>
    </v-col>
    <v-col cols="12" md="12" >
      <buscador />
    </v-col>
    <v-col cols="12" md="2"  >
    </v-col>
    <v-col cols="12" md="4"   >
      <v-btn class="melon white--text" to="/populares" x-large block>Populares</v-btn>
    </v-col>
    <v-col cols="12" md="4" >
      <v-btn class="primary white--text" to="/recientes" x-large block>Recientes</v-btn>
    </v-col>

    <v-col cols="12" md="2" >
    </v-col>
  </v-row>
</template>

<script>
import buscador from '@/components/content/buscador.vue'
export default {
  components: {
    buscador
  },
  name: 'IndexPage'
}
</script>
