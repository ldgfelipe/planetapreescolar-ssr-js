export const state = () => ({
  is_login: false,
  user:{},
  claims:{},
  recursoSelect:{},
  relacionados:[],
  dialogfase1:false,
  dialogfase2:false,
  dialogalerta:false,
  tipoalerta:0, /// 0 - Registrate, 1 - Vuelvete Premium, 2 - Se agotaron tus descargas free, 3-Se agotaron tus descargas premium. 
  descargas:{}
})
