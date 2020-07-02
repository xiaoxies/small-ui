<template>
    <div class="small-steps" :length="steps.length">
        <slot></slot>
        {{value}}
    </div>
</template>

<script>
    import {inputMixins} from "../../utils/mixins";
    export default {
        name:"sSteps",
        mixins:[inputMixins],
        componentName:"sSteps",
        provide(){
            return {
                sSteps:this
            }
        },
        props:{
            value:{
                type:Number,
                default:0
            }
        },
        data(){
            return {
                steps:[]
            }
        },
        watch:{
            steps(arr){
                arr.forEach((child, index) => {
                    child.index = index;
                });
            }
        }
    }
</script>

<style scoped lang="less">
    .small-steps{
        width:100%;display:flex;align-items: center;justify-content: flex-start;
    }
</style>
