<template>
    <div :class="[
        'small-tag',
        'small-tag-size-'+size,
        'small-tag-'+effect+'-'+type,
    ]">
        <slot></slot>
        <i v-if="closable" @click="close" class="iconfont icon-cuowuguanbiquxiao small-tag-closable"></i>
    </div>
</template>

<script>
    export default {
        name:"sTag",
        componentName:"sTag",
        props:{
            size:{
                type:String,
                default:"medium"
            },
            type:{
                type:String,
                default:"default"
            },
            effect:{
                type:String,
                default:"plain"
            },
            closable:{
                type:Boolean,
                default:false
            }
        },
        methods:{
            close(){
                this.$emit('close');
            }
        }
    }
</script>

<style scoped lang="less">
    .small-tag+.small-tag{margin-left:10px;}
    .small-tag{
        display:inline-block;font-size:12px;background: #fff;border: 1px solid #dcdfe6;color: #606266;border-radius: 4px;box-sizing: border-box;
        .small-tag-closable{
            display:inline-block;font-size:12px;margin-left:5px;cursor: pointer;border-radius: 50%;padding:1px 2px;
            &:hover{
                background:#909399;color:#fff;
            }
        }
    }

    .small-tag-size-medium{padding:4px 10px;}
    .small-tag-size-big{padding:5px 10px;}
    .small-tag-size-small{padding:3px 8px;}
    .small-tag-size-mini{padding:2px 6px;}

    .small-tag-plain-primary{
        color: #409eff;border: 1px solid #d9ecff;background-color: #ecf5ff;
        .small-tag-closable:hover{background-color: #409eff;color:#fff;}
    }
    .small-tag-plain-info{
        background-color: #f4f4f5;border-color: #e9e9eb;color: #909399;
        .small-tag-closable:hover{background-color: #909399;color:#fff;}
    }
    .small-tag-plain-success{
        background-color: #f0f9eb; border-color: #e1f3d8;color: #67c23a;
        .small-tag-closable:hover{background-color: #67c23a;color:#fff;}
    }
    .small-tag-plain-danger{
        background-color: #fef0f0;border-color: #fde2e2; color: #f56c6c;
        .small-tag-closable:hover{background-color: #f56c6c;color:#fff;}
    }
    .small-tag-plain-warning{
        background-color: #fdf6ec; border-color: #faecd8;color: #e6a23c;
        .small-tag-closable:hover{background-color: #e6a23c;color:#fff;}
    }


    .small-tag-dark-primary{
        color: #fff;border: 1px solid #d9ecff;background-color: #409eff;
        .small-tag-closable:hover{background-color: #fff;color:#409eff;}
    }
    .small-tag-dark-info{
        background-color: #909399;border-color: #e9e9eb;color: #fff;
        .small-tag-closable:hover{background-color: #fff;color:#909399;}
    }
    .small-tag-dark-success{
        background-color: #67c23a; border-color: #e1f3d8;color: #fff;
        .small-tag-closable:hover{background-color: #fff;color:#67c23a;}
    }
    .small-tag-dark-danger{
        background-color: #f56c6c;border-color: #fde2e2; color: #fff;
        .small-tag-closable:hover{background-color: #fff;color:#f56c6c;}
    }
    .small-tag-dark-warning{
        background-color: #e6a23c; border-color: #faecd8;color: #fff;
        .small-tag-closable:hover{background-color: #fff;color:#e6a23c;}
    }


</style>
