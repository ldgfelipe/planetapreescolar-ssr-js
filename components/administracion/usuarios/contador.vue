<template>
    <v-card>
        <v-card-title class="morado white--text">
            Contador de Usuarios
        </v-card-title>
            <v-card-text>
                <v-text-field outlined readonly label="total de usuarios" v-model="totalusers" append-icon="mdi-magnify" @click:append="cargaNUsuarios()" ></v-text-field>
            </v-card-text>
    </v-card>
</template>
<script>
export default{
    data(){
        return {
            totalusers:0,

        }
    },
    methods:{
        cargaNUsuarios(){
            fetch(process.env.functions+'/v1/adminusers/totalusers')
            .then(res=>res.json())
            .then((res)=>{
                this.totalusers=res
            })
        }
    }
}
</script>