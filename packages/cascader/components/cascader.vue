<template>
    <div :class="{
        'small-cascader':true,
        'small-cascader-active':show
    }">
        <div class="small-cascader-content"></div>
        <div class="small-cascader-icon"><s-icon :type="show?'icon-xiangshangshouqi':'icon-xiangxiazhankai'" color="#c0c4cc"></s-icon></div>
    </div>
</template>

<script>
    import sIcon from "../../icon";
    export default {
        name:"cascader",
        componentName:"cascader",
        components:{sIcon},
        data() {
            return {
                show:false
            }
        }
    }
</script>

<style scoped lang="less">
    .small-cascader{
        position: relative;width:100%;min-height:40px;background-color: #fff;border-radius: 4px;
        border: 1px solid #dcdfe6;box-sizing: border-box;cursor: pointer;display:flex;align-items: center;justify-content: space-between;
        &:hover{
            border-color: #c0c4cc;
        }
    }
    .small-cascader-active{border-color:#409eff;}
    .small-cascader-content{
        width:100%;height:100%;padding-right:35px;color:#606266;font-size:14px;
        overflow:hidden;text-overflow: ellipsis;white-space: nowrap;padding-left:10px;
    }
    .small-cascader-icon{
        width:35px;height:100%;display:flex;align-items: center;justify-content: center;
        position: absolute;right:0px;top:0px;
    }

</style>
