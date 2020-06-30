<template>
    <div class="small-progress-circle-body" :style="{width,'height':width,}">
        
    </div>
</template>

<script>
    export default {
        props:{
            width:{type:String,default:"150px"},
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
    .small-progress-circle-body *{box-sizing: border-box;}

</style>
