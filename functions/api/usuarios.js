const express = require("express");
const admin = require("firebase-admin");

const db = admin.firestore();
const auth = admin.auth();

const { usuario } = require("./schemas");
const router = express.Router();

router.get("/test", (req, res) => {
  res.json({ res: "prueba de admin api" });
});

/**
 * @module api/users
 */

/**
 * @function Create Api-Crea Alta de usuarios en [collection/usuarios]  

 * @property {Object} req.body - resibe el objeto con los datos de usuario
 * @returns {Object} Regresa un objeto con el codigo de proceso, el mensaje y en caso de que el registro sea correcto regreso el id del usuario
 * 
 */

router.post("/create", async (req, res) => {
  var payload = Object.assign(usuario, req.body);

  await db
    .collection("usuarios")
    .where("correo", "==", payload.correo)
    .get()
    .then((callback) => {
      console.log(callback.docs[0]);
      if (callback.empty === true) {
        db.collection("usuarios")
          .add(payload)
          .then((resp) => {
            auth
              .setCustomUserClaims(payload.uid, {
                admin: false,
                premium: false,
                level: 0,
              })
              .then();
            res.json({
              code: 1,
              id: resp._path.id,
              mensaje: "Usuario registrado correctamente",
            });

            
          });
      } else {
        res.json({ code: 0, mensaje: "El usuario ya existe con este correo" });
      }
    });
});

router.post("/addclaims", async (req, res) => {
     //// despues se verifica si cuena con alguna pago realizado o si su cuenta esta activa 
    var payload = req.body;
    var respuesta= "";
    var  rescode=0;
  db.collection("usuarios")
    .where("correo", "==", payload.email)
    .get()
    .then((ret) => {
      if(!ret.empty){
      var data = ret.docs[0].data();
      if (data.descargas && data.descargas.mes.active) {
        console.log('si hay descargas ')
        auth.setCustomUserClaims(payload.uid, {
          admin: false,
          premium: data.descargas.mes.active === true ? true : false,
          level: data.descargas.mes.active === true ? 1 : 0,
        });
        respuesta = "Actualización correcta"
        rescode=0 
      } else {
        console.log('No hay descargas ')
        auth.setCustomUserClaims(payload.uid, {
          admin: false,
          premium: false,
          level: 0,
        });
        respuesta = "Error de Actualización correcta"
        rescode=0 
      }
    }else{
      // crear si no existe 
    }
    });

  res.json({ res:respuesta,code:rescode });
});

module.exports = router;
