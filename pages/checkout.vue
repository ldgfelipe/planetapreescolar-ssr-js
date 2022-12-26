<template>

  <v-card>
    <v-card-text >
      <div class="text-center white--text morado pa-10">
        Accede a miles de materiales educativos<br />
        Nuevos recursos cada semana<br />
        Descarga cuando quieras<br />
        Cancela cuando quieras<br />
      </div>

      <v-row v-if="Object.keys(muestraprecios).length>0">
        <v-col cols="12" class="text-right " style="height:30px;"> 
          </v-col>

        <v-col cols="7" class="text-right " style="font-size:30px;"> 
          <h2>{{muestraprecios.pais.toUpperCase()}} </h2>
        </v-col>

        <v-col cols="5"  > 
          <v-img class="mp-0" :src="'Banderas/'+muestraprecios.pais+'.png'" width="50"></v-img>
        </v-col>


        <v-col cols="12" md="6" v-for="(key,index) in muestraprecios.precios" :key="'precio'+index"> 
          <v-card outlined>
            <v-card-title class="justify-center">{{key.tipo.toUpperCase()}}</v-card-title>
            <v-card-text style="text-align: center">
              <b class="primary--text my-2"> {{muestraprecios.simbolo}} {{key.monto}}</b> <br />

              Descargas Mensuales Premium: <b>{{cantplan[key.tipo]}}</b> <br />
              Descargas Free ilimitadas<br />
              Previsualización de todas las planeaciones<br />

              <span class="primary--text">¡Lo Quiero!</span>
              <br />

              <v-btn class="morado white--text" to="/register" v-if="!is_login"
                >Registrate</v-btn
              >

              <v-btn class="morado white--text" v-if="is_login" rounded @click="creaPago(key)"
                >Paga con tarjeta</v-btn
              >

              <!---<v-btn class="melon white--text mt-1" v-if="configAll.pagos.mercadopago.visible  && datosUsuario.estadoMembresia !== 'active' && datosUsuario.lvluser > 0 && idPais === 'mxn'" rounded
            @click="formasPago('mensual')" >Efectivo</v-btn>  ---->

              <v-btn class="melon white--text mt-1" v-if="is_login" rounded
                >Pago en Oxxo</v-btn
              >
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="3" >

        </v-col>
        <v-col cols="1" class="justify-right">
    
        </v-col>
        <v-col cols="4">
  
          <v-select 
              outlined
              label="Seleccione el País" 
              v-if="listapaises.length>0" 
              :items="listapaises" 
              item-text="pais" 
              item-value="items" 
              v-model="muestraprecios"
            ></v-select>
        </v-col>
      </v-row>


      <v-dialog v-model="loadPay" max-width="300" persistent>
        <v-card>
          <v-card-title class="morado white--text justify-center">
          Verificando Conexión 
          </v-card-title>
          <v-card-text class="text-center pa-10">

            <v-progress-circular
            v-if="!redirectstate"
            color="morado"
            indeterminate
            size="80"
            >
            </v-progress-circular>
            <v-btn  v-if="redirectstate" class="melon white--text" @click="irStripe()">Continuar con Stripe</v-btn>
          </v-card-text>
        </v-card>
      </v-dialog>


    </v-card-text>
  </v-card>
</template>
<script>
import { v4 as uuidv4 } from 'uuid';
import { mapState } from "vuex";

export default {

  data() {
    return {

      pagosStripe:{},
      publicConekta:"",
      listapaises:[],
      muestraprecios:{},
      simbolo:"",
      cantplan:{
        mensual:10,
        trimestral:12,
        semestral:14,
        anual:16
      },
      loadPay:false,
      redirectstate:false,
      urlRedirect:"",
      extref:""
    };
  },
  computed: {
    ...mapState(["userdatacollect","is_login",'idAuth']),
  },
  mounted() {
      this.cargapagos()
    this.extref=uuidv4()
  },
  methods: {
 async cargapagos() {

 await this.$fire.firestore
      .collection("ConfiguracionGeneral")
      .get()
      .then((res) => {
          this.pagosStripe=res.docs[0].data().pagos.stripe.idpagos;
          this.publicConekta=res.docs[0].data().pagos.conekta.keys.publicKeyTest
          for(var lis in this.pagosStripe){

        this.listapaises.push({
          pais:this.pagosStripe[lis].simbolo+" "+this.pagosStripe[lis].pais,
          items:{
            precios:this.pagosStripe[lis].precios,
            simbolo:this.pagosStripe[lis].simbolo,
            pais:lis,
          }
        })
          }
      })
    },
 async creaPago(p){
  this.loadPay=true
  p.url=window.location.hostname === 'localhost' ? window.location.protocol+"//"+window.location.hostname+":"+window.location.port+"/" : window.location.protocol+"//"+window.location.hostname+"/"
  p.client_reference_id=this.extref,
  await fetch(process.env.functions + "/v1/stripe/crea_suscripcion",{
    method:'POST',
    headers:{
      'Content-type':'application/json'
    },
    body:JSON.stringify(p)

  })
  .then(res=>res.json())
  .then((res)=>{
    var registropago={
  
        id:res.id,
        created:this.$moment.unix(res.created).format("YYYY/MM/DD"),
        currency:res.currency,
        payment_method_types:res.payment_method_types,
        payment_status:res.payment_status,
        success_url:res.success_url,
        userid:this.userdatacollect.uid,
        expires_at:this.$moment.unix(res.expires_at).format("YYYY/MM/DD"),
        plan:p.tipo,
        limite:this.cantplan[p.tipo],
        idAuth:this.idAuth,
        medio:"stripe",
        client_reference_id:this.extref,
        correo:this.userdatacollect.correo
    }
    console.log(registropago)

    this.$fire.firestore.collection('pagos').add(registropago)
    .then((resp)=>{
      this.redirectstate=true
      this.urlRedirect=res.url
      var datapay={
        idPago:resp.id
      }
      this.$fire.firestore.collection('usuarios').doc(this.userdatacollect.uid).update({pago:datapay})
    })
  })
  },
  irStripe(){
    window.location.href=this.urlRedirect
  }
}
};
</script>
