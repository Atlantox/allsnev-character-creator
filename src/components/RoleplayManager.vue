<script setup>
import { ref, computed } from 'vue';
import CharacterInfo from './subcomponents/CharacterInfo.vue';
import RaceSelect from './subcomponents/RaceSelect.vue';
import Statistics from './subcomponents/Statistics.vue';
import ClassSelect from './subcomponents/ClassSelect.vue';
import AbilitiesList from './subcomponents/AbilitiesList.vue';
import CharacterLore from './subcomponents/CharacterLore.vue';

import RaceService from '@/services/RaceService.js';
const raceService = new RaceService();
const races = raceService.getRaces();

import ClassService from '@/services/ClassService.js';
const classService = new ClassService();
const classes = classService.getClasses();

import GodService from '@/services/GodService.js';
const godService = new GodService();
const gods = godService.getGods();

const characters = ref([]);

const current_character = ref({
    basic_information:{
        "Nombre": '',
        "Edad": '',
        "Origen": '',
        "Profesión": '',
        "Personalidad":  '',
        "Niv": '',
        "Exp": ''
    },
    statistics: {
        "Fuerza": {base:0, actual:0},
        "Destreza": {base:0, actual:0},
        "Inteligencia": {base:0, actual:0},
        "Constitución": {base:0, actual:0},
        "Percepción": {base:0, actual:0},
        "Conocimiento": {base:0, actual:0},
    },
    race: 'Humano',
    classInfo: {
        mainClass: '',
        subClass: '',
        classLevel: 0,
        god: '',
    },
    talents:{
        abilities: [
            '',
            ''
        ],
        treats: [
            '',
            ''
        ],
    },
    inventory: [
        {
            name: '',
            description: ''
        }
    ],
})



// Computed functions
const getTalents = computed(() => {
    const currentRace = current_character.value.race;
    const currentClass = current_character.value.classInfo;

    let raceAbilities = races[currentRace].abilities;
    let raceTreats = races[currentRace].treats;

    let classAbilities = {};
    let classTreats = {};
    if(classes[currentClass.mainClass] !== undefined){
        classAbilities = classes[currentClass.mainClass].abilities;
        classTreats = classes[currentClass.mainClass].treats;

    }

    let subclassAbilities = {};
    let subclassTreats = {};
    if(currentClass.subClass !== ''){
        if(classes[currentClass.mainClass].subClasses !== undefined){
            if(classes[currentClass.mainClass].subClasses[currentClass.subClass] !== undefined){
                subclassAbilities = classes[currentClass.mainClass].subClasses[currentClass.subClass].abilities;
                subclassTreats = classes[currentClass.mainClass].subClasses[currentClass.subClass].treats;
            }
        }
    }

    let godAbilities = {};
    console.log('DIOS');
    console.log(currentClass.god);
    console.log(gods);
    if(currentClass.god !== '')
        godAbilities = gods[currentClass.god].abilities;
    
    let totalAbilities = Object.assign({},
        raceAbilities,
        classAbilities,
        subclassAbilities,
        godAbilities
    );

    let totalTreats = Object.assign({},
        raceTreats,
        classTreats,
        subclassTreats
    );

    return {
        abilities: totalAbilities,
        treats: totalTreats
    };
});

current_character.value.talents = getTalents;

// Emits 
const changeRace = (new_race) => {
    current_character.value.race = new_race;
}

const changeClass = () => {
    current_character.value.classInfo.subClass = '';
    current_character.value.classInfo.god = '';
    current_character.value.classInfo.classLevel = 0;
    // cambiar habilidades y rasgos
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
    <main class="container-fluid p-3">
        <div class="row w-100 m-0 rol-container py-3 flex-wrap">
            <!-- First row -->
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
                        :currentRace=current_character.race
                        :races=races
                        @changeRace="changeRace"
                        />
                    </div>
                </div>
                <div class="row justify-content-center col-4">
                    <Statistics 
                    :statistics = current_character.statistics
                    @generateStatistics="generateStatistics"
                    />
                </div>
                <div class="row justify-content-center col-2">
                    <ClassSelect 
                    :classes=classes
                    :currentClass=current_character.classInfo
                    :gods=gods
                    @changeClass="changeClass"
                    />
                </div>
            </section>

            <!-- Second row -->
            <section class="row w-100 m-0 p-0 justify-content-around text-center p-3">
                <div class="col-12 row justify-content-center align-items-start p-2">
                    <AbilitiesList 
                    :talents=current_character.talents
                    />
                </div>

                <div class="col-12 row justify-content-center p-2">
                    <CharacterLore 

                    />
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