<template>

        <div class="small-popover" v-popover-event>
            <slot></slot>
            <transition name="popover">
                <div :class="[
                    'small-popover-body',
                    'small-popover-position-'+position
                ]" ref="popover" v-show="visible" :style="Object.assign({},{'width':width+'px'},style)">
                    <div class="small-popover-header" v-if="title">{{title}}</div>
                    <div class="small-popover-content" >
                        <div v-if="!$slots.content" v-html="content"></div>
                        <slot name="content"></slot>
                    </div>
                    <div class="small-popover-arrow"></div>
                </div>
            </transition>
        </div>

</template>

<script>
    export default {
        name:"sPopover",
        componentName:"sPopover",
        directives:{
            popoverEvent:{
                bind(el,bindings,vnode){
                    el.trigger=vnode.context.trigger;
                    el.handler=(e)=>{
                        if(el.contains(e.target)){
                            if(!vnode.context.visible){
                                vnode.context.show();
                            }else{
                                if(el.trigger=="click"){
                                    vnode.context.hide();
                                }
                            }
                        }else{
                           vnode.context.hide();
                        }
                    };
                    document.addEventListener(el.trigger,el.handler)
                },
                unbind(el,bindings,vnode){
                    document.removeEventListener(el.trigger,el.handler)
                }
            }
        },
        props:{
            width:{
                type:String|Number,
                default:240
            },
            position:{
                type:String,
                default:"top"
            },
            trigger:{
                type:String,
                default:"mouseover"
            },
            title:String,
            content:String
        },
        data() {
            return {
                style:{},
                visible:false
            }
        },
        methods:{
            show(){
                this.visible=true;
                this.$nextTick(()=>{
                    console.log(this.$el.offsetHeight,this.$refs.popover.offsetHeight);
                    let parentWidth=this.$el.offsetWidth;
                    let parentHeight=this.$el.offsetHeight;
                    let width=this.$refs.popover.offsetWidth;
                    let height=this.$refs.popover.offsetHeight
                    let style={};
                    switch(this.position){
                        case 'top':
                            style={
                                left:-(this.width-parentWidth)/2+"px",
                                bottom:parentHeight+10+"px"
                            }
                            break;
                        case 'right':
                            style={
                                left:parentWidth+10+"px",
                                bottom:-(height-parentHeight)/2+"px"
                            }
                            break;
                        case 'bottom':
                            style={
                                left:-(this.width-parentWidth)/2+"px",
                                bottom:-(height+10)+"px"
                            }
                            break;
                        case 'left':
                            style={
                                left:-width-10+"px",
                                bottom:-(height-parentHeight)/2+"px"
                            }
                            break;
                    }
                    this.style=style;
                })
                this.$emit("show");
            },
            hide(){
                this.visible=false;
                this.$emit("hide");
            }
        },
        mounted(){

        }
    }
</script>

<style scoped lang="less">
    .small-popover,.small-popover *{box-sizing: border-box;}
    .small-popover{
        display:inline-block;position: relative;
    }
    .small-popover-body{
        position: absolute;background:#fff;border: 1px solid rgba(0,0,0,.2);box-sizing: border-box;
        box-shadow: 0 5px 10px rgba(0,0,0,.2);border-radius: 6px;bottom:0px;left:0px;
        .small-popover-header{
            border-bottom: 1px solid #ebebeb;background-color: #f7f7f7;font-size:14px;
            padding:7px 15px;color:#666;text-align:left;overflow:hidden;border-top-left-radius: 6px;border-top-right-radius: 6px;
        }
        .small-popover-content{
            padding:10px 15px;background:#fff;color: #333;font-size:14px;text-align:left;border-top-left-radius: 6px;border-top-right-radius: 6px;
            border-bottom-left-radius: 6px;border-bottom-right-radius: 6px;word-break: break-all;
        }
    }
    .small-popover-arrow{
        position: absolute;display: block;width: 0;height: 0;border-color: transparent;border-style: solid;border-width: 11px;
        &::after{
            width: 0;height: 0;border-color: transparent;border-style: solid;content: " ";border-width: 10px;position: absolute;display: block;
        }
    }

    .small-popover-position-top .small-popover-arrow{
        bottom: -11px;left:50%;
         margin-left: -11px;
        border-top-color: rgba(0,0,0,.25);border-bottom-width: 0;
        &::after{
            bottom: 1px;margin-left: -10px;
            border-top-color: #fff;border-bottom-width: 0;
        }
    }
    .small-popover-position-right .small-popover-arrow{
        top: 50%;left: -11px;border-left-width: 0;margin-top: -11px;border-right-color: #999;
        &::after{
            bottom: -10px;border-right-color: #fff;left: 1px;border-left-width: 0;
        }
    }
    .small-popover-position-bottom .small-popover-arrow{
        top: -11px;left: 50%;margin-left: -11px;border-top-width: 0;border-bottom-color: rgba(0,0,0,.25);
        &::after{
            top: 1px;margin-left: -10px;border-top-width: 0;border-bottom-color: #fff;
        }
    }
    .small-popover-position-left .small-popover-arrow{
        top: 50%;right: -11px;margin-top: -11px;border-right-width: 0;border-left-color: rgba(0,0,0,.25);
        &::after{
            right: 1px;bottom: -10px;border-right-width: 0;border-left-color: #fff;
        }
    }

    .popover-enter-active {animation: popover-in .3s; }
    .popover-leave-active { animation: popover-out .3s;}
    @keyframes popover-in {
        0% {opacity: 0; transform: translate3d(0%, -20px, 0);}
        100% {opacity: 1;transform: translate3d(0%, 0px, 0);}
    }
    @keyframes popover-out {
        0% {opacity: 1;transform: translate3d(0%, 0px, 0);}
        100% {opacity: 0;transform: translate3d(0%, -20px, 0);}
    }
</style>
