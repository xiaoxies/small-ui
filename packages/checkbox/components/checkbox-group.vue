<template>
    <div>
        <slot></slot>
    </div>
</template>

<script>
    import {inputMixins} from "../../utils/mixins";
    export default {
        name:"sCheckboxGroup",
        componentName:"sCheckboxGroup",
        mixins:[inputMixins],
        props:{
            value:{
                type:Array,
                required:true
            }
        },
        data() {
            return {}
        },
        methods:{
            update(val){
                let newArr=this.value;
                if(newArr.indexOf(val)==-1){
                    newArr.push(val);
                }else{
                    newArr.splice(newArr.findIndex(item => item === val), 1)
                }
                this.updateModel(newArr);
            }
        }
    }
</script>

<style scoped lang="less">

</style>
