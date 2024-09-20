<script setup>
import { ref } from 'vue'
const props = defineProps({
    talents:{
        type: Object,
        required: true
    },
    allTalents:{
        type: Object,
        required: true
    },
})

const thClass = 'h4'
const descriptionClass = 'fs-description p-1'
const talentNameClass = 'fs-name'

const deleteTalent = (target_talent) => {    
    delete props.talents.abilities[target_talent];
    delete props.talents.treats[target_talent];
}

const customTalent = ref({
    ability:{name: '', description: ''},
    treat:{name: '', description: ''},
})

const existantTalent = ref({
    ability:{name: '', description: ''},
    treat:{name: '', description: ''},
})

const addCustomTalent = (talentType) => {
    if(talentType === 'ability'){
        props.talents.abilities[customTalent.value.ability.name + '#'] = customTalent.value.ability.description;
        customTalent.value.ability = {name: '', description: ''}
    }
    else if(talentType === 'treat'){
        props.talents.treats[customTalent.value.treat.name + '#'] = customTalent.value.treat.description;
        customTalent.value.treat = {name: '', description: ''}
    }
}

const addExistingTalent = (talentType) => {
    if(talentType === 'ability'){
        props.talents.abilities[existantTalent.value.ability.name] = existantTalent.value.ability.description;
        existantTalent.value.ability = {name: '', description: ''}
    }
    else if(talentType === 'treat'){
        props.talents.treats[existantTalent.value.treat.name] = existantTalent.value.treat.description;
        existantTalent.value.treat = {name: '', description: ''}
    }
}

</script>

<template>
    <section class="col-12 col-md-6 row p-0 pe-0 pe-md-4 mb-5 mb-md-0">
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
                    <td :class="talentNameClass">{{ ability[ability.length - 1] === '#' ? ability.split('#')[0] : ability }}</td> <!-- If the ability ends with '#' the treat are a custom ability -->
                    <td :class="'talent-content ' + descriptionClass" v-html="content"></td>
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
                            <textarea class="w-100 fs-5" v-model="customTalent.ability.name" cols="30" rows="3" placeholder="Nombre de habilidad personalizada"></textarea>
                        </div>
                    </td>
                    <td>
                        <div class="w-100 p-2">
                            <textarea class="w-100 fs-5" v-model="customTalent.ability.description" cols="30" rows="3" placeholder="Descripción de habilidad personalizada"></textarea>
                        </div>
                    </td>
                    <td>
                        <div class="row w-100 p-2 justify-content-center m-0">
                            <figure @click="addCustomTalent('ability')" class="col-4 text-center rol-button border border-2 border-black rounded m-0 p-1">
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
                            v-model="existantTalent.ability"
                            class="w-50 fs-5 rol-select" 
                            >
                                <option 
                                v-for="(description, ability, index) in props.allTalents.abilities"
                                :key="index"
                                :value="{name:ability, description:description}"
                                :description="description"
                                >
                                    {{ ability[ability.length - 1] === '#' ? ability.split('#')[0] : ability }}
                                </option>
                            </select>   
                        </div>
                    </td>
                    <td>
                        <div class="row w-100 p-2 justify-content-center m-0">
                            <figure @click="addExistingTalent('ability')" class="col-4 text-center rol-button border border-2 border-black rounded m-0 p-1">
                                <img class="w-75 m-0" src="@/assets/icons/plus.png" alt="trash-icon">
                            </figure>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </section>

    <section class="col-12 col-md-6 row p-0 ps-0 ps-md-4">
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
                    <td :class="talentNameClass">{{ treat[treat.length - 1] === '#' ? treat.split('#')[0] : treat }}</td> <!-- If the treat ends with '#' the treat are a custom treat -->
                    <td :class="'talent-content ' + descriptionClass" v-html="content"></td>
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
                            <textarea class="w-100 fs-5" v-model="customTalent.treat.name" cols="30" rows="3" placeholder="Nombre de rasgo personalizado"></textarea>
                        </div>
                    </td>
                    <td>
                        <div class="w-100 p-2">
                            <textarea class="w-100 fs-5" v-model="customTalent.treat.description" cols="30" rows="3" placeholder="Descripción de rasgo personalizado"></textarea>
                        </div>
                    </td>
                    <td>
                        <div class="row w-100 p-2 justify-content-center m-0">
                            <figure @click="addCustomTalent('treat')" class="col-4 text-center rol-button border border-2 border-black rounded m-0 p-1">
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
                            v-model="existantTalent.treat"
                            class="w-50 fs-5 rol-select" 
                            >
                                <option 
                                v-for="(description, treat, index) in props.allTalents.treats"
                                :key="index"
                                :value="{name:treat, description:description}"
                                :description="description"
                                >
                                    {{ treat[treat.length - 1] === '#' ? treat.split('#')[0] : treat }}
                                </option>
                            </select>   
                        </div>
                    </td>
                    <td>
                        <div class="row w-100 p-2 justify-content-center m-0">
                            <figure @click="addExistingTalent('treat')" class="col-4 text-center rol-button border border-2 border-black rounded m-0 p-1">
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