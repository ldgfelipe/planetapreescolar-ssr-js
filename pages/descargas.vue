<template>
    <v-card>
        <v-card-title class="primary white--text">
            Resultado de descargas
        </v-card-title>
        <v-card-text>
            <v-row>
                <v-col cols="6">
                    Premium: {{descargas.mes.totaldescargas ? descargas.mes.totaldescargas : 0}}
                    <br />

                    <v-data-table :headers="titulos" :items="descargas.mes.registro" >
                        <template v-slot:item.usadas="{ item }">
                        {{item.usadas.length}}
                        </template>
                    </v-data-table>
                </v-col>
                <v-col cols="6">
                    Gratis: {{descargas.dia.totaldescargas ? descargas.dia.totaldescargas : 0 }}
                    <v-data-table  :headers="titulos" :items="descargas.dia.registro"  >
                        <template v-slot:item.usadas="{ item }">
                        {{item.usadas.length}}
                        </template>
                    </v-data-table>
                </v-col>
            </v-row>
      
        </v-card-text>
    </v-card>
</template>
<script>
import {mapState} from 'vuex'
export default {
    data(){
        return {
            titulos:[
                {
                    text:'Fecha',
                    value:'fecha'
                },
                {
                    text:'Registros',
                    value:'usadas'
                }
            ]
        }
    },
    computed:{
        ...mapState(['descargas'])
    }


}

</script>