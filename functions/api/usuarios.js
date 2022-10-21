const {admin, functions} =require('../fb')
const {usuario} = require('./schemas')
const router = require("express").Router()
const adminInit=admin.initializeApp(functions.config().firebase);


const db = adminInit.firestore()
const auth = adminInit.auth()
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
        
        var payload =Object.assign(usuario,req.body)

       await db.collection("usuarios")
        .where("correo", "==", payload.correo).get()
        .then((callback)=>{
         if(!callback.docs[0]){
            db.collection("usuarios").add(payload)
            .then((resp)=>{
                auth.setCustomUserClaims(payload.uid, {
                    admin:false,
                    premium:false,
                    level:0
                })
                .then()
                res.json({code:1,id:resp._path.id,mensaje:'Usuario registrado correctamente'})
            })
         }else{
            res.json({code:0,mensaje:'El usuario ya existe con este correo'})
         }
        })
       

    })

    router.post("/claims",async (req,res)=>{
       await  auth
        .getUser(req.body.uid)
        .then((userRecord) => {
          // The claims can be accessed on the user record.
          res.json(userRecord)
        });
    })




module.exports = router