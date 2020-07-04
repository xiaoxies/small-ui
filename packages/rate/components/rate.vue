<template>
    <div class="small-rate">
        <i :class="{
            'iconfont':true,
            [item.icon]: !item.active,
            [item.activeIcon] : item.active
        }" v-for="(item,index) in list" :key="index"></i>
    </div>
</template>

<script>
    import {inputMixins} from "../../utils/mixins";
    export default {
        name:"sRate",
        componentName:"sRate",
        mixins:[inputMixins],
        props:{
            max:{type:Number,default:5},
            icon:{type:String,default:"icon-shoucang-xianxing"},
            activeIcon:{type:String,default:"icon-shoucang"},
            activeColor:{type:String|Object,default:"#f7ba2a"},
        },
        data(){
            return {
                list:[]
            }
        },
        created(){
            this.list=[];
            for(let i=1;i<=this.max;i++){
                this.list.push({
                    index:i,
                    active:false,
                    icon:this.icon,
                    activeIcon:this.activeIcon,
                    activeColor:this.activeColor
                })
            }
        }
    }
</script>

<style scoped lang="less">
    .small-rate,.small-rate *{box-sizing: border-box;}
    .small-rate{display:flex;justify-content: flex-start;align-items: flex-start;flex-wrap: wrap;cursor: pointer;}
    .small-rate i {margin-right:5px;color:#c0c4cc;font-size:18px;}
</style>
