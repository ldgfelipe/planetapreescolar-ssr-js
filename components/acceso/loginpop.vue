<template>
    <v-dialog v-model="loginpop" max-width="600" persistent> 
        <v-card max-width="600" class="text-center ma-auto mt-5">
    <v-card-title class="morado white--text"> Inicia Sesión 
        <v-spacer></v-spacer> 
    <v-btn class="melon white--text" @click="cambiaLoginPop(false)"><v-icon>mdi-close</v-icon></v-btn>
    
    </v-card-title>
    <v-card-text class="pt-10">
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field
          outlined
          label="Usuario"
          v-model="datalogin.email"
          :rules="[rules.required, rules.email]"
          @keyup.enter="iniciarSesion()"
        />
        <v-text-field
          v-model="datalogin.pass"
          :type="viewpass ? 'password' : 'text'"
          outlined
          label="Contraseña"
          :append-icon="viewpass ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="[rules.required]"
          @click:append="passview()"
          @keyup.enter="iniciarSesion()"
        />

        <v-btn class="morado white--text" block @click="iniciarSesion()">
          Iniciar Sesión
        </v-btn>
        <br />
        <v-row>
          <v-col cols="6">
            <v-btn
              outlined
              color="red"
              block
              @click="iniSesionGoogleFacebook('google')"
            >
              <v-icon>mdi-google</v-icon>
            </v-btn>
          </v-col>
          <v-col cols="6">
            <v-btn
              outlined
              color="blue"
              block
              @click="iniSesionGoogleFacebook('facebook')"
            >
              <v-icon>mdi-facebook</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-card-text>
  </v-card>
    </v-dialog>
</template>
<script>
import {mapMutations,mapState} from 'vuex'
export default {
  data() {
    return {
      datalogin: {},
      viewpass: true,
      valid: true,
      rules: {
        required: (value) => !!value || "Required.",
        email: (value) => {
          const pattern =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Correo no valido";
        },
      },
    };
  },
  computed:{
    ...mapState(['loginpop'])
  },
  methods: {
    ...mapMutations(['actualizaDescargas','cambiaLoginPop','cambiaidAuth','cambiaPago']),
    passview() {
      // eslint-disable-next-line no-unneeded-ternary
      this.viewpass = this.viewpass ? false : true;
    },
    iniciarSesion() {
      if (this.$refs.form.validate()) {
        this.$fire.auth
          .signInWithEmailAndPassword(this.datalogin.email, this.datalogin.pass)
          .then((userCredential) => {
            this.validaClaims(userCredential);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    iniSesionGoogleFacebook(p) {
      try {
        this.registro = {};
        var provider =
          p === "google"
            ? new this.$fireModule.auth.GoogleAuthProvider()
            : new this.$fireModule.auth.FacebookAuthProvider();

        provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
        this.$fireModule.auth.languageCode = "es";

        this.$fireModule
          .auth()
          .signInWithPopup(provider)
          .then((userCredential) => {
            this.validaClaims(userCredential);
          });
      } catch (error) {
        console.log(error);
      }
    },
    validaClaims(userCredential) {
      var user = userCredential.user;

      this.cambiaidAuth(user.uid)
      if (userCredential.customClaims) {

       this.cambiaLoginPop(false)
      } else {
        fetch(process.env.functions + "/v1/users/addclaims", {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then(res => res.json())
          .then((resp) => {
            console.log(resp)
            if(resp.pago){
              if(resp.pago){
              this.cambiaPago(resp.pago)
              }
              this.cambiaLoginPop(false)
              }
            //this.$router.push("/");
           
          });
      }
    },
  },
};
</script>