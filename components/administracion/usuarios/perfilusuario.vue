<template>
  <v-card>
    <v-card-title class="morado white--text"> Buscar Usuario </v-card-title>
    <v-card-text>
      <v-text-field label="ingresa el correo" v-model="correo"></v-text-field>
      <v-btn class="morado white--text" @click="verclaimsuser()">Buscar</v-btn><br  />
      <div v-if="respuesta.res">{{ respuesta.res }}</div>

      <div v-if="respuesta" class="text-center">
        <hr /><br  />
        <v-avatar size="100" v-if="respuesta.photoURL">
          <img :src="respuesta.photoURL" /><br  />
        </v-avatar>
        <v-text-field outlined label="uid" readonly  v-model="respuesta.uid"></v-text-field>
        <v-text-field outlined label="Email Verificado" readonly  v-model="respuesta.emailVerified"></v-text-field>
        <v-text-field outlined label="Nombre" readonly  v-model="respuesta.displayName"></v-text-field>
        <v-text-field outlined label="Deshabilitado" readonly  v-model="respuesta.disabled"></v-text-field>
        <hr  />
        <div v-if="respuesta.metadata">
        <b>Ùltimo acceso:</b>{{ respuesta.metadata.lastSignInTime }}<br />
        <b>Creado: </b>{{ respuesta.metadata.creationTime }}
    </div>
        <hr />

        <hr />
    
        <v-alert
      border="right"
      color="blue-grey"
      dark
    >
          <v-checkbox  label="Adimin" v-model="claims.admin" />
          <v-checkbox  label="Premium" v-model="claims.premium"  />
          <v-select outlined label="Level" v-model="claims.level"  :items="niveles"></v-select>
          <v-btn @click="cambiarClaims()">Guardar Cambios</v-btn>
        </v-alert>
      </div>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  data() {
    return {
        claims:{
            admin:false,
            premium:false,
            level:0
        },
      correo: "",
      respuesta: {},
      niveles: [
        {
          text: "registrado",
          value: 0,
        },
        {
          text: "premium",
          value: 1,
        },
        {
          text: "administrador",
          value: 2,
        },
        {
          text: "superadministrador",
          value: 3,
        },
      ],
    };
  },
  methods: {
    verclaimsuser() {
      this.respuesta = {
        res: "El correo esta incorrecto o no esta registrado",
      };
      var payload = {
        email: this.correo,
      };
      try {
        fetch(process.env.functions + "/v1/adminusers/claims", {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(payload),
        })
          .then((res) => res.json())
          .then((res) => {
            this.respuesta = res;
          this.claims=res.customClaims
            this.claims.uid=res.uid
          });
      } catch (error) {
        this.respuesta = {
          res: "El correo esta incorrecto o no esta registrado",
        };
      }
    },
    cambiarClaims(){
        var payload=
        {   claims:this.claims,
            uid:this.respuesta.uid,
            pass:"PlanetaSereyd2022#"
            }
    try{
            fetch(process.env.functions + "/v1/adminusers/editclaims", {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(payload)
        })
          .then((res) => res.json())
          .then((res) => {
            console.log(res)
            
          });

        } catch(error){

        }
    }
  },
};
</script>
