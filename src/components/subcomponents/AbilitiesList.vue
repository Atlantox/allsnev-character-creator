<script setup>
const props = defineProps({
    talents:{
        type: Object,
        required: true
    }
})

const thClass = 'h4'
const descriptionClass = 'fs-6 p-1'
const talentNameClass = 'h4'
</script>

<template>
    <section class="col-6 row px-3">
        <table class="col-12 rol-subwindow">
            <thead>
                <tr>
                    <th colspan="10">
                        <h1 class="m-0">Habilidades</h1>
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
                        <button class="btn btn-danger">
                            Eliminar
                        </button> 
                    </td>
                </tr>
            </tbody>
        </table>
    </section>

    <section class="col-6 row px-3">
        <table class="col-12 rol-subwindow">
            <thead>
                <tr>
                    <th colspan="10">
                        <h1 class="m-0">Rasgos</h1>
                    </th>
                </tr>
                <tr>
                    <th>Nombre</th>
                    <th>Descripción</th>
                    <th>Acción</th>
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
                        <button class="btn btn-danger">
                            Eliminar
                        </button>    
                    </td>
                </tr>
            </tbody>
        </table>
    </section>
</template>

<style scoped>
th, td{
    border: 2px black solid;
}

.talent-content{
    text-align:left   
}
</style>