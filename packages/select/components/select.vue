<template>
    <div v-select-click-slide class="small-select">
<!--        <div :class="[-->
<!--            'small-select-input',-->
<!--            'small-select-input-'+size-->
<!--        ]">-->

<!--        </div>-->
        <s-input :size="size" v-model="val" :readonly="!filterable" ref="inputs" :placeholder="placeholder" :suffixIcon="visible?'icon-xiangshangshouqi':'icon-xiangxiazhankai'"></s-input>
        <transition name="select">
            <div class="small-select-options" v-show="visible">
                <div class="small-select-options-content">
                    <slot></slot>
                    <div class="small-select__arrow"></div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
    import sInput from "../../input";
    import {inputMixins} from "../../utils/mixins";
    export default {
        name:"sSelect",
        componentName:"sSelect",
        components:{sInput},
        mixins:[inputMixins],
        props:{
            size:{type:String,default:"medium"},
            placeholder:String,
            filterable:{type:Boolean,default:false},
            value:String
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
                        if(el.contains(e.target)){
                            if(!vnode.context.visible){
                                vnode.context.show();
                            }else{
                                if(vnode.context.$refs.inputs.$el.contains(e.target)){
                                    vnode.context.hide();
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
        data() {
            return {
                visible:false,
                closed:true,
                val:""
            }
        },
        methods:{
            show(){
                this.visible=true;
                this.$emit("show");
            },
            hide(){
                this.visible=false;
                this.closed=false;
                setTimeout(()=>{
                    this.closed=true;
                },300)
                this.$emit("hide");
            }
        }
    }
</script>

<style scoped lang="less">
    .small-select,.small-select *{box-sizing: border-box;}
    .small-select{width:100%;position: relative;}
    .small-select-input{
        padding-right:30px;
    }
    .small-select-options{
        width:100%;position: absolute;padding-top:12px;
        .small-select-options-content{
            width:100%;position: relative;border: 1px solid #e4e7ed;padding:5px 0px;
            border-radius: 4px;background-color: #fff;box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
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
