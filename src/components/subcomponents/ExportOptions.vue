<script setup>
const emit = defineEmits(['exportAsPDF']);

const exportAsPDF = () => {
    emit ('exportAsPDF');
}
</script>

<template>
    <div class="w-100 m-0 p-0">
        <div class="col-3 p-2">
            <div class="rol-button" @click="exportAsPDF">
                Exportar como PDF
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>