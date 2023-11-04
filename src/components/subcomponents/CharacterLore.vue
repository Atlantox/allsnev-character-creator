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
                        <textarea class="w-100 fs-5" v-model="props.lore" cols="30" rows="10" placeholder="Trasfondo del personaje"></textarea>
                    </div>
                </td>
            </tr>

        </table>
        <h1 class="w-100">
            Trasfondo
        </h1>
    </div>
</template>

<style scoped>

</style>