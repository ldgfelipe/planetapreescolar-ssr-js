<template>
  <v-card>
    <v-card-text v-if="Object.keys(userdatacollect).length > 0">
      <v-row>
        <v-col cols="12" md="6" class="text-center">
          <v-progress-circular
            v-if="loaderImg"
            color="morado"
            size="150"
            indeterminate
          ></v-progress-circular>

          <v-avatar v-if="!loaderImg" size="150" class="primary pa-4">
            <img v-if="validaImagen()" :src="userdatacollect.urlImagen" />

            <v-icon v-if="!userdatacollect.urlImagen" class="white--text">
              mdi-account
            </v-icon>
          </v-avatar>
          <h2>{{ userdatacollect.nombre }} {{ userdatacollect.apellido }}</h2>
          <br />
         <!--- <v-row v-if="userdatacollect.photoURL">
            <v-col> 
                <v-avatar>
                    <img :src="userdatacollect.photoURL" />
                </v-avatar>
            </v-col>
            <v-col>
              <v-btn >
          <<  Utilizar esta foto como perfil    
            </v-btn>
            </v-col>
          </v-row>---->
          <v-text-field
            v-model="datosuser.correo"
            label="Correo"
            outlined
            :disabled="true"
          ></v-text-field>

          <v-text-field
            v-model="datosuser.uid"
            label="id/uid"
            outlined
            :disabled="true"
          ></v-text-field>

          <v-btn
            v-if="validaImagen() && !loaderImg"
            block
            class="primary white--text"
            @click="cambiarImagen()"
          >
            Cambiar Imagen</v-btn
          >

          <br />
          <v-file-input
            v-if="!validaImagen() && !loaderImg"
            accept="image/png, image/jpeg, image/bmp"
            placeholder="Imagen de perfil"
            prepend-icon="mdi-camera"
            label="Avatar"
            outlined
            v-model="imagenPerfil"
          ></v-file-input>

          <v-btn
            v-if="!validaImagen()"
            block
            class="primary white--text"
            @click="upImagen()"
            >Subir imagen</v-btn
          >

          <br />
          <v-btn
            v-if="!loaderImg"
            @click="guardarcambios()"
            block
            class="melon white--text"
          >
            {{ editar ? "Editar Perfil" : "Guardar Cambios" }}</v-btn
          >
        </v-col>
        <v-col cols="12" md="6">
          <v-select
            outlined
            :disabled="editar ? true : false"
            v-model="datosuser.tipo"
            :items="['Miss', 'Maestra']"
          ></v-select>

          <v-text-field
            v-model="datosuser.nombre"
            label="Nombre"
            outlined
            :disabled="editar ? true : false"
          ></v-text-field>

          <v-text-field
            v-model="datosuser.apellido"
            label="Apellido"
            outlined
            :disabled="editar ? true : false"
          ></v-text-field>

          <v-row>
            <v-col cols="12">
              <v-select
                outlined
                class="inputTextView"
                label="País"
                v-model="datosuser.pais"
                hide-details="auto"
                :items="paises"
                item-text="pais"
                item-value="pais"
                :disabled="editar ? true : false"
                @change="codigopais($event)"
              ></v-select>
            </v-col>
            <v-col cols="5">
              <v-text-field
                v-model="datosuser.codigopais"
                label="Código País"
                outlined
                :disabled="true"
              ></v-text-field>
            </v-col>
            <v-col cols="7">
              <v-text-field
                v-model="datosuser.telefono"
                label="Teléfono"
                outlined
                :disabled="editar ? true : false"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-text-field
            v-model="datosuser.exp"
            label="Años de Experiencia"
            outlined
            :disabled="editar ? true : false"
          ></v-text-field>
          <v-text-field
            v-model="datosuser.ciudad"
            label="Ciudad"
            outlined
            :disabled="editar ? true : false"
          ></v-text-field>
          <v-text-field
            v-model="datosuser.estado"
            label="Estado"
            outlined
            :disabled="editar ? true : false"
          ></v-text-field>
          <v-textarea
            v-model="datosuser.profesion"
            label="¿Por que elegí esta profesión?"
            outlined
            :disabled="editar ? true : false"
          ></v-textarea>
          <v-textarea
            v-model="datosuser.acerca"
            label="Acerca de mi"
            outlined
            :disabled="editar"
          ></v-textarea>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      editar: true,
      datosuser: {},
      paises: [],
      loaderImg: true,
      rules: [
        (value) =>
          !value ||
          value.size < 2000000 ||
          "Avatar size should be less than 2 MB!",
      ],
      imagenPerfil: null,
    };
  },
  computed: {
    ...mapState(["userdatacollect"]),
  },
  mounted() {
    setTimeout(() => {
      this.cargaDatos();
    }, 2000);
    this.cargaPaises();
  },
  methods: {
    ...mapActions(["eliminarImagen", "subirImagen"]),
    async cargaPaises() {
      ///carga paises desde archivo json
      await fetch("json/paiscode.json")
        .then((res) => res.json())
        .then((res) => {
          this.paises = res;
        });
    },
    guardarcambios() {
      this.editar ? (this.editar = false) : (this.editar = true);
      this.loaderImg = true;
      if (this.editar) {
        this.$fire.firestore
          .collection("usuarios")
          .doc(this.datosuser.uid)
          .update(this.datosuser)
          .then((data) => {
            this.editar = true;
            this.loaderImg = false;
          });
      } else {
        this.loaderImg = false;
      }
    },
    cambiarImagen() {
      if (confirm("¿Seguro que deseas eliminar la imagen de perfil?")) {
        this.loaderImg = true;
        var payload = {
          url: this.datosuser.urlImagen,
        };

        this.eliminarImagen(payload).then((resp) => {
          console.log(resp);
          this.datosuser.urlImagen = "";
          this.guardarcambios();
          this.loaderImg = false;
        });
      }
    },
    validaImagen() {
      var val = false;
      if (this.userdatacollect.urlImagen) {
        val = true;
      }

      return val;
    },
    async upImagen() {
      this.loaderImg = true;
      var payload = {
        ubi: "fotos_perfil/" + this.userdatacollect.uid,
        file: this.imagenPerfil,
        namefile: "portada-perfil",
      };

      this.subirImagen(payload).then((res) => {
        this.datosuser.urlImagen = res;
        this.guardarcambios();
        this.loaderImg = false;
      });
    },
    cargaDatos() {
      this.datosuser = this.userdatacollect;
      this.loaderImg = false;
    },
    codigopais(e) {
      var codepais = this.paises.find((paises) => paises.pais === e);
      this.datosuser.codigopais = codepais.code;
    },
  },
};
</script>
