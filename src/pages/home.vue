<template>
    <v-container class="mt-5">
        <v-row class="justify-center">
            <v-col cols="9">
                <v-row class="text-center">
                    <v-col cols="6">
                        <v-card @click="NavegarPara(1)">
                            <v-icon>mdi-chart-bar</v-icon>
                            <v-card-title>
                                Softwares <br />de gestão
                            </v-card-title>

                            <v-card-subtitle>
                                ERP e CRM à <br />medida
                            </v-card-subtitle>
                            <v-icon class="mt-5">mdi-arrow-right</v-icon>
                        </v-card>
                    </v-col>
                    <v-col cols=" 6">
                        <v-card>
                            <v-icon>mdi-account-voice</v-icon>
                            <v-card-title>Serviços <br /> Tecnicos</v-card-title>
                            <v-card-subtitle>
                                Suporte <br />especializado
                            </v-card-subtitle>
                            <v-icon class="mt-5">mdi-arrow-right</v-icon>
                        </v-card>
                    </v-col>
                </v-row>
                <v-row class="text-center">
                    <v-col cols="6">
                        <v-card>
                            <v-icon>mdi-monitor</v-icon>
                            <v-card-title>
                                Hardware & <br /> Redes
                            </v-card-title>
                            <v-card-subtitle>
                                Equipamentos<br /> e redes
                            </v-card-subtitle>
                            <v-icon class="mt-5">mdi-arrow-right</v-icon>
                        </v-card>
                    </v-col>
                    <v-col cols="6">
                        <v-card @click="abrirJanela">
                            <v-icon>mdi-cart</v-icon>
                            <v-card-title>Loja <br /> Online</v-card-title>
                            <v-card-subtitle>
                                Visite a <br />nossa loja
                            </v-card-subtitle>
                            <v-icon class="mt-5">mdi-arrow-right</v-icon>
                        </v-card>
                    </v-col>
                </v-row>
                <div class="bg-caixa-pequena-1" ref="caixaPequena1"></div>
                <div class="bg-caixa-pequena-2" ref="caixaPequena2"></div>
                <div class="bg-caixa-pequena-3" ref="caixaPequena3"></div>

                <div class="bg-caixa-media-1" ref="caixaMedia1"></div>
                <div class="bg-caixa-media-2" ref="caixaMedia2"></div>

                <div class="bg-caixa-grande-1" ref="caixaGrande1"></div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { flutuar } from '../utils/animacoes.js'
import '@mdi/font/css/materialdesignicons.css';
import { useRouter } from 'vue-router';

const router = useRouter();
let janela = null

function abrirJanela() {
    janela = window.open(
        'https://infordio.com/pt/loja-online-pt-1',
        'popup',
        'width=1200,height=800,top=100,left=100'
    )
}

function fecharJanela() {
    if (janela) janela.close()
}
function NavegarPara(numero) {
    switch (numero) {
        case 1:
            router.push('/SoftwareDeGestao')
            break
    }
}
const caixaPequena1 = ref(null)
const caixaPequena2 = ref(null)
const caixaPequena3 = ref(null)

const caixaMedia1 = ref(null)
const caixaMedia2 = ref(null)

const caixaGrande1 = ref(null)

onMounted(() => {
    flutuar(caixaPequena1.value)
    flutuar(caixaPequena2.value)
    flutuar(caixaPequena3.value)

    flutuar(caixaMedia1.value)
    flutuar(caixaMedia2.value)

    flutuar(caixaGrande1.value)
})
</script>

<style setup>
body {
    background-color: #ffffff;
}

.v-card {
    padding: 50px;
    border-radius: 20px;
    z-index: 2;
    position: relative;
}

.v-card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    display: block;
    border-radius: 20px;
}

.v-card:hover {
    transform: scale(1.05);
    transition: 0.4s;
    color: white;
    background-color: #64942e;
}

.v-icon {
    color: #436628;
}

.v-icon:hover {
    color: orange;
}

.bg-caixa-grande-1 {
    position: fixed;
    width: 300px;
    height: 300px;
    background: #436628;
    border-radius: 20px;
    top: 10%;
    left: 5%;
}

.bg-caixa-media-1 {
    position: fixed;
    width: 200px;
    height: 200px;
    background: #436628;
    border-radius: 20px;
    right: 5%;
    top: 60%;
}

.bg-caixa-media-2 {
    position: fixed;
    width: 200px;
    height: 200px;
    background: #436628;
    border-radius: 20px;
    right: 90%;
    top: 70%;
}

.bg-caixa-pequena-1 {
    position: fixed;
    width: 50px;
    height: 50px;
    right: 10%;
    top: 30%;
    background-color: orange;
    border-radius: 20px;
    z-index: 1;
}

.bg-caixa-pequena-2 {
    position: fixed;
    width: 50px;
    height: 50px;
    right: 15%;
    top: 90%;
    background-color: orange;
    border-radius: 20px;
    z-index: 1;
}

.bg-caixa-pequena-3 {
    position: fixed;
    width: 50px;
    height: 50px;
    right: 90%;
    top: 50%;
    background-color: orange;
    border-radius: 20px;
    z-index: 1;
}
</style>