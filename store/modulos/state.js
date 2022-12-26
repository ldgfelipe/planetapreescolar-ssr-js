export const state = () => ({
  is_login: false,
  user: {},
  idAuth: "",
  pago: {},
  claims: {},
  recursoSelect: {},
  relacionados: [],
  dialogfase1: false,
  dialogfase2: false,
  dialogalerta: false,
  tipoalerta: 0, /// 0 - Registrate, 1 - Vuelvete Premium, 2 - Se agotaron tus descargas free, 3-Se agotaron tus descargas premium.
  descargas: {},
  loadDescarga: false,
  statusaudio: false,
  userdatacollect: {},
  loginpop: false,
  schemas: {
    usuario:{ 
      type:"object",
      additionalProperties: true, 
      acerca:{
        type:"string"
      },
      apellido:{
        type:"string"
      },
      ciudad:{
        type:"string"
      },
      codigopais:{
        type:"string"
      },
      correo:{
        type:"string"
      },
      descargas:{
        type:"object"
      },
      estado:{
        type:"string"
      },
      estadoMembresia:{
        type:"boolean"
      },
      exp:{
        type:"string"
      },
      group:{
        type:"object"
      },
      id:{
        type:"string"
      },
      idCliente:{
        type:"string"
      },
      idSuscripcion:{
        type:"string"
      },
      importeSuscripcion:{
        type:"string"
      },
      lvluser:{
        type:"integer"
      },
      medioRegistro:{
        type:"boolean"
      },
      nombre:{
        type:"string"  
      },
      pago:{
        type:"object"
      },
      pais:{
        type:"string"
      },
      pass:{
        type:"string"
      },
      profesion:{
        type:"string"
      },
      telefono:{
        type:"string"
      },
      tipo:{
        type:"string"
      },
      tipoSuscripcion:{
        type:"string"
      },
      uid:{
        type:"string"
      },
      urlImagen:{
        type:"string"
      },
      userlogin:{
        type:"boolean"
      },
      vercorreo:{
        type:"boolean"
      },
      descargas: {
        type: "object",
        properties: {
          dia: {
            type: "object",
            properties: {
              totaldescargas: {
                type: "integer",
              },
              disponibles: {
                type: "integer",
              },
              registro: {
                type: "array",
              },
            },
            required: ["totaldescargas","disponibles","registro"],
            additionalProperties: true 
          },
          mes: {
            type: "object",
            properties: {
              totaldescargas: {
                type: "integer",
              },
              tipo: {
                type: "string",
              },
              disponibles: {
                type: "integer",
              },
              registro: {
                type: "array",
                minLength:1,
                items: {
                  type: "object",
                  properties:{
                    fecha:{
                      type:"string"
                    },
                    usadas:{
                      type:"array",
                      items:{
                        type:"string"
                      }
                    }
                  },
                  required: ["fecha","usadas"],
                  additionalProperties: true
                }
              },
            },
            required: ["tipo","disponibles","registro"],
            additionalProperties: true
          },
        },
        required: ["dia","mes"],
        additionalProperties: true
      },
    },
    
  },
});
