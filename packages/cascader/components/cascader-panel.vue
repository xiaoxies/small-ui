<template>
    <div  class="small-cascader-menu-one" v-if="data.length>0" >
        <div class="small-cascader-menu-li" v-for="(item,indexs) in data" :key="indexs" @click.stop="cliclHander(item,indexs)">
            <s-model-checkbox v-if="sCascader.multiple" :value="item.checked" @click="inputChange(item,indexs)" :indeterminate="item.indeterminate"></s-model-checkbox>
            <s-icon v-if="item.active&&!item.children&&!sCascader.multiple" type="icon-zhengquewancheng" size="18px" :color="item.active?'#409eff':'#606266'"></s-icon>
            <div class="small-cascader-menu-name" :style="{
                                'color':item.active?'#409eff':'',
                                'font-weight':item.active?'bold':'',
                            }">{{item[sCascader.label]}}</div>
            <div class="small-cascader-next" v-if="item.children">
                <s-icon type="icon-xiayiyeqianjinchakangengduo" size="18px" :color="item.active?'#409eff':'#606266'"></s-icon>
            </div>
        </div>
    </div>
</template>

<script>
    import sIcon from "../../icon";
    import sModelCheckbox from "./checkbox";
    export default {
        name:"sCascaderPanel",
        componentName:"sCascaderPanel",
        components:{sIcon,sModelCheckbox},
        inject:['sCascader'],
        props:{
            data:{type:Array,default:()=>[]},
            index:{type:String}
        },
        methods:{
            cliclHander(item,index){
                this.$emit("click",item,index,this.index);
            },
            inputChange(item,index){
                this.$emit("change",item,index,this.index);
            }
        }
    }
</script>

<style scoped lang="less">
    .small-cascader-menu-one{width:180px;height:200px;overflow-y:auto;border-right: 1px solid #e4e7ed;padding-top:8px;}
    .small-cascader-menu-li{
        width:100%;height:35px;padding-right:25px;position: relative;padding-left:10px;
        display:flex;align-items: center;justify-content: flex-start;
        &:hover{background: #f5f7fa;}
        .small-cascader-menu-name{margin-left:5px;font-size:14px;box-sizing: border-box;width:120px;white-space: nowrap;text-overflow: ellipsis;overflow:hidden;}
        .small-cascader-next{position: absolute;right:7px;height:100%;display:flex;align-items: center;justify-content: center;}
    }
</style>
