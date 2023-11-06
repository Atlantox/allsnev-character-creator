<script setup>
import { ref } from 'vue'
const props = defineProps({
    classInfo:{
        type: Object,
        required: true,
    },
    talents:{
        type: Object,
        required: true
    },
    races: {
        type: Object,
        required: true
    },
    currentRace: {
        type: String,
        required: true
    },
    classes: {
        type: Object,
        required: true
    },
    gods: {
        type: Object,
        required: true
    },
})

const thClass = 'h4'
const descriptionClass = 'fs-6 p-1'
const talentNameClass = 'h5'

const emit = defineEmits(['deleteTalent', 'addCustomAbility', 'addCustomTreat']);

const deleteTalent = (talent) => {
    emit ('deleteTalent', talent);
}

const customAbility = ref({ name:'', description:'' })
const customTreat = ref({ name:'', description:'' })
const existantAbility = ref({ name:'', description:'' })
const existantTreat = ref({ name:'', description:'' })


const addCustomAbility = () => {
    emit ('addCustomAbility', customAbility.value)
    customAbility.value = {name: '', description: ''}
}

const addCustomTreat = () => {
    emit ('addCustomTreat', customTreat.value)
    customTreat.value = {name: '', description: ''}
}

const addExistantAbility = () => {
    emit ('addCustomAbility', existantAbility.value)
    existantAbility.value = {name: '', description: ''}
}

const addExistantTreat = () => {
    emit ('addCustomTreat', existantTreat.value)
    existantTreat.value = {name: '', description: ''}
}
</script>

