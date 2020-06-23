<template>
    <transition name="message-box">
        <div class="small-message-box-loading" v-show="show">
            <div class="small-message-box-body">
                <div class="small-message-box-body-title">
                    <div class="small-message-box-title-font">{{title}}</div>
                    <div class="small-message-box-close" @click="fail">
                        <i class="iconfont icon-cuowuguanbiquxiao-xianxingyuankuang" ></i>
                    </div>
                </div>

                <div class="small-message-box-content">
                    <!--    当类型是confirm的时候显示            -->
                    <div class="small-message-content-icon" v-if="confirm">
                        <i style="color:#409eff;" class="small-message-icon iconfont icon-lingdang" v-if="type=='primary'"></i>
                        <i style="color:#67c23a;" class="small-message-icon iconfont icon-zhengquewancheng-yuankuang" v-if="type=='success'"></i>
                        <i style="color:#909399;" class="small-message-icon iconfont icon-xinxi-yuankuang" v-if="type=='info'"></i>
                        <i style="color:#e6a23c;" class="small-message-icon iconfont icon-gantanhao-yuankuang" v-if="type=='warning'"></i>
                        <i style="color:#f56c6c;" class="small-message-icon iconfont icon-cuowuguanbiquxiao-yuankuang" v-if="type=='danger'"></i>
                    </div>
                    <div class="small-message-content-font" v-html="content" v-if="!prompt"></div>


                    <!--    当类型是prompt的时候显示            -->
                    <div class="small-message-prompt"  v-if="prompt">
                        <div class="small-message-prompt-text" v-html="tips"></div>
                        <s-input v-model="value"></s-input>
                    </div>

                </div>

                <div class="small-message-box-footer">
                    <s-button size="mini" :type="cancelButtomType" v-if="confirm||prompt"  @click="fail">{{cancelButtomText}}</s-button>
                    <s-button :type="confirmButtomType" size="mini" @click="sure">{{confirmButtomText}}</s-button>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    import sButton from "../../button";
    import sInput from "../../input";
    export default {
        name:"sMessageBox",
        componentName:"sMessageBox",
        components:{sButton,sInput},
        data() {
            return {
                show:false,
                type:"warning",
                title:"",
                content:"",
                confirmButtomText:"确定",
                confirmButtomType:"primary",
                cancelButtomText:"取消",
                tips:"",
                cancelButtomType:"default",
                confirm:false,
                prompt:false,
                value:""
            }
        },
        methods:{
            fail(){
                if(this.cancel && typeof this.cancel == 'function'){
                    this.cancel();
                }
                this.close();
            },
            sure(){
                if(this.prompt){
                    if(this.success&&typeof this.success == 'function'){
                        this.success(this.value,this.close);
                    }
                    return
                }
                if(this.success&&typeof this.success == 'function'){
                    this.close();
                    this.success();
                }
            },
            close(){
                this.show=false;
                setTimeout(() => {
                    this.$destroy(true)
                    this.$el.parentNode.removeChild(this.$el) // 从DOM里将这个组件移除
                }, 500)
            }
        }
    }
</script>

<style scoped lang="less">
    .small-message-box-loading *{box-sizing: border-box;}
    .small-message-box-loading{transition:all 0.3s;position: fixed;top:0px;width:100%;height:100%;background:rgba(0,0,0,0.4);left:0px;right:0px;bottom:0px;display:flex;align-items: center;justify-content: center;}
    .small-message-box-body{
        width:420px;padding-bottom:10px;background:#fff;box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);transition:all 0.3s;
        border-radius: 4px;display: inline-block;
        .small-message-box-body-title{
            position: relative;padding: 15px 15px 10px;width:100%;
            .small-message-box-title-font{font-size:16px;color:#303133;}
            .small-message-box-close{
                position: absolute;right:10px;height:100%;display:flex;align-items: center;justify-content: center;
                width:40px;top:0px;padding-top:10px;color:#909399;
                i{font-size:20px;cursor: pointer;&:hover{color:#409eff;}}
            }
        }
        .small-message-box-content{
            padding:10px 15px;font-size:14px;color:#606266;
            display:flex;align-items: flex-start;justify-content: flex-start;flex-wrap: wrap;
            .small-message-content-icon{
                margin-right:10px;font-size:24px;
                i{font-size:24px;}
            }
            .small-message-content-font{padding-top:6px;}
            .small-message-prompt{
                padding-bottom:15px;padding-top:10px;
                .small-message-prompt-text{
                    margin-bottom:15px;
                }
                width:100%;
            }
        }
        .small-message-box-footer{
            text-align:right;margin-top:5px;padding:0px 15px;
        }
    }

    .message-box-enter-active {
        animation: message-box-in .3s;
    }

    .message-box-leave-active {
        animation: message-box-out .3s;
    }

    @keyframes message-box-in {
        0% {
            transform: translate3d(0, -20px, 0);
            opacity: 0;
        }
        100% {
            transform: translate3d(0, 0, 0);
            opacity: 1;
        }
    }

    @keyframes message-box-out {
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
