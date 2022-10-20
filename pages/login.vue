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
        <v-text-field outlined label="Usuario" :rules="[rules.required,rules.email]" />
        <v-text-field
          :type="viewpass ? 'password' : 'text'"
          outlined
          label="Contraseña"
          :append-icon="viewpass ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="[rules.required]"
          @click:append="passview()"
        />

        <v-btn class="morado white--text" block @click="iniciarSesion()">
          Iniciar Sesión
        </v-btn>
        <br>
        <v-row>
          <v-col cols="6">
            <v-btn outlined color="red" block @click="iniSesionGoogle()">
              <v-icon>mdi-google</v-icon>
            </v-btn>
          </v-col>
          <v-col cols="6">
            <v-btn outlined color="blue" block @click="iniSesionFacebook()">
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
        }
      }
    }
  },
  methods: {
    passview () {
      // eslint-disable-next-line no-unneeded-ternary
      this.viewpass = this.viewpass ? false : true
    },
    iniciarSesion () {
      if (this.$refs.form.validate()) {
        console.log(this.$fire.auth())
      }
    },  
    iniSesionGoogle () {},
    iniSesionFacebook () {}
  }
}
</script>
