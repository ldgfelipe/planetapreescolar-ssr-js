<template>
  <v-row class="footer-style text-center">
    <v-col cols="12" md="3">
      <center>
        <v-img src="images/logo-edetech.png" max-width="80" />
      </center>
    </v-col>
    <v-col cols="12" md="2">
      <b> Planeta Preescolar</b><br />
      Copyright © 2022 Grupo Sereyd<br />
      todos los derechos reservados<br />
    </v-col>
    <v-col cols="12" md="2">
      <b>Suscríbete</b><br />
      Premium<br />
     <router-link to="/soporte" class="white--text">Soporte</router-link>  <br />
      Precios expresados en Pesos Mexicanos y en divisas locales.
    </v-col>

    <v-col cols="12" md="2">
      <b>Contacto</b><br />
      soporte@planetapreescolar.com<br />
      <router-link to="/aviso-de-privacidad" class="white--text">Aviso de privacidad</router-link> <br />
        <router-link to="/terminos-y-condiciones" class="white--text">Términos y condiciones</router-link> <br />
            <router-link to="/preguntas-frecuentes" class="white--text">Preguntas frecuentes</router-link> <br />
                <router-link to="/politicas" class="white--text">Política</router-link> 
    </v-col>

    <v-col cols="12" md="3"> 
        
        <b>Síguenos</b> <br />
    <v-row class="text-center">
         <v-col cols="2" md="2"> <v-btn class="morado" @click="linkto('https://www.facebook.com/planetapreescolar')" rounded elevation="0"><v-icon class="white--text">mdi-facebook</v-icon></v-btn> </v-col>
         <v-col cols="2" md="2">  <v-btn class="morado" @click="linkto('https://www.instagram.com/planetapreescolar/')" rounded elevation="0" ><v-icon class="white--text">mdi-instagram</v-icon></v-btn></v-col>
         <v-col cols="2" md="2">  <v-btn class="morado" @click="linkto('https://www.youtube.com/channel/UCkdokwcJFHC_bGR2nHfI7CQ')" rounded elevation="0" ><v-icon class="white--text">mdi-youtube</v-icon> </v-btn></v-col>
         <v-col cols="2" md="2">  <v-btn class="morado" @click="linkto('https://twitter.com/planetaprees')" rounded elevation="0" ><v-icon class="white--text">mdi-twitter</v-icon> </v-btn></v-col>

         <v-col cols="2" md="2"> 
            <v-btn class="morado" rounded elevation="0" @click="linkto('https://www.tiktok.com/@planeta_preescolar?lang=es')" >
                <svg data-v-1565513a="" xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="#ffffff" viewBox="0 0 24 24"><path data-v-1565513a="" d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"></path></svg>
        </v-btn>
        </v-col>


         <v-col cols="2" md="2" @click="linkto('https://wa.me/5212227252628?text=Quisiera%20informes%20de%20planetaprescolar.com')" > <v-btn class="morado" rounded elevation="0" > <v-icon class="white--text">mdi-whatsapp</v-icon> </v-btn></v-col>
    </v-row>



    </v-col>

    <v-col cols="12" md="12">
      <span>Planeta Preesolar &copy; {{ new Date().getFullYear() }}</span>
    </v-col>
  </v-row>
</template>
<style>
.footer-style {
  font-size: 12px;
}
</style>
<script>
export default{
    methods:{
        linkto(p){
            window.open(p,'_blank')
        }
    }
}
</script>
