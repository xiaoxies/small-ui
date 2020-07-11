<template>
    <div :class="{
        'small-cascader':true,
        'small-cascader-active':visible
    }" v-click-cascader>
        <div class="small-cascader-content">{{value}}</div>
        <div class="small-cascader-icon"><s-icon :type="visible?'icon-xiangshangshouqi':'icon-xiangxiazhankai'" color="#c0c4cc"></s-icon></div>

        <transition name="cascader">
            <div class="small-cascader-menu" v-if="visible">
                <div class="small-cascader-list">
                    <div class="small-cascader-menu-one">
                        <div class="small-cascader-menu-li" v-for="(item,index) in option" :key="'first'+index" @click="first(item,1)">
                            <s-icon v-if="item.active&&!item.children" type="icon-zhengquewancheng" size="18px" :color="item.active?'#409eff':'#606266'"></s-icon>
                            <div class="small-cascader-menu-name" :style="{
                                'color':item.active?'#409eff':'',
                                'font-weight':item.active?'bold':'',
                            }">{{item[label]}}</div>
                            <div class="small-cascader-next" v-if="item.children">
                                <s-icon type="icon-xiayiyeqianjinchakangengduo" size="18px" :color="item.active?'#409eff':'#606266'"></s-icon>
                            </div>
                        </div>
                    </div>
                    <div  class="small-cascader-menu-one" v-if="children.length>0">
                        <div class="small-cascader-menu-li" v-for="(item,_index) in children" :key="'two'+_index"  @click="first(item,2)">
                            <s-icon v-if="item.active&&!item.children" type="icon-zhengquewancheng" size="18px" :color="item.active?'#409eff':'#606266'"></s-icon>
                            <div class="small-cascader-menu-name" :style="{
                                'color':item.active?'#409eff':'',
                                'font-weight':item.active?'bold':'',
                            }">{{item[label]}}</div>
                            <div class="small-cascader-next" v-if="item.children">
                                <s-icon type="icon-xiayiyeqianjinchakangengduo" size="18px" :color="item.active?'#409eff':'#606266'"></s-icon>
                            </div>
                        </div>
                    </div>
                    <div  class="small-cascader-menu-one" v-if="next.length>0">
                        <div class="small-cascader-menu-li" v-for="(item,_index) in next" :key="'two'+_index"  @click="first(item,3)">
                            <s-icon v-if="item.active&&!item.children" type="icon-zhengquewancheng" size="18px" :color="item.active?'#409eff':'#606266'"></s-icon>
                            <div class="small-cascader-menu-name" :style="{
                                'color':item.active?'#409eff':'',
                                'font-weight':item.active?'bold':'',
                            }">{{item[label]}}</div>
                            <div class="small-cascader-next" v-if="item.children">
                                <s-icon type="icon-xiayiyeqianjinchakangengduo" size="18px" :color="item.active?'#409eff':'#606266'"></s-icon>
                            </div>
                        </div>
                    </div>

                    <div class="small-cascader__arrow"></div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
    import sIcon from "../../icon";
    import {sCheckbox} from "../../checkbox";
    export default {
        name:"cascader",
        componentName:"cascader",
        components:{sIcon,sCheckbox},
        directives:{
            clickCascader:{
                bind(el,bindings,vnode){
                    el.handler=(e)=>{
                        if(!vnode.context.closed){
                            return
                        }
                        if(el.contains(e.target)){
                            if(!vnode.context.visible){
                                vnode.context.show();
                            }
                        }else{
                            if(vnode.context.visible){
                                vnode.context.hide();
                            }
                        }
                    };
                    document.addEventListener(vnode.context.trigger,el.handler)
                },
                unbind(el,bindings,vnode){
                    document.addEventListener(vnode.context.trigger,el.handler)
                }
            }
        },
        props:{
            data:{required:true,type:Array},
            label:{type:String,default:"label"},
            val:{type:String,default:"value"},
            multiple:{type:Boolean,default:false},
            trigger:{type:String,default:"click" },
            value:{type:Array}
        },
        created(){
            this.option=this.tree(this.data)
        },
        data() {
            return {
                visible:false,
                closed:true,
                values:[],
                option:[],
                children:[],
                next:[]
            }
        },
        methods:{
            first(item,index){
                if(index==1){
                    this.option=this.tree(this.data);
                    this.next=[];
                    if(item.children){
                        this.children=item.children;
                    }
                }else if(index==2){
                    this.tree(item.parent.children)
                    if(item.children){
                        this.next=item.children;
                    }
                }else{
                    this.tree(item.parent.children)
                }
                item.active=true;
                if(!item.children){
                    //this.$emit("value",this.values);
                    this.hide();
                }

            },
            tree(data,parent){
                data.forEach((item,key)=>{
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
            show(){

                this.visible=true;
            },
            hide(){
                this.visible=false;
                this.closed=false;
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
        &:hover{
            border-color: #c0c4cc;
        }
    }
    .small-cascader-list{position: relative;background: #fff;border: 1px solid #e4e7ed;box-shadow: 0 2px 8px 0 rgba(0,0,0,.1);    border-radius: 4px;display:flex;align-items: center;justify-content: flex-start;}
    .small-cascader-active{
        border-color:#409eff;
        &:hover{border-color:#409eff;}
    }
    .small-cascader-content{
        width:100%;height:100%;padding-right:35px;color:#606266;font-size:14px;
        overflow:hidden;text-overflow: ellipsis;white-space: nowrap;padding-left:10px;
    }
    .small-cascader-icon{
        width:35px;height:100%;display:flex;align-items: center;justify-content: center;
        position: absolute;right:0px;top:0px;transition: all 0.3s;
    }
    .small-cascader-menu{position: absolute;top:40px;left:0px;padding-top:10px;}
    .small-cascader-menu-one{width:180px;height:200px;overflow-y:auto;border-right: 1px solid #e4e7ed;padding-top:8px;}
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
    .small-cascader-menu-li{
        width:100%;height:35px;padding-right:25px;position: relative;padding-left:10px;
        display:flex;align-items: center;justify-content: flex-start;
        &:hover{background: #f5f7fa;}
        .small-cascader-menu-name{margin-left:5px;font-size:14px;box-sizing: border-box;width:120px;white-space: nowrap;text-overflow: ellipsis;overflow:hidden;}
        .small-cascader-next{position: absolute;right:7px;height:100%;display:flex;align-items: center;justify-content: center;}
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
