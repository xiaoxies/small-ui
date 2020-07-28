<template>
    <div v-select-click-slide :class="[
        'small-select',
        {'small-select-disabled':disabled}
    ]">
        <div :class="[
            'small-select-input',
            'small-select-input-'+size
        ]" v-if="multiple" :style="{
            'border-color':visible?'#409eff':''
        }">
            <span v-for="(item,index) in labelArr" :key="index" style="padding-bottom:2px;padding-top:2px;">
                <s-tag   @close="closeHander(item,index)" closable size="mini" type="info" >{{item}}</s-tag>
            </span>

            <div class="small-input-suffix-icon" >
                <i :class="visible?'iconfont icon-xiangshangshouqi':'iconfont icon-xiangxiazhankai'"></i>
            </div>
        </div>
        <s-input :size="size" @input="inputChange" :disabled="disabled" v-model="val" v-if="!multiple" :readonly="!filterable" ref="inputs" :placeholder="placeholder" :suffixIcon="visible?'icon-xiangshangshouqi':'icon-xiangxiazhankai'"></s-input>

        <div class="small-select-close" v-show="showClose" @click.stop="clearData">
            <s-icon type="icon-cuowuguanbiquxiao-yuankuang" size="18px" @click.stop="clearData"></s-icon>
        </div>

        <transition name="select">
            <div class="small-select-options" v-show="visible">
                <div class="small-select-scroll">
                    <div class="small-select-options-content">
                        <slot></slot>
                        <div v-if="!$slots.default" class="small-select-zanwu">暂无</div>
                        <div class="small-select-zanwu" v-if="filterable && filteredOptionsCount==0">暂无</div>
                    </div>
                    <div class="small-select__arrow"></div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
    import sInput from "../../input";
    import sTag from "../../tag";
    import sIcon from "../../icon";
    import {inputMixins} from "../../utils/mixins";
    export default {
        name:"sSelect",
        componentName:"sSelect",
        components:{sInput,sTag,sIcon},
        mixins:[inputMixins],
        props:{
            size:{type:String,default:"medium"},
            placeholder:String,
            filterable:{type:Boolean,default:false},
            value:String|Array,
            multiple:{type:Boolean,default:false},
            disabled:{type:Boolean,default:false},
            cleared:{type:Boolean,default:false}
        },
        provide(){
            return {
                "sSelect":this
            }
        },
        directives:{
            selectClickSlide:{
                bind(el,bindings,vnode){
                    el.handler=(e)=>{
                        e.stopPropagation();
                        if(!vnode.context.closed){
                            return
                        }
                        if(vnode.context.disabled){
                            return
                        }
                        if(el.contains(e.target)){
                            if(!vnode.context.visible){
                                vnode.context.show();
                            }else{
                                if(!vnode.context.multiple){
                                    if(vnode.context.$refs.inputs.$el.contains(e.target)){
                                        vnode.context.hide();
                                    }
                                }

                            }
                        }else{
                            vnode.context.hide();
                        }
                    }
                    document.addEventListener('click',el.handler)
                },
                unbind(el,bindings,vnode){
                    document.removeEventListener('click',el.handler)
                }
            }
        },
        computed:{
            showClose(){
                if(this.disabled){
                    return false;
                }
                if(!this.cleared){
                    return false;
                }
                if(this.multiple){
                    return this.valArr.length>0;
                }else{
                    return this.val!=='';
                }
            }
        },
        data() {
            return {
                visible:false,
                closed:true,
                val:"",
                filteredOptionsCount:0,
                optionsCount:0,
                labelArr:[],
                valArr:[],
                options:[]
            }
        },
        watch:{
            value(newValue){
                if(!this.multiple){
                    this.options.forEach((item)=>{
                        if(item.value == newValue){
                            this.val=item.label;
                        }
                    })
                }else if(this.multiple&&newValue !== this.valArr){
                    this.valArr=[];
                    this.labelArr=[];
                    this.options.forEach((item)=>{
                        if(newValue.indexOf(item.value)!==-1){
                            this.valArr.push(item.value);
                            this.labelArr.push(item.label)
                        }
                    })
                }
            }
        },
        methods:{
            clearData(){
                if(this.disabled){
                    return
                }
                if(this.multiple){
                    this.labelArr=[];
                    this.valArr=[];
                    this.updateModel([])
                }else{
                    this.val="";
                    this.updateModel("")
                }
                let num=0;
                this.options.forEach((item)=>{
                    if(item.queryVisible(this.val)){
                        num+=1
                    }
                })
                this.filteredOptionsCount=num;
            },
            inputChange(e){
                let num=0;
                this.options.forEach((item)=>{
                    if(item.queryVisible(e.target.value)){
                        num+=1
                    }
                })
                this.filteredOptionsCount=num;
            },
            closeHander(label,index){
                this.labelArr.splice(index,1)
                this.valArr.splice(index,1)
                this.$emit("change",this.valArr);
                this.updateModel(this.valArr)
            },
            clickHander(label,value){
                if(this.multiple){
                    if(this.valArr.indexOf(value)==-1){
                        this.labelArr.push(label)
                        this.valArr.push(value)
                        this.$emit("change",this.valArr);
                        this.updateModel(this.valArr)
                    }else{
                        this.labelArr.splice(this.valArr.indexOf(value),1)
                        this.valArr.splice(this.valArr.indexOf(value),1)
                        this.$emit("change",this.valArr);
                        this.updateModel(this.valArr)
                    }

                }else{
                    this.val=label;
                    this.$emit("change",value);
                    this.updateModel(value)
                    this.hide();
                }

            },
            show(){
                if(this.filterable){
                    let num=0;
                    this.options.forEach((item)=>{
                        if(item.queryVisible(this.val)){
                            num+=1
                        }
                    })
                    this.filteredOptionsCount=num;
                }
                this.visible=true;
                this.$emit("show");
            },
            hide(){

                this.visible=false;
                this.closed=false;
                setTimeout(()=>{
                    this.closed=true;
                },300)
                if(this.filterable){
                    this.val="";
                    this.options.forEach((item)=>{
                        if(item.value  == this.value){
                            this.val = item.label;
                        }
                    })
                }
                this.$emit("hide");
            }
        }
    }
