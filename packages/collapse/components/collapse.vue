<template>
    <div class="small-collapse">
        <slot></slot>
    </div>
</template>

<script>
    import {inputMixins} from "../../utils/mixins";
    export default {
        name:"sCollapse",
        componentName:"sCollapse",
        mixins:[inputMixins],
        props:{
            value:String,
            accordion:{
                default:false,
                type:Boolean,
            }
        },
        provide(){
            return {
                sCollapse:this
            }
        },
        methods:{
            onChange(name){
                this.updateModel(name);
                this.$emit("change",name)
            }
        }
    }
</script>

<style scoped lang="less">

</style>
