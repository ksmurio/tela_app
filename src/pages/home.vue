<template>
    <v-container class="mt-5">
        <v-row class="justify-center">
            <v-col cols="9">
                <v-row class="text-center">
                    <v-col cols="6">
                        <v-card>
                            <img cover src="../uploads/praia.avif" height="200" />
                            <v-card-text>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis
                                est
                                labore
                                voluptatibus!
                            </v-card-text>
                        </v-card>
                    </v-col>
                    <v-col cols="6">
                        <v-card>
                            <img cover src="../uploads/praia.avif" height="200" />

                            <v-card-text>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis
                                est
                                labore
                                voluptatibus!
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
                <v-row class="text-center">
                    <v-col cols="6">
                        <v-card>
                            <img cover src="../uploads/praia.avif" height="200" />
                            <v-card-text>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis
                                est
                                labore
                                voluptatibus!
                            </v-card-text>
                        </v-card>
                    </v-col>
                    <v-col cols="6">
                        <v-card>
                            <img cover src="../uploads/praia.avif" height="200" />

                            <v-card-text>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis
                                est
                                labore
                                voluptatibus!
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
                <div class="bg-caixa-pequena-1" ref="caixaPequena1"></div>
                <div class="bg-caixa-pequena-2" ref="caixaPequena2"></div>
                <div class="bg-caixa-pequena-3" ref="caixaPequena3"></div>

                <div class="bg-caixa-media-1" ref="caixaMedia1"></div>

                <div class="bg-caixa-grande-1" ref="caixaGrande1"></div>


            </v-col>
        </v-row>
    </v-container>
</template>

<style>
body {
    background-color: #436628;
}

.v-card {
    background-color: #aec813;
    padding: 10px;
    border-radius: 20px;
    z-index: 2;
    position: relative;
}

.v-card:hover {
    transform: scale(1.05);
    transition: 0.4s;
    background-color: #64942e;
}

.bg-caixa-grande-um {
    position: fixed;
    width: 300px;
    height: 300px;
    background: rgba(255, 255, 255, 0.08);
    border-radius: 20px;
    top: 10%;
    left: 5%;
}

.bg-caixa-media-dois {
    position: fixed;
    width: 200px;
    height: 200px;
    background: rgba(255, 255, 255, 0.08);
    border-radius: 20px;
    right: 5%;
    top: 60%;
}

.bg-caixa-pequena-um {
    position: fixed;
    width: 50px;
    height: 50px;
    right: 15%;
    top: 30%;
    background-color: orange;
    border-radius: 20px;
    z-index: 1;
}

.bg-caixa-pequena-dois {
    position: fixed;
    width: 50px;
    height: 50px;
    right: 15%;
    top: 90%;
    background-color: orange;
    border-radius: 20px;
    z-index: 1;
}

.bg-caixa-pequena-tres {
    position: fixed;
    width: 50px;
    height: 50px;
    right: 80%;
    top: 50%;
    background-color: orange;
    border-radius: 20px;
    z-index: 1;
}
</style>

<script setup>
import { onMounted, ref } from 'vue';
import { flutuar } from '../utils/animacoes.js'

const caixaPequenaUm = ref(null)
const caixaPequenaDois = ref(null)
const caixaPequenaTres = ref(null)

const caixaMediaUm = ref(null)

const caixaGrandeUm = ref(null)

onMounted(() => {
    flutuar(caixaPequenaUm.value)
    flutuar(caixaPequenaDois.value)
    flutuar(caixaPequenaTres.value)
    flutuar(caixaGrandeUm.value)
    flutuar(caixaMediaDois.value)
})
</script>