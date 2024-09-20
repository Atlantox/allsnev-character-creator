<script setup>
import NegativeEffectService from '@/services/NegativeEffectService.js';
const negativeEffectsService = new NegativeEffectService();
const negativeEffects = negativeEffectsService.getEffects();

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
    characterRace:{
        type: String,
        required: true
    }
})


// Randomly generate a random numbers between 6 and 15 for each statistic
const generateStatistics = () => {
    let statisticGeneration = [];
    if(props.characterRace === 'Humano'){
        // All are average statistics
        statisticGeneration = [
            '2d3',
            '2d3',
            '2d3',
            '2d3',
            '2d3',
            '2d3',
            '2d3',
        ];
    }
    else{
        statisticGeneration = [
            '5d2', // Strong statistic
            '2d3',
            '2d3',
            '2d3',
            '2d3',
            '2d3',
            '1d4', // Weak statistic
        ];
    }
    alert(getStatistics(statisticGeneration));
}

// Gets a list of dices like '2d3', '1d10', '3d4'. All with a + baseStatistic
const getStatistics = (dices) => {
    const baseStatistic = 4;
    let statisticsResults = [];
    dices.forEach((launch) => {
        var total = 0;
        const splits = launch.split('d');
        const diceNumber = splits[0];
        const sidesNumber = splits[1];
        var i = 0;
        while (i < diceNumber) {
            var myrandom = (Math.floor(Math.random() * sidesNumber ) + 1);
            total+= myrandom;
            i++;
        }
        console.log(total);
        statisticsResults.push(total + baseStatistic);
    })
    return statisticsResults;
}


// Add or remove a negative effect
const toggleNegativeEffect = (effect) => {
    if(props.negativeEffects.includes(effect.name)){        
        // If already has the negative effect, remove it
        var index = props.negativeEffects.indexOf(effect.name);
        if (index !== -1)
            props.negativeEffects.splice(index, 1);

        for(const key in effect.debuffs){
            props.statistics[key].current = 
                parseInt(props.statistics[key].current) - effect.debuffs[key];
        }
    }
    else{
        props.negativeEffects.push(effect.name);
        // Else apply the negative affects
        for(const key in effect.debuffs){
            props.statistics[key].current = 
                parseInt(props.statistics[key].current) + effect.debuffs[key];
        }
    }
}

// Return the statistic dice modifier
const getModifier = (stat) => {
  const normalStat = 10;
  const diff = stat - normalStat;
  let result = 0;
  if(diff < 0) result = Math.ceil(diff / 2);
  else result = Math.floor(diff / 2);
  
  if(result > 0) return '+' + result;
  else return result;
}


// Return dice modifier color: red for negative, green for positive and white for 0
const getDiceModifierColor = (value) => {
  if (value > 0) return 'statistic-positive'; 
  else if (value < 0) return 'statistic-negative';
  else return 'text-white';
};


const selectAll = (targetInput) => {
    document.getElementById(targetInput).select();
}

const statisticInputClass = 'text-center w-50 h-50 rol-input align-bottom align-bottom'
const statisticTdClass = 'text-center align-bottom'
</script>

<template>
    <div class="row w-100 m-0 p-0 justify-content-center">
        <div class="col-12 row mt-2 m-md-0 p-0 mb-2 h-auto align-self-end">
            <h4 @click="generateStatistics" class="my-button rol-button col-7 col-md-6 p-1 text-center">
                Generar estadísticas
            </h4>
        </div>

        <table class="col-12 fs-5">
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

                    <td :class="statisticTdClass">
                        <input 
                        :class="statisticInputClass" 
                        :id="stat + 'base-input'"
                        v-model="props.statistics[stat].base" 
                        type="text" 
                        @click="selectAll(stat + 'base-input')">
                    </td>

                    <td :class="'text-center modifier ' + getDiceModifierColor(getModifier(props.statistics[stat].current))">
                        {{ getModifier(props.statistics[stat].current) }}
                    </td>

                    <td :class="statisticTdClass">
                        <input 
                        :class="statisticInputClass" 
                        :id="stat + 'actual-input'"
                        v-model="props.statistics[stat].current" 
                        type="text" 
                        @click="selectAll(stat + 'actual-input')">
                    </td>
                </tr>
            </tbody>
        </table>

        <table class="col-11 fs-5 mt-3">
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

                    <td :class="statisticTdClass">
                        <input 
                        :class="statisticInputClass" 
                        :id="state + 'actual-input'"
                        v-model="props.currentState[state].max" 
                        type="text" 
                        @click="selectAll(state + 'actual-input')">
                    </td>

                    <td :class="statisticTdClass">
                        <input 
                        :class="statisticInputClass" 
                        :id="state + 'base-input'"
                        v-model="props.currentState[state].current" 
                        type="text" 
                        @click="selectAll(state + 'base-input')">
                    </td>
                </tr>
            </tbody>
        </table>

        <div class="col-12 row m-0 p-0 justify-content-around mt-3">
            <div 
            v-for="effect in negativeEffects"
            :key="effect.name"
            class="col-3 col-md-2 row m-0 p-1 p-md-0 justify-content-center align-items-center"
            >
                <figure     
                @click="toggleNegativeEffect(effect)"
                :class="{
                    'col-9 rol-button p-2 text-center': true,
                    'rol-button-active effect-active': props.negativeEffects.includes(effect.name)
                }">
                    <img class="w-75" :src="'icons/' + effect.name + '.png'" :alt="effect.name + '-icon'">
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

.statistic-positive{
    color:rgb(0, 255, 0);
}

.statistic-negative{
    color:rgb(255, 68, 68);
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