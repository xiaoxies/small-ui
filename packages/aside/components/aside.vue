<template>
    <aside class="small-aside" :style="{'width': width + 'px'}">
        <slot></slot>
    </aside>
</template>

<script>
    export default {
        name:"sAside",
        componentName:"sAside",
        props: {
            width: {
                type: String|Number,
                default: 200
            }
        }
    }
</script>

<style scoped lang="less">
    .small-aside{
        box-sizing: border-box;
        flex-shrink: 0;overflow: auto;display: block;
    }
</style>
