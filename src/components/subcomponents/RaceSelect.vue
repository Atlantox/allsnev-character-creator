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
    <div class="col-12 row justify-content-center p-1 text-center border border-black race-select">
        <div class="col-4 row justify-content-start m-0">
            <ul class="col-12 d-flex flex-column list-unstyled align-items-center justify-content-around m-0">
                <li
                class="col-8 p-1 my-1"
                v-for="(race, index) in races"
                :key="index"
                >
                    <button @click="changeRace(index)" class="w-75 p-1 m-0 d-flex align-items-center mx-2 race-icon-container">
                        <img class="w-100" :src="'src/assets/icons/races/' + race.icon" :alt="race.name + ' icon'">
                        <!-- <span class="fs-5 m-0">{{ race.name }}</span> -->
                    </button>
                </li>
            </ul>
        </div>
        <figure class="col-8 d-flex flex-column align-items-center justify-content-center m-0">
            <img class="px-3 w-75" :src="'src/assets/images/races/' + props.race.image" alt="race image">
            <h2 class="m-0">
                {{ props.race.name }}
            </h2>
            
        </figure>
    </div>
</template>

<style scoped lang="scss">

*{
    color:$font-color;
}
.race-select{
    background-color: $secondary;
}

.race-icon-container{
    border-radius: 10px;
    border:none;
    background-color: $race-button;
}
</style>