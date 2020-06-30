<template>
    <ul class="small-timeline">
        <slot></slot>
    </ul>
</template>

<script>
    export default {
        name:"sTimeline",
        componentName:"sTimeline",
        mounted(){
            this.$nextTick(()=>{
                let item=this.$el.querySelectorAll('.small-timeline-item');
                if(item.length){
                    item[item.length-1].querySelector('.small-timeline-line').style.display="none";
                }
            })
        }
    }
</script>

<style scoped lang="less">
    .small-timeline,small-timeline>li{list-style:none;box-sizing: border-box;}
    .small-timeline{width:100%;}

</style>
