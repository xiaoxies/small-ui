<template>
    <div :class="{
        'small-cascader':true,
        'small-cascader-active':visible,
        'small-cascader-disabled':disabled,
    }" ref="cascader" v-click-cascader >
        <div class="small-cascader-content" >
            <div class="small-cascader-no-multiple" v-if="!multiple">{{labelName.join(" / ")}}</div>
            <div class="small-cascader-multiple-content" v-if="multiple">
                <s-tag closable v-for="(item,index) in labelName" :key="index" @close="tagClose(item,index)">{{item && item.join && item.join(' / ')}}</s-tag>
            </div>
        </div>
        <div class="small-cascader-icon">
            <s-icon v-if="values.length==0" :type="visible?'icon-xiangshangshouqi':'icon-xiangxiazhankai'" color="#c0c4cc"></s-icon>
            <s-icon v-if="values.length>0" type="icon-cuowuguanbiquxiao-yuankuang" color="#c0c4cc" @click="clearValues"></s-icon>
        </div>
        <transition name="cascader">
            <div class="small-cascader-menu" :style="{
                'top':top+'px'
            }" v-if="visible">
                <div class="small-cascader-list">
                    <s-cascader-panel :data="option" index="option" @click="clickHander" @change="changeHander"></s-cascader-panel>
                    <s-cascader-panel :data="children" index="children" @click="clickHander" @change="changeHander"></s-cascader-panel>
                    <s-cascader-panel :data="next" index="next" @click="clickHander" @change="changeHander"></s-cascader-panel>
                    <div class="small-cascader__arrow"></div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
    import sIcon from "../../icon";
    import sTag from "../../tag";
    import sCascaderPanel from "./cascader-panel";
    import {inputMixins} from "../../utils/mixins";
    export default {
        name:"sCascader",
        componentName:"sCascader",
        components:{sIcon,sCascaderPanel,sTag},
        mixins:[inputMixins],
        provide(){
            return {
                "sCascader":this
            }
        },
        directives:{
            clickCascader:{
                bind(el,bindings,vnode){
                    el.handler=(e)=>{
                        if(!vnode.context.closed){
                            return
                        }
                        if(vnode.context.disabled){
                            return
                        }
                        if(el.contains(e.target)){
                            if(!vnode.context.visible){
                                vnode.context.show();
                            }
                        }else{
                            if(vnode.context.visible ){
                                vnode.context.hide();
                            }
                        }
                    };
                    document.addEventListener('click',el.handler)
                },
                unbind(el,bindings,vnode){
                    document.addEventListener('click',el.handler)
                }
            }
        },
        props:{
            data:{required:true,type:Array},
            label:{type:String,default:"label"},
            val:{type:String,default:"value"},
            multiple:{type:Boolean,default:false},
            value:{type:Array},
            disabled:{type:Boolean,default:false},
        },
        data() {
            return {
                visible:false,
                cleared:true,
                closed:true,
                values:[],
                option:[],
                children:[],
                next:[],
                labelName:[],
                top:46
            }
        },
        created(){
            this.option=this.tree(this.data);
            if(this.value.length>0){
                if(this.multiple){
                    this.initMultipleData(this.option);
                    this.labelName=[];
                    this.values=[];
                    this.getMultipleValue(this.option);
                    this.updateModel(this.values);
                }else{
                    let arr=this.option;
                    this.labelName=this.initData(arr,[]);
                    console.log(arr);
                    this.option=arr;
                }
            }
        },
        methods:{
            initData(data,arr){
                data=data.map((item,index)=>{
                    if(this.value.indexOf(item[this.val])!==-1){
                        item.active=true
                        arr.push(item[this.label]);

                    }
                    if(item.children){
                        if(this.children.length==0){
                            this.children=item.children;
                        }else if(this.children.length>0 && this.next==0){
                            this.next=item.children;
                        }
                        this.initData(item.children,arr);
                    }
                    return item;
                })
                return arr;
            },
            initMultipleData(data){
                data=data.map((item,index)=>{
                    for(let i=0;i<this.value.length;i++){
                        let str = this.value[i][this.value[i].length-1];
                        if(item[this.val]==str){
                            item.checked=true;
                            this.initMultipleRenderData(item);
                        }
                    }
                    if(item.children){
                        this.initMultipleData(item.children);
                    }
                    return item;
                })
            },
            initMultipleRenderData(data){
                if(data.parent){
                    let num=0;
                    let indeterminateNum=0;
                    data.parent.children.map((item,index)=>{
                        if(item.checked){
                            num+=1;
                        }
                    })
                    if(num == data.parent.children.length){
                        data.parent.checked=true;
                        data.parent.indeterminate=false;
                    }else if(num>0){
                        data.parent.checked=false;
                        data.parent.indeterminate=true;
                    }
                    if(data.parent.parent){
                        this.initMultipleRenderData(data.parent);
                    }
                }
            },
            clearValues(){
                this.option=this.tree(this.data);
                this.next=[];
                console.log(this.option,"=====this.option");
                if(this.multiple){
                    this.checkIsChcked();
                }
                this.labelName=[];
                this.updateModel([]);
            },
            tagClose(item,index){
                let str = item[item.length-1]
                this.removeDataRow(this.option,str);
            },
            removeDataRow(data,str){
                data.forEach((item)=>{
                    if(item[this.label] == str){
                        console.log(item);
                        item.checked=false;
                        this.checkIsChcked();
                    }else{
                        if(item.children){
                            this.removeDataRow(item.children,str);
                        }
                    }
                })
            },
            changeHander(item,index,type){
                switch(type){
                    case 'option':
                        let arr1=this.option;
                        arr1[index].checked=!item.checked;
                        arr1[index].indeterminate=false;
                        arr1[index]=this.multipleInitOption(arr1[index],item.checked)
                        this.option=arr1;
                        this.children=[];
                        this.checkIsChcked()
                        break;
                    case 'children':
                        if(this.children[index].children){
                            let arr2=this.children;
                            arr2[index].checked=!item.checked;
                            arr2[index].indeterminate=false;
                            arr2[index]=this.multipleInitOption(arr2[index],item.checked)
                            this.children=arr2;
                            this.next=[];
                            this.checkIsChcked()
                        }else{
                            this.children=this.children.map((row,key)=>{
                                if(key==index){
                                    row.checked=!item.checked
                                }
                                return row;
                            })
                            this.checkIsChcked()
                        }
                        break;
                    case 'next':
                        this.next=this.next.map((row,key)=>{
                            if(key==index){
                                row.checked=!item.checked;
                            }
                            return row;
                        })
                        this.checkIsChcked()
                        break;
                }
            },
            checkIsChcked(){
                this.children=this.children.map((item,index)=>{
                    let num=0;
                    if(item.children){
                        item.children.forEach((items,indexs)=>{
                            if(items.checked){
                                num+=1;
                            }
                        })
                        if(item.children&&item.children.length==num){
                            item.checked=true;
                            item.indeterminate=false;
                            return item;
                        }else if(num>0){
                            item.checked=false;
                            item.indeterminate=true;
                            return item;
                        }else{
                            item.checked=false;
                            item.indeterminate=false;
                            return item;
                        }
                    }
                    return item;
                })
                this.option=this.option.map((item,index)=>{
                    let checkNum=0;
                    let indeterminateNum=0;
                    if(item.children){
                        item.children.forEach((items,indexs)=>{
                            if(items.checked){
                                checkNum+=1;
                            }
                            if(items.indeterminate){
                                indeterminateNum+=1;
                            }
                        })
                        if(item.children.length==checkNum){
                            item.checked=true;
                            item.indeterminate=false;
                            return item;
                        }else if(checkNum>0){
                            item.checked=false;
                            item.indeterminate=true;
                            return item;
                        }else{
                            if(indeterminateNum>0){
                                item.checked=false;
                                item.indeterminate=true;
                            }else{
                                item.checked=false;
                                item.indeterminate=false;
                            }
                            return item;
                        }
                    }
                    return item;
                })
                this.labelName=[];
                this.values=[];
                this.getMultipleValue(this.option);
                this.updateModel(this.values);
                this.$nextTick(()=>{
                    this.top=this.$refs.cascader.offsetHeight;
                })
            },
            getMultipleValue(data){
                data && data.forEach((item)=>{
                    if(item.checked && !item.children){
                        const {label,value} = this.getMultipleLabel(item,[],[]);
                        this.labelName.push(label);
                        this.values.push(value);

                    }
                    if(item.children){
                        this.getMultipleValue(item.children)
                    }
                })
            },
            getMultipleLabel(item,label,value){
                label.unshift(item[this.label])
                value.unshift(item[this.val])
                if(item.parent){
                    this.getMultipleLabel(item.parent,label,value);
                }
                return {
                    label,
                    value
                }
            },
            multipleInitOption(data,bool){
                data.children&&data.children.forEach((item,index)=>{
                    item.checked=bool;
                    item.indeterminate=false;
                    this.multipleInitOption(item,bool);
                })
                return data;
            },
            tree(data,parent){
                data.forEach((item)=>{
                    item.active=false;
                    item.checked=false;
                    item.indeterminate=false;
                    if(parent){
                        item.parent=parent;
                    }
                    if(item.children){
                        this.tree(item.children,item);
                    }
                })
                return data;
            },
            initOption(data){
                data=data.map((item,key)=>{
                    item.active=false;
                    if(item.children){
                        this.initOption(item.children);
                    }
                    return item;
                });
                return data;
            },
            clickHander(item,index,type){
                switch(type){
                    case 'option':
                        let arr=this.option;
                        arr=this.initOption(arr);
                        arr[index].active=true;
                        this.option=arr;
                        this.next=[];
                        if(this.option[index].children){
                            this.children=this.option[index].children;
                        }else{
                            if(this.multiple)return
                            this.values=[];
                            this.labelName=[];
                            this.getValue(this.option[index]);
                            this.updateModel(this.values);

                            this.hide();
                        }
                        break;
                    case 'children':
                        let arr1=this.children;
                        arr1=this.initOption(arr1);
                        arr1[index].active=true;
                        this.children=arr1;
                        if(this.children[index].children){
                            this.next=this.children[index].children;
                        }else{
                            if(this.multiple)return
                            this.values=[];
                            this.labelName=[];
                            this.getValue(this.children[index]);
                            this.updateModel(this.values);

                            this.hide();
                        }
                        break;
                    case 'next':
                        let arr2=this.next;
                        arr2=this.initOption(arr2);
                        arr2[index].active=true;
                        this.next=arr2;
                        if(this.multiple)return
                        this.values=[];
                        this.labelName=[];
                        this.getValue(this.next[index]);
                        this.updateModel(this.values);

                        this.hide();
                        break;
                }
            },
            getValue(data){
                this.labelName.unshift(data[this.label])
                this.values.unshift(data[this.val])
                if(data.parent){
                    this.getValue(data.parent);
                }
            },
            show(){
                this.$emit("show");
                this.visible=true;
                this.$nextTick(()=>{
                    this.top=this.$refs.cascader.offsetHeight;
                })
            },
            hide(){
                this.visible=false;
                this.closed=false;
                this.$emit("hide");
                setTimeout(()=>{
                    this.closed=true;
                },300)
            }
        }
    }
