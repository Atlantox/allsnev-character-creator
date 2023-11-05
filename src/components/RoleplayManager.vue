<script setup>
import { ref, computed } from 'vue';

import CharacterInfo from './subcomponents/CharacterInfo.vue';
import RaceSelect from './subcomponents/RaceSelect.vue';
import Statistics from './subcomponents/Statistics.vue';
import ClassSelect from './subcomponents/ClassSelect.vue';
import AbilitiesList from './subcomponents/AbilitiesList.vue';
import Inventory from './subcomponents/Inventory.vue';
import CharacterLore from './subcomponents/CharacterLore.vue';
import ExportOptions from './subcomponents/ExportOptions.vue';

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
        "Fuerza": {base:0, current:0},
        "Destreza": {base:0, current:0},
        "Inteligencia": {base:0, current:0},
        "Constitución": {base:0, current:0},
        "Percepción": {base:0, current:0},
        "Conocimiento": {base:0, current:0},
    },
    state:{
        "Vida": {max:0, current:0},
        "Maná": {max:0, current:0},
        "Salud mental": {max:0, current:0},
    },
    negativeEffects: [''],
    race: 'Humano',
    classInfo: {
        mainClass: '',
        subClass: '',
        classLevel: 0,
        god: '',
    },
    talents:{
        abilities: [],
        treats: [],
    },
    inventory: {},
    lore: ''
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

const talentsInfo = ref(getTalents)

// Emits 
const changeRace = (new_race) => {
    current_character.value.race = new_race;
    resetTalents();
}

const changeClass = () => {
    current_character.value.classInfo.subClass = '';
    current_character.value.classInfo.god = '';
    current_character.value.classInfo.classLevel = 0;
    resetTalents();
}

const resetTalents = () => {
    current_character.value.talents = talentsInfo.value;
}

const deleteTalent = (target_talent) => {
    let my_talents = {
        abilities: current_character.value.talents.abilities,
        treats: current_character.value.talents.treats,
    };
    
    delete my_talents.abilities[target_talent];
    delete my_talents.treats[target_talent];
    current_character.value.talents = my_talents;
}

const toggleNegativeEffect = (effect) => {
    if(current_character.value.negativeEffects.includes(effect.name)){        
        // If already has the negative effect, remove it
        var index = current_character.value.negativeEffects.indexOf(effect.name);
        if (index !== -1)
            current_character.value.negativeEffects.splice(index, 1);

        for(const key in effect.debuffs){
            current_character.value.statistics[key].current -= effect.debuffs[key];
        }
    }
    else{
        current_character.value.negativeEffects.push(effect.name);
        // Else apply the negative affects
        for(const key in effect.debuffs){
            current_character.value.statistics[key].current += effect.debuffs[key];
        }
    }
}

const addCustomAbility = (customAbility) => {
    current_character.value.talents.abilities[customAbility.name] = customAbility.description;
}

const addCustomTreat = (customTreat) => {
    current_character.value.talents.treats[customTreat.name] = customTreat.description;
}


const addInventoryObject = (inventoryObject) => {
    current_character.value.inventory[inventoryObject.name] = {
        description: inventoryObject.description,
        quantity: inventoryObject.quantity
    }
}

const deleteInventoryObject = (inventoryObjectName) => {
    delete current_character.value.inventory[inventoryObjectName];
}

// Normal functions
const generateStatistics = () => {
    let randomNumbers = [];
    for (var el in current_character.value.statistics) {
        randomNumbers.push((Math.floor(Math.random() * 10) + 1) + 5); // 1d10 + 5
    }
    alert(randomNumbers);
}

resetTalents();

const { jsPDF } = "jspdf";

