<template>
    <transition :name="'drawer-'+position">
        <div class="small-drawer" v-show="value" @click.self="hide">
            <div :style="{width}" :class="[
                'small-drawer-body',
                'small-drawer-position-'+position
            ]">
                 <div class="small-drawer-header">
                     <div class="small-drawer-title">{{title}}</div>
                     <div class="small-drawer-close" @click="hide">
                         <i class="iconfont icon-cuowuguanbiquxiao"></i>
                     </div>
                 </div>
                 <div class="small-drawer-content">
                     <slot></slot>
                     <s-loading :show="showLoading" :background="loadingBackground" :color="loadingTextColor" :text="loadingText"></s-loading>
                 </div>
            </div>
        </div>
    </transition>
</template>

<script>
    import {inputMixins} from "../../utils/mixins";
    import {sLoading} from "../../loading";
    export default {
        name:"sDrawer",
        componentName:"sDrawer",
        components:{sLoading},
        mixins:[inputMixins],
        props:{
            value:{type:Boolean,default:false},
            showLoading:{type:Boolean,default:false},
            loadingBackground:{type:String,default:'rgba(255,255,255,0.6);'},
            loadingTextColor:{type:String,default:'#409eff'},
            loadingText:{type:String,default:'加载中...'},
            title:String,
            position:{type:String,default:"left"},
            width:{type:String,default:"25%"},
            beforeClose:Function
        },
        methods:{
            hide(){
                if(this.beforeClose && typeof this.beforeClose === 'function'){
                    this.beforeClose(this.close);
                }else{
                    this.close();
                }
            },
            close(){
                this.$emit("update::value",false);
            }
        }
    }
</script>

<style scoped lang="less">
    .small-drawer,.small-drawer *{box-sizing: border-box;}
    .small-drawer{position: fixed;top:0px;right:0%;left:0px;bottom:0px;z-index:51;transition: all 0.3s;background:rgba(0,0,0,.5);}
    .small-drawer-body{position: absolute;top:0px;width:25%;height:100%;background:#fff;}
    .small-drawer-position-left{left:0px;}
    .small-drawer-position-right{right:0px;}
    .small-drawer-header{
        height:5.5vh;width:100%;padding:10px 15px;border-bottom: 1px solid #eee;box-shadow: 0 1px 3px rgba(153, 153, 153, 0.3);
        display:flex;align-items: center;justify-content: flex-start;position: relative;
        .small-drawer-title{font-size:16px;}
        .small-drawer-close{
            position: absolute;right:20px;width:30px;height:30px;border-radius: 50%;display:flex;align-items: center;justify-content: center;color:#666;
            cursor: pointer;transition: all 0.3s;top:50%;transform: translateY(-50%);
            &:hover{background:#409eff;color:#fff;}
        }
    }
    .small-drawer-content{
        width:100%;overflow-y:auto;height:94.5vh;padding:10px;transform: translateZ(0px);
    }


    .drawer-left-enter-active {animation: drawer-left-in .3s; }
    .drawer-left-leave-active { animation: drawer-left-out .3s;}
    @keyframes drawer-left-in {
        0% {transform: translate3d(-30px, 0px, 0); opacity: 0;}
        100% {transform: translate3d(0, 0, 0);opacity: 1;}
    }
    @keyframes drawer-left-out {
        0% {transform: translate3d(0, 0, 0);opacity: 1;}
        100% {transform: translate3d(-30px, 0px, 0);opacity: 0;}
    }

    .drawer-right-enter-active {animation: drawer-right-in .3s; }
    .drawer-right-leave-active { animation: drawer-right-out .3s;}
    @keyframes drawer-right-in {
        0% {transform: translate3d(30px, 0px, 0); opacity: 0;}
        100% {transform: translate3d(0, 0, 0);opacity: 1;}
    }
    @keyframes drawer-right-out {
        0% {transform: translate3d(0, 0, 0);opacity: 1;}
        100% {transform: translate3d(30px, 0px, 0);opacity: 0;}
    }

</style>
