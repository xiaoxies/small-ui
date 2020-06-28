<template>
    <transition name="backtop">
        <div @click="back" class="small-backtop" v-show="show" :style="{
                'right':right+'px',
                'bottom':bottom+'px'
            }">
            <slot></slot>
            <div v-back-top  class="small-backtop-yuan"  >
                <i class="iconfont icon-huidingbu"></i>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        name:"sBacktop",
        componentName:"sBacktop",
        directives:{
            backTop:{
                bind(el,bindings,vnode){
                    el.handler=(e)=>{
                        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
                        var windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
                        if((windowHeight-scrollTop)<=vnode.context.visibilityHeight){
                            vnode.context.show=true
                        }else{
                            vnode.context.show=false
                        }
                    };
                    window.addEventListener("scroll",el.handler)
                },
                unbind(el,bindings,vnode){
                    window.removeEventListener("scroll",el.handler)
                }
            }
        },
        props:{
            right:{
                type:String,
                default:"40"
            },
            bottom:{
                type:String,
                default:"40"
            },
            visibilityHeight:{
                type:Number,
                default:200
            }
        },
        data() {
            return {show:false}
        },
        methods:{
            back(){
                let timer = setInterval(function() {
                    var osTop = document.documentElement.scrollTop || document.body.scrollTop;
                    var ispeed = Math.floor(-osTop / 6);
                    document.body.scrollTop = document.documentElement.scrollTop = osTop + ispeed;
                    if (osTop == 0) {
                        clearInterval(timer);
                    };
                },30)
            }
        }
    }
</script>

<style scoped lang="less">
    /deep/ html,body{transition: all 0.3s;}
    .small-backtop{
        position: fixed;right:40px;bottom:40px;display:flex;align-items: center;justify-content: center;flex-direction: column;
    }
    .small-backtop-yuan{
        width:40px;height:40px;color: #409eff;border-radius: 50%;cursor: pointer;margin-top:10px;
        line-height:40px;text-align:center;
        box-shadow: 0 0 6px rgba(0,0,0,.12);transition: all 0.5s;
        i{font-size:20px;}
        &:hover{background-color: #f2f6fc;}
    }

    .backtop-enter-active {animation: backtop-in .5s; }
    .backtop-leave-active {animation: backtop-out .5s;}
    @keyframes backtop-in {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    @keyframes backtop-out {
        0% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
</style>