</script>

<style scoped lang="less">
    .small-select,.small-select *{box-sizing: border-box;}
    .small-select-close{position: absolute;z-index:10;right:0px;top:0px;width:30px;display:flex;align-items: center;justify-content: center;height:100%;cursor: pointer;}
    .small-select{width:100%;position: relative;}
    .small-select-zanwu{width:100%;font-size:14px;text-align:center;height:30px;line-height:30px;}
    .small-select-input{
        position: relative;width:100%;
        background-image: none;border-radius: 4px;flex-wrap: wrap;
        border: 1px solid #dcdfe6;box-sizing: border-box;
        color: #606266;outline: none;padding: 5px 15px;font-size:14px;padding-right:30px;
        transition: all .2s cubic-bezier(.645,.045,.355,1);display:flex;align-items: center;justify-content: flex-start;
        & .small-tag{margin-left:0px !important;margin-right:10px !important;}
    }
    .small-select-input-big{min-height: 40px;}
    .small-select-input-medium{min-height: 36px;}
    .small-select-input-small{min-height: 32px;}
    .small-select-input-mini{min-height: 28px;font-size:12px;}
    .small-input-suffix-icon{
        position: absolute;right:0px;top:0px;width:30px;height:100%;display:flex;align-items: center;justify-content: center;
        cursor: pointer;transition: color .2s cubic-bezier(.645,.045,.355,1);z-index:1;
        i{color:#c0c4cc;font-size: 14px;}
    }

    .small-select-input{
        padding-right:30px;
    }
    .small-select-options{
        width:100%;position: absolute;padding-top:12px;
        .small-select-scroll{
            width:100%;position: relative;
            .small-select__arrow{
                position: absolute;top:-10px;left:50%;transform: translateX(-50%);
                width:0px;height:0px;border-left:10px solid transparent;
                border-right:10px solid transparent;border-bottom:10px solid #e4e7ed;
                &::after{
                    position: absolute;
                    width:0px;height:0px;border-left:10px solid transparent;content:" ";left:-10px;top:2px;
                    border-right:10px solid transparent;border-bottom:10px solid #fff;
                }
            }
        }
        .small-select-options-content{
            width:100%;position: relative;border: 1px solid #e4e7ed;padding:5px 0px;max-height:280px;overflow-y:auto;
            border-radius: 4px;background-color: #fff;box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);

        }
    }
    .small-select-disabled{
        background-color: #f5f7fa;
        border-color: #e4e7ed;
        color: #c0c4cc;cursor: not-allowed;
    }
    .select-enter-active{animation: select-fade-in 0.3s;}
    .select-leave-active{animation: select-fade-out 0.3s;}
    @keyframes select-fade-in {
        0%{opacity:0;transform: translate3d(0,-10px,0)}
        100%{opacity:1;transform: translate3d(0,0px,0)}
    }
    @keyframes select-fade-out {
        0%{opacity:1;transform: translate3d(0,0px,0)}
        100%{opacity:0;transform: translate3d(0,-10px,0)}
    }
</style>
