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

                <div v-if="statusaudio">
                  <audio
                    ref="audio"
                    v-if="recursoSelect.urlVista"
                    controls
                    style="width: 100%"
                  >
                    <source :src="recursoSelect.urlVista" type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>
                </div>
              </v-col>
              <v-col cols="12" md="7" class="contentRecurso">
                <h3>{{ recursoSelect.titulo }}</h3>
                <p>{{ recursoSelect.materia }}</p>
                <p>{{ recursoSelect.grado }}</p>
                <br />
                <p>
                  {{ recursoSelect.sinopsis }}
                </p>

                <div
                  v-if="recursoSelect.tipoRecurso === 'audio'"
                  v-html="recursoSelect.contenido"
                ></div>

                <div
                  v-if="
                    recursoSelect.urlVista &&
                    recursoSelect.tipoRecurso !== 'audio'
                  "
                >
                  <v-btn class="melon white--text" @click="verRecurso()"
                    >Ver recurso</v-btn
                  >
                </div>

                <div v-if="!recursoSelect.urlVista">
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
                </div>
              </v-col>
            </v-row>

            <h3 class="primary--text">Comentarios</h3>

            <v-textarea
              v-if="is_login && !loadercomment"
              v-model="comentario"
              outlined
              label="Comenta aquí"
            ></v-textarea>
            <v-btn
              v-if="is_login && !loadercomment"
              class="melon white--text"
              @click="guardarComentario()"
              >Guardar Comentario</v-btn
            >
            <v-progress-circular
              v-if="loadercomment"
              indeterminate
              color="purple"
            ></v-progress-circular>
            <br /><br />

            <v-card
              v-if="
                Object.keys(recursoSelect).length > 0 &&
                recursoSelect.comentarios.length > 0
              "
            >
            <v-card-title class="morado white--text">
              Comentarios <v-spacer></v-spacer> <v-btn @click="vercomentarios ? vercomentarios=false : vercomentarios=true" class="melon white--text"><v-icon>{{vercomentarios ? 'mdi-arrow-up' : 'mdi-arrow-down'}}</v-icon></v-btn>
            </v-card-title>
              <v-card-text v-if="vercomentarios">
                <v-list three-line>
                  <template
                    v-for="(item, index) in recursoSelect.comentarios"
                    v-if="item.status === true"
                  >
                    <v-list-item>
                      <v-list-item-avatar color="morado" class="white--text">
                        {{ item.nombre.substr(0, 2).toUpperCase() }}
                        <v-img
                          v-if="item.urlImagen"
                          :src="item.urlImagen"
                        ></v-img>
                      </v-list-item-avatar>

                      <v-list-item-content>
                        <v-list-item-title
                          v-html="item.nombre"
                        ></v-list-item-title>
                        <v-list-item-subtitle
                          v-html="item.texto"
                        ></v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                  </template>
                </v-list>
              </v-card-text>
            </v-card>

            <br /><br />

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
import { mapState, mapMutations, mapActions } from "vuex";
import recursos from "@/components/recursos/recursos.vue";
import AlertaPlaneta from "@/components/recursos/alertas/alertas.vue";
export default {
  data() {
    return {
      comentario: "",
      loadercomment: false,
      comentariosActivos: [],
      vercomentarios:true
    };
  },
  computed: {
    ...mapState([
      "user",
      "dialogfase1",
      "recursoSelect",
      "relacionados",
      "is_login",
      "loadDescarga",
      "statusaudio",
      "userdatacollect",
    ]),
  },
  mounted() {
    if (this.recursoSelect.tipoRecurso === "audio") {
      this.camiaStatusAudio(true);
    }
  },
  methods: {
    ...mapMutations([
      "vistafase1",
      "vistafase2",
      "vistaAlertas",
      "cargaTipoalerta",
      "cambiaLoadDescarga",
      "camiaStatusAudio",
      "seleccionaRecurso",
    ]),
    ...mapActions(["ValidaDescargarArchivo"]),
    cargacomentarios() {
      if (this.recursoSelect.comentarios.length > 0) {
        this.recursoSelect.comentarios.map((p) => {
          if (p.status === true) {
            this.comentariosActivos.push(p);
          }
        });
      }
    },
  async  guardarComentario() {
      this.loadercomment = true;
      var recurso = this.recursoSelect;
      recurso.comentarios.push({
        nombre: this.userdatacollect.nombre,
        comentario: this.comentario,
        validado: false,
        fecha:this.$moment().format("DD MMMM YYYY"), 
        usuario: this.userdatacollect.correo,
        imagen: this.userdatacollect.urlImagen,
        iduser:this.userdatacollect.uid
      });
     await this.$fire.firestore
        .collection("CATEGORIAS")
        .doc(this.recursoSelect.idRecurso)
        .update(recurso)
        .then((res) => {
          this.loadercomment = false;
          recurso = {};
          this.comentario = "";
        });
    },
   
    cierraDialog() {
      this.vistafase2(false);
      this.vistafase1(false);
      if (this.$refs.audio) {
        this.releaseAudio();
      }
      /// libera recursoSelect
      this.seleccionaRecurso({});
    },
    releaseAudio() {
      this.camiaStatusAudio(false);
    },
    verRecurso() {
      if (!this.is_login) {
        this.vistaAlertas(true);
        this.cargaTipoalerta(0);
      } else {
        this.vistafase2(true);
      }
    },
    DescargarArchivo() {
      this.cambiaLoadDescarga(true);
      this.ValidaDescargarArchivo();
    },
  },
  components: {
    recursos,
    fase2tipo1,
    AlertaPlaneta,
  },
};
</script>
