<template>
    <div class="small-upload-drag" ref="drag" :style="{
            width,
            height
        }">
        <div class="small-upload-drag-body" v-show="value==''">
            <div v-if="!$slots.default">
                <s-icon type="icon-shangchuandaochu" color="#c0c4cc" size="40px"></s-icon>
                <div class="small-upload-drag-title">
                    <span>将文件拖到此处，或 </span>
                    <s-button type="text">点击上传</s-button>
                </div>
            </div>
            <div  v-if="$slots.default">
                <slot></slot>
            </div>
            <input type="file" @change="fileChange" class="small-upload__file">
        </div>
        <div class="small-upload-drag__img" v-show="value!==''">
            <img :src="value" alt="">
            <div class="small-upload-drag-loading">
                <s-icon color="#fff" type="icon-xianshikejian" :size="iconSize" @click="see"></s-icon>
                <s-icon color="#fff" type="icon-xiazaidaoru" :size="iconSize" @click="download"></s-icon>
                <s-icon color="#fff" type="icon-cuowuguanbiquxiao-yuankuang" @click="remove" :size="iconSize"></s-icon>
            </div>
        </div>
    </div>
</template>

<script>
    import sIcon from "../../icon";
    import sButton from "../../button";
    import {compileImage,noCompile,download} from "../../utils/common";
    export default {
        name:"sDragUpload",
        componentName:"sDragUpload",
        components:{sIcon,sButton},
        props:{
            width:{type:String,default:"250px"},
            height:{type:String,default:"160px"},
            value:{type:String,default:""},
            compress:{type:Boolean,default:true},
            iconSize:{type:String,default:"24px"},
        },
        methods:{
            async fileChange(e){
                let data;
                if(this.compress){
                    data=await compileImage(e.target.files[0])
                }else{
                    data=await noCompile(e.target.files[0])
                }
                this.$emit("change", data)
            },
            download(){
                download(this.value,new Date().getTime());
            },
            see(){
                this.$emit("see", this.value)
            },
            remove(){
                this.$emit("remove", this.value)
            }
        },
        mounted(){
            this.$nextTick(()=>{
                this.$refs.drag && this.$refs.drag.addEventListener('dragover', function(e) {
                    e.stopPropagation();
                    //阻止浏览器默认打开文件的操作
                    e.preventDefault();
                    e.dataTransfer.dropEffect = 'copy';
                });
                this.$refs.drag && this.$refs.drag.addEventListener('drop',async (e)=>{
                    e.stopPropagation();
                    e.preventDefault();
                    let data;
                    if(this.compress){
                        data=await compileImage(e.dataTransfer.files[0])
                    }else{
                        data=await noCompile(e.dataTransfer.files[0])
                    }
                    this.$emit("change", data)
                })
            })
        }
    }
</script>
<style scoped lang="less">
    .small-upload-drag{
        border: 1px dashed #d9d9d9;border-radius: 6px;position: relative;
        &:hover{border-color:#409eff;}
    }
    .small-upload-drag__img{
        width:100%;height:100%;display:flex;align-items: center;justify-content: center;position: relative;padding:10px;cursor: pointer;
        img{max-width:100%;max-height:100%;}
        &:hover .small-upload-drag-loading{opacity:1;}
    }
    .small-upload-drag-loading{
        transition:all 0.4s;position: absolute;top:0px;left:0px;width:100%;height:100%;display:flex;align-items: center;justify-content: space-around;background:rgba(0,0,0,0.5);padding:0px 15%;opacity:0;z-index:2;
    }
    .small-upload-drag-body>div{width:100%;height:100%;display:flex;align-items: center;justify-content: center;flex-direction: column;position: relative;cursor: pointer;}
    .small-upload-drag-body{width:100%;height:100%;display:flex;align-items: center;justify-content: center;flex-direction: column;position: relative;cursor: pointer;}
    .small-upload-drag-title{font-size:14px;color: #606266;display:flex;align-items: center;justify-content: center;}
    .small-upload__file{position: absolute;top:0px;left:0px;width:100%;height:100%;opacity:0;cursor: pointer;}
</style>
