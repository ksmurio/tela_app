<template>
    <v-row class="head">
        <v-col cols="12" class="text-center">
            <h1 ref="titulo"></h1>
        </v-col>
    </v-row>
    <v-row class="softwaresExemplos">
        <v-col cols="12">
            <v-carousel>
                <v-carousel-item class="softwaresExemplos ">
                    <img src="../uploads/sage.png" alt="" height="200" contain>
                </v-carousel-item>
                <v-carousel-item>
                    <img src="../uploads/ggest.png" alt="" height="300" contain>
                </v-carousel-item>
                <v-carousel-item>
                    <img src="../uploads/PHC.png" alt="" height="350" contain>
                </v-carousel-item>
                <v-carousel-item>
                    <img src="../uploads/MOLONI.png" style="margin-top: 100px;" height="150" contain>
                </v-carousel-item>
                <v-carousel-item>
                    <img src="../uploads/zone.png" alt="" height="350" contain>
                </v-carousel-item>
                <v-carousel-item>
                    <img src="../uploads/xd.png" alt="" height="200" style="margin-top: 80px;" contain>
                </v-carousel-item>
            </v-carousel>
        </v-col>
    </v-row>
    <v-row>
        <v-col cols="12" class="text-center textStyle">
            <p>PORQUE DEVO UTILIZAR UM<br>SOFTWARE DE GESTÃO</p>
        </v-col>
    </v-row>
    <v-row class="text-center icons">
        <v-col cols="4">
            <img src="../uploads/engrenagemTempo.png" width="200" class="icon">
            <p>Automatiza tarefas administrativas</p>
        </v-col>
        <v-col cols="4">
            <img src="../uploads/organizacao.png" width="200">
            <p>Organiza clientes e fornecedores</p>
        </v-col>
        <v-col cols="4">
            <img src="../uploads/vendas.png" width="200">
            <p>Controla vendas, compras e estoque</p>
        </v-col>
    </v-row>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { writeEffect } from '@/utils/animacoes';


const titulo = ref(null)

onMounted(() => {
    writeEffect(titulo.value, 'Software de Gestão', 80)
})
</script>

<style setup lang="scss">
.head {
    display: flex;
    justify-content: center;
    font-family: sans-serif;
    color: white;
    background-color: #64942e;
}


.textStyle {
    font-size: xx-large;
}

.softwaresExemplos {
    margin-top: 50px;
    display: flex;
    align-items: center;
    text-align: center;

    .v-row {
        margin: 5px;

        .v-col {
            display: flex;
            align-items: center;
            text-align: center;
            height: 300px;
        }
    }
}

.icons {
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-size: 1.5rem;
    color: #64942e;
}


.voltar {
    display: flex;
    align-items: center;
    justify-content: left;
}
</style>