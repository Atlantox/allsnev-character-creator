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

const selectclass = 'w-100 fs-5 rol-select align-bottom'
const selectContainerClass = 'col-12 p-3 pb-4 d-flex flex-column align-items-start align-bottom'
</script>

<template>
    <div class="class-container col-12 row justify-content-start align-items-start m-0 p-0 text-center border border-2 border-black rol-subwindow align-bottom">
        <div class="row col-12 m-0 p-0 fs-4 justify-content-start">
            <div :class="selectContainerClass">
                <h2>
                    Clase
                </h2>
                <select 
                :class="selectclass" 
                v-model="props.currentClass.mainClass" 
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
                v-if="props.classes[props.currentClass.mainClass].subClasses !== false"
                :class="selectContainerClass"
                >
                    <h2>
                        Sub clase
                    </h2>
                    <select 
                    :class="selectclass" 
                    v-model="props.currentClass.subClass" 
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
                <div :class="selectContainerClass">
                    <h2>
                        Tu Adorado
                    </h2>
                    <select 
                    :class="selectclass" 
                    v-model="props.currentClass.god" 
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
                <div class="col-12 p-3 pb-4 d-flex flex-column align-items-start align-bottom">
                    <h2 class="">
                        Nivel de clase
                    </h2>
                    <input class="w-25 fs-5 text-center rol-input align-bottom" type="text">
                </div>
            </template>
        </div>
    </div>
</template>

<style scoped lang="scss">

input, select, option{
    color:$font-color;
    text-shadow: 0 0 2px black !important;
}

select{
    height:35px;
    padding-top:6px;
}
</style>