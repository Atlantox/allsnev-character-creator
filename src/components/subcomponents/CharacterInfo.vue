<script setup>
const props = defineProps({
    fields:{
        type: Object,
        required: true,
    }
})

const fields_columns = {
    'Nombre': 2,
    'Edad': 1,
    'Origen': 2,
    'Profesión': 2,
    'Personalidad': 2,
    'Niv': 1,
    'Exp': 1
}

</script>

<template>
    <div class="row justify-content-center align-items-end w-100 p-0 m-0 mb-2 fs-5">
        <div
        v-for="(value, field, index) in props.fields"
        :key="index"
        :class="{
            ['row m-0 align-bottom align-items-end col-' + fields_columns[field]]: true,
            'empty-field': props.fields[field] === ''  
        }"
        >
            <label 
            class="col-12 h2 m-0 p-0 align-bottom" 
            :for="field"
            >
                {{ field }}
            </label>
            <input v-model="props.fields[field]" class="col-12 m-0 p-0 fs-5 align-bottom" :id="field" type="text">
        </div>
    </div>
</template>

<style scoped lang="scss">
input {
    border: none; 
    border-bottom: 2px black solid;
    color: $font-color;
    height:20px;
    outline: none; 
    background: transparent; 
}

label{
    transition:0.2s;
}

.empty-field{
    label{
        transform:translateY(55%);
    }
}

.empty-field:hover{
    label{
        transform:translateY(0);
    }
}
</style>