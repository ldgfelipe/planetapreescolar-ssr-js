<template>
  <v-dialog v-model="dialogalerta" max-width="500" persistent>
    <v-card>
      <v-card-text class="text-center">
        <v-btn @click="cierraAlerta()" elevation="0"
          ><v-icon class="primary--text">mdi-close</v-icon></v-btn
        ><br />
        <img :src="ventanas[tipoalerta].img" width="100%" />

        <v-btn
          class="primary white--text"
          v-if="ventanas[tipoalerta].btn1"
          @click="linka(ventanas[tipoalerta].link1)"
          >{{ ventanas[tipoalerta].labelbtn1 }}</v-btn
        >
        <v-btn
          class="primary white--text"
          v-if="ventanas[tipoalerta].btn2"
          @click="linka(ventanas[tipoalerta].link2)"
          >{{ ventanas[tipoalerta].labelbtn2 }}</v-btn
        >
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      ventanas: [
        {
          labelbtn1: "Inicia Sesión",
          btn1: true,
          link1: "/login",
          labelbtn2: "Regístrate",
          btn2: true,
          link2: "/register",
          img: "/pantallas/1Continua navegando.png",
        },
        {
          labelbtn1: "Vuelvete Premium",
          btn1: true,
          link1: "/checkout",
          labelbtn2: "",
          btn2: false,
          link2: "",
          img: "/pantallas/6Te gusto este material.png",
            
        }
      ],
    };
  },
  computed: {
    ...mapState(["dialogalerta", "tipoalerta"]),
  },
  methods: {
    ...mapMutations(["vistaAlertas",'vistafase2']),
    cierraAlerta() {
      this.vistaAlertas(false);
    },

    linka(p) {
        this.vistafase2(false);
        this.vistaAlertas(false);
        this.$router.push(p);
    },
  },
};
</script>
