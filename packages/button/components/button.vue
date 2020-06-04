<template>
    <button :class="[
        'small-button',
        'small-button-'+type,
        'small-button-size-'+size,
    ]">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: "sButton",
        props:{
            type:{
                type:String,
                default:"default"
            },
            size:{
                type:String,
                default:"default"
            }
        }
    }
</script>

<style scoped lang="less">

    .small-button{transition: all 0.3s;font-size: 14px; border-radius: 4px;cursor: pointer;outline: none;}
    .small-button+.small-button{
        margin-left:10px;
    }
    .small-button-size-default{padding: 12px 20px;}
    .small-button-size-medium{padding: 10px 20px;}
    .small-button-size-small{padding: 9px 15px;font-size:12px;}
    .small-button-size-mini{padding: 7px 20px;font-size:12px;}

    .small-button-default{border: 1px solid #dcdfe6;color: #606266;background: #fff;}
    .small-button-default:hover{color: #409eff;border-color: #c6e2ff;background-color: #ecf5ff;}
    .small-button-default:active{color: #3a8ee6;border-color: #3a8ee6;outline: none;}

    .small-button-primary{border: 1px solid #409eff;color: #fff;background: #409eff;}
    .small-button-primary:hover{background: #66b1ff;border-color: #66b1ff;color: #fff;}
    .small-button-primary:active{background: #3a8ee6;border-color: #3a8ee6;color: #fff;}

    .small-button-info{border: 1px solid #909399;color: #fff;background: #909399;}
    .small-button-info:hover{background: #a6a9ad;border-color: #a6a9ad;color: #fff;}
    .small-button-info:active{background: #82848a;border-color: #82848a;color: #fff;}

    .small-button-warning{border: 1px solid #e6a23c;color: #fff;background: #e6a23c;}
    .small-button-warning:hover{background: #ebb563;border-color: #ebb563;color: #fff;}
    .small-button-warning:active{background: #cf9236;border-color: #cf9236;color: #fff;}

    .small-button-danger{border: 1px solid #f56c6c;color: #fff;background: #f56c6c;}
    .small-button-danger:hover{background: #f78989;border-color: #f78989;color: #fff;}
    .small-button-danger:active{background: #dd6161;border-color: #dd6161;color: #fff;}

    .small-button-success{color: #fff;background-color: #67c23a;border-color: #67c23a;}
    .small-button-success:hover{background: #85ce61;border-color: #85ce61;color: #fff;}
    .small-button-success:active{background: #5daf34;border-color: #5daf34;color: #fff;}

</style>