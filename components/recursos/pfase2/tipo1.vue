<template>
  <v-dialog v-model="dialogfase2" fullscreen persistent>
    <v-card>
      <v-card-title class="primary white--text">
        Descarga Archivo <v-spacer></v-spacer>
        <v-btn class="melon white--text" @click="cerrarVentana()"
          ><v-icon>mdi-arrow-left-bold</v-icon></v-btn
        >
      </v-card-title>
      <v-card-text>
        <v-card max-width="1300" class="ma-auto">
          <v-card-text
            style="
              background-image: url(/images/back/backstart.jpg);
              background-repeat: repeat;
            "
          >
            <h2 class="primary--text">{{ recursoSelect.titulo }}</h2>

            <p>
              Por {{ recursoSelect.nombreCreador }}<br />Fecha
              {{ $moment(recursoSelect.fecha).format("DD MMMM YYYY") }}
            </p>

            <v-btn
                  v-if="!loadDescarga"
                  class="melon white--text"
                  @click="DescargarArchivo()"
                  >Descargar</v-btn
                >

                <v-progress-circular
                v-if="loadDescarga"
                  :size="70"
                  :width="7"
                  color="purple"
                  indeterminate
                ></v-progress-circular>
          </v-card-text>
          <v-card-title>
            Paginas: {{ numPages }} <v-spacer></v-spacer>
            <v-btn class="primary" @click="cambiaVista('12')">
              <v-icon class="white--text">mdi-border-all-variant</v-icon>
            </v-btn>
            <v-btn class="primary" @click="cambiaVista('6')">
              <v-icon class="white--text">mdi-border-all</v-icon>
            </v-btn>
            <v-btn class="primary" @click="cambiaVista('4')">
              <v-icon class="white--text">mdi-apps</v-icon>
            </v-btn>
          </v-card-title>
          <v-card-text>
            <v-row>
              <v-col
                v-for="pag in numPages"
                :key="pag + '-pagina'"
                :cols="vista"
                class="pa-1"
                style="position: relative"
              >
                <v-card>
                  <v-card-text>
                    <client-only>
                      <pdf
                        :src="recursoSelect.urlVista"
                        :page="pag"
                        style="position: relative; z-index: 1"
                        placeholder="Cargando..."
                      ></pdf>
                      <div
                        v-if="recursoSelect.premium && !claims.premium && pag !== 1"
                        style="
                          position: absolute;
                          top: 0px;
                          left: 0px;
                          z-index: 10;
                          background-color: #fff;
                          text-align: center;
                          height: 100%;
                        "
                      >
                        <img
                          :src="
                            recursoSelect.tipo === 'planeacion'
                              ? 'pantallas/3Estas leyendo previsualizacion.png'
                              : recursoSelect.tipo === 'otro'
                              ? 'pantallas/7Que estas esperando.png'
                              : 'pantallas/5Descubriste una funcion premium.png'
                          "
                          style="width: 100%"
                        />

                        <v-btn
                          class="melon white--text"
                          style="text-transform: none"
                          to="/checkout"
                          >??Hazte Premium!</v-btn
                        >
                        <br />
                        <br />
                      </div>
                    </client-only>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
<script>
import { mapState, mapMutations,mapActions } from "vuex";

export default {
  data() {
    return {
      paginas: [1, 2, 3],
      numPages: 0,
      pdfload: {},
      pageLoader: 0,
      vista: "4",
    };
  },
  computed: {
    ...mapState(["dialogfase2", "recursoSelect", "claims", "is_login","loadDescarga"]),
    
  },
  mounted() {
    if(this.recursoSelect.urlVista){
    this.cargaPDF();
    }
  },
  methods: {
    ...mapMutations(["vistafase2", "vistaAlertas", "cargaTipoalerta"]),
    ...mapActions(['ValidaDescargarArchivo']),
    DescargarArchivo(){
      this.ValidaDescargarArchivo()
    },
    cerrarVentana() {
      this.vistafase2(false);
    },
    cambiaVista(p) {
      this.vista = p;
    },
    cargaPDF() {
      this.$pdf
        .createLoadingTask(this.recursoSelect.urlVista)
        .promise.then((pd) => {
          this.numPages = pd._pdfInfo.numPages;
        });
    },
   
    
  },
};
</script>
