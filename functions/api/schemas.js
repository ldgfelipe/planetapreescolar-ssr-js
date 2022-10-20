const usuario={
    nombre:{
        type:String,
        require:true
    },
    password:{
        type:String
    },
    correo:{
        type:String
    },
    avatar:{
        type:String,
        require:false,
        default:""
    }
    
}

module.exports= {
    usuario
}