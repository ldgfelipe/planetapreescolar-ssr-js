<template>
    <v-card>
        <v-card-text>
            <h1 class="primary--text">{{forodata.titulo}}</h1>
            <b v-html="$moment(forodata.fechapub.seconds*1002).format('YYYY/MM/DD')"></b>
            <h3>Categoría: {{forodata.categoria}}</h3>
            <p v-html="forodata.cuerpo"></p>
            <br />
            <v-icon class="stardataIn" @click="selecStart(1)">mdi-star</v-icon>
            <v-icon class="stardataIn" @click="selecStart(2)">mdi-star</v-icon>
            <v-icon class="stardataIn" @click="selecStart(3)">mdi-star</v-icon> 
            <v-icon class="stardataIn" @click="selecStart(4)">mdi-star</v-icon>
            <v-icon class="stardataIn" @click="selecStart(5)">mdi-star</v-icon>
            
            <br /><br />

            <v-avatar size="60" color="primary">

            </v-avatar>
            {{forodata.publicador}}
            <br />
            
            
            <h3 class="primary--text">Comentarios</h3>

                <v-textarea
                v-if="is_login && !loadercomment"
                v-model="comentario"
                outlined
                label="Comenta aquí"
                ></v-textarea>
                <v-btn
                v-if="is_login && !loadercomment"
                class="melon white--text"
                @click="guardarComentario()"
                >Guardar Comentario</v-btn
                >
                <v-progress-circular
                v-if="loadercomment"
                indeterminate
                color="purple"
                ></v-progress-circular>
                <br /><br />
        </v-card-text>
    </v-card>
</template>
<style>
.stardataIn{
color:gray;
}

stardataInSelect{
color:yellow;
}
</style>
<script>
import {mapState} from 'vuex'
export default{
    async asyncData(ctx){
      return await ctx.app.$fire.firestore.collection('foro')
        .doc(ctx.params.foro)
        .get()
        .then((datos)=>{
            var forod=datos.data()
                forod.idForo=datos.id

            return {
                forodata:forod
            }
        })
    },
    data(){
        return {
            loadercomment: false,
            comentario:""
        }
    },
    computed:{
        ...mapState(['is_login','userdatacollect'])
    },
    methods:{
        guardarComentario(){
            var payload={
                comentario:this.comentario,
                fecha:this.$moment().format('YYYY/MM/DD'),
                iduser:this.userdatacollect.uid,
                imagen:this.userdatacollect.urlImagen,
                nombre:this.userdatacollect.nombre+" "+this.userdatacollect.apellido,
                validado:false
            }

            var foro=this.forodata
            foro.comentarios.push(payload)
            this.$fire.firestore.collection('foro').doc(foro.idForo).update(foro)
            .then((res)=>{
                this.comentario=""
                console.log(res)
                console.log('Comentaio guardado')
            })

        },
        selecStart(p){
            var payload={
                cal:p,
                fecha:this.$moment().format('YYYY/MM/DD'),
                iduser:this.userdatacollect.uid,
                imagen:this.userdatacollect.urlImagen,
                nombre:this.userdatacollect.nombre+" "+this.userdatacollect.apellido,
                correo:this.userdatacollect.correo
            }
       
            this.forodata.estrellas.push(payload)
            this.$fire.firestore.collection('foro').doc(this.forodata.idForo)
            .update(this.forodata)
            .then(()=>{
                console.log('estrellas guardada')
            })

        }
    }
}
</script>