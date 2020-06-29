<template>
    <header class="small-header" :style="{'height':height+'px'}">
        <slot></slot>
    </header>
</template>

<script>
    export default {
        name:"sHeader",
        componentName:"sHeader",
        props: {
            height: {
                type: String|Number,
                default: 60
            }
        }
    }
</script>

<style scoped lang="less">
    .small-footer{
        flex-shrink: 0;box-sizing: border-box;
    }
</style>
