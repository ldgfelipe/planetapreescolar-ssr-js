import moment from "moment";
export const actions = {
  nuxtServerInit({ commit }, { req }) {
    console.log("nuxt init server");
  },
  async onAuthStateChangedAction(ctx, { authUser, claims }) {
    if (!authUser) {
      ctx.commit("actualizaDescargas", {});
    } else {
      try {
        this.$fire.firestore
          .collection("usuarios")
          .where("correo", "==", authUser.email)
          .get()
          .then((resp) => {
            var User = resp.docs[0].data();
            User.id = resp.docs[0].id;
            User.uid = resp.docs[0].id;
            ctx.commit("cambiaUserdatacollect", User);
            var upPhoto=false
            var upImagen=false
            if(User.photoURL && User.photoURL!==NULL){
              upPhoto=true
            }
            if(User.urlImagen && User.urlImagen!==NULL){
              upImagen=true
            }

            if(upPhoto===true && upImagen===false){
              User.urlImagen=User.photoURL
            }

            if (User.descargas) {
              ctx.commit("actualizaDescargas", User.descargas);
            } else {
              User.descargas = {
                dia: {
                  disponibles: 1,
                  fecha: moment().format("YYYY/MM/DD"),
                  usadas: [],
                },
                mes: {
                  active: false,
                  disponibles: 0,
                  registro: [],
                  tipo: "",
                },
              };
              this.$fire.firestore
                .collection("usuarios")
                .doc(resp.docs[0].id)
                .update(User)
                .then(() => {
                  ctx.commit("actualizaDescargas", User.descargas);
                });
            }
          });
      } catch (error) {
        console.log(error);
      }
    }
  },

  ValidaDescargarArchivo({ commit, dispatch, state }) {
    // valida status de descarga
    console.log("ejecuta accion ValidaDescargaArchivo");
    if (state.recursoSelect.premium && !state.claims.premium) {
      commit("vistaAlertas", true);
      commit("cargaTipoalerta", 1);
      commit("cambiaLoadDescarga", false);
    } else {
      dispatch("DescargaFuncion");
    }
  },

  DescargaFuncion({ commit, dispatch, state }, data) {
    console.log("ejecuta accion DescargaFuncion");
    var nombrearchivo = "";
    var tipefile = "";
    const xhr = new XMLHttpRequest();
    xhr.responseType = "blob";
    xhr.onload = (event) => {
      const blob = xhr.response;
      console.log(blob.type);
      switch (blob.type) {
        case "application/pdf":
          console.log("descarga pdf");
          nombrearchivo = state.recursoSelect.titulo + ".pdf";
          break;
        case "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
          console.log("descarga docx");
          nombrearchivo = state.recursoSelect.titulo + ".docx";
          break;
        case "application/vnd.openxmlformats-officedocument.presentationml.presentation":
        case "application/vnd.ms-powerpoint":
        case "application/vnd.openxmlformats-officedocument.presentationml.slideshow":
        case "text/html":
          console.log("descarga ppt");
          nombrearchivo = state.recursoSelect.titulo + ".ppt";
          break;
      }
      var urlvista = URL.createObjectURL(blob, {
        type: blob.type,
      });
      tipefile = blob.type;
      var payloadfiles = {
        label: nombrearchivo,
        filetype: tipefile,
      };
      dispatch("forceDownload", payloadfiles);
    };
    xhr.open("GET", state.recursoSelect.urlDescargable);
    xhr.send();
  },

  forceDownload({ commit, dispatch, state }, data) {
    console.log("ejecuta accion forceDownload");
    this.$axios
      .get(state.recursoSelect.urlDescargable, { responseType: "blob" })
      .then((response) => {
        const blob = new Blob([response.data], { type: data.filetype });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = data.label;
        link.click();
        URL.revokeObjectURL(link.href);
        commit("cambiaLoadDescarga", false);
      })
      .catch(console.error);
  },
  async subirImagen(ctx, data) {
    try {
      let ubi = data.ubi;
      const file = data.file;
      const metadata = {
        contentType: data.file.type,
      };
      let storageRef = this.$fire.storage.ref(ubi);
      await storageRef.child(data.namefile).put(file, metadata);

      return await storageRef
        .child(data.namefile)
        .getDownloadURL()
        .then((url) => {
          return url;
        });
    } catch (error) {
      return error;
    }
  },
  async eliminarImagen(context, data) {

    if (data.url !== "" || data.url !== "none") {
      var desertRef = await this.$fire.storage.refFromURL(data.url);
      return desertRef
              .delete()
              .then((res)=>{
                return res;
              })
              .catch((error)=>{
                return false;
              });
    }
    
  },
};
