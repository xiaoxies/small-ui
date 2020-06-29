<template>
    <footer class="small-footer" :style="{'height':height+'px'}">
        <slot></slot>
    </footer>
</template>

<script>
    export default {
        name:"sFooter",
        componentName:"sFooter",
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
