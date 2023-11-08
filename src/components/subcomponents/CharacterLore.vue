<script setup>
const props = defineProps({
    character:{
        type: Object,
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
                        <p class="w-100 fs-5 d-none" id="character-lore-hidden">{{ props.character.lore }}</p>
                        
                        <textarea class="w-100 fs-6" id="character-lore-textarea" v-model="props.character.lore" cols="30" rows="15" placeholder="Trasfondo del personaje"></textarea>
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