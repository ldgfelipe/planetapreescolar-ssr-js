<template>
  <v-card>
    <v-card-text>
      <v-row>
        <v-col cols="6">
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Datos de Suscripción</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title>Medio de Pago</v-list-item-title>
              <v-list-item-subtitle>{{pago.medio}}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-title>Tipo de Suscripción: {{pago.tipo}}</v-list-item-title>
              <v-list-item-subtitle>
                creado: {{pago.created}} / Expira: {{pago.expires_at}}
              </v-list-item-subtitle>
              
            </v-list-item-content>

          </v-list-item>


          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-title>Descargas</v-list-item-title>
              <v-list-item-subtitle>
                limite {{pago.limite}} descargas por mes
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-title>Status</v-list-item-title>
              <v-list-item-subtitle>
                 {{pago.payment_status}} 
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>


          <v-btn v-if="pago.medio === 'stripe'" class="melon white--text"
          @click="SuscripcionStripe()"
            >Administrar Suscripción de Stripe</v-btn
          > 

          <v-progress-circular v-if="loader" color="primary" size="50" indeterminate ></v-progress-circular>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
        loader:false
    };
  },
  computed: {
    ...mapState(["pago"]),
  },
  methods: {
    SuscripcionStripe() {
        this.loader=true
        var payload={
            id_session:this.pago.id,
            dominio:window.location.hostname === 'localhost' ? window.location.protocol+"//"+window.location.hostname+":"+window.location.port+"/" : window.location.protocol+"//"+window.location.hostname
        }
        fetch(process.env.functions+'/v1/stripe/check-suscripcion',{
            method:'POST',
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify(payload)
        })
        .then(res=>res.json())
        .then((res)=>{
            window.location.href=res.url
        })

    },
  },
};
</script>
