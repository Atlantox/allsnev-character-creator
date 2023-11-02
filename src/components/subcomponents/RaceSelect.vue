<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    race:{
        type: Object,
        required: true
    },
    races:{
        type: Array,
        required: true
    },
    
});

const emit = defineEmits(['changeRace']);

const changeRace = (index) => {
    emit ('changeRace', index);
}

</script>

<template>
    <div class="col-12 row justify-content-center p-1 pt-2 text-center border border-2 border-black race-section">
        <figure class="col-12 d-flex flex-column align-items-center justify-content-center m-0">
            <img 
            class="w-100 border border-2 border-black"  
            :src="'src/assets/images/races/' + props.race.image" 
            alt="race image">
            <h2 class="m-0">
                {{ props.race.name }}
            </h2>
            
        </figure>
        <ul class="col-11 d-flex list-unstyled flex-wrap align-items-center justify-content-around m-0">
            <li
            class="col-3 p-1 m-0"
            v-for="(race, index) in props.races"
            :key="index"
            >
                <button 
                @click="changeRace(index)" 
                :class="{
                    'w-75 p-2 m-0 d-flex align-items-center mx-2 rol-button border border-black': true,
                    'race-active': props.races[index].name === props.race.name
                }"
                >
                    <img class="w-100" :src="'src/assets/icons/races/' + race.icon" :alt="race.name + ' icon'">
                    <!-- <span class="fs-5 m-0">{{ race.name }}</span> -->
                </button>
            </li>
        </ul>
    </div>
</template>

<style scoped lang="scss">

*{
    color:$font-color;
}
.race-section{
    background-color: $secondary;
}

.race-active{
    background-color:$rol-button-active;
    box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.603) inset;
}
</style>