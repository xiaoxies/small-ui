<template>
    <div class="small-upload-button-list">
        <div class="small-upload-btn">
            <s-button  type="primary" size="small"  :icon="icon">{{text}}</s-button>
            <input type="file" :accept="accept" @change="fileChange" class="small-upload-file" :multiple="multiple">
        </div>
        <div class="small-upload-button-list-slot"><slot></slot></div>
        <div class="small-upload-button-list">
            <transition-group name="upload-button" >
                <div class="small-upload-button-li" v-for="(item,index) in value" :key="item.name">
                    <div class="small-upload-button-list-img">
                        <img :src="item.url" alt="">
                    </div>
                    <div class="small-upload-button-list-name">{{item.name}}</div>
                    <i class="iconfont icon-cuowuguanbiquxiao-yuankuang small-upload-button-list-icon" @click="remove(item,index)"></i>
                </div>
            </transition-group>
        </div>
    </div>
</template>

<script>
    import {compileImage,noCompile} from "../../utils/common";
    import {inputMixins} from "../../utils/mixins";
    import sIcon from "../../icon";
    export default {
        name:"sButtonListUpload",
        componentName:"sButtonListUpload",
        components:{sIcon},
        mixins:[inputMixins],
        props:{
            limit:Number,
            multiple:{type:Boolean,default:false},
            accept:{type:String,default:"image/*"},
            text:{type:String,default:"点击上传"},
            icon:{type:String,default:"icon-shangchuandaochu"},
            compress:{type:Boolean,default:true},
            value:{type:Array,default:()=>[]}
        },
        data(){
            return {
                active:null
            }
        },
        methods:{
            remove(item,index){
                this.value.splice(index,1);
                this.$emit("remove",item,index);
            },
           async fileChange(e){

                   let arr=[];
                   if(this.limit && (this.value.length+e.target.files.length) > this.limit){
                       this.$emit("exceed",e.target.files,this.value)
                       return
                   }
                   for(let i=0;i<e.target.files.length;i++){
                       let data;
                       if(this.compress){
                           data=await compileImage(e.target.files[i])
                       }else{
                           data=await noCompile(e.target.files[i])
                       }
                       arr.push(data)
                   }
                   this.$emit("change", this.multiple ? arr: arr[0])
            }
        }
    }
</script>

<style scoped lang="less">
    .small-upload-button-list{position: relative;}
    .small-upload{display:inline-block;position: relative;}
    .small-upload-button-list-slot{margin-top:5px;}
    .small-upload-btn{display:inline-block;position: relative;}
    .small-upload-file{position: absolute;top:0px;left:0px;right:0px;bottom:0px;width:100%;height:100%;opacity:0;cursor: pointer;z-index:3;}
    .small-upload-button-list-slot{margin-top:5px;}
    .small-upload-button-list-active{
        background:#f5f7fa;
        span{
            color:#409eff !important;
        }
    }
    .small-upload-button-list{margin-top:10px;}
    .small-upload-button-list-name{font-size:14px;color:#606266;margin-left:20px;}
    .small-upload-button-li{
        background-color: #fff;height:92px;margin-bottom:10px;border-radius: 6px;cursor: pointer;transition: all 0.3s;
        border: 1px solid #c0ccda;padding:10px;display:flex;align-items: center;justify-content: flex-start;position: relative;
        &:hover{
            border-color:#409eff;color:#409eff;
        }
    }
    .small-upload-button-list-icon{
        position: absolute;right:5px;top:5px;color:#666;font-size:20px;
        &:hover{color:#409eff;}
    }
    .small-upload-button-list-img{width:70px;height:70px;display:flex;align-items: center;justify-content: center; img{max-width:100%;max-height:100%;}}

    .upload-button-enter-active { animation: upload-button-in .5s; }
    .upload-button-leave-active {animation: upload-button-out .5s;}
    @keyframes upload-button-in {
        0% {transform: translate3d(0%, -40px, 0);opacity: 0;}
        100% {transform: translate3d(0%, 0, 0);opacity: 1;}
    }
    @keyframes upload-button-out {
        0% {transform: translate3d(0%, 0, 0);opacity: 1;}
        100% {transform: translate3d(0%, -20px, 0);opacity: 0;}
    }
</style>
