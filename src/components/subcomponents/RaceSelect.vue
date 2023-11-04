<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    currentRace:{
        type: String,
        required: true
    },
    races:{
        type: Object,
        required: true
    },
    
});

const emit = defineEmits(['changeRace']);

const changeRace = (index) => {
    emit ('changeRace', index);
}
</script>

<template>
    <div class="col-12 row justify-content-center p-1 pt-2 text-center border border-2 border-black rol-subwindow">
        <figure class="col-12 d-flex flex-column align-items-center justify-content-center m-0">
            <img 
            class="w-100 border border-2 border-black"  
            :src="'src/assets/images/races/' + props.races[currentRace].image" 
            alt="race image">
            <h2 class="m-0">
                {{ currentRace }}
            </h2>
            
        </figure>
        <ul class="col-11 d-flex list-unstyled flex-wrap align-items-center justify-content-around m-0">
            <li
            class="col-3 p-1 m-0"
            v-for="(value, race, index) in props.races"
            :key="index"
            >
                <button 
                @click="changeRace(race)"
                :class="{
                    'w-75 p-2 m-0 d-flex align-items-center mx-2 rol-button border border-black': true,
                    'race-active': race === props.currentRace
                }"
                >
                    <img class="w-100" :src="'src/assets/icons/races/' + value.icon" :alt="value.name + ' icon'">
                </button>
            </li>
        </ul>
    </div>
</template>

<style scoped lang="scss">

*{
    color:$font-color;
}

.race-active{
    background-color:$rol-button-active;
    box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.603) inset;
}
</style>