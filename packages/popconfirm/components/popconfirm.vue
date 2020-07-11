<template>

    <div class="small-popconfirm" v-pop-confirm-event>
        <slot></slot>
        <transition name="popconfirm">
            <div :class="[
                    'small-popconfirm-body',
                    'small-popconfirm-position-'+position
                ]" ref="popconfirm" v-show="visible" :style="Object.assign({},{'width':width+'px'},style)">

                <div class="small-popconfirm-header">
                    <i :style="{
                        'fontSize':iconSize+'px',
                        'color':iconColor
                    }" v-if="showIcon" class="iconfont icon-gantanhao-yuankuang"></i>
                    <div class="small-popconfirm-title">{{title}}</div>
                </div>
                <div class="small-popconfirm-btns">
                    <s-button size="mini" :type="cancelType" @click="fail">{{cancelText}}</s-button>
                    <s-button size="mini" :type="confirmType" @click="success">{{confirmText}}</s-button>
                </div>

                <div class="small-popconfirm-arrow"></div>
            </div>
        </transition>
    </div>

</template>

<script>
    import sButton from "../../button";
    export default {
        name:"sPopconfirm",
        componentName:"sPopconfirm",
        components:{sButton},
        directives:{
            popConfirmEvent:{
                bind(el,bindings,vnode){
                    el.handler=(e)=>{
                        if(!vnode.context.closed){
                            return
                        }
                        if(el.contains(e.target)){
                            if(!vnode.context.visible){
                                vnode.context.show();
                            }else{
                                vnode.context.hide();
                            }
                        }else{
                            vnode.context.hide();
                        }
                    };
                    document.addEventListener('click',el.handler)
                },
                unbind(el,bindings,vnode){
                    document.removeEventListener('click',el.handler)
                }
            }
        },
        props:{
            width:{
                type:String|Number,
                default:200
            },
            position:{
                type:String,
                default:"top"
            },
            title:String,
            showIcon:{type:Boolean,default:true,},
            iconColor:{type:String,default:"#e6a23c"},
            iconSize:{type:String,default:"20"},
            confirmText:{type:String,default:"确定"},
            confirmType:{type:String,default:"primary"},
            cancelText:{type:String,default:"取消"},
            cancelType:{type:String,default:"default"},
        },
        data() {
            return {
                style:{},
                visible:false,
                closed:true,
            }
        },
        methods:{
            show(){
                this.visible=true;
                this.$nextTick(()=>{
                    let parentWidth=this.$el.offsetWidth;
                    let parentHeight=this.$el.offsetHeight;
                    let width=this.$refs.popconfirm.offsetWidth;
                    let height=this.$refs.popconfirm.offsetHeight
                    let style={};
                    switch(this.position){
                        case 'top':
                            style={
                                left:-(this.width-parentWidth)/2+"px",
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
                                left:-(this.width-parentWidth)/2+"px",
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
                this.closed=false;
                setTimeout(()=>{
                    this.closed=true;
                },300)
                this.$emit("hide");
            },
            success(){
                this.$emit("confirm");
            },
            fail(){
                this.$emit("cancel");
            },
        },
    }
</script>

<style scoped lang="less">
    .small-popconfirm,.small-popconfirm *{box-sizing: border-box;}
    .small-popconfirm{
        display:inline-block;position: relative;
    }
    .small-popconfirm-body{
        position: absolute;background:#fff;border: 1px solid #ebeef5;box-sizing: border-box;
        box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);border-radius: 4px;bottom:0px;left:0px;padding:15px;
        .small-popconfirm-header{
            font-size:14px;width:100%;display:flex;align-items:center;justify-content: flex-start;color:#666;
            i{margin-right:10px;}
        }
        .small-popconfirm-btns{
            margin:0 auto; margin-top:15px;width:80%;display:flex;align-items: center;justify-content: space-around;
        }
        .small-popconfirm-content{
            padding:10px 15px;background:#fff;color: #333;font-size:14px;text-align:left;border-top-left-radius: 6px;border-top-right-radius: 6px;
            border-bottom-left-radius: 6px;border-bottom-right-radius: 6px;word-break: break-all;
        }
    }
    .small-popconfirm-arrow{
        position: absolute;display: block;width: 0;height: 0;border-color: transparent;border-style: solid;border-width: 11px;
        &::after{
            width: 0;height: 0;border-color: transparent;border-style: solid;content: " ";border-width: 10px;position: absolute;display: block;
        }
    }

    .small-popconfirm-position-top .small-popconfirm-arrow{
        bottom: -11px;left:50%;
        margin-left: -11px;
        border-top-color: #ebeef5;border-bottom-width: 0;
        &::after{
            bottom: 1px;margin-left: -10px;
            border-top-color: #fff;border-bottom-width: 0;
        }
    }
    .small-popconfirm-position-right .small-popconfirm-arrow{
        top: 50%;left: -11px;border-left-width: 0;margin-top: -11px;border-right-color: #ebeef5;
        &::after{
            bottom: -10px;border-right-color: #fff;left: 1px;border-left-width: 0;
        }
    }
    .small-popconfirm-position-bottom .small-popconfirm-arrow{
        top: -11px;left: 50%;margin-left: -11px;border-top-width: 0;border-bottom-color:#ebeef5;
        &::after{
            top: 1px;margin-left: -10px;border-top-width: 0;border-bottom-color: #fff;
        }
    }
    .small-popconfirm-position-left .small-popconfirm-arrow{
        top: 50%;right: -11px;margin-top: -11px;border-right-width: 0;border-left-color:#ebeef5;
        &::after{
            right: 1px;bottom: -10px;border-right-width: 0;border-left-color: #fff;
        }
    }

    .popconfirm-enter-active {animation: popconfirm-in .3s; }
    .popconfirm-leave-active { animation: popconfirm-out .3s;}
    @keyframes popconfirm-in {
        0% {opacity: 0; transform: translate3d(0%, -20px, 0);}
        100% {opacity: 1;transform: translate3d(0%, 0px, 0);}
    }
    @keyframes popconfirm-out {
        0% {opacity: 1;transform: translate3d(0%, 0px, 0);}
        100% {opacity: 0;transform: translate3d(0%, -20px, 0);}
    }
</style>
