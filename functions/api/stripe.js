const express = require('express');
const admin = require("firebase-admin");
const db = admin.firestore()
const auth = admin.auth()
const router = express.Router()

const stripe=require('stripe')(process.env.STRIPE_TEST_SECRET_KEY)





router.post('/check-suscripcion',async (req,res)=>{
  var request=req.body
  const checkoutsession = await stripe.checkout.sessions.retrieve(request.id_session);

  const portalsession = await stripe.billingPortal.sessions.create({
    customer: checkoutsession.customer,
    return_url: `${request.dominio}/suscripcion`,
  });
    res.json(portalsession);

 })


router.post('/crea_suscripcion',async(req,res)=>{
      const session = await stripe.checkout.sessions.create({
        mode: "subscription",
        allow_promotion_codes:true,
        payment_method_types: ["card"],
        line_items: [
          {
            price:req.body.idtest,
            quantity: 1,
    
          },
        ],
        mode: 'subscription',
        success_url: `${req.body.url}success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.body.url}cancelado`,
        client_reference_id:req.body.client_reference_id
      });
    
      res.json(session);
 })


module.exports = router;