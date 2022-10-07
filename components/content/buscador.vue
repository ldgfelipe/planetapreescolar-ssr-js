<template>
  <v-row class="ma-0 pa-0">
    <v-col cols="2">
      <v-avatar color="white" size="70">
        <img src="/images/logo-planeta.png" />
      </v-avatar>
    </v-col>
    <v-col cols="8" />
    <v-col cols="2">
      <v-btn outlined color="white">
        <v-icon class="white--text">mdi-tune</v-icon>
      </v-btn>
    </v-col>
    <v-col cols="2" />
    <v-col cols="9" md="8" class="white--text text-center">
      <h1>Recursos educativos para Preescolar</h1>
      <p>
        Planeaciones, Hojas de trabajo, Material didáctico, Cantos y Juegos
      </p>
    </v-col>
    <v-col cols="2" />

    <v-col cols="2" />
    <v-col cols="9" md="7" class="ma-0 pa-0">
      <v-text-field label="Busca todos los recursos" outlined filled color="melon" background-color="white" />
    </v-col>
    <v-col cols="1" md="2" class="ma-0 pa-0">
      <v-btn class="morado" x-large>
        <v-icon class="white--text">
          mdi-magnify
        </v-icon>
      </v-btn>
    </v-col>
    <v-col cols="2" />
  </v-row>
</template>
