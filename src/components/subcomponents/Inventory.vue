<script setup>
import { ref } from 'vue'
const props = defineProps({
    characterInventory:{
        type: Object,
        required: true
    }
})

const thClass = 'h4'
const descriptionClass = 'fs-6 p-1'
const talentNameClass = 'h4'

const emit = defineEmits(['addInventoryObject', 'deleteInventoryObject']);

const customItem = ref({name:'', description:'', quantity: ''});

const addInventoryObject = () => {
    emit ('addInventoryObject', customItem.value);
    customItem.value = {name:'', description:'', quantity: ''};
}

const deleteInventoryObject = (objectName) => {
    emit ('deleteInventoryObject', objectName);
}
</script>

<template>
    <section class="col-12 row p-0">
        <table class="col-12 rol-subwindow">
            <thead>
                <tr>
                    <th colspan="10">
                        <h2 class="m-0">Inventario</h2>
                    </th>
                </tr>
                <tr>
                    <th :class="thClass">Nombre</th>
                    <th :class="thClass">Descripción</th>
                    <th :class="thClass">Cantidad</th>
                    <th :class="thClass">Acción</th>
                </tr>
            </thead>
            <tbody>
                <tr
                v-for="(content, inventoryObject, index) in props.characterInventory"
                :key="index"
                >
                    <td :class="talentNameClass">{{ inventoryObject }}</td>
                    <td :class="'talent-content ' + descriptionClass"> {{ content.description }} </td>
                    <td> {{ content.quantity }} </td>
                    <td>
                        <div class="row w-100 p-2 justify-content-center m-0">
                            <figure @click="deleteInventoryObject(inventoryObject)" class="col-4 text-center rol-button2 rounded m-0 p-1">
                                <img class="w-75 m-0" src="@/assets/icons/trash.png" alt="trash-icon">
                            </figure>
                        </div>
                    </td>
                </tr>

                <tr class="no-print">
                    <td>
                        <div class="w-100 p-1">
                            <textarea class="w-100 fs-5" v-model="customItem.name" cols="30" rows="3" placeholder="Nombrel de objeto"></textarea>
                        </div>
                    </td>
                    <td>
                        <div class="w-100 p-2">
                            <textarea class="w-100 fs-5" v-model="customItem.description" cols="30" rows="3" placeholder="Descripción del objeto"></textarea>
                        </div>
                    </td>
                    <td>
                        <div class="w-100 p-2">
                            <input class="text-center rol-input w-50" v-model="customItem.quantity" type="text" >
                        </div>
                    </td>
                    <td>
                        <div class="row w-100 p-2 justify-content-center m-0">
                            <figure @click="addInventoryObject" class="col-4 text-center rol-button border border-2 border-black rounded m-0 p-1">
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