<template>
    <div class="small-tree" key="small-tree">
        <div class="small-tree-ul">
            <s-tree-item :data="list" :props="props" :show-all="showAll" :show-checkbox="showCheckbox">
                <template slot-scope="{row}">
                    <slot :row="row"></slot>
                </template>
            </s-tree-item>
        </div>
    </div>
</template>

<script>

    import sTreeItem from "./tree-item";
    import {inputMixins} from "../../utils/mixins";
    export default {
        name:"sTree",
        componentName:"sTree",
        components:{sTreeItem},
        mixins:[inputMixins],
        props:{
            data:{type:Array,default:()=>[]},
            showAll:{type:Boolean,default:false},
            showCheckbox:{type:Boolean,default:false},
            value:{type:Array,default:()=>[]},
            nodeKey:{type:String,default:"id"},
            props:{
                type:Object,default(){
                    return {
                        label:'label',
                    }
                }
            }
        },
        provide(){
            return {
                'sTree':this
            }
        },
        data(){
            return {
                list:this.tree(this.data),
                values:[]
            }
        },
        methods:{
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
            checkIsChecked(data){
                data.forEach((item)=>{
                    if(item.checked){
                        if(item[this.nodeKey]){
                            this.values.push(item[this.nodeKey]);
                        }
                    }
                    if(item.children){
                        this.checkIsChecked(item.children);
                    }
                })
            },
            update(){
                this.values=[];
                this.checkIsChecked(this.list);
                this.updateModel(this.values);
            },
            tree(data,parent){
                data.forEach((item,index)=>{
                    if(parent){
                        this.$set(item,"parent",parent)
                    }
                    this.$set(item,"show",this.showAll);
                    if(this.showCheckbox){
                        if(this.value.indexOf(item[this.nodeKey])!==-1){
                            this.$set(item,"checked",true);
                            this.parentChecked(item);
                        }else{
                            this.$set(item,"checked",false);
                        }
                    }else{
                        this.$set(item,"checked",false);
                    }
                    this.$set(item,"label",item[this.props.label]);
                    this.$set(item,"indeterminate",false);
                    this.$set(item,"children",item.children);

                    if(item.children){
                        this.tree(item.children,item)
                    }
                })
                return data;
            }
        }
    }
</script>

<style scoped lang="less">
    .small-tree{width:100%;margin-top:5px;}
    .small-tree-ul{width:100%;padding-left:20px;}
    .small-tree-li{
        width:100%;display:flex;align-items: center;justify-content: flex-start;flex-wrap: wrap;font-size:14px;color:#606266;margin-bottom:5px;cursor: pointer;
        &:hover{background:#f5f7fa;}
    }
    .small-tree-li:last-child{margin-bottom:0px;}
</style>
