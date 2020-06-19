<template>
    <transition name="small-alert-fade">
        <div :class="[
                'small-alert',
                'small-alert-'+effect+'-'+type
            ]"
             v-if="show"
        >
            <div class="small-alert-content">
                <div class="small-alert-content-icon" v-if="showIcon">
                    <i :style="description?'font-size:26px;':''" class="iconfont icon-lingdang" v-if="type=='primary'"></i>
                    <i :style="description?'font-size:26px;':''" class="iconfont icon-zhengquewancheng-yuankuang" v-if="type=='success'"></i>
                    <i :style="description?'font-size:26px;':''" class="iconfont icon-xinxi-yuankuang" v-if="type=='info'"></i>
                    <i :style="description?'font-size:26px;':''" class="iconfont icon-gantanhao-yuankuang" v-if="type=='warning'"></i>
                    <i :style="description?'font-size:26px;':''" class="iconfont icon-cuowuguanbiquxiao-yuankuang" v-if="type=='danger'"></i>
                </div>
                <div class="small-alert-content-body">
                    <div :style="description?'font-weight:bold;':''">{{title}}</div>
                    <div v-if="description" class="small-alert-content-body-description">{{description}}</div>
                </div>
            </div>
            <div class="small-alert-close" v-if="showClose" @click="closeHander">
                <i class="iconfont icon-cuowuguanbiquxiao"></i>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        name:"sAlert",
        componentName:"sAlert",
        props:{
            type:{
                type:String,
                default:"primary"
            },
            effect:{
                type:String,
                default:"light"
            },
            showClose:{
                type:Boolean,
                default:false
            },
            showIcon:{
                type:Boolean,
                default:false
            },
            title:String,
            description:String
        },
        data() {
            return {
                show:true
            }
        },
        methods:{
            closeHander(){
                this.show=false;
                this.$emit("close");
            }
        }
    }
</script>

<style scoped lang="less">
    .small-alert{
        font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
        width:100%;padding: 8px 16px;box-sizing: border-box;    display: flex;position: relative;
        border-radius: 4px;opacity: 1;transition: opacity 0.3s;font-size:14px;
    }
    .small-alert-content{
        width:96%;display:flex;align-items: center;justify-content: flex-start;
        .small-alert-content-icon{
            margin-right:10px;
        }
        .small-alert-content-body-description{font-size:12px;width:100%;text-overflow:ellipsis;overflow:hidden;}
    }
    .small-alert-close{position: absolute;top:0px;right:10px;height:100%;cursor: pointer;width:30px;display:flex;align-items: center;justify-content: center;}
    .small-alert+.small-alert{margin-top:20px;}
    .small-alert-light-primary{background:#ecf5ff;color:#409eff;}
    .small-alert-light-info{background-color: #f4f4f5;color: #909399;}
    .small-alert-light-danger{background-color: #fef0f0;color: #f56c6c;}
    .small-alert-light-warning{background-color: #fdf6ec;color: #e6a23c;}
    .small-alert-light-success{background-color: #f0f9eb;color: #67c23a;}

    .small-alert-dark-primary{background:#409eff;color:#fff;}
    .small-alert-dark-info{background-color: #909399;color: #fff;}
    .small-alert-dark-danger{background-color: #f56c6c;color: #fff;}
    .small-alert-dark-warning{background-color: #e6a23c;color: #fff;}
    .small-alert-dark-success{background-color: #67c23a;color: #fff;}

    .small-alert-fade-enter,
    .small-alert-fade-leave-active {
        opacity: 0;
    }

</style>