<template>
    <section class="col-6 row p-0 pe-4">
        <table class="col-12 rol-subwindow">
            <thead>
                <tr>
                    <th colspan="10">
                        <h2 class="m-0">Habilidades</h2>
                    </th>
                </tr>
                <tr>
                    <th :class="thClass">Nombre</th>
                    <th :class="thClass">Descripción</th>
                    <th :class="thClass">Acción</th>
                </tr>
            </thead>
            <tbody>
                <tr
                v-for="(content, ability, index) in props.talents.abilities"
                :key="index"
                >
                    <td :class="talentNameClass">{{ ability }}</td>
                    <td :class="'talent-content ' + descriptionClass"> {{ content }} </td>
                    <td>
                        <div class="row w-100 p-2 justify-content-center m-0">
                            <figure @click="deleteTalent(ability)" class="col-4 text-center rol-button2 rounded m-0 p-1">
                                <img class="w-75 m-0" src="@/assets/icons/trash.png" alt="trash-icon">
                            </figure>
                        </div>
                    </td>
                </tr>

                <tr class="no-print">
                    <td>
                        <div class="w-100 p-1">
                            <textarea class="w-100 fs-5" v-model="customAbility.name" cols="30" rows="3" placeholder="Nombre de habilidad personalizada"></textarea>
                        </div>
                    </td>
                    <td>
                        <div class="w-100 p-2">
                            <textarea class="w-100 fs-5" v-model="customAbility.description" cols="30" rows="3" placeholder="Descripción de habilidad personalizada"></textarea>
                        </div>
                    </td>
                    <td>
                        <div class="row w-100 p-2 justify-content-center m-0">
                            <figure @click="addCustomAbility" class="col-4 text-center rol-button border border-2 border-black rounded m-0 p-1">
                                <img class="w-75 m-0" src="@/assets/icons/plus.png" alt="trash-icon">
                            </figure>
                        </div>
                    </td>
                </tr>

                <tr class="no-print">
                    <td colspan="2">
                        <h5 class="w-100 m-0 p-0 text-center align-middle">
                            Agregar una habilidad de tu raza, clase o dios
                        </h5>
                        <div class="w-100 p-1 m-0">
                            <select 
                            v-model="existantAbility"
                            class="w-50 fs-5 rol-select" 
                            name="" 
                            id="" 
                            >
                                <!-- For each race ability -->
                                <option 
                                v-for="(description, ability, index) in props.races[props.currentRace].abilities"
                                :key="index"
                                :value="{name:ability, description:description}"
                                :description="description"
                                >
                                    {{ ability }}
                                </option>

                                <!-- For each class ability -->
                                <template
                                v-if="props.classInfo.mainClass !== ''"
                                >
                                    <option 
                                    v-for="(description, ability, index) in props.classes[props.classInfo.mainClass].abilities"
                                    :key="index"
                                    :value="{name:ability, description:description}"
                                    :description="description"
                                    >
                                        {{ ability }}
                                    </option>
                                    
                                    
                                    <!-- For each subclass ability -->
                                    <template
                                    v-if="props.classInfo.subClass !== ''"
                                    >
                                        <template
                                        v-if="props.classes[props.classInfo.mainClass].subClasses !== false"
                                        >
                                            <option 
                                            
                                            v-for="(description, ability, index) in props.classes[props.classInfo.mainClass].subClasses[props.classInfo.subClass].abilities"
                                            :key="index"
                                            :value="{name:ability, description:description}"
                                            :description="description"
                                            >
                                                {{ ability }}
                                            </option>
                                        </template>
                                    </template>
                                </template>


                                <!-- For each god ability -->
                                <template
                                v-if="props.classInfo.god !== ''"
                                >
                                    <option 
                                    v-for="(description, ability, index) in props.gods[props.classInfo.god].abilities"
                                    :key="index"
                                    :value="{name:ability, description:description}"
                                    :description="description"
                                    >
                                        {{ ability }}
                                    </option>
                                </template>
                            </select>   
                        </div>
                    </td>
                    <td>
                        <div class="row w-100 p-2 justify-content-center m-0">
                            <figure @click="addExistantAbility" class="col-4 text-center rol-button border border-2 border-black rounded m-0 p-1">
                                <img class="w-75 m-0" src="@/assets/icons/plus.png" alt="trash-icon">
                            </figure>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </section>

    <section class="col-6 row p-0 ps-4">
        <table class="col-12 rol-subwindow">
            <thead>
                <tr>
                    <th colspan="10">
                        <h2 class="m-0">Rasgos</h2>
                    </th>
                </tr>
                <tr>
                    <th :class="thClass">Nombre</th>
                    <th :class="thClass">Descripción</th>
                    <th :class="thClass">Acción</th>
                </tr>
            </thead>
            <tbody>
                <tr
                v-for="(content, treat, index) in props.talents.treats"
                :key="index"
                >
                    <td :class="talentNameClass">{{ treat }}</td>
                    <td :class="'talent-content ' + descriptionClass"> {{ content }} </td>
                    <td> 
                        <div class="row w-100 p-2 justify-content-center m-0">
                            <figure @click="deleteTalent(treat)" class="col-4 text-center rol-button2 rounded m-0 p-1">
                                <img class="w-75 m-0" src="@/assets/icons/trash.png" alt="trash-icon">
                            </figure>
                        </div>
                    </td>
                </tr>

                <tr class="no-print">
                    <td>
                        <div class="w-100 p-1">
                            <textarea class="w-100 fs-5" v-model="customTreat.name" cols="30" rows="3" placeholder="Nombre de rasgo personalizado"></textarea>
                        </div>
                    </td>
                    <td>
                        <div class="w-100 p-2">
                            <textarea class="w-100 fs-5" v-model="customTreat.description" cols="30" rows="3" placeholder="Descripción de rasgo personalizado"></textarea>
                        </div>
                    </td>
                    <td>
                        <div class="row w-100 p-2 justify-content-center m-0">
                            <figure @click="addCustomTreat" class="col-4 text-center rol-button border border-2 border-black rounded m-0 p-1">
                                <img class="w-75 m-0" src="@/assets/icons/plus.png" alt="trash-icon">
                            </figure>
                        </div>
                    </td>
                </tr>

                <tr class="no-print">
                    <td colspan="2">
                        <h5 class="w-100 m-0 p-0 text-center align-middle">
                            Agregar un rasgo de tu raza o clase
                        </h5>
                        <div class="w-100 p-1 m-0">
                            <select 
                            v-model="existantTreat"
                            class="w-50 fs-5 rol-select" 
                            >
                                <!-- For each race treat -->
                                <option 
                                v-for="(description, ability, index) in props.races[props.currentRace].treats"
                                :key="index"
                                :value="{name:ability, description:description}"
                                :description="description"
                                >
                                    {{ ability }}
                                </option>

                                <!-- For each class treat -->
                                <template
                                v-if="props.classInfo.mainClass !== ''"
                                >
                                    <option 
                                    v-for="(description, ability, index) in props.classes[props.classInfo.mainClass].treats"
                                    :key="index"
                                    :value="{name:ability, description:description}"
                                    :description="description"
                                    >
                                        {{ ability }}
                                    </option>
                                    
                                    
                                    <!-- For each subclass treat -->
                                    <template
                                    v-if="props.classInfo.subClass !== ''"
                                    >
                                        <template
                                        v-if="props.classes[props.classInfo.mainClass].subClasses !==false"
                                        >
                                            <option 
                                            
                                            v-for="(description, ability, index) in props.classes[props.classInfo.mainClass].subClasses[props.classInfo.subClass].treats"
                                            :key="index"
                                            :value="{name:ability, description:description}"
                                            :description="description"
                                            >
                                                {{ ability }}
                                            </option>
                                        </template>
                                    </template>
                                </template>

                            </select>   
                        </div>
                    </td>
                    <td>
                        <div class="row w-100 p-2 justify-content-center m-0">
                            <figure @click="addExistantTreat" class="col-4 text-center rol-button border border-2 border-black rounded m-0 p-1">
                                <img class="w-75 m-0" src="@/assets/icons/plus.png" alt="trash-icon">
                            </figure>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </section>
</template>

<style scoped lang="scss">
th, td{
    border: 2px black solid;
}

.talent-content{
    text-align:left   
}

figure{
    max-width: 50px;
    min-width: 50px;
}
</style>