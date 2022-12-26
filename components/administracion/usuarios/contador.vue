<template>
  <v-card>
    <v-card-title class="morado white--text">
      Valida estructura de usuario
    </v-card-title>
    <v-card-text>
      <br />
      <v-text-field
        v-model="correo"
        outlined
        label="Ingres el correo"
      ></v-text-field>
      <v-btn class="melon white--text" block @click="cargaEstructura()"
        >Validar</v-btn
      >
      <br />
        <v-chip class="red white--text">Errores:{{errors}}</v-chip> / <v-chip class="green white--text">Correctos:{{correctos}}</v-chip><br />
      <v-card>
        <v-card-text style="overflow: auto; min-height: 100%; height: 500px">
          <v-list>
            <v-list-item
              v-id="validate"
              v-for="(key, index) in validate"
              :key="index"
              class="grey pa-5"
            >
              <v-icon class="white--text">{{
                key.error ? "mdi-close" : "mdi-check"
              }}</v-icon>

              <v-card max-width="100%" shaped elevation="10" class="">
                <v-card-text
                  :class="key.error ? 'red white--text' : 'green white--text'"
                >
                  <b
                    ><v-chip>{{ key.type }}</v-chip> {{ key.mensaje }}
                  </b>
                </v-card-text>
                <v-card-text>
                  <v-chip>Valor:</v-chip>
                  {{ key.valor }}
                </v-card-text>
              </v-card>
            </v-list-item>
          </v-list>
        </v-card-text>
      </v-card>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  data() {
    return {
      correo: "",
      respuesta: {},
      validate: [],
      errors: 0,
      correctos: 0,
    };
  },
  methods: {
    cargaEstructura() {
      this.$fire.firestore
        .collection("usuarios")
        .where("correo", "==", this.correo)
        .get()
        .then((resd) => {
            this.respuesta = {}
          this.correctos = 0;
          this.errors = 0;
          this.validate = [];
          this.respuesta = resd.docs[0].data();

          if (!this.respuesta.correo) {
            this.validate.push({
              mensaje: "esta vacion o falta el campo",
              type: "Correo",
              error: true,
              valor: "",
            });
          } else {
            this.validate.push({
              mensaje: "es correcto",
              type: "Correo",
              error: false,
              valor: this.respuesta.correo,
            });
          }

          if (!this.respuesta.descargas) {
            this.validate.push({
              mensaje: "esta vacion o falta el campo",
              type: "Descargas",
              error: true,
              valor: "",
            });
          } else {
            this.validate.push({
              mensaje: "es correcto",
              type: "Descargas",
              error: false,
              valor: this.respuesta.descargas,
            });
          }

          if (this.respuesta.descargas && !this.respuesta.descargas.dia) {
            this.validate.push({
              mensaje: "esta vacion o falta el campo",
              type: "Descargas-dia",
              error: true,
              valor: "",
            });
          } else {
            this.validate.push({
              mensaje: "es correcto",
              type: "Descargas-dia",
              error: false,
              valor: this.respuesta.descargas.dia,
            });
          }

          if (this.respuesta.descargas && this.respuesta.descargas.dia && !this.respuesta.descargas.dia.registro) {
            this.validate.push({
              mensaje: "esta vacion o falta el campo",
              type: "Descargas-dia-registro",
              error: true,
              valor: "",
            });
          } else {
            this.validate.push({
              mensaje: "es correcto",
              type: "Descargas-dia-registro",
              error: false,
              valor: this.respuesta.descargas.dia.registro,
            });
          }

          if (!this.respuesta.descargas.dia.totaldescargas) {
            this.validate.push({
              mensaje: "esta vacion o falta el campo",
              type: "Descargas-dia-totaldescargas",
              error: true,
              valor: "",
            });
          } else {
            this.validate.push({
              mensaje: "es correcto",
              type: "Descargas-dia-totaldescargas",
              error: false,
              valor: this.respuesta.descargas.dia.totaldescargas,
            });
          }

          if (!this.respuesta.idAuth) {
            this.validate.push({
              mensaje: "esta vacion o falta el campo",
              type: "idAuth",
              error: true,
              valor: "",
            });
          } else {
            this.validate.push({
              mensaje: "es correcto",
              type: "idAuth",
              error: false,
              valor: this.respuesta.idAuth,
            });
          }

          if (!this.respuesta.id) {
            this.validate.push({
              mensaje: "esta vacion o falta el campo",
              type: "id",
              error: true,
              valor: "",
            });
          } else {
            this.validate.push({
              mensaje: "es correcto",
              type: "id",
              error: false,
              valor: this.respuesta.id,
            });
          }

          if (!this.respuesta.nombre) {
            this.validate.push({
              mensaje: "esta vacion o falta el campo",
              type: "nombre",
              error: true,
              valor: "",
            });
          } else {
            this.validate.push({
              mensaje: "es correcto",
              type: "nombre",
              error: false,
              valor: this.respuesta.id,
            });
          }

          if (!this.respuesta.pago) {
            this.validate.push({
              mensaje: "esta vacion o falta el campo",
              type: "pago",
              error: true,
              valor: "",
            });
          } else {
            this.validate.push({
              mensaje: "es correcto",
              type: "pago",
              error: false,
              valor: this.respuesta.pago,
            });
          }

          if (this.respuesta.pago && !this.respuesta.pago.idPago) {
            this.validate.push({
              mensaje: "esta vacion o falta el campo",
              type: "pago-idPago",
              error: true,
              valor: "",
            });
          } else {
            this.validate.push({
              mensaje: "es correcto",
              type: "pago-idPago",
              error: false,
              valor: this.respuesta.pago.idPago,
            });
          }

          this.validate.map((l) => {
            if (l.error) {
              this.errors = this.errors + 1;
            } else {
              this.correctos = this.correctos + 1;
            }
          });
        });
    },
  },
};
</script>
