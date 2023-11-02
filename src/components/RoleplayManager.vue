<script setup>
import { ref } from 'vue';
import CharacterInfo from './subcomponents/CharacterInfo.vue';
import RaceSelect from './subcomponents/RaceSelect.vue';
import Statistics from './subcomponents/Statistics.vue';
import ClassSelect from './subcomponents/ClassSelect.vue';

import RaceService from '@/services/RaceService.js';
const raceService = new RaceService();
const races = raceService.getRaces();

const characters = ref([]);

const current_character = ref({
    basic_information:{
        "Nombre": 'el pepe',
        "Edad": '',
        "Origen": '',
        "Profesión": '',
        "Personalidad":  '',
        "Niv": '',
        "Exp": ''
    },
    race: '',
    class: '',
    subclass: '',
    classLevel: '',
    abilities: [
        '',
        ''
    ],
    statistics: {
        "Fuerza": {base:0, actual:0},
        "Destreza": {base:0, actual:0},
        "Inteligencia": {base:0, actual:0},
        "Constitución": {base:0, actual:0},
        "Percepción": {base:0, actual:0},
        "Conocimiento": {base:0, actual:0},
    },
    treats: [
        '',
        ''
    ],
    inventory: [
        {
            name: '',
            description: ''
        }
    ],
})


const current_race = ref(races[0]);

// Emits 
const changeRace = (new_race) => {
    current_race.value = races[new_race];
}

const generateStatistics = () => {
    let randomNumbers = [];
    for (var el in current_character.value.statistics) {
        randomNumbers.push((Math.floor(Math.random() * 10) + 1) + 4); // 1d10 + 4
    }
    alert(randomNumbers);
}
</script>

<template>
    <main class="container-fluid p-4">
        <div class="row w-100 m-0 rol-container py-3">
            <section class="row w-100 text-center m-0">
                <h1 class="p-0">
                    Creador de Personajes de Allsnev
                </h1>
            </section>
            <section class="row w-100 justify-content-around mb-3">
                <CharacterInfo 
                :fields="current_character.basic_information"
                />
            </section>
            <section class="row w-100 justify-content-around ">
                <div class="row justify-content-center col-3">
                    <div class="row justify-content-center col-12">
                        <RaceSelect 
                        :race=current_race
                        :races=races
                        @changeRace="changeRace"
                        />
                    </div>
                </div>
                <div class="row justify-content-center col-5">
                    <Statistics 
                    :statistics = current_character.statistics
                    @generateStatistics="generateStatistics"
                    />
                </div>
                <div class="row justify-content-center col-2">
                    <ClassSelect />
                </div>
            </section>
        </div>
    </main>
</template>

<style scoped lang="scss">
.rol-container{
    background-color:$secondary;
    border:2px black solid;
}

h1{
    font-weight: bold;
    letter-spacing: 3px;
}
</style>