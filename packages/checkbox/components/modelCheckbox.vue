<template>
    <div @click="clickHander" :values="value" :class="[
        'small-model-checkbox',
        value?'small-model-checkbox-active':'',
        indeterminate?'small-model-checkbox-indeterminate':''
    ]"></div>
</template>

<script>
    export default {
        name:"sModelCheckbox",
        componentName:"sModelCheckbox",
        props:{
            value:Boolean,
            indeterminate:Boolean
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
        &::after{
            position: absolute;width:3px;height:8px;border-bottom:1px solid #fff;border-right:1px solid #fff;content:" ";
            transform: rotate(45deg);left:4px;
        }
    }
    .small-model-checkbox-indeterminate{
        background:#409eff;border-color:#409eff;
        &::after{
            position: absolute;width:8px;left:2px;height:2px;background:#fff;content:" ";top:50%;transform: translateY(-50%);
        }
    }
</style>
