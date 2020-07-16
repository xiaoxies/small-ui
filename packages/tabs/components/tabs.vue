<template>
    <div :class="[
        'small-tabs',
        'small-tabs-all-'+type
    ]">
        <div :class="[
            'small-tabs-header',
            'small-tabs-'+type
        ]">
            <div :class="[
                'small-tabs-nav',
                'small-tabs-nav-'+type
            ]">
                <slot></slot>
            </div>
            <div v-if="type=='default'" :style="{
                width:width+'px',
                'transform': 'translateX('+left+'px)'
            }" class="small-tabs-border-bottom"></div>
        </div>
        <div class="small-tabs-content" v-if="!router">
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
                    value:String,
                },
                render(h){
                    const {$slots,title,name,sTabs} = this.node;
                    if(name == sTabs.value){
                        sTabs.left=this.node.$el.offsetLeft;
                        sTabs.width=this.node.$el.offsetWidth
                        return (<div  class="small-tabs-item-default">{$slots.default}</div>);
                    }else{
                        return "";
                    }
                }
            }
        },
        props:{
            type:{type:String,default:"default"},
            activeColor:{type:String,default:"#409eff"},
            value:{type:String,default:""},
            router:{type:Boolean,default:false}
        },
        provide(){
            return {
                'sTabs':this
            }
        },
        methods:{
            tabClose(item){
                this.$emit('tab-close',item);
            },
            tabClick(item){
                this.updateModel(item.name)
                this.$emit('tab-click',item);
            }
        },
        data(){
            return {
                panels:[],
                width:0,
                left:0
            }
        }
    }
</script>
<style lang="less" scoped>
    .small-tabs{width:100%;display:flex;align-items: center;justify-content: flex-start;position: relative;flex-wrap: wrap;overflow:hidden;}
    .small-tabs-header{
        width:100%;display:flex;align-items: center;justify-content: flex-start;position: relative;margin-bottom:5px;
    }
    .small-tabs-nav{
        display:flex;align-items: center;justify-content: flex-start;overflow-x:auto;
    }
    .small-tabs-nav-card{
        border: 1px solid #e4e7ed;    border-bottom: none;    border-radius: 4px 4px 0 0;
    }
    .small-tabs-content{width:100%;}
    .small-tabs-item{width:100%;}
    .small-tabs-default{border-bottom:2px solid #e4e7ed;}
    .small-tabs-card{border-bottom:1px solid #e4e7ed;}
    .small-tabs-border-card{
        background-color: #f5f7fa;
    }
    .small-tabs-all-border-card{
        background: #fff;
        border: 1px solid #dcdfe6;
        box-shadow: 0 2px 4px 0 rgba(0,0,0,.12), 0 0 6px 0 rgba(0,0,0,.04);
    }
    .small-tabs-border-bottom{
        position: absolute;bottom:-2px;left:0px;background-color: #409eff;height:2px;
        transition: all 0.3s;width:100px;
    }
</style>
