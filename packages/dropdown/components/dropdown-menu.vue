<template>
    <ul class="small-dropdown-menu" :style="{width}">
        <slot></slot>
        <div class="small-dropdown-zanwu" v-if="!$slots.default">暂无</div>
        <i class="iconfont icon-biaotou-zhengxu small-dropdown-top"></i>
    </ul>
</template>

<script>
    export default {
        name: "sDropdownMenu",
        componentName:"sDropdownMenu",
        props:{
            width:{
                type:String,
                default:"100%"
            },
            col:{
                type:String|Number,
                default:1
            }
        },
        provide(){
            return {
                sDropdownMenu:this
            }
        },
    }
</script>

<style scoped lang="less">
    .small-dropdown-menu,small-dropdown-menu *{list-style:none;box-sizing: border-box;}
    .small-dropdown-menu{
        width:100%;display:flex;flex-wrap: wrap;align-items: flex-start;justify-content: flex-start;
        background-color: #fff;border-radius: 4px;transition: all 0.3s;padding:10px;
        border: 1px solid #ebeef5;box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    }
    .small-dropdown-zanwu{
        width:100%;line-height:35px;text-align:center;font-size:14px;color:#666;
    }
    .small-dropdown-top{
        position: absolute;top:-18px;font-size:30px;left:50%;    transform: translateX(-50%);
        color:#fff;filter: drop-shadow(0 2px 12px rgba(0,0,0,.03));
    }

</style>
