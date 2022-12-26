const express = require('express');
const admin = require("firebase-admin");
const auth = admin.auth()
const db = admin.firestore()
const router = express.Router()

router.post("/claims",async (req,res)=>{
  console.log(req.body)
    await  auth
     .getUserByEmail(req.body.email)
     .then((userRecord) => {
       // The claims can be accessed on the user record.
       res.json(userRecord)
     });
 })

 router.post('/editclaims',async (req,res)=>{
  if(req.body.pass === 'PlanetaSereyd2022#'){
   await auth.setCustomUserClaims(req.body.uid,req.body.claims)
   .then((resp)=>{
       res.json({res:'Cambios aplicados a sistema',respuesta:resp})
   })
  }
})


  router.get('/totalusers',async (req,res)=>{
    await db.collection("usuarios").get()
    .then((rep)=>{
      res.json(rep.size)
    })

 })

 module.exports = router