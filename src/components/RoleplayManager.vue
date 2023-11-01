<script setup>
import { ref } from 'vue';
import RaceSelect from './subcomponents/RaceSelect.vue';
import Statistics from './subcomponents/Statistics.vue';
import ClassSelect from './subcomponents/ClassSelect.vue';

import RaceService from '@/services/RaceService.js';
const raceService = new RaceService();
const races = raceService.getRaces();

const current_race = ref(races[0]);

const changeRace = (new_race) => {
    current_race.value = races[new_race];
}
</script>

<template>
    <main class="container-fluid p-1">
        <section class="row w-100 text-center m-0">
            <h1 class="p-0">
                Creador de Personajes de Allsnev
            </h1>
        </section>
        <section class="row w-100 justify-content-around">
            <div class="row justify-content-center col-3">
                <RaceSelect 
                :race=current_race
                :races=races
                @changeRace="changeRace"
                />
            </div>
            <div class="row justify-content-center col-5">
                <Statistics />
            </div>
            <div class="row justify-content-center col-2">
                <ClassSelect />
            </div>
        </section>
    </main>
</template>

<style scoped>

</style>