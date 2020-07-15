<template>
    <div class="small-tabs">
        <div class="small-tabs-header">
            <slot></slot>
        </div>
        <div class="small-tabs-content">
            <div v-for="(item,index) in panels" :key="index" class="small-tabs-item">
                <node-template :node="item"></node-template>
            </div>
        </div>
    </div>
</template>
<script>
    import {inputMixins} from "../../utils/mixins";
    export default {
        name:"sTabs",
        componentName:"sTabs",
        mixins:[inputMixins],
        components:{
            nodeTemplate:{
                props:{
                    node:Object,
                    value:String
                },
                render(){
                    const {$slots,title,name} = this.node;

                    return (
                        <div class="small-tabs-item-default">{$slots.default}</div>
                    );
                }
            }
        },
        props:{
            type:{type:String,default:"default"},
            activeColor:{type:String,default:"#409eff"},
        },
        provide(){
            return {
                'sTabs':this
            }
        },
        mounted(){
            console.log(this.panels);
        },
        data(){
            return {
                panels:[]
            }
        }
    }
</script>
<style lang="less" scoped>
    .small-tabs{width:100%;display:flex;align-items: center;justify-content: flex-start;position: relative;flex-wrap: wrap;}
    .small-tabs-header{
        width:100%;display:flex;align-items: center;justify-content: flex-start;position: relative;margin-bottom:10px;
    }
    .small-tabs-content{width:100%;}
    .small-tabs-item{width:100%;}
    .small-tabs-item-default{width:100%;}
</style>
