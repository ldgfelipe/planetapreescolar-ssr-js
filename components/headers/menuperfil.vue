<template>
  <v-menu top offset-x >
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="morado" elevation="0" icon dark v-bind="attrs" v-on="on">
        <v-avatar class="primary pa-4">
          <img
            v-if="userdatacollect.urlImagen !== ''"
            :src="userdatacollect.urlImagen"
          />
          <v-icon v-if="!userdatacollect.urlImagen " class="white--text">
            mdi-account
          </v-icon>
        </v-avatar>
      </v-btn>
    </template>
    <v-list max-width="auto" width="400">
      <v-list-item>
        <v-list-item-content>
          <div class="text-center">
            <v-avatar size="100" class="primary pa-4">
              <img
                v-if="validaImagen()"
                :src="userdatacollect.urlImagen"
              />
              <v-icon
                v-if="userdatacollect.urlImagen === ''"
                class="white--text"
              >
                mdi-account
              </v-icon>
            </v-avatar>
            <p>{{ userdatacollect.nombre }} {{ userdatacollect.apellido }}</p>
            <p>{{ userdatacollect.correo }}</p>
            <v-btn class="morado white--text" to="/perfil">Editar Perfil</v-btn>
          </div>
        </v-list-item-content>
      </v-list-item>


      <v-list-item>
        <v-list-item-content >
            <div class="text-left pa-4 menulist" elevation="0" @click="gotoRoute('/favoritos')" >
                    <v-icon class="pl-5">mdi-cards-heart-outline</v-icon>  Favoritos
            </div>

            <div v-if="claims.premium===true && Object.keys(descargas).length>0" class="text-left pa-4 grey white--text menulist" elevation="0" @click="gotoRoute('/descargas')" >
                <v-icon class="pl-5">mdi-downloads</v-icon>  Descargas Premium <b>{{ descargas.mes.registro.length }}</b>
            </div>
           

            <div class="text-left pa-4 menulist" elevation="0" @click="gotoRoute('/suscripcion')" >
                <v-icon class="pl-5">mdi-account-credit-card</v-icon>   Suscripción
            </div>

            <div class="text-left pa-4 menulist" elevation="0" @click="gotoRoute('/soporte')" >
                <v-icon class="pl-5">mdi-face-agent</v-icon>   Soporte
            </div>

            <div class="text-left pa-4 menulist" elevation="0" @click="gotoRoute('/tutoriales')" >
                <v-icon class="pl-5">mdi-cast-education</v-icon>   Turoriales
            </div>

            <div class="text-left pa-4 menulist" elevation="0" @click="gotoRoute('/preguntas-frecuentes')" >
                <v-icon class="pl-5">mdi-frequently-asked-questions</v-icon>   Preguntas Frecuentes
            </div>

            <div class="text-left pa-4 menulist" elevation="0" @click="gotoRoute('/logout')" >
                <v-icon class="pl-5">mdi-logout</v-icon>   Cerrar Sesión
            </div>


        </v-list-item-content>
      </v-list-item>

    </v-list>
  </v-menu>
</template>

<style>
.menulist{
  cursor:pointer;
}

.menulist:hover{
  background-color:#f4f5f6;
}
</style>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["is_login", "userdatacollect","descargas","claims"]),
  },
  methods:{
    gotoRoute(p){
      this.$router.push(p)
    },
    validaImagen(){
      var val=false
      if(this.userdatacollect.urlImagen){
        val=true
      }

      return val
    }
  }
};
</script>
