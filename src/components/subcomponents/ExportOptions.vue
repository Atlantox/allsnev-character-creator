<script setup>
const emit = defineEmits(['exportCharacter', 'exportAllCharacters', 'saveCurrentCharacter', 'importCharacters']);

const exportCharacter = (exportType) => {
    emit ('exportCharacter', exportType);
}

const exportAllCharacters = () => {
    emit ('exportAllCharacters');
}

const saveCurrentCharacter = () => {
    emit ('saveCurrentCharacter');
}

const importCharacters = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
        try {
            const parsedData = JSON.parse(reader.result);
            emit ('importCharacters', parsedData);
        } catch (error) {
            // Maneja cualquier error de parseo
            console.error('Error al parsear el archivo JSON:', error);
        }
    }

    reader.readAsText(file);
}
</script>

<template>
    <div class="row w-100 m-0 p-0 align-items-center justify-content-center">
        <div class="col-3 rol-button py-2" @click="saveCurrentCharacter">
            <h2 class="m-0 p-0">
                Guardar personaje
            </h2>
        </div>
    </div>

    <div class="row w-100 m-0 p-0 align-items-center justify-content-center rol-subwindow border border-2 border-black my-2 p-2">
        <h1 class="col-12 m-0 p-0">
            Exportar
        </h1>
        <div class="col-12 row justify-content-around align-items-center fs-4">
            <div class="col-2 p-2">
                <div class="rol-button" @click="exportCharacter('pdf')">
                    Exportar como PDF
                </div>
            </div>
            <div class="col-2 p-2">
                <div class="rol-button" @click="exportCharacter('img')">
                    Exportar como Imagen
                </div>
            </div>
            <div class="col-2 p-2">
                <div class="rol-button" @click="exportCharacter('json')">
                    Exportar como JSON
                </div>
            </div>
            <div class="col-2 p-2">
                <div class="rol-button" @click="exportAllCharacters">
                    Exportar todos los personajes como JSON
                </div>
            </div>
        </div>
    </div>

    <div class="row w-100 m-0 p-0 align-items-center justify-content-center rol-subwindow border border-2 border-black my-2 p-2">
        <h1 class="col-12 m-0 p-0">
            Importar personajes (Archivo .json)
        </h1>
        <div class="col-12 row justify-content-around align-items-center fs-4">
            <div class="col-5 p-2">
                <input class="rol-button" @change="importCharacters" type="file" accept=".json">
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>