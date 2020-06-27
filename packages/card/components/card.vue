<template>
    <div :class="[
        'small-card',
        'small-card-'+type
    ]">
        <div class="small-card-header">
            <slot name="header"></slot>
        </div>
        <div class="small-card-body" :style="'padding:'+padding">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "sCard",
        componentName:"sCard",
        props:{
            padding:{
                type:String,
                default:"20px"
            },
            type:{
                type:String,
                default:"default"
            }
        }
    }
</script>

<style scoped lang="less">
    .small-card,.small-card *{box-sizing: border-box;}
    .small-card{
        box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);width:100%;background:#fff;
        border-radius: 4px;    overflow: hidden;border: 1px solid #ebeef5;
        color: #303133;transition: all 0.3s;
    }
    .small-card-header{
        width:100%;padding:13px 16px;font-size:16px;border-bottom:1px solid #ebeef5;box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    }
    .small-card-body{
        width:100%;font-size:14px;
    }

    .small-card-primary{
        border:1px solid #409eff;
        .small-card-header{
            background:#409eff;color:#fff;
        }
    }
    .small-card-success{
        border:1px solid #67c23a;
        .small-card-header{
            background:#67c23a;color:#fff;
        }
    }
    .small-card-danger{
        border:1px solid #f56c6c;
        .small-card-header{
            background:#f56c6c;color:#fff;
        }
    }
    .small-card-warning{
        border:1px solid #e6a23c;
        .small-card-header{
            background:#e6a23c;color:#fff;
        }
    }
    .small-card-info{
        border:1px solid #909399;
        .small-card-header{
            background:#909399;color:#fff;
        }
    }

</style>