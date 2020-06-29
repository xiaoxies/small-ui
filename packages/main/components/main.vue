<template>
    <main class="small-main">
        <slot></slot>
    </main>
</template>

<script>
    export default {
        name:"sMain",
        componentName:"sMain"
    }
</script>

<style scoped lang="less">
    .small-main{
        flex: 1;box-sizing: border-box;
        flex-basis: auto;display: block;
    }
</style>
