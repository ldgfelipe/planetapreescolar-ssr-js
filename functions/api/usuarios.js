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
router.post("/createClaims",async (req,res)=>{

  var payload = req.body
  var claims={
    admin: false,
    premium: false,
    level: 0,
  }
  auth.setCustomUserClaims(payload.idAuth, claims)
res.json({res:'Claims asignados',claims:claims})

})

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
            console.log("actualiza claims 3");
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
  var respuesta = "";
  var rescode = 0;
  db.collection("usuarios")
    .where("correo", "==", payload.email)
    .get()
    .then((ret) => {
      if (!ret.empty) {
        var data = ret.docs[0].data();
        var datapago={}
        ////// actualización para cuentas viejas
        if (data.idSuscripcion && !data.pago) {
          console.log("actualiza claims 1");
          auth.setCustomUserClaims(payload.uid, {
            admin: false,
            premium: data.descargas.mes.active ? true : false,
            level: data.descargas.mes.active ? 0 : 1,
          });
          /// actualiza el idpago con el iddesuscripcion
          db.collection("pagos")
            .where("external_reference", "==", data.idSuscripcion)
            .get()
            .then((pago) => {
              pago.forEach((doc) => {
              datapago={...doc.data()}
               datapago.idPago=doc.id
               datapago.limite=10
               
                if(doc.frecuencia){
                  switch(doc.plan){
                    case 'mensual':
                      datapago.limite=10
                      break;
                    case 'trimestral':
                      datapago.limite=12
                    break;
                    case 'semestral':
                      datapago.limite=14
                      break;
                    case 'anual':
                      datapago.limite=16
                      break;  
                  }
                }
               if(doc.plan){
                switch(doc.plan){
                  case 'mensual':
                    datapago.limite=10
                    break;
                  case 'trimestral':
                    datapago.limite=12
                  break;
                  case 'semestral':
                    datapago.limite=14
                    break;
                  case 'anual':
                    datapago.limite=16
                    break;  
                }
               
              }

                data.pago = { idPago: doc.id };

                db.collection("usuarios")
                  .doc(data.uid ? data.uid : data.id )
                  .update(data)
                  .then((respago) => {
                    console.log(respago)
                    console.log("Actualización de pago a usuarios");
                    respuesta="Actualización de pago a usuarios"
                  });
                db.collection('pagos')
                .doc(doc.id)
                .update(datapago)  
                .then((pagoup)=>{
                  console.log(datapago)
                  console.log('actualiza datos de pagos')
                  respuesta='actualiza datos de pagos'
                })
              });
            });
            res.json({ res: respuesta, code: rescode ,datos:data,pago:datapago});
        } else {
          if (!data.pago) {
            console.log("actualiza claims 2");
            auth.setCustomUserClaims(payload.uid, {
              admin: false,
              premium: false,
              level: 0,
            });
            respuesta = "Error de Actualización ";
            rescode = 0;
          }
          res.json({ res: respuesta, code: rescode ,datos:data,pago:datapago});
        }
     
      } else {
        // crear si no existe
        res.json({ res: "no existe el pago"});
      }
     
    });


});
module.exports = router;