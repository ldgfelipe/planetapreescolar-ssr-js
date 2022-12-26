const express = require("express");
const admin = require("firebase-admin");
const db = admin.firestore();
const auth = admin.auth();
const router = express.Router();

const stripe = require("stripe")(process.env.STRIPE_TEST_SECRET_KEY);

router.post("/actualizapago", async (req, res) => {
  var event = req.body;
  var datos = event.data.object;
  switch (event.type) {
    case "customer.subscription.created":
      break;
    case "checkout.session.completed":
      /// guarda el id de suscripción
      //var email = datos.email;
      var idsus = datos.subscription;
      //email datos.email
      //idsuscripcion datos.subscriptions.data.id
        db.collection('pagos').where('client_reference_id','==',datos.client_reference_id).get()
        .then((res)=>{
          var data=res.docs[0].data()
          var idpag=res.docs[0].id
          data.idsub=idsus
          db.collection('pagos').doc(idpag).update(data)
          .then((res)=>{
            console.log('Actualización completa')
          })
        })
    
      break;
      case 'customer.subscription.deleted':

        db.collection('pagos').where('idsub','==',datos.id).get()
        .then((res)=>{
          var data=res.docs[0].data()
          var idpag=res.docs[0].id
          data.payment_status='cancel'
          db.collection('pagos').doc(idpag).update(data)
          .then((res)=>{
            //edita los claims
            var claims={
              "admin":false,
              "premium":false,
              "level":0
            }
             auth.setCustomUserClaims(data.idAuth,claims)
                  .then((resp)=>{
                   console.log('Cambios aplicados a claims')
                  })
          })
        })

        break;
  }

  return res.sendStatus(200);
});

module.exports = router;
