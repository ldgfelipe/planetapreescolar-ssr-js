<template>
    <div>
   <h4>Administrador Usuarios</h4> 
    <v-row>
        <v-col cols="12" md="4">
            <perfilusuario></perfilusuario>
        </v-col>
        <v-col cols="12" md="8" >
           
            <contador></contador>
  
        </v-col>
    </v-row>
    </div>
</template>

<script>
import perfilusuario from '@/components/administracion/usuarios/perfilusuario'
import contador from '@/components/administracion/usuarios/contador'
export default {
    data(){
        return{
            
        }
    },
    methods:{
    
    },
    components:{
        perfilusuario,
        contador
    }
}
</script>
