<template>
    <div>
        <slot></slot>
    </div>
</template>

<script>
    import {inputMixins} from "../../utils/mixins";
    export default {
        name:"sRadioGroup",
        componentName:"sRadioGroup",
        mixins:[inputMixins],
        props:{
            value:String
        },
        methods:{
            update(val){
                this.updateModel(val);
            }
        }
    }
</script>

<style scoped lang="less">

</style>
