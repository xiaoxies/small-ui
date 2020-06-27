<template>
    <div :style="style" :class="[
        'small-col',
        'small-col-span-'+span,
        offset?'small-col-offset-'+offset:''
    ]">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "sCol",
        componentName:"sCol",
        props:{
            span: {
                type: Number,
                default: 24
            },
            offset: Number,
        },
        computed: {
            style(){
                let style={};
                if (this.gutter) {
                    style.paddingLeft = this.gutter / 2 + 'px';
                    style.paddingRight = style.paddingLeft;
                }
                return style;
            },
            gutter() {
                let parent = this.$parent;
                while (parent && parent.$options.componentName !== 'sRow') {
                    parent = parent.$parent;
                }
                return parent ? parent.gutter : 0;
            }
        },
    }
</script>

<style scoped lang="less">
    .small-col{float:left;box-sizing: border-box;}
    .loop(@i) when (@i < 25){
        .small-col-span-@{i}{
            width: (1 / 24 * @i * 100) * 1%;
        }
        .small-col-offset-@{i}{
            margin-left: (1 / 24 * @i * 100) * 1%;
        }
        .loop(@i+1);
    }
    .loop(1);
</style>