</script>

<style scoped lang="less">

    .small-cascader{
        position: relative;width:100%;min-height:40px;background-color: #fff;border-radius: 4px;transition: all 0.4s;
        border: 1px solid #dcdfe6;box-sizing: border-box;cursor: pointer;display:flex;align-items: center;justify-content: space-between;

    }
    .small-cascader-list{position: relative;background: #fff;border: 1px solid #e4e7ed;box-shadow: 0 2px 8px 0 rgba(0,0,0,.1);    border-radius: 4px;display:flex;align-items: center;justify-content: flex-start;}
    .small-cascader-active{
        border-color:#409eff;
        &:hover{border-color:#409eff;}
    }
    .small-cascader-content{
        width:100%;height:100%;padding-right:35px;color:#606266;
        padding-left:10px;
        .small-cascader-no-multiple{width:100%;height:100%;overflow:hidden;text-overflow: ellipsis;white-space: nowrap;font-size:14px;}
        .small-cascader-multiple-content{
            padding:5px;padding-bottom:0px;
            /deep/ .small-tag{margin-bottom:5px;margin-left:0px;margin-right:5px;}
        }
    }
    .small-cascader-icon{
        width:35px;height:100%;display:flex;align-items: center;justify-content: center;
        position: absolute;right:0px;top:0px;transition: all 0.3s;
    }
    .small-cascader-menu{position: absolute;top:40px;left:0px;padding-top:10px;}

    .small-cascader-menu-one:last-child{border-right: none;}
    .small-cascader__arrow{
        display:block;
        width:0;height:0;
        border-width:10px;border-style:solid;
        border-color:transparent  transparent #e4e7ed transparent;
        position:absolute;
        top:-20px;left:70px;
        &::after{
            content: '';
            display:block;width:0;height:0;
            border-width: 10px;border-style:solid;
            border-color:transparent  transparent #fff transparent;
            position:absolute;top:-9px;left:-10px;
        }
    }

    .small-cascader-disabled{
        cursor: not-allowed;background-color: #f5f7fa;
        border-color: #e4e7ed;color: #c0c4cc;
    }

    .cascader-enter-active{animation: cascader-fade-in 0.3s;}
    .cascader-leave-active{animation: cascader-fade-out 0.3s;}
    @keyframes cascader-fade-in {
        0% {transform: translate3d(0, -20px, 0);opacity: 0;}
        100% {transform: translate3d(0, 0, 0);opacity: 1;}
    }
    @keyframes cascader-fade-out {
        0% {transform: translate3d(0, 0, 0);opacity: 1;}
        100% {transform: translate3d(0, -20px, 0);opacity: 0;}
    }
</style>
