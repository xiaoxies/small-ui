<template>
    <div @click.stop="clickHander" :values="value" :class="[
        'small-model-checkbox',
        value?'small-model-checkbox-active':''
    ]"></div>
</template>

<script>
    import {inputMixins} from "../../utils/mixins";
    export default {
        name:"sModelCheckbox",
        componentName:"sModelCheckbox",
        mixins:[inputMixins],
        props:{
            value:Boolean
        },
        methods:{
            clickHander(){
                this.$emit("click",this.value);
            }
        }
    }
</script>

<style scoped lang="less">
    .small-model-checkbox{
        width:14px;height:14px;display:inline-block;float:left;background-color: #fff;border: 1px solid #dcdfe6;
        position: relative;
    }
    .small-model-checkbox-active{
        background:#409eff;border-color:#409eff;
    }
</style>
