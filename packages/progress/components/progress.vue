<template>
    <div class="small-progress-body">
        <div class="small-progress" :style="{width,height}">
            <div :class="[
                    'small-progress-line',
                    'small-progress-'+type
                ]" :style="{height,'width':percentage+'%'}"
            >
                <div class="small-progress-inside" v-if="textInside" v-html="format(percentage)"></div>
            </div>
        </div>
        <div class="small-progress-text" v-if="showText&&!textInside"  v-html="format(percentage)"></div>
    </div>
</template>

<script>
    export default {
        name:"Progress",
        componentName:"Progress",
        props:{
            width:{type:String,default:"400px"},
            height:{type:String,default:"6px"},
            type:{type:String,default:"primary"},
            percentage:{type:Number,default:0},
            showText:{type:Boolean,default:true},
            format:{type:Function,default:(item)=> item+"%"},
            textInside:{type:Boolean,default:false}
        }
    }
</script>

<style scoped lang="less">
    .small-progress-body *{box-sizing: border-box;}
    .small-progress-body{position: relative;box-sizing: border-box;display:flex;align-items: center;justify-content: flex-start;}
    .small-progress{background:#ebeef5;border-radius: 20px;position: relative; }
    .small-progress-line{position: absolute;top:0px;left:0px;border-radius: 20px;transition: all 0.3s; }
    .small-progress-inside{position: absolute;right:10px;font-size:12px;color:#fff;top:50%;transform: translateY(-50%);transition: all 0.3s;}


    .small-progress-primary{background:#409eff;}
    .small-progress-warning{background:#e6a23c;}
    .small-progress-danger{background:#f56c6c;}
    .small-progress-info{background:#909399;}
    .small-progress-text{font-size:14px;margin-left:10px;color:#606266;}

</style>
