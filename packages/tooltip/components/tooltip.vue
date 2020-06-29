<template>

    <div class="small-tooltip" v-tooltip-event>
        <slot></slot>
        <transition name="tooltip">
            <div :class="[
                    'small-tooltip-body',
                    'small-tooltip-position-'+position
                ]" ref="tooltip" v-show="visible" :style="style">
                <div class="small-tooltip-content" >
                    <div style="white-space: nowrap;" v-if="!$slots.content">{{content}}</div>
                    <slot name="content"></slot>
                </div>
                <div class="small-tooltip-arrow"></div>
            </div>
        </transition>
    </div>

</template>

<script>
    export default {
        name:"sTooltip",
        componentName:"sTooltip",
        directives:{
            tooltipEvent:{
                bind(el,bindings,vnode){
                    el.handler=(e)=>{
                        if(el.contains(e.target)){
                            if(!vnode.context.visible){
                                vnode.context.show();
                            }
                        }else{
                            vnode.context.hide();
                        }
                    };
                    document.addEventListener('mouseover',el.handler)
                },
                unbind(el,bindings,vnode){
                    document.removeEventListener('mouseover',el.handler)
                }
            }
        },
        props:{
            position:{
                type:String,
                default:"top"
            },
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
                    console.log(this.$el.offsetHeight,this.$refs.tooltip.offsetHeight);
                    let parentWidth=this.$el.offsetWidth;
                    let parentHeight=this.$el.offsetHeight;
                    let width=this.$refs.tooltip.offsetWidth;
                    let height=this.$refs.tooltip.offsetHeight
                    let style={};
                    switch(this.position){
                        case 'top':
                            style={
                                left:-(width-parentWidth)/2+"px",
                                bottom:parentHeight+15+"px"
                            }
                            break;
                        case 'right':
                            style={
                                left:parentWidth+15+"px",
                                bottom:-(height-parentHeight)/2+"px"
                            }
                            break;
                        case 'bottom':
                            style={
                                left:-(width-parentWidth)/2+"px",
                                bottom:-(height+15)+"px"
                            }
                            break;
                        case 'left':
                            style={
                                left:-width-15+"px",
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
    .small-tooltip,.small-tooltip *{box-sizing: border-box;}
    .small-tooltip{
        display:inline-block;position: relative;
    }
    .small-tooltip-body{
        position: absolute;min-width:80px;background:rgba(0,0,0,0.4);box-sizing: border-box;
        box-shadow: 0 5px 10px rgba(0,0,0,.2);border-radius: 6px;bottom:0px;left:0px;
        .small-tooltip-header{
            background-color: #f7f7f7;font-size:14px;
            padding:7px 15px;color:#666;text-align:left;overflow:hidden;border-top-left-radius: 6px;border-top-right-radius: 6px;
        }
        .small-tooltip-content{
            padding:10px 15px;background:rgba(0,0,0,0.4);color: #fff;font-size:14px;text-align:left;border-top-left-radius: 6px;border-top-right-radius: 6px;
            border-bottom-left-radius: 6px;border-bottom-right-radius: 6px;word-break: break-all;
        }
    }
    .small-tooltip-arrow{
        position: absolute;display: block;width: 0;height: 0;border-color: transparent;border-style: solid;border-width: 11px;
        &::after{
            width: 0;height: 0;border-color: transparent;border-style: solid;content: " ";border-width: 10px;position: absolute;display: block;
        }
    }

    .small-tooltip-position-top .small-tooltip-arrow{
        bottom: -11px;left:50%;
        margin-left: -11px;
        border-top-color: rgba(0,0,0,0.4);border-bottom-width: 0;
        &::after{
            bottom: 1px;margin-left: -10px;
            border-top-color:  rgba(0,0,0,0.4);border-bottom-width: 0;
        }
    }
    .small-tooltip-position-right .small-tooltip-arrow{
        top: 50%;left: -11px;border-left-width: 0;margin-top: -11px;border-right-color: rgba(0,0,0,0.4);
        &::after{
            bottom: -10px;border-right-color: rgba(0,0,0,0.4);left: 1px;border-left-width: 0;
        }
    }
    .small-tooltip-position-bottom .small-tooltip-arrow{
        top: -11px;left: 50%;margin-left: -11px;border-top-width: 0;border-bottom-color: rgba(0,0,0,0.4);
        &::after{
            top: 1px;margin-left: -10px;border-top-width: 0;border-bottom-color: rgba(0,0,0,0.4);
        }
    }
    .small-tooltip-position-left .small-tooltip-arrow{
        top: 50%;right: -11px;margin-top: -11px;border-right-width: 0;border-left-color: rgba(0,0,0,0.4);
        &::after{
            right: 1px;bottom: -10px;border-right-width: 0;border-left-color: rgba(0,0,0,0.4);
        }
    }

    .tooltip-enter-active {animation: tooltip-in .3s; }
    .tooltip-leave-active { animation: tooltip-out .3s;}
    @keyframes tooltip-in {
        0% {opacity: 0; transform: translate3d(0%, -20px, 0);}
        100% {opacity: 1;transform: translate3d(0%, 0px, 0);}
    }
    @keyframes tooltip-out {
        0% {opacity: 1;transform: translate3d(0%, 0px, 0);}
        100% {opacity: 0;transform: translate3d(0%, -20px, 0);}
    }
</style>
