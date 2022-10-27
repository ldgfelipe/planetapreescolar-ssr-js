<template>
  <v-dialog v-model="dialogfase1" fullscreen persistent style="z-index: 2">
    <v-card>
      <v-card-title class="primary">
        <img
          src="/images/logos/planeta_preescolar_bco.png"
          style="width: 55px; height: 40px"
        />
        <v-spacer></v-spacer>
        <v-btn class="melon" @click="cierraDialog()"
          ><v-icon class="white--text">mdi-close</v-icon></v-btn
        >
      </v-card-title>
      <v-card-text>
        <v-card>
          <v-card-text>
            <v-row>
              <v-col cols="12" md="5">
                <img :src="recursoSelect.urlImagen" width="100%" />
              </v-col>
              <v-col cols="12" md="7" class="contentRecurso">
                <h3>{{ recursoSelect.titulo }}</h3>
                <p>{{ recursoSelect.materia }}</p>
                <p>{{ recursoSelect.grado }}</p>
                <br />
                <p>
                  {{ recursoSelect.sinopsis }}
                </p>
                <v-btn class="melon white--text" @click="verRecurso()"
                  >Ver recurso</v-btn
                >
              </v-col>
            </v-row>

            <h3 class="primary--text">Comentarios</h3>

            <v-textarea outlined label="Comenta aquí"></v-textarea>

            <h2 class="primary--text">Relacionados</h2>
            <recursos :items="relacionados"></recursos>
          </v-card-text>
        </v-card>
        <fase2tipo1></fase2tipo1>
      </v-card-text>
    </v-card>

    <AlertaPlaneta></AlertaPlaneta>
  </v-dialog>
</template>
<style>
.contentRecurso {
  color: #000;
}
</style>
<script>
import fase2tipo1 from "@/components/recursos/pfase2/tipo1.vue";
import { mapState, mapMutations } from "vuex";
import recursos from "@/components/recursos/recursos.vue";
import AlertaPlaneta from "@/components/recursos/alertas/alertas.vue";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["dialogfase1", "recursoSelect", "relacionados", "is_login"]),
  },
  methods: {
    ...mapMutations([
      "vistafase1",
      "vistafase2",
      "vistaAlertas",
      "cargaTipoalerta",
    ]),
    cierraDialog() {
      this.vistafase2(false);
      this.vistafase1(false);
    },
    verRecurso() {
      if (!this.is_login) {
        this.vistaAlertas(true);
        this.cargaTipoalerta(0);
      } else {
        this.vistafase2(true);
      }
    },
  },
  components: {
    recursos,
    fase2tipo1,
    AlertaPlaneta,
  },
};
</script>
