<template>
    <i
       class="small-icon"
       :class="['iconfont',type]"
       :style="{
            'color':color,
            'font-size':size
       }"
    ></i>
</template>

<script>
    export default {
        name:"sIcon",
        componentName:"sIcon",
        props:{
            type:String,
            size:{
                type:String,
                default:'20px'
            },
            color:{
                type:String,
                default:'#606266'
            },
        }
    }
</script>

<style scoped lang="less">
    .small-icon{font-size:20px;}
</style>
