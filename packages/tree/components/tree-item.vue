<template>
    <div class="small-tree-item">
            <div class="small-tree-li"  v-for="(item,index) in data" :key="item.label">
                <div class="small-tree-icon" @click.stop="showItem(item,index)">
                    <div :style="{
                        'padding-left':level*18+'px'
                    }">
                        <i :style="{
                            'opacity':item.children?'1':'0'
                        }" :class="[
                            'iconfont icon-biaotou-daoxu',
                            item.show?'':'raote'
                        ]" ></i>
                        <s-model-checkbox :value="item.checked" :indeterminate="item.indeterminate" @click.native.stop="checked(item,index)" style="margin-right:5px;"></s-model-checkbox>
<!--                        <span v-if="!$slots">{{item.label}}</span>-->
                        <div class="small-tree-slot">
                            <node-content :row="item"></node-content>
                        </div>
                    </div>
                </div>
                <transition-group name="tree">
                    <div class="small-tree-item-content" :key="item.label" v-show="item.show">
                        <s-tree-item :data="item.children" :show-checkbox="showCheckbox" :level="level+1" :show-all="showAll" :props="props" v-if="item.children && item.children.length"></s-tree-item>
                    </div>
                </transition-group>
            </div>

    </div>
</template>

<script>
    import sIcon from "../../icon";
    import {sModelCheckbox} from "../../checkbox";
    export default {
        name:"sTreeItem",
        componentName:"sTreeItem",
        components:{
            sIcon,
            sModelCheckbox,
            nodeContent: {  //无线级分类传递slot和参数
                props: {
                    row: {
                        required: true
                    }
                },
                render(h) {
                    const parent = this.$parent;
                    const tree = parent.sTree;
                    const row = this.row;
                    return (
                        tree.$scopedSlots.default?tree.$scopedSlots.default({ row }):<span>{row.label}</span>
                    );
                }
            }
        },
        inject:["sTree"],
        props:{
            data:{type:Array,default:()=>[]},
            showAll:{type:Boolean,default:false},
            showCheckbox:{type:Boolean,default:false},
            props:{
                type:Object,default(){
                    return {
                        label:'label',
                    }
                }
            },
            level:{type:Number,default:1}
        },
        methods:{
            checked(item,index){
                item.checked=!item.checked;
                if(item.checked){
                    item.indeterminate=false;
                }
                this.childrenChecked(item);
                this.parentChecked(item);
                this.sTree.update()
            },
            childrenChecked(item){
                if(item.children){
                    item.children.forEach((items,indexs)=>{
                        items.checked=item.checked;
                        if(items.checked){
                            items.indeterminate=false;
                        }
                        if(items.children){
                            this.childrenChecked(items);
                        }
                    })
                }
            },
            parentChecked(item){
                if(item.parent){
                    let num=0;
                    let indeterminateNum=0;
                    item.parent.children.forEach((items)=>{
                        if(items.checked){
                            num+=1;
                        }
                        if(items.indeterminate){
                            indeterminateNum+=1;
                        }
                    })
                    if(num == item.parent.children.length){
                        item.parent.checked=true;
                        item.parent.indeterminate=false;
                    }else if(num>0){
                        item.parent.checked=false;
                        item.parent.indeterminate=true;
                    }else{
                        if(indeterminateNum>0){
                            item.parent.checked=false;
                            item.parent.indeterminate=true;
                        }else{
                            item.parent.checked=false;
                            item.parent.indeterminate=false;
                        }
                    }
                    this.parentChecked(item.parent);
                }
            },
            showItem(item,index){
                if(!item.children){
                    return
                }
                item.show=!item.show;
            }
        }
    }
</script>

<style scoped lang="less">
    .small-tree-item{
        font-size:14px;color:#606266;width:100%;
    }
    .small-tree-slot{width:90%;}
    .small-tree-item-content{
        width:100%;
    }
    .small-tree-icon{
        font-size:14px;color:#606266;cursor: pointer;transition: all 0.3s;
        &:hover{background:#f5f7fa;}
        &>div{
            padding-bottom:2px;display:flex;align-items: center;justify-content: flex-start;
            i{font-size:20px;color:#606266;}
        }
    }
    .raote{transition: all 0.3s;transform: rotate(-90deg);}
    .tree-enter-active{animation: tree-fade-in 0.2s;}
    .tree-leave-active{animation: tree-fade-out 0.2s;}
    @keyframes tree-fade-in {
        0%{opacity:0.6;transform: translate3d(-20px, 0px, 0);}
        100%{opacity:1;transform: translate3d(0, 0, 1);}
    }
    @keyframes tree-fade-out {
        0%{opacity:1;transform: translate3d(0, 0, 1);}
        100%{opacity:0.6;transform: translate3d(-20px, 0px, 0);}
    }
</style>
