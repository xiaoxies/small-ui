<template>
    <div class="small-steps-item">
        <div class="small-steps-item-header">
            <div v-if="!icon" class="small-steps-item-yuan" :style="{
                'border-color':sSteps.value>=index+1?activeColor:color,
                'color':sSteps.value>=index+1?activeColor:color,
            }">{{index+1}}</div>
            <div class="small-steps-item-line" :style="{
                'background':sSteps.value>=index+2?activeColor:color,
            }" v-if="sSteps.steps.length-1>index"></div>
        </div>
        <div class="small-steps-item-body">
            <div class="small-steps-item-title" :style="{
                'color':sSteps.value>=index+1?activeColor:color,
            }">{{title}}</div>
            <div class="small-steps-item-content" :style="{
                'color':sSteps.value>=index+1?activeColor:color,
            }">{{content}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name:"sStepsItem",
        componentName:"sStepsItem",
        props:{
            title:String,
            content:String,
            icon:String,
            activeColor:{
                type:String,
                default:"#409eff"
            },
            color:{
                type:String,
                default:"#666"
            }
        },
        inject:["sSteps"],
        data(){
            return {
                index:1
            }
        },
        beforeCreate() {
            if(this.$parent.steps){
                this.$parent.steps.push(this);
            }
        }
    }
</script>

<style scoped lang="less">
    .small-steps-item-header{
        width:100%;display:flex;align-items: center;justify-content: center;position: relative;
        .small-steps-item-line{width:100%;height:2px;background:#666;position: absolute;left:50%;right:-50%;}
        .small-steps-item-yuan{
            position: relative;width:25px;height:25px;text-align:center;z-index:1;background:#fff;
            line-height:22px;font-size:14px;color:#666;border:2px solid #666;border-radius: 50%;
        }
    }
    .small-steps-item-body{
        margin-top:10px;padding:0px 10%;
    }
    .small-steps-item-title{font-size:16px;text-align:center;line-height:40px;color: #666;}
    .small-steps-item-content{font-size:12px;text-align:center;color: #666;}
</style>
