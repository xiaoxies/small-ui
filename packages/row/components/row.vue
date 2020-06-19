<template>
    <div :style="style" class="small-row">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name:"sRow",
        componentName:"sRow",
        props:{
            gutter: Number,
        },
        computed:{
            style(){
                let styles={};
                if (this.gutter) {
                    styles.marginLeft = `-${this.gutter / 2}px`;
                    styles.marginRight = styles.marginLeft;
                }
                return styles;
            }
        },
        data() {
            return {}
        }
    }
</script>

<style scoped lang="less">
    .small-row+.small-row{margin-bottom:20px;position: relative;}
</style>
