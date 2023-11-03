<script setup>
import { computed } from 'vue';
const props = defineProps({
    statistics:{
        type: Object,
        required: true
    }
})

const emit = defineEmits(['generateStatistics']);

const generateStatistics = () =>{
    emit ('generateStatistics');
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
</script>

<template>
    <div class="row w-100 m-0 p-0">
        <div class="col-12 m-0 p-0 mb-2">
            <button @click="generateStatistics" class="rol-button fs-3">
                Generar estadísticas
            </button>
        </div>

        <table class="col-12 fs-3">
            <thead class="fs-2 text-center">
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
                class=""
                >
                    <td class="p-3">
                        {{ stat }}
                    </td>
                    <td class="text-center">
                        <input 
                        class="text-center w-50" 
                        :id="stat + 'base-input'"
                        v-model="props.statistics[stat].base" 
                        type="text" 
                        @click="selectAll(stat + 'base-input')">
                    </td>
                    <td :class="'text-center modifier ' + getDiceModifierColor(getModifier(props.statistics[stat].base))">
                        {{ getModifier(props.statistics[stat].actual) }}
                    </td>
                    <td class="text-center">
                        <input 
                        class="text-center w-50" 
                        :id="stat + 'actual-input'"
                        v-model="props.statistics[stat].actual" 
                        type="text" 
                        @click="selectAll(stat + 'actual-input')">
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped lang="scss">
input {
    padding: 0; 
    margin: 0; 
    border: none; 
    border-bottom:2px black solid;
    color: $font-color;
    outline: none; 
    background: transparent; 
}

td, th{
    border:2px black solid;
}

table{
    background-color:$terciary;
}

.modifier{
    letter-spacing: 15px;
}
</style>