<template>
    <transition name="message-fade">
        <div
            v-show="visible"
            :class="[
               'small-message',
               'small-message-'+type
            ]"
            :style="style"
            @mouseenter="clearTimer"
            @mouseleave="show"
        >
            <i class="small-message-icon iconfont icon-lingdang" v-if="type=='primary'"></i>
            <i class="small-message-icon iconfont icon-zhengquewancheng-yuankuang" v-if="type=='success'"></i>
            <i class="small-message-icon iconfont icon-xinxi-yuankuang" v-if="type=='info'"></i>
            <i class="small-message-icon iconfont icon-gantanhao-yuankuang" v-if="type=='warning'"></i>
            <i class="small-message-icon iconfont icon-cuowuguanbiquxiao-yuankuang" v-if="type=='danger'"></i>
            <div class="small-message-content" v-html="message"></div>

            <div class="small-message-close" v-if="showClose" @click="close"><i class="iconfont icon-cuowuguanbiquxiao"></i></div>
        </div>
    </transition>
</template>

<script>
    export default {
        name:"sMessage",
        componentName:"sMessage",
        data() {
            return {
                visible:false,
                type:"info",
                message:"",
                duration:3000,
                top:20,
                showClose:false
            }
        },
        computed:{
            style(){
                return `top:${this.top}px`;
            }
        },
        methods:{
            show(){
                if(this.duration==0){
                    this.showClose=true;
                    return
                }
                this.timer=setTimeout(()=>{
                    this.close();
                },this.duration)
            },
            clearTimer(){
                clearTimeout(this.timer);
            },
            close(){
                this.visible = false
                if(this.onClose){
                    this.onClose(this);
                }
                setTimeout(() => {
                    this.$destroy(true)
                    this.$el.parentNode.removeChild(this.$el) // 从DOM里将这个组件移除
                }, 500)
            }
        },
        mounted(){
            this.show()
        }
    }
</script>

<style scoped lang="less">


    .small-message{
        position: fixed;left:50%;min-width:380px;padding:10px;border-radius: 4px;padding-left:18px;transform: translateX(-50%);transition: opacity 0.3s, transform .4s, top 0.4s;
        overflow: hidden;
        display:flex;align-items: center;justify-content: flex-start;z-index:888;box-sizing: border-box;top: 0px;
    }
    .small-message-content{font-size:14px;}
    .small-message-icon{font-size:20px;margin-right:15px;}
    .small-message-close{position: absolute;right:0px;height:100%;display:flex;align-items: center;justify-content: center;width:40px;cursor: pointer;}

    .small-message-info{background-color: #f4f4f5;color: #909399;}
    .small-message-success{background-color: #f0f9eb;color: #67c23a;}
    .small-message-danger{background-color: #fef0f0;color: #f56c6c;}
    .small-message-warning{background-color: #fdf6ec;color: #e6a23c;}
    .small-message-primary{background:#ecf5ff;color:#409eff;}
    .message-fade-enter-active {
        animation: message-fade-in .3s;
    }

    .message-box-leave-active {
        animation: message-fade-out .3s;
    }

    @keyframes message-fade-in {
        0% {
            transform: translate3d(-50%, -20px, 0);
            opacity: 0;
        }
        100% {
            transform: translate3d(-50%, 0, 0);
            opacity: 1;
        }
    }

    @keyframes message-fade-out {
        0% {
            transform: translate3d(-50%, 0, 0);
            opacity: 1;
        }
        100% {
            transform: translate3d(-50%, -20px, 0);
            opacity: 0;
        }
    }
</style>
