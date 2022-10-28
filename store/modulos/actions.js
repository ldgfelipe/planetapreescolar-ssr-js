import moment from "moment";
export const actions = {
  nuxtServerInit ({ commit }, { req }) {
   console.log('nuxt init server')
  },
  async onAuthStateChangedAction(ctx, { authUser, claims }) {
    if (!authUser) {
      ctx.commit('actualizaDescargas',{})
    } else {
      try{
      this.$fire.firestore.collection('usuarios').where('correo','==',authUser.email).get()
      .then((resp)=>{
      var User=resp.docs[0].data()
        if(User.descargas){
          ctx.commit('actualizaDescargas',User.descargas)
        }else{
          User.descargas={
            dia:{
              disponibles:1,
              fecha:moment().format('YYYY/MM/DD'),
              usadas:[]
            },
            mes:{
              active:false,
              disponibles:0,
              registro:[],
              tipo:""
            }
          }
         this.$fire.firestore.collection('usuarios').doc(resp.docs[0].id).update(User)
         .then(()=>{
          ctx.commit('actualizaDescargas',User.descargas)
         })
        }
      })
    }catch(error){
      console.log(error)
    }
    }
 
  }
}