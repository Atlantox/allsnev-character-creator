<script setup>
// Modules
import { ref, computed, getCurrentInstance } from 'vue';

// Components
import CharacterInfo from './subcomponents/CharacterInfo.vue';
import RaceSelect from './subcomponents/RaceSelect.vue';
import Statistics from './subcomponents/Statistics.vue';
import ClassSelect from './subcomponents/ClassSelect.vue';
import AbilitiesList from './subcomponents/AbilitiesList.vue';
import Inventory from './subcomponents/Inventory.vue';
import CharacterLore from './subcomponents/CharacterLore.vue';
import ExportOptions from './subcomponents/ExportOptions.vue';

// Services
import RaceService from '@/services/RaceService.js';
import ClassService from '@/services/ClassService.js';
import GodService from '@/services/GodService.js';

// Service Instances
const raceService = new RaceService();
const godService = new GodService();
const classService = new ClassService();

// Services Fetch
const races = raceService.getRaces();
const classes = classService.getClasses();
const gods = godService.getGods();

// Ref variables
const characters = ref([])
const current_character = ref({})
const currentCharacterIndex = ref('-1')
const allTalents = ref({})
const talentsInfo = ref({})


// Computed functions
const getTalents = () => {
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

    if(currentClass.subClass.length > 0){
        currentClass.subClass.forEach((subclass) => {
            if(classes[currentClass.mainClass].subClasses !== undefined){
                if(classes[currentClass.mainClass].subClasses[subclass] !== undefined){
                    subclassAbilities = Object.assign({}, subclassAbilities, classes[currentClass.mainClass].subClasses[subclass].abilities);
                    subclassTreats = Object.assign({}, subclassTreats, classes[currentClass.mainClass].subClasses[subclass].treats);
                }
            }
        })
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
};


// Emits 
const changeRace = (new_race) => {
    current_character.value.race = new_race;
    resetTalents();
}

const changeClass = () => {
    current_character.value.classInfo.subClass = [];
    current_character.value.classInfo.god = '';
    current_character.value.classInfo.classLevel = 0;
    resetTalents();
}

const resetTalents = () => {
    allTalents.value = getTalents();
    talentsInfo.value = allTalents.value;
    current_character.value.talents = talentsInfo.value;
}

const exportCharacter = async (exportType) => {    
    var elementToExport = document.getElementById('characterSheet');
    const loreTextarea = document.getElementById('character-lore-textarea');
    const loreParagraph = document.getElementById('character-lore-hidden');
    loreTextarea.classList.add('d-none');
    loreParagraph.classList.remove('d-none');
    
    if(exportType === 'pdf'){
        html2canvas(elementToExport, {
            ignoreElements: element => {
                return element.classList.contains('no-print');
            },
            scale: 1
            }).then(canvas => {
                const pdf = new window.jspdf.jsPDF();
                
                const contentDataURL = canvas.toDataURL('image/png');
                const pdfWidth = pdf.internal.pageSize.getWidth();
                const pdfHeight = pdf.internal.pageSize.getHeight();
                const ratio = pdfHeight / canvas.height;
                const canvasHeight = canvas.height * ratio;
                pdf.addImage(contentDataURL, 'PNG', 0, 0, pdfWidth, canvasHeight);
                
                pdf.save(current_character.value.basic_information['Nombre'] + '.pdf');
        });
    }
    else if (exportType === 'img'){
        const canvas = await html2canvas(elementToExport, {
            ignoreElements: element => {
                if (element.classList.contains('no-print'))
                    return true;
                return false;
            }
        });
        const imgData = canvas.toDataURL('image/png');
        const downloadLink = document.createElement('a');
        downloadLink.href = imgData;
        downloadLink.download = current_character.value.basic_information['Nombre'] + '.png';

        downloadLink.click();
    }
    else if(exportType === 'json'){
        const jsonString = JSON.stringify([current_character.value], null, 2);
        const blob = new Blob([jsonString], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const downloadLink = document.createElement('a');
        downloadLink.href = url;
        downloadLink.download = current_character.value.basic_information['Nombre'] + '.json';

        downloadLink.click();
        URL.revokeObjectURL(url);
    }
    loreParagraph.classList.add('d-none');
    loreTextarea.classList.remove('d-none');
}

const exportAllCharacters = () => {
    const jsonString = JSON.stringify(characters.value, null, 2);

    const blob = new Blob([jsonString], { type: 'application/json' });

    const url = URL.createObjectURL(blob);
    const downloadLink = document.createElement('a');
    downloadLink.href = url;
    downloadLink.download = 'AllsnevCharacters.json';
    downloadLink.click();
    URL.revokeObjectURL(url);
}

const saveCurrentCharacter = () => {
    characters.value.push(current_character.value);
    resetCurrentCharacter();
    resetTalents();
}


const importCharacters = (charactersData) => {
    characters.value = charactersData;
}


const changeCurrentCharacter = (event) => {
    var characterIndex = event.target.value;
    if(currentCharacterIndex.value !== characterIndex){
        if(currentCharacterIndex.value !== '-1'){
            characters.value[currentCharacterIndex.value] = current_character.value;
            if(characterIndex !== '-1'){
                current_character.value = characters.value[characterIndex];
            }
            else{
                resetCurrentCharacter();
            }
        }
        else{
            current_character.value = characters.value[characterIndex];
        }
        currentCharacterIndex.value = characterIndex;
    }
}


// Normal functions
const resetCurrentCharacter = () => {
    current_character.value = {
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
            "Carisma": {base:0, current:0},
            "Sabiduría": {base:0, current:0},
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
            subClass: [],
            classLevel: 0,
            god: '',
        },
        talents:{
            abilities: [],
            treats: [],
        },
        inventory: {},
        lore: ''
    }
    resetTalents()
}

resetCurrentCharacter()

</script>

<template>
    <main class="container-fluid p-3"  id="characterSheet" ref="characterSheet">
        <div class="row w-100 m-0 rol-container py-3 flex-wrap">
            <!-- First row -->
            <section class="row w-100 m-0 p-0 justify-content-around align-items-center">
                <h1 class="col-12 col-md-7 p-0 main-title text-center">
                    Creador de Personajes de Allsnev
                </h1>
                <div class="col-12 col-md-5 row m-0 p-2 pe-0 justify-content-center align-items-center flex-column no-print">
                    <h4 class="col-12 m-0 p-0 text-center">
                        Personajes creados
                    </h4>
                    <select class="col-8 col-md-6 fs-5 rol-select" @change="changeCurrentCharacter">
                        <option value="-1">Nuevo personaje</option>
                        <option 
                        v-for="(character, index) in characters"
                        :key="index"
                        :value="index"
                        >
                            {{ character.basic_information['Nombre'] }}
                        </option>
                    </select>
                </div>
            </section>

            <section class="row w-100 m-0 p-0 justify-content-around mb-3">
                <CharacterInfo 
                :fields="current_character.basic_information"
                />
            </section>

            <section class="row w-100 m-0 p-0 justify-content-around flex-wrap flex-column align-items-center align-items-md-start flex-md-row">
                <div class="row p-0 justify-content-center col-12 col-md-4">
                    <div class="row p-0 justify-content-center col-11">
                        <RaceSelect 
                        :currentRace=current_character.race
                        :races=races
                        @changeRace="changeRace"
                        />
                    </div>
                </div>

                <div class="row p-0 mt-3 mt-md-0 justify-content-center col-10 col-md-4">
                    <Statistics 
                    :statistics=current_character.statistics
                    :negativeEffects=current_character.negativeEffects
                    :currentState=current_character.state
                    :characterRace="current_character.race"
                    />
                </div>

                <div class="row p-0 justify-content-center col-10 col-md-2">
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
                    :talents=current_character.talents
                    :allTalents="getTalents()"
                    />
                </div>

            </section>
            
            <!-- Third row -->
            <section class="row w-100 m-0 p-0 justify-content-around text-center p-3">
                <div class="col-12 col-md-6 row justify-content-center mb-5 mb-md-0">
                    <Inventory
                    :characterInventory="current_character.inventory"
                    />
                </div>

                <div class="col-12 col-md-6 row justify-content-center">
                    <CharacterLore 
                    :character="current_character"
                    />
                </div>
            </section>

            <!-- Fourth row -->
            <section class="row w-100 m-0 p-0 justify-content-around text-center p-3 no-print">
                <div class="col-12 row justify-content-around">
                    <ExportOptions
                    @saveCurrentCharacter="saveCurrentCharacter"
                    @exportCharacter="exportCharacter"
                    @exportAllCharacters="exportAllCharacters"
                    @importCharacters="importCharacters"
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
    text-shadow: 0 0 2px $primary-light;
}

select{
    color:$font-color;
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