const exportAsPDF = () => {    
    var elementToExport = document.getElementById('characterSheet');

    /*
    
    // Obtén el ancho y alto del elemento a exportar
    var elementWidth = elementToExport.offsetWidth;
    var elementHeight = elementToExport.offsetHeight;

    // Crea un documento PDF con tamaño personalizado
    var doc = new jsPDF({
        unit: 'px',  // Unidad de medida en píxeles
        format: [elementWidth, elementHeight]  // Establece el tamaño de la página según el tamaño del elemento
    });

    // Exporta el elemento al PDF
    doc.html(elementToExport, {
        callback: function (pdf) {
            pdf.save(current_character.value.basic_information.name + '.pdf');
        }
    });

    */

    html2canvas(elementToExport, {
        ignoreElements: element => {
            // Ignora elementos con la clase "ignorar"
            return element.classList.contains('no-print');
        },
        scale: 1
        }).then(canvas => {
        // Obtiene el contexto 2D del canvas
        const contentDataURL = canvas.toDataURL('image/png');
        
        // Crea un objeto PDF
        const pdf = new jsPDF();
        
        // Ajusta el tamaño del PDF al tamaño del canvas
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        const ratio = pdfHeight / canvas.height;
        const canvasHeight = canvas.height * ratio;
        pdf.addImage(contentDataURL, 'PNG', 0, 0, pdfWidth, canvasHeight);
        
        // Guarda el PDF como un archivo
        pdf.save('archivo.pdf');
    });
}
</script>

<template>
    <main class="container-fluid p-3"  id="characterSheet">
        <div class="row w-100 m-0 rol-container py-3 flex-wrap">
            <!-- First row -->
            <section class="row w-100 text-center m-0 p-0">
                <h1 class="p-0 main-title">
                    Creador de Personajes de Allsnev
                </h1>
            </section>

            <section class="row w-100 m-0 p-0 justify-content-around mb-3">
                <CharacterInfo 
                :fields="current_character.basic_information"
                />
            </section>

            <section class="row w-100 m-0 p-0 justify-content-around ">
                <div class="row p-0 justify-content-center col-4">
                    <div class="row p-0 justify-content-center col-11">
                        <RaceSelect 
                        :currentRace=current_character.race
                        :races=races
                        @changeRace="changeRace"
                        />
                    </div>
                </div>

                <div class="row p-0 justify-content-center col-4">
                    <Statistics 
                    :statistics=current_character.statistics
                    :negativeEffects=current_character.negativeEffects
                    :currentRace=current_character.race
                    :currentState=current_character.state
                    @generateStatistics="generateStatistics"
                    @toggleNegativeEffect="toggleNegativeEffect"
                    />
                </div>

                <div class="row p-0 justify-content-center col-2">
                    <ClassSelect 
                    :classes=classes
                    :currentClass=current_character.classInfo
                    :gods=gods
                    @changeClass="changeClass"
                    @resetTalents="resetTalents"
                    />
                </div>
            </section>

            <!-- Second row -->
            <section class="row w-100 m-0 p-0 justify-content-around text-center p-3">
                <div class="col-12 row justify-content-center align-items-start p-2">
                    <AbilitiesList 
                    :classInfo="current_character.classInfo"
                    :talents=current_character.talents
                    :races="races"
                    :classes="classes"
                    :gods="gods"
                    :currentRace="current_character.race"
                    @deleteTalent="deleteTalent"
                    @addCustomAbility="addCustomAbility"
                    @addCustomTreat="addCustomTreat"
                    />
                </div>

            </section>
            
            <!-- Third row -->
            <section class="row w-100 m-0 p-0 justify-content-around text-center p-3">
                <div class="col-6 row justify-content-center">
                    <Inventory
                    :characterInventory="current_character.inventory"
                    @addInventoryObject="addInventoryObject"
                    @deleteInventoryObject="deleteInventoryObject"
                    />
                </div>

                <div class="col-6 row justify-content-center">
                    <CharacterLore 
                    :lore="current_character.lore"
                    />
                </div>
            </section>

            <!-- Fourth row -->
            <section class="row w-100 m-0 p-0 justify-content-around text-center p-3">
                <div class="col-12 row justify-content-center">
                    <ExportOptions
                    @exportAsPDF="exportAsPDF"
                    />
                </div>
            </section>
        </div>
    </main>
</template>

<style scoped lang="scss">

@font-face {
    font-family: 'Cardinal';
    src: url('@/assets/fonts/Cardinal.ttf') format('truetype');
}

.main-title{
    font-family: 'Cardinal', sans-serif !important;
}


.rol-container{
    background-color:$secondary;
    border:2px black solid;
}

h1{
    font-weight: bold;
    letter-spacing: 3px;
}
</style>