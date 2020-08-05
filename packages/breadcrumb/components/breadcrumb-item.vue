<template>
    <div class="small-breadcrumb-item">
        <div
            @click="clickHandel"
            :class="[
            'small-breadcrumb-item-title',
            isClick?'small-breadcrumb-item-hover':''
        ]"><slot></slot></div>
        <div class="small-breadcrumb-item-icon">
            <i v-if="!sBreadcrumb.type" class="iconfont icon-xiayiyeqianjinchakangengduo"></i>
            <span v-if="sBreadcrumb.type">{{sBreadcrumb.type}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "sBreadcrumbItem",
        componentName:"sBreadcrumbItem",
        props:{
            isClick:{
                type:Boolean,
                default:false
            },
            name:String,
            row:Object|Number|String|Array
        },
        inject:['sBreadcrumb'],
        methods:{
            clickHandel(){
                if(this.isClick){
                    this.sBreadcrumb.clickHandel(this.name,this.row)
                }
            }
        }
    }
</script>

<style scoped lang="less">
    .small-breadcrumb-item{display:flex;align-items: center;justify-content: flex-start;font-size:14px;color:#606266;}
    .small-breadcrumb-item-icon{
        padding:0px 7px;font-size:14px;color:#606266;
    }
    .small-breadcrumb-item-hover{
        color: #303133;font-weight:bold;transition: all 0.3s;cursor: pointer;
        &:hover{
            color: #409eff;
        }
    }
</style>
