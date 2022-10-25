const express = require('express');
const admin = require("firebase-admin");
const db = admin.firestore()
const auth = admin.auth()
const router = express.Router()

const stripe=require('stripe')('sk_test_FKWAD7tf9RADRIcQ8fV6eSV5003r3iZeTp')

router.get('/detalles_pago_user',async (req,res)=>{

 })

router.post('/crea_suscripcion',async(req,res)=>{

 })

router.post('/cancela_suscripcion',async(req,res)=>{

})

