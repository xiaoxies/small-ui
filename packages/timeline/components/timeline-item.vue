<template>
    <li class="small-timeline-item">
        <div class="small-timeline-line" :style="{
            'background':lineColor
        }"></div>
        <div class="small-timeline-yuan" :style="{
            'background':color
        }"></div>
        <div class="small-timeline-body">
            <div class="small-timeline-title">{{title}}</div>
            <div class="small-timeline-time">{{time}}</div>
            <slot></slot>
        </div>
    </li>
</template>

<script>
    export default {
        name:"sTimelineItem",
        componentName:"sTimelineItem",
        props:{
            title:String,
            time:String,
            lineColor:{
                type:String,
                default:"#e4e7ed"
            },
            color:{
                type:String,
                default:"#e4e7ed"
            }
        }
    }
</script>

<style scoped lang="less">
    .small-timeline-item{
        position: relative;padding-bottom:20px;padding-left:35px;width:100%;
    }
    .small-timeline-line{position: absolute; left: 6px;height: 100%;width:2px;background:#e4e7ed;}
    .small-timeline-title{font-size:14px;color: #303133;margin-bottom:8px;}
    .small-timeline-yuan{width:14px;height:14px;position: absolute;top:0px;left:0px;border-radius: 50%;}
    .small-timeline-body{
        position: relative;top:-2px;
    }
    .small-timeline-time{color:#909399;font-size:13px;margin-bottom:10px;}

</style>
