<template>
  <v-card max-width="600" class="text-center ma-auto mt-5">
    <v-card-title class="morado white--text ">
      Inicia Sesión
    </v-card-title>
    <v-card-text class="pt-10">
      <v-form
        ref="form"
        v-model="valid"
        lazy-validation
      >
        <v-text-field v-model="registro.nombre" outlined label="Nombre" :rules="[rules.required]" />
        <v-text-field v-model="registro.correo" outlined label="Correo" :rules="[rules.required,rules.email]" />
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
          :rules="[rules.required,rules.confirmpass]"
          @click:append="passview()"
        />
        <v-checkbox
          v-model="registro.terminos"
          label="Acepto Terminos y Condiciones"
          :rules="[rules.checkrequire]"
        />
        <br>
        <v-row>
          <v-col cols="12">
            <v-btn class="morado white--text" block @click="registrar()">
              Registrar
            </v-btn>
          </v-col>
        </v-row>
        <br>
        <v-row>
          <v-col cols="6">
            <v-btn outlined color="red" block>
              <v-icon>mdi-google</v-icon>
            </v-btn>
          </v-col>
          <v-col cols="6">
            <v-btn outlined color="blue" block>
              <v-icon>mdi-facebook</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  data () {
    return {
      viewpass: true,
      valid: true,
      rules: {
        required: value => !!value || 'Required.',
        email: (value) => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Correo no valido'
        },
        confirmpass: (value) => {
          return this.registro.pass === this.registro.conpass ? true : 'La confirmación no coincide con la contraseña'
        },
        checkrequire: (value) => {
          return value ? true : 'Debe aceptar los Terminos y Condiciones'
        }
      },
      registro: {}
    }
  },
  methods: {
    passview () {
      // eslint-disable-next-line no-unneeded-ternary
      this.viewpass = this.viewpass ? false : true
    },
   async registrar () {
      if (this.$refs.form.validate()) {

    this.$fire.auth.createUserWithEmailAndPassword(this.registro.correo, this.registro.pass)

  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });


      }
    },
    reiniciar () {
      this.$refs.form.reset()
    }
  }
}
</script>
