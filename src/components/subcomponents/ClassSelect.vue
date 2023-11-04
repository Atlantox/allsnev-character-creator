<script setup>
const props = defineProps({
    classes:{
        type: Object,
        required: true
    },
    currentClass:{
        type: Object,
        required: true
    },
    gods:{
        type: Object,
        required: true
    }
})

const emit = defineEmits(['changeClass', 'resetTalents'])

const changeClass = () => {
    emit ('changeClass')
}

const resetTalents = () => {
    emit ('resetTalents')
}

</script>

<template>
    <div class="class-container col-12 row justify-content-start align-items-start m-0 p-0 text-center border border-2 border-black rol-subwindow">
        <div class="row col-12 m-0 p-0">
            <div class="col-12 p-3 pb-4 d-flex flex-column align-items-start">
                <h2 class="">
                    Clase
                </h2>
                <select 
                class="w-100 fs-3 rol-select" 
                v-model="props.currentClass.mainClass" 
                name="classSelect" 
                id=""
                @change="changeClass"
                >
                    <template
                    v-for="(value, myClass, index) in props.classes"
                    :key="index"
                    >    
                        <option 
                        :value="myClass"
                        >
                                {{ myClass }}
                        </option>
                    </template>
                </select>
            </div>
            
            <template 
            v-if="props.currentClass.mainClass !== ''"
            >
                <div 
                v-if="props.classes[props.currentClass.mainClass].subClasses !== {}"
                class="col-12 p-3 pb-4 d-flex flex-column align-items-start"
                >
                    <h2 class="">
                        Sub clase
                    </h2>
                    <select 
                    class="w-100 fs-3 rol-select" 
                    v-model="props.currentClass.subClass" 
                    name="subClassSelect" 
                    id=""
                    @change="resetTalents"
                    >
                        <template
                        v-for="(value, subClass, index) in props.classes[props.currentClass.mainClass].subClasses"
                        :key="index"
                        >    
                            <option 
                            :value="subClass"
                            >
                                {{ subClass }}
                            </option>
                            </template>
                    </select>
                </div>
            </template>

            <template 
            v-if="props.currentClass.mainClass === 'Clérigo'"
            >
                <div class="col-12 p-3 pb-4 d-flex flex-column align-items-start">
                    <h2 class="">
                        Tu Adorado
                    </h2>
                    <select 
                    class="w-100 fs-3 rol-select" 
                    v-model="props.currentClass.god" 
                    name="godSelect" 
                    id=""
                    @change="resetTalents"
                    >
                        <template
                        v-for="(value, god, index) in props.gods"
                        :key="index"
                        >    
                            <option 
                            :class="{
                                'text-danger': value.available === false
                            }"
                            :value="god"
                            >
                                {{ god }}
                            </option>
                            </template>
                    </select>
                </div>
            </template>

            <template 
            v-if="['Clérigo', 'Hechicero'].includes(props.currentClass.mainClass)"
            >
                <div class="col-12 p-3 pb-4 d-flex flex-column align-items-start">
                    <h2 class="">
                        Nivel de clase
                    </h2>
                    <input class="w-25 text-center rol-input fs-3" type="text">
                </div>
            </template>
        </div>
    </div>
</template>

<style scoped lang="scss">


</style>