const {admin, functions} =require('../fb')
const {usuario} = require('./schemas')

const router = require("express").Router()
const adminInit=admin.initializeApp(functions.config().firebase);
const db = adminInit.firestore()

    router.post("/create", (req, res) => {

        var payload = req.body

        /// busca duplicados ////
        db.collection("usuarios")
        .where("correo", "==", payload.correo).get()
        .then((callback)=>{
         res.json(callback.docs[0])
         

        })
       

    })


module.exports = router