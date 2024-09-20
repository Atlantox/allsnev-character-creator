<script setup>
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

const getImage = ((path) => {
    console.log(path)
    new URL(`./dir/${path}`, import.meta.url).href
})

</script>

<template>
    <div class="col-12 row justify-content-center p-0 m-0 py-2 text-center border border-2 border-black rol-subwindow">
        <figure class="col-9 col-md-12 d-flex flex-column align-items-center justify-content-center m-0 p-4 p-md-3">
            <img 
            class="w-100 border border-2 border-black"  
            :src="'images/races/' + props.races[currentRace].image" 
            alt="race image">
            <h1 class="m-0">
                {{ currentRace }}
            </h1>
        </figure>

        <ul class="col-3 col-md-11 row list-unstyled flex-wrap align-items-center justify-content-center justify-content-md-around m-0 p-0">
            <li
            class="col-6 col-md-3 p-0 p-md-2 m-0 d-flex justify-content-center"
            v-for="(value, race, index) in props.races"
            :key="index"
            >
                <button 
                @click="changeRace(race)"
                :class="{
                    'w-75 p-2 m-0 d-flex align-items-center rol-button border border-black': true,
                    'rol-button-active': race === props.currentRace
                }"
                >
                    <img class="w-100" :src="'icons/races/' + value.icon" :alt="race + ' icon'">
                </button>
            </li>
        </ul>
    </div>
</template>

<style scoped lang="scss">

@media screen and (max-width: 768px) {
  h1 {
    font-size:60px;
  }
}

*{
    color:$font-color;
}
</style>