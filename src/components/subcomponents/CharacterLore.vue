<script setup>
const props = defineProps({
    lore:{
        type: String,
        required: true
    }
})
</script>

<template>
    <div class="row w-100 m-0 p-0 rol-subwindow">
        <table class="col-12 rol-subwindow">
            <tr>
                <td colspan="10">
                    <h2 class="m-0">Trasfondo</h2>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="w-100 p-1">
                        <textarea class="w-100 fs-6" v-model="props.lore" cols="30" rows="15" placeholder="Trasfondo del personaje"></textarea>
                    </div>
                </td>
            </tr>

        </table>
    </div>
</template>

<style scoped>
th, td{
    border: 2px black solid;
}
</style>