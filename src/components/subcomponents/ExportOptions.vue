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
    <div class="row col-12 m-0 p-0 my-1 mb-4">
        <div class="row w-100 m-0 p-0 align-items-center justify-content-center">
            <div class="col-8 col-md-3 rol-button p-1" @click="saveCurrentCharacter">
                <h2 class="m-0 p-0">
                    Guardar personaje
                </h2>
            </div>
        </div>
    </div>
        
    <div class="row col-12 m-0 p-0 align-items-start justify-content-around flex-column flex-md-row">
        <div class="row col-12 col-md-6 m-0 p-0 align-items-start mb-4 mb-md-0">
            <div class="row w-100 m-0 p-0 align-items-start justify-content-center rol-subwindow border border-2 border-black p-1">
                <h2 class="col-12 m-0 p-0">
                    Exportar
                </h2>
                <div class="col-12 row justify-content-around align-items-center fs-5">
                    <div class="col-5 py-1">
                        <div class="rol-button" @click="exportCharacter('pdf')">
                            Exportar como PDF
                        </div>
                    </div>
                    <div class="col-5 py-1">
                        <div class="rol-button" @click="exportCharacter('img')">
                            Exportar como Imagen
                        </div>
                    </div>
                    <div class="col-5 py-1">
                        <div class="rol-button" @click="exportCharacter('json')">
                            Exportar como JSON
                        </div>
                    </div>
                    <div class="col-5 py-1">
                        <div class="rol-button p-1" @click="exportAllCharacters">
                            Exportar todos los personajes como JSON
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
        <div class="row col-12 col-md-6 m-0 align-items-start">
            <div class="row w-100 m-0 p-0 align-items-start justify-content-center rol-subwindow border border-2 border-black p-1">
                <h2 class="col-12 m-0 p-0">
                    Importar personajes (Archivo .json)
                </h2>
                <div class="col-12 row justify-content-around align-items-center fs-5">
                    <div class="col-12 p-2">
                        <input class="w-75 rol-button" @change="importCharacters" type="file" accept=".json">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>