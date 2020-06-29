<template>
    <section class="small-container" :class="{ 'small-container-is-vertical': vertical }">
        <slot></slot>
    </section>
</template>

<script>
    export default {
        name:"sContainer",
        componentName:"sContainer",
        props: {
            direction: String
        },
        computed: {
            vertical() {
                if (this.direction === 'vertical') {
                    return true;
                } else if (this.direction === 'horizontal') {
                    return false;
                }
                return this.$slots && this.$slots.default
                    ? this.$slots.default.some(vnode => {
                        const tag = vnode.componentOptions && vnode.componentOptions.tag;
                        return tag === 's-header' || tag === 's-footer';
                    })
                    : false;
            }
        }
    }
</script>

<style scoped lang="less">
    .small-container{
        display: flex;flex-direction: row;
        flex: 1;
        flex-basis: auto;
        box-sizing: border-box;
        min-width: 0;
    }
    .small-container-is-vertical{flex-direction: column;}
</style>
