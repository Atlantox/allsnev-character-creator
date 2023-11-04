<script setup>
const props = defineProps({
    statistics:{
        type: Object,
        required: true
    },
    negativeEffects:{
        type: Object,
        required: true
    },
    currentState:{
        type: Object,
        required: true
    },
    currentRace:{
        type: String,
        required: true
    }
})

const emit = defineEmits(['generateStatistics', 'toggleNegativeEffect']);

const generateStatistics = () =>{
    emit ('generateStatistics');
}

const toggleNegativeEffect = (effect) => {
    emit('toggleNegativeEffect', effect)
}

const getModifier = (stat) => {
  const normalStat = 10;
  const diff = stat - normalStat;
  let result = 0;
  if(diff < 0) result = Math.ceil(diff / 2);
  else result = Math.floor(diff / 2);
  
  if(result > 0) return '+' + result;
  else return result;
}

const getDiceModifierColor = (value) => {
  if (value > 0) return 'text-success'; 
  else if (value < 0) return 'text-danger';
  else return 'text-white';
};

const selectAll = (targetInput) => {
    document.getElementById(targetInput).select();
}

import NegativeEffectService from '@/services/NegativeEffectService.js';
const negativeEffectsService = new NegativeEffectService();
const negativeEffects = negativeEffectsService.getEffects();
</script>

<template>
    <div class="row w-100 m-0 p-0 justify-content-center">
        <div class="col-12 m-0 p-0 mb-2">
            <h4 @click="generateStatistics" class="my-button rol-button col-5 p-1 text-center">
                Generar estadísticas
            </h4>
        </div>

        <table class="col-12 fs-4">
            <thead class="fs-3 text-center">
                <tr>
                    <th class="p-1">Característica</th>
                    <th>Base</th>
                    <th class="px-3">Mod.</th>
                    <th class="p-0">Actual</th>
                </tr>
            </thead>
            <tbody>
                <tr
                v-for="(value, stat, index) in props.statistics"
                :key="index"
                >
                    <td class="p-3 py-1">
                        {{ stat }}
                    </td>

                    <td class="text-center">
                        <input 
                        class="text-center w-25 rol-input" 
                        :id="stat + 'base-input'"
                        v-model="props.statistics[stat].base" 
                        type="text" 
                        @click="selectAll(stat + 'base-input')">
                    </td>

                    <td :class="'text-center modifier ' + getDiceModifierColor(getModifier(props.statistics[stat].base))">
                        {{ getModifier(props.statistics[stat].current) }}
                    </td>

                    <td class="text-center">
                        <input 
                        class="text-center w-25 rol-input" 
                        :id="stat + 'actual-input'"
                        v-model="props.statistics[stat].current" 
                        type="text" 
                        @click="selectAll(stat + 'actual-input')">
                    </td>
                </tr>
            </tbody>
        </table>

        <table class="col-9 fs-4 mt-3">
            <thead class="fs-3 text-center">
                <tr>
                    <th class="p-1">Característica</th>
                    <th>Actual</th>
                    <th class="p-0">Máximo</th>
                </tr>
            </thead>
            <tbody>
                <tr
                v-for="(value, state, index) in props.currentState"
                :key="index"
                >
                    <td class="p-3 py-1">
                        {{ state }}
                    </td>

                    <td class="text-center">
                        <input 
                        class="text-center w-25 rol-input" 
                        :id="state + 'actual-input'"
                        v-model="props.currentState[state].max" 
                        type="text" 
                        @click="selectAll(stat + 'actual-input')">
                    </td>

                    <td class="text-center">
                        <input 
                        class="text-center w-25 rol-input" 
                        :id="state + 'base-input'"
                        v-model="props.currentState[state].current" 
                        type="text" 
                        @click="selectAll(stat + 'base-input')">
                    </td>
                </tr>
            </tbody>
        </table>

        <div class="col-12 row m-0 p-0 justify-content-around mt-3">
            <div 
            v-for="effect in negativeEffects"
            :key="effect.name"
            class="col-2 row m-0 p-0 justify-content-center align-items-center"
            >
                <figure     
                @click="toggleNegativeEffect(effect)"
                :class="{
                    'col-9 rol-button p-2 text-center': true,
                    'rol-button-active effect-active': props.negativeEffects.includes(effect.name)
                }">
                    <img class="w-75" :src="'src/assets/icons/' + effect.name + '.png'" :alt="effect.name + '-icon'">
                </figure>

            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">

td, th{
    border:2px black solid;
}

table{
    background-color:$terciary;
}

figure{
    box-shadow: 0 0 50px inset rgb(45, 160, 45);
}
.effect-active{
    box-shadow: 0 0 50px inset red;
}

button{
    font-family: $my-font
}

.modifier{
    letter-spacing: 5px;
}
</style>