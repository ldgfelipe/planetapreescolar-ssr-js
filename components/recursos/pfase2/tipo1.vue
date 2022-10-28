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

            <v-btn class="melon white--text" @click="DescargarArchivo()"
              >Descargar <v-icon>mdi-download</v-icon></v-btn
            >
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
                          >¡Hazte Premium!</v-btn
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
import { mapState, mapMutations } from "vuex";

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
    ...mapState(["dialogfase2", "recursoSelect", "claims", "is_login"]),
  },
  mounted() {
    if(this.recursoSelect.urlVista){
    this.cargaPDF();
    }
  },
  methods: {
    ...mapMutations(["vistafase2", "vistaAlertas", "cargaTipoalerta"]),
    DescargarArchivo() {
      if (this.recursoSelect.premium && !this.claims.premium ) {
        this.vistaAlertas(true);
        this.cargaTipoalerta(1);
      } else {
        this.DescargaFuncion()
      }
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
    DescargaFuncion(){
       var nombrearchivo=""
       var tipefile=""
          const xhr = new XMLHttpRequest();
          xhr.responseType = 'blob';
          xhr.onload = (event) => {
            const blob = xhr.response;
            console.log(blob.type)
            switch(blob.type){
                case 'application/pdf':
               
                    console.log('descarga pdf')
                    nombrearchivo=this.recursoSelect.titulo+".pdf";
                break;
                case 'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
                    console.log('descarga docx')
                    nombrearchivo=this.recursoSelect.titulo+".docx";
                break;
                case 'application/vnd.openxmlformats-officedocument.presentationml.presentation':
                case 'application/vnd.ms-powerpoint':  
                case 'application/vnd.openxmlformats-officedocument.presentationml.slideshow':
                    console.log('descarga ppt')
                    nombrearchivo=this.recursoSelect.titulo+".ppt";
                break;
              
            }
            var urlvista=URL.createObjectURL(blob, {
               type: blob.type
            });
            tipefile=blob.type
            this.forceDownload(nombrearchivo,tipefile)


          };
          xhr.open('GET',this.recursoSelect.urlDescargable);
          xhr.send();
          
    },
    forceDownload(label,filetype){
        
      this.$axios.get(this.recursoSelect.urlDescargable, { responseType: 'blob' })
      .then(response => {
        const blob = new Blob([response.data], { type: filetype})
        const link = document.createElement('a')
        link.href = URL.createObjectURL(blob)
        link.download = label
        link.click()
        URL.revokeObjectURL(link.href)
      }).catch(console.error)
    }
  },
};
</script>
