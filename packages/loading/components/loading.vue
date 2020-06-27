<template>
    <transition name="loading">
        <div class="small-loading" v-show="show" :style="'background:'+background+';z-index:'+zIndex">
            <i class="small-loading-icon iconfont icon-loading-A"  :style="'color:'+color"></i>
            <div class="small-loading-tips" :style="'color:'+color" v-html="text"></div>
        </div>
    </transition>
</template>

<script>
    import {getZIndex} from "../../utils/common";
    export default {
        name:"sLoading",
        componentName:"sLoading",
        props:{
            show:{
                default:false,
                type:Boolean
            },
            text:String,
            background:{
                default:"rgba(0,0,0,0.5)",
                type:String
            },
            color:{
                default:"#fff",
                type:String
            }
        },
        data(){
            return {
                zIndex:getZIndex()
            }
        },
        methods:{
            setText(str){
                this.text=str;
            },
            close(){
                this.show=false;
                setTimeout(()=>{
                    this.$destroy(true);
                    this.$el.parentNode.removeChild(this.$el) // 从DOM里将这个组件移除
                },500)
            }
        }
    }
</script>

<style scoped lang="less">
    .small-loading{
        position: fixed;top:0px;left:0px;right:0px;bottom:0px;display:flex;align-items: center;justify-content: center;flex-direction: column;
        .small-loading-icon{font-size:26px;margin-bottom:15px;color:#409eff;}
        .small-loading-tips{font-size:14px;color:#409eff;}
    }
    .loading-enter-active {
        animation: loading-in .3s;
    }

    .loading-leave-active {
        animation: loading-out .3s;
    }

    @keyframes loading-in {
        0% {
            transform: translate3d(0, -20px, 0);
            opacity: 0;
        }
        100% {
            transform: translate3d(0, 0, 0);
            opacity: 1;
        }
    }

    @keyframes loading-out {
        0% {
            transform: translate3d(0, 0, 0);
            opacity: 1;
        }
        100% {
            transform: translate3d(0, -20px, 0);
            opacity: 0;
        }
    }
</style>
