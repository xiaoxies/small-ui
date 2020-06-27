<template>
    <transition :name="'notify-'+position">
        <div :class="[
            'small-notify',
            'small-notify-'+position
        ]" v-show="visible" :style="style">
            <div class="small-notify-icon" v-if="type!==''">
                <i class="small-notify-primary iconfont icon-lingdang" v-if="type=='primary'"></i>
                <i class="small-notify-success iconfont icon-zhengquewancheng-yuankuang" v-if="type=='success'"></i>
                <i class="small-notify-info iconfont icon-xinxi-yuankuang" v-if="type=='info'"></i>
                <i class="small-notify-warning iconfont icon-gantanhao-yuankuang" v-if="type=='warning'"></i>
                <i class="small-notify-danger iconfont icon-cuowuguanbiquxiao-yuankuang" v-if="type=='danger'"></i>
            </div>
            <div class="small-notify-body">
                <div class="small-notify-body-title">{{title}}</div>
                <div class="small-notify-body-content">{{content}}</div>
            </div>
            <div class="small-notify-close" @click="close">
                <i class="iconfont icon-cuowuguanbiquxiao"></i>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: "sNotify",
        componentName:"sNotify",
        data(){
            return {
                type:'',
                title:"",
                content:"",
                visible:false,
                top:0,
                position:"right",
                duration:3000,
                timer:null,
                closed:true
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
                    return
                }
                setTimeout(()=>{
                    if(this.closed){
                        this.close();
                    }

                },this.duration)
            },
            close(){
                this.visible = false;
                this.closed=false;
                if(this.onClose){
                    this.onClose(this);
                }
                setTimeout(() => {
                    this.$destroy(true)
                    this.$el.parentNode.removeChild(this.$el) // 从DOM里将这个组件移除

                }, 200)
            }
        },
        mounted(){
            this.show()
        }
    }
</script>

<style scoped lang="less">
    .small-notify *,.small-notify{box-sizing: border-box;}
    .small-notify{
        width:300px;padding: 15px 10px;border-radius: 8px;background-color: #fff;    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
        position: fixed;transition: opacity .3s,transform .3s,left .3s,right .3s,top .4s,bottom .3s;
        border: 1px solid #dedede;display:flex;align-items: flex-start;justify-content: flex-start;
    }
    .small-notify-right{right:10px;}
    .small-notify-left{left:10px;}
    .small-notify-icon{width:40px;height:100%;display:flex;align-items: flex-start;justify-content: center;i{font-size:24px;}}
    .small-notify-body{width:240px;}
    .small-notify-body-title{color:#303133;font-size:16px;font-weight:bold;}
    .small-notify-body-content{color: #606266;font-size:14px;margin-top:5px;}
    .small-notify-close{position: absolute;right:10px;top:10px;cursor: pointer;}


    .small-notify-info{color: #909399;}
    .small-notify-success{color: #67c23a;}
    .small-notify-danger{color: #f56c6c;}
    .small-notify-warning{color: #e6a23c;}
    .small-notify-primary{color:#409eff;}

    /*右边出现的动画*/
    .notify-right-enter-active {animation: notify-right-in .3s; }
    .notify-right-leave-active {animation: notify-right-out .3s;}
    @keyframes notify-right-in {
        0% {
            transform: translate3d(20px, 0px, 0);
            opacity: 0;
        }
        100% {
            transform: translate3d(0%, 0, 0);
            opacity: 1;
        }
    }

    @keyframes notify-right-out {
        0% {
            transform: translate3d(0%, 0, 0);
            opacity: 1;
        }
        100% {
            transform: translate3d(20px, 0px, 0);
            opacity: 0;
        }
    }

    .notify-left-enter-active {animation: notify-left-in .3s; }
    .notify-left-leave-active {animation: notify-left-out .3s;}
    @keyframes notify-left-in {
        0% {
            transform: translate3d(-20px, 0px, 0);
            opacity: 0;
        }
        100% {
            transform: translate3d(0%, 0, 0);
            opacity: 1;
        }
    }

    @keyframes notify-left-out {
        0% {
            transform: translate3d(0%, 0, 0);
            opacity: 1;
        }
        100% {
            transform: translate3d(-20px, 0px, 0);
            opacity: 0;
        }
    }
</style>