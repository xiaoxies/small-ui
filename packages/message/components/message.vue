<template>
    <transition name="message-fade">
        <div
            v-if="visible"
            :class="[
               'small-message',
               'small-message-'+type
            ]"
            :style="'top:'+top"
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
                top:"20px",
                showClose:false
            }
        },
        methods:{
            show(){
                this.visible=true;
                if(this.duration==0){
                    this.showClose=true;
                    return
                }
                setTimeout(()=>{
                    this.close();
                },this.duration)
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

    .message-fade-enter, .message-fade-leave-active /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
        transform: translate(-50%, -100%);
    }
    .small-message{
        position: fixed;left:50%;min-width:380px;padding:10px;border-radius: 4px;padding-left:18px;transition:opacity .3s,transform .4s,top .4s;transform: translateX(-50%);
        display:flex;align-items: center;justify-content: flex-start;z-index:888;top:20px;box-sizing: border-box;
    }
    .small-message-content{font-size:14px;}
    .small-message-icon{font-size:20px;margin-right:15px;}
    .small-message-close{position: absolute;right:0px;height:100%;display:flex;align-items: center;justify-content: center;width:40px;cursor: pointer;}

    .small-message-info{background-color: #f4f4f5;color: #909399;}
    .small-message-success{background-color: #f0f9eb;color: #67c23a;;}
    .small-message-danger{background-color: #fef0f0;color: #f56c6c;}
    .small-message-warning{background-color: #fdf6ec;color: #e6a23c;}
    .small-message-primary{background:#ecf5ff;color:#409eff;}

</style>
