<template>
    <button @click="handleClick" :disabled="disabled||loading" :type="htmlType" :class="[
        'small-button',
        'small-button-'+(plain?'plain-'+type:type),
        'small-button-size-'+size,
        (disabled||loading)?'small-button-is-'+(plain?'plain-'+type:type)+'-disabled':'',
        round?'small-button-is-round':'',
        circle?'small-button-is-circle':''
    ]">
        <i v-if="loading" class="iconfont icon-loading-A"></i>
        <i v-if="icon&&!loading" :class="['iconfont', icon]"></i>
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: "sButton",
        componentName:"sButton",
        props:{
            icon:String,
            disabled:{
                type:Boolean,
            },
            loading:{
                type:Boolean,
            },
            plain:{
                type:Boolean,
                default:false
            },
            circle:{
                type:Boolean,
                default:false
            },
            round:{
                type:Boolean,
                default:false
            },
            htmlType:{
                type:String,
                default:"button"
            },
            type:{
                type:String,
                default:"default"
            },
            size:{
                type:String,
                default:"medium"
            }
        },
        methods:{
            handleClick(e){
                this.$emit("click",e);
            }
        }
    }
</script>

<style scoped lang="less">

    .small-button{transition: all 0.1s;font-size: 14px; border-radius: 4px;cursor: pointer;outline: none;border: 1px solid #dcdfe6;font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;}
    .small-button+.small-button{margin-left:10px;}
    .small-button-text+.small-button-text{margin-left:10px;}
    .small-button i{margin-right:5px;}
    .small-button-is-round{border-radius: 20px;}

    .small-button-size-big{padding: 10px 22px;}
    .small-button-size-medium{padding: 10px 22px;}
    .small-button-size-small{padding: 9px 16px;font-size:12px;}
    .small-button-size-mini{padding: 7px 16px;font-size:12px;}

    .small-button-text{border-color: transparent;color: #409eff;background: transparent;padding-left: 0;padding-right: 0;}
    .small-button-text:active{color: #3a8ee6;outline: none;}
    .small-button-is-text-disabled,.small-button-is-text-disabled:hover,.small-button-is-text-disabled:active{color:#c0c4cc;cursor: not-allowed;}

    .small-button-default{color: #606266;background: #fff;}
    .small-button-default:hover{color: #409eff;border-color: #c6e2ff;background-color: #ecf5ff;}
    .small-button-default:active{color: #3a8ee6;border-color: #3a8ee6;outline: none;}
    .small-button-plain-default{border: 1px solid #dcdfe6;color: #606266;background: #fff;}
    .small-button-plain-default:hover{    background: #fff;border-color: #409eff;color: #409eff;}
    .small-button-plain-default:active{border-color: #3a8ee6;    color: #3a8ee6;}
    .small-button-is-default-disabled,.small-button-is-default-disabled:disabled,.small-button-is-default-disabled:hover,.small-button-is-default-disabled:active{color: #c0c4cc;cursor: not-allowed;background-image: none; background-color: #fff;border-color: #ebeef5;}
    .small-button-is-plain-default-disabled,.small-button-is-plain-big-disabled:disabled,.small-button-is-plain-default-disabled:hover,.small-button-is-plain-default-disabled:active{color: #c0c4cc;cursor: not-allowed;background-image: none; background-color: #fff;border-color: #ebeef5;}


    .small-button-primary{border: 1px solid #409eff;color: #fff;background: #409eff;}
    .small-button-primary:hover{background: #66b1ff;border-color: #66b1ff;color: #fff;}
    .small-button-primary:active{background: #3a8ee6;border-color: #3a8ee6;color: #fff;}
    .small-button-plain-primary{border: 1px solid #b3d8ff;color: #409eff;background: #ecf5ff;}
    .small-button-plain-primary:hover{    background: #409eff;border-color: #409eff;color: #fff;}
    .small-button-plain-primary:active{border-color: #3a8ee6;background:#3a8ee6;color: #fff;}
    .small-button-is-primary-disabled,.small-button-is-primary-disabled:disabled,.small-button-is-primary-disabled:hover,.small-button-is-primary-disabled:active{cursor: not-allowed;color: #fff;background-color: #a0cfff;border-color: #a0cfff;}
    .small-button-is-plain-primary-disabled,.small-button-is-plain-primary-disabled:disabled,.small-button-is-plain-primary-disabled:hover,.small-button-is-plain-primary-disabled:active{color: #8cc5ff;cursor: not-allowed;background-image: none; background-color: #ecf5ff;border-color: #d9ecff;}


    .small-button-info{border: 1px solid #909399;color: #fff;background: #909399;}
    .small-button-info:hover{background: #a6a9ad;border-color: #a6a9ad;color: #fff;}
    .small-button-info:active{background: #82848a;border-color: #82848a;color: #fff;}
    .small-button-plain-info{color: #909399;background: #f4f4f5;border-color: #dcdfe6;}
    .small-button-plain-info:hover{background: #909399; border-color: #909399;color: #fff;}
    .small-button-plain-info:active{background: #82848a;border-color: #82848a;color: #fff;outline: none;}
    .small-button-is-info-disabled,.small-button-is-info-disabled:disabled,.small-button-is-info-disabled:hover,.small-button-is-info-disabled:active{cursor: not-allowed;color: #fff;background-color: #c8c9cc;border-color: #c8c9cc;}
    .small-button-is-plain-info-disabled,.small-button-is-plain-info-disabled:disabled,.small-button-is-plain-info-disabled:hover,.small-button-is-plain-info-disabled:active{color: #bcbec2;cursor: not-allowed;background-image: none; background-color: #f4f4f5;border-color: #e9e9eb;}

    .small-button-warning{border: 1px solid #e6a23c;color: #fff;background: #e6a23c;}
    .small-button-warning:hover{background: #ebb563;border-color: #ebb563;color: #fff;}
    .small-button-warning:active{background: #cf9236;border-color: #cf9236;color: #fff;}
    .small-button-plain-warning{color: #e6a23c;background: #fdf6ec;border-color: #f5dab1;}
    .small-button-plain-warning:hover{background: #e6a23c;border-color: #e6a23c;color: #fff;}
    .small-button-plain-warning:active{background: #cf9236; border-color: #cf9236;color: #fff;}
    .small-button-is-warning-disabled,.small-button-is-warning-disabled:disabled,.small-button-is-warning-disabled:hover,.small-button-is-warning-disabled:active{cursor: not-allowed;color: #fff;background-color: #f3d19e;border-color: #f3d19e;}
    .small-button-is-plain-warning-disabled,.small-button-is-plain-warning-disabled:disabled,.small-button-is-plain-warning-disabled:hover,.small-button-is-plain-warning-disabled:active{color: #f0c78a;cursor: not-allowed;background-image: none; background-color: #fdf6ec;border-color: #faecd8;}


    .small-button-danger{border: 1px solid #f56c6c;color: #fff;background: #f56c6c;}
    .small-button-danger:hover{background: #f78989;border-color: #f78989;color: #fff;}
    .small-button-danger:active{background: #dd6161;border-color: #dd6161;color: #fff;}
    .small-button-plain-danger{color: #f56c6c;background: #fef0f0;border-color: #fbc4c4;}
    .small-button-plain-danger:hover{background: #f56c6c;border-color: #f56c6c;color: #fff;}
    .small-button-plain-danger:active{background: #dd6161;border-color: #dd6161;color: #fff;}
    .small-button-is-danger-disabled,.small-button-is-danger-disabled:disabled,.small-button-is-danger-disabled:hover,.small-button-is-danger-disabled:active{cursor: not-allowed;color: #fff;background-color: #fab6b6;border-color: #fab6b6;}
    .small-button-is-plain-danger-disabled,.small-button-is-plain-danger-disabled:disabled,.small-button-is-plain-danger-disabled:hover,.small-button-is-plain-danger-disabled:active{color: #f9a7a7;cursor: not-allowed;background-image: none; background-color: #fef0f0;border-color: #fde2e2;}


    .small-button-success{color: #fff;background-color: #67c23a;border-color: #67c23a;}
    .small-button-success:hover{background: #85ce61;border-color: #85ce61;color: #fff;}
    .small-button-success:active{background: #5daf34;border-color: #5daf34;color: #fff;}
    .small-button-plain-success{color: #67c23a;background: #f0f9eb;border-color: #c2e7b0;}
    .small-button-plain-success:hover{background: #67c23a;border-color: #67c23a;color: #fff;}
    .small-button-plain-success:active{background: #5daf34; border-color: #5daf34;color: #fff;}
    .small-button-is-success-disabled,.small-button-is-success-disabled:disabled,.small-button-is-success-disabled:hover,.small-button-is-success-disabled:active{cursor: not-allowed;color: #fff;background-color: #b3e19d;border-color: #b3e19d;}
    .small-button-is-plain-success-disabled,.small-button-is-plain-success-disabled:disabled,.small-button-is-plain-success-disabled:hover,.small-button-is-plain-success-disabled:active{color: #a4da89;cursor: not-allowed;background-image: none; background-color: #f0f9eb;border-color: #e1f3d8;}


    .small-button-is-circle{padding:10px;border-radius: 50%;i{margin:0px;}}
</style>
