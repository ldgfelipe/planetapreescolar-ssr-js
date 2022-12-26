<template>
  <v-card max-width="600" class="text-center ma-auto mt-5">
    <v-card-title class="morado white--text"> Inicia Sesión </v-card-title>
    <v-card-text class="pt-10">
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field
          v-model="registro.nombre"
          outlined
          label="Nombre"
          :rules="[rules.required]"
        />
        <v-text-field
          v-model="registro.correo"
          outlined
          label="Correo"
          :rules="[rules.required, rules.email]"
        />
        <v-text-field
          v-model="registro.pass"
          :type="viewpass ? 'password' : 'text'"
          outlined
          label="Contraseña"
          :append-icon="viewpass ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="[rules.required]"
          @click:append="passview()"
        />
        <v-text-field
          v-model="registro.conpass"
          :type="viewpass ? 'password' : 'text'"
          outlined
          label="Confirmar Contraseña"
          :append-icon="viewpass ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="[rules.required, rules.confirmpass]"
          @click:append="passview()"
        />
        <v-checkbox
          v-model="registro.terminos"
          label="Acepto Terminos y Condiciones"
          :rules="[rules.checkrequire]"
        />
        <br />
        <v-row>
          <v-col cols="12">
            <v-btn
              v-if="!loader"
              class="morado white--text"
              block
              @click="registrarUserAndPass()"
            >
              Registrar
            </v-btn>
            <div v-if="mensajeres" v-html="mensajeres"></div>
            <div v-if="loader" class="center">
              <v-progress-circular indeterminate color="morado">
              </v-progress-circular
              ><br />
            </div>
          </v-col>
        </v-row>
        <br />
        <v-row>
          <v-col cols="6">
            <v-btn
              outlined
              color="red"
              block
              @click="registroGoogleOrFacebook('google')"
            >
              <v-icon>mdi-google</v-icon>
            </v-btn>
          </v-col>
          <v-col cols="6">
            <v-btn
              outlined
              color="blue"
              block
              @click="registroGoogleOrFacebook('facebook')"
            >
              <v-icon>mdi-facebook</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-card-text>
  </v-card>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      viewpass: true,
      loader: false,
      mensajeres: "",
      valid: true,
      rules: {
        required: (value) => !!value || "Required.",
        email: (value) => {
          const pattern =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Correo no valido";
        },
        confirmpass: (value) => {
          return this.registro.pass === this.registro.conpass
            ? true
            : "La confirmación no coincide con la contraseña";
        },
        checkrequire: (value) => {
          return value ? true : "Debe aceptar los Terminos y Condiciones";
        },
      },
      registro: {},
    };
  },
  mounted() {},
  computed: {
    ...mapState(["schemas"]),
  },
  methods: {
    ...mapMutations(['cambiaClaims','actualizaDescargas']),
    passview() {
      // eslint-disable-next-line no-unneeded-ternary
      this.viewpass = this.viewpass ? false : true;
    },
    async registrarUserAndPass() {
      if (this.$refs.form.validate()) {
        this.loader = true;
        this.mensajeres = "No cierre la pagina estamos creando su cuenta";
        this.$fire.auth
          .createUserWithEmailAndPassword(
            this.registro.correo,
            this.registro.pass
          )

          .then((userCredential) => {
            // Signed in

            this.regfirestore(userCredential);
            ///
            // ...
          })
          .catch((error) => {
            this.loader = false;
            this.mensajeres =
              "La dirección de correo electrónico ya está en uso por otra cuenta, pruebe con otra cuenta o <a href='./login'>inicie sesión</a> con su cuenta registrada";
            // ..
          });
      }
    },
    regfirestore(userCredential) {
      var user = userCredential.user;
      this.registro.uid = user.uid;

      this.registro.descargas = {
          dia: {
            totaldescargas: 0,
            disponibles: 1,
            registro: [{
              fecha:this.$moment().format('YYYY MM DD'),
              usadas:[]
            }],
          },
          mes: {
            totaldescargas: 0,
            tipo: "",
            disponibles: 0,
            registro:[{
              fecha:this.$moment().format('MM YYYY'),
              usadas:[]
            }],
          },
   
      };
      this.registro.idAuth = user.uid;
      this.registro.displayName = user.displayName;
      this.registro.phoneNumber = user.phoneNumber;
      this.registro.photoURL = user.photoURL;
      this.registro.providerId = user.providerId;
      this.registro.refreshToken = user.refreshToken;
      this.registro.tenantId = user.tenantId;
      this.registro.correo = user.email;

      /// busca si existe usuario
      this.$fire.firestore
        .collection("usuarios")
        .where("correo", "==", this.registro.correo)
        .get()
        .then((resb) => {
          console.log(resb);
          if (resb.empty === true) {
            this.$fire.firestore
              .collection("usuarios")
              .add(this.registro)
              .then((reb) => {
                this.registro.uid = reb.id;
                this.registro.id = reb.id;
                this.$fire.firestore
                  .collection("usuarios")
                  .doc(reb.id)
                  .update(this.registro)
                  .then((res) => {
                    /// si no existe se crea el usuario si existe manda error
                    fetch(process.env.functions + "/v1/users/createClaims", {
                      method: "POST",
                      mode: "cors",
                      headers: {
                        "Content-type": "application/json",
                      },
                      body: JSON.stringify(this.registro),
                    })
                      .then((res) => res.json())
                      .then((res) => {
                        console.log(res);
                        this.cambiaClaims(res.claims)
                        this.actualizaDescargas(this.registro.descargas)
                        this.mensajeres = "Espere estamos redireccionando";
                        this.loader = false;
                        this.$router.push("/");

                      });
                  });
              });
          } else {
            this.loader = false;
            this.mensajeres = "El usuario ya se encuentra registrado";
          }
        });
    },
    reiniciar() {
      this.$refs.form.reset();
    },
    registroGoogleOrFacebook(p) {
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
            this.regfirestore(userCredential);
          });
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
