<template>
    <div class="small-upload">
        <s-button @change="fileChange" type="primary" size="small" html-type="file" :multiple="multiple" :icon="icon">{{text}}</s-button>
    </div>
</template>

<script>
    export default {
        name:"sButtonUpload",
        componentName:"sButtonUpload",
        props:{
            limit:Number,
            multiple:{type:Boolean,default:false},
            accept:{type:String,default:"image/*"},
            text:{type:String,default:"点击上传"},
            icon:{type:String,default:"icon-shangchuandaochu"},
        },
        methods:{
            fileChange(e){
                console.log(e.target.files);
            }
        }
    }
</script>

<style scoped lang="less">
    .small-upload{display:inline-block;position: relative;}
</style>
