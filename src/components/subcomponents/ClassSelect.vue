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
</script>

<template>
    <div class="col-12 row justify-content-start align-items-start p-1 pt-2 text-center border border-2 border-black rol-subwindow">
        <div class="row col-12 m-0 p-0">
            <div class="col-6 p-3 d-flex flex-column align-items-start">
                <h2 class="">
                    Clase
                </h2>
                <select class="w-100 fs-3" v-model="props.currentClass.mainClass" name="classSelect" id="">
                    <option value="">&nbsp;</option>
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
                class="col-6 p-3 d-flex flex-column align-items-start"
                >
                    <h2 class="">
                        Sub clase
                    </h2>
                    <select class="w-100 fs-3" v-model="props.currentClass.subClass" name="subClassSelect" id="">
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
                <div class="col-6 p-3 d-flex flex-column align-items-start">
                    <h2 class="">
                        Tu Adorado
                    </h2>
                    <select class="w-100 fs-3" v-model="props.currentClass.god" name="godSelect" id="">
                        <template
                        v-for="(value, god, index) in props.gods"
                        :key="index"
                        >    
                            <option 
                            :value="index"
                            >
                                {{ god }}
                            </option>
                            </template>
                    </select>
                </div>
            </template>
        </div>
    </div>
</template>

<style scoped lang="scss">
select{
    margin:0;
    padding:0;
    background:$rol-button-background;
    border-bottom:2px black solid;
    border-radius: 5px;
    color:black;
}


</style>