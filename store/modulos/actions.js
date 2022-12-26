import moment from "moment";
import ajv from "ajv";

function loadRespuesta(tipo, campo, instance) {
  var resp;
  switch (tipo) {
    case "string":
      resp = "";
      break;
    case "integer":
      resp = 0;
      break;
    case "object":
      resp = {};
      break;
    case "array":
      resp = [];
      switch (campo) {
        case "registro":
          if (instance === "/mes") {
            resp.push({ fecha: moment().format("MM YYYY"), usadas: [] });
          }
          if (instance === "/dia") {
            resp.push({ fecha: moment().format("YYYY MM DD"), usadas: [] });
          }
          break;
      }

      break;
  }
  return resp;
}

export const actions = {
  nuxtServerInit({ commit }, { req }) {
    console.log("nuxt init server");
  },

  async onAuthStateChangedAction(ctx, { authUser, claims }) {
    if (!authUser) {
      ctx.commit("actualizaDescargas", {});
    } else {
      try {
        ctx.commit("cambiaidAuth", authUser.uid);
        this.$fire.firestore
          .collection("usuarios")
          .where("correo", "==", authUser.email)
          .get()
          .then((resp) => {
            //// carga datos de pago
            if (resp.empty === false) {
              if (resp.docs[0].data().pago && resp.docs[0].data().pago.idPago) {
                this.$fire.firestore
                  .collection("pagos")
                  .where("idPago", "==", resp.docs[0].data().pago.idPago)
                  .get()
                  .then((pay) => {
                    console.log(pay);
                    /// verifica datos de pago 
                    ctx.dispatch('validaFechadepago',pay.docs[0].data())

                    ctx.commit("cambiaPago", pay.docs[0].data());
                  });
              }

              var User = resp.docs[0].data();
              User.id = resp.docs[0].id;
              User.uid = resp.docs[0].id;
              ctx.commit("cambiaUserdatacollect", User);
              var upPhoto = false;
              var upImagen = false;
              if (User.photoURL && User.photoURL !== null) {
                upPhoto = true;
              }
              if (User.urlImagen && User.urlImagen !== null) {
                upImagen = true;
              }
              if (upPhoto === true && upImagen === false) {
                User.urlImagen = User.photoURL;
              }
              /// valida estructura de descargas
              if (!User.descargas) {
                  User.descargas={}
              } 
              ctx.dispatch("validaEstructuraDescargas", User.descargas);


            }
          });
      } catch (error) {
        console.log(error);
      }
    }
  },
/// VALIDA FECHA DE PAGO
  validaFechadepago(ctx,pago){
    var expire=this.$moment(pago.expires_at)
    var actual=this.$moment().format('YYYY/MM/DD')
    var total=expire.diff(actual)
    console.log(total)
    if(total<=0){
      var payload={
        idAuth:pago.idAuth,
        claims:{
            admin:false,
            premium:false,
            level:0
        }
      }
      if(ctx.state.claims.premium===true){
      ctx.dispatch('cambiaClaims',payload)
      }
    }else{
      if(ctx.state.claims.premium===false && pago.idAuth){
        var payload={
          idAuth:pago.idAuth,
          claims:{
              admin:false,
              premium:true,
              level:1
          }
        }
        ctx.dispatch('cambiaClaims',payload)
        window.location.reload()
      }
    }
  },
/// CAMBIA DATOS DE CLAIM
  cambiaClaims(ctx,datos){
   var payload= {
      uid:datos.idAuth,
      claims : datos.claims,
      pass: 'PlanetaSereyd2022#'
  }


    fetch(process.env.functions + "/v1/adminusers/editclaims", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then(res => res.json())
      .then((resp) => {
        console.log(resp)
          ctx.commit('cambiaClaims',datos.claims)
          window.location.reload()
        //this.$router.push("/");
      });
  },
///// VALIDA QUE LA ESTRUCTURA DE DESCARGA CUMPLA CON LOS REQUISITOS MINIMOS
  validaEstructuraDescargas(ctx, datos) {
    const estructura = ctx.state.schemas.usuario.descargas;
    var ajval = new ajv();
    var validate = ajval.compile(estructura);
    if (validate(datos)) {
      ctx.commit('actualizaDescargas', datos);
    } else {
      var instance = validate.errors[0].instancePath;
      var lispat = instance.split("/");
      console.log(validate.errors)
      switch (lispat.length) {
        default:
          datos[validate.errors[0].params.missingProperty] = loadRespuesta(
            estructura.properties[validate.errors[0].params.missingProperty]
              .type,
            validate.errors[0].params.missingProperty,
            instance
          );
          break;
        case 2:
          datos[lispat[1]][validate.errors[0].params.missingProperty] =
            loadRespuesta(
              estructura.properties[lispat[1]].properties[
                validate.errors[0].params.missingProperty
              ].type,
              validate.errors[0].params.missingProperty,
              instance
            );
          break;
        case 3:
          datos[lispat[1]][lispat[2]][
            validate.errors[0].params.missingProperty
          ] = loadRespuesta(
            estructura.properties[lispat[1]].properties[lispat[2]].properties[
              validate.errors[0].params.missingProperty
            ].type,
            validate.errors[0].params.missingProperty,
            instance
          );
          break;
        case 4:
          datos[lispat[1]][lispat[2]][lispat[3]][
            validate.errors[0].params.missingProperty
          ] = loadRespuesta(
            estructura.properties[lispat[1]].properties[lispat[2]].properties[
              lispat[3]
            ].properties[validate.errors[0].params.missingProperty].type,
            validate.errors[0].params.missingProperty,
            instance
          );
          break;
      }
      ctx.commit('actualizaDescargas', datos);
      ctx.dispatch("validaEstructuraDescargas", datos);
    }
  },
///// REALIZA EL REGISTRO DE LA DESCARGA
  registroDescargas({ commit, dispatch, state }, tipo) {
    var mesDate = this.$moment().format("MM YYYY");
    var diaDate = this.$moment().format("YYYY MM DD");
    var cargaDescargas = state.descargas;

    /// si el tipo es Día
    if (tipo === "dia") {
      if (cargaDescargas.dia) {
        // si existe el objeto dia
        if (!cargaDescargas.dia.registro) {
          // si no existe el objeto registro
          cargaDescargas.dia.registro.push(
            // crea el esquema de registro
            {
              fecha: diaDate,
              usadas: [],
            }
          );
        } else {
          var dia = false;
          cargaDescargas.dia.registro.map((d) => {
            if (d.fecha === diaDate) {
              dia = true;
            }
          });
          if (dia === false) {
            cargaDescargas.dia.registro.push({
              fecha: diaDate,
              usadas: [],
            });
          }
        }
      } else {
        // si no existe el objeto dia
        cargaDescargas.dia = {
          // crea el objeto de dia y registro
          active: false,
          disponibles: 0,
          tipo: "",
          registro: [
            {
              fecha: diaDate,
              usadas: [],
            },
          ],
        };
      }
      cargaDescargas.dia.totaldescargas = cargaDescargas.dia.totaldescargas
        ? cargaDescargas.dia.totaldescargas + 1
        : 1;
      // depues de validar que existe el objeto se agrega el id de recurso descargado
      cargaDescargas.dia.registro.map((p) => {
        if (p.fecha === diaDate) {
          p.usadas.push(state.recursoSelect.idRecurso);
        }
      });
    }
    /// si el tipo es Mes
    if (tipo === "mes") {
      if (cargaDescargas.mes) {
        // si existe el objeto mes
        if (!cargaDescargas.mes.registro) {
          // si no existe el objeto registro
          cargaDescargas.mes.registro = [
            // crea el esquema de registro
            {
              fecha: mesDate,
              usadas: [],
            },
          ];
        } else {
          if (!cargaDescargas.mes.registro.fecha === mesDate) {
            cargaDescargas.mes.registro.push({
              fecha: mesDate,
              usadas: [],
            });
          }
        }
      } else {
        // si no existe el objeto mes
        cargaDescargas.mes = {
          // crea el objeto de mes y registro
          active: false,
          disponibles: 0,
          registro: [
            {
              fecha: mesDate,
              usadas: [],
            },
          ],
        };
      }
      cargaDescargas.mes.totaldescargas = cargaDescargas.mes.totaldescargas
        ? cargaDescargas.mes.totaldescargas + 1
        : 1;
      // depues de validar que existe el objeto se agrega el id de recurso descargado
      cargaDescargas.mes.registro.map((p) => {
        if (p.fecha === mesDate) {
          p.usadas.push(state.recursoSelect.idRecurso);
        }
      });
    }

    //// guada en base de datos el registro de descargas
    this.$fire.firestore
      .collection("usuarios")
      .doc(state.userdatacollect.uid)
      .update({
        descargas: cargaDescargas,
      })
      .then(() => {
        commit("actualizaDescargas", cargaDescargas);
      });

      // ACTUALIZA DESCARGAS DE PAGO 
      /* this.$fire.firestore.collection("pagos").doc(state.pago.idAuth)
        .then((resp)=>{
          console.log(resp)
        })*/
  },
//// VALIDA LA DESCARGA
  ValidaDescargarArchivo({ commit, dispatch, state }) {
    commit("cambiaLoadDescarga", true);
    /// verifica status de suscripcion
    state.pago;
    var mesDate = this.$moment().format("MM YYYY");
    var diaDate = this.$moment().format("YYYY MM DD");
    if (state.claims.premium) {
      //cuenta premium
      if (state.recursoSelect.premium) {
        var descarcasmes = 0;
        /// recurso Premium
        //// busca cantidad de descargas y valida si tiene disponibles
        state.descargas.mes.registro.map((p) => {
          if (p.fecha === mesDate) {
            descarcasmes = p.usadas.length;
          }
        });
        if (descarcasmes < state.pago.limite) {
          dispatch("registroDescargas", "mes");
          dispatch("DescargaFuncion");
        } else {
          commit("vistaAlertas", true);
          commit("cargaTipoalerta", 3);
          commit("cambiaLoadDescarga", false);
        }
      } else {
        /// recurso Gratis
        dispatch("registroDescargas", "dia");
        dispatch("DescargaFuncion");
      }
    } else {
      //cuenta gratis
      if (state.recursoSelect.premium) {
        /// recurso Premium
        commit("vistaAlertas", true);
        commit("cargaTipoalerta", 1);
        commit("cambiaLoadDescarga", false);
      } else {
        /// recurso Gratis
        /// verifica descarga por dia
        console.log("Descarga recurso gratis free");
        if (state.descargas.dia) {
          state.descargas.dia.registro.map((d) => {
            if (d.fecha === diaDate) {
              if (d.usadas.length === 0) {
                dispatch("registroDescargas", "dia");
                dispatch("DescargaFuncion");
              } else {
                commit("vistaAlertas", true);
                commit("cargaTipoalerta", 2);
                commit("cambiaLoadDescarga", false);
              }
            }
          });
        }
      }
    }
  },
///// EJECUTA LA DESCARGA
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
//// DESPUES DE REALIZAR LA DESCARGA REALIZA EL FORZADO DE DESCARGA DEL ARCHIVO
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
//// SUBE IMAGEN AL SISTEMA
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
/// ELIMINA IMAGEN DE DESCARGA 
  async eliminarImagen(context, data) {
    if (data.url !== "" || data.url !== "none") {
      var desertRef = await this.$fire.storage.refFromURL(data.url);
      return desertRef
        .delete()
        .then((res) => {
          return res;
        })
        .catch((error) => {
          return false;
        });
    }
  },
};
