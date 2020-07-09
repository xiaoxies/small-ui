<template>
    <div class="small-upload-button">
        <div class="small-upload-btn">
            <s-button  type="primary" size="small"  :icon="icon">{{text}}</s-button>
            <input type="file" :accept="accept" @change="fileChange" class="small-upload-file" :multiple="multiple">
        </div>
        <div class="small-upload-button-slot"><slot></slot></div>
        <div class="small-upload-button-list">
            <transition-group name="upload-button" >
                    <div :class="{
                'small-upload-button-li':true,
                'small-upload-button-active':active==index
            }"  @mouseover="moveStart(item,index)" @mouseout="moveEnd" @click="clickHanlder(item,index)" v-for="(item,index) in value" :key="item.name">
                        <s-icon type="icon-baocun-xianxing" size="18px"></s-icon>
                        <span>{{item.name}}</span>
                        <div class="small-upload-button-close" @click="remove(item,index)">
                            <s-icon :type="active===index?'icon-cuowuguanbiquxiao-yuankuang':'icon-zhengquewancheng-yuankuang'" :color="active==index?'#606266':'#67c23a'" size="18px"></s-icon>
                        </div>
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
        name:"sButtonUpload",
        componentName:"sButtonUpload",
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
            clickHanlder(item,index){
                this.$emit("click",item,index);
            },
            moveStart(item,index){
                this.active=index;
            },
            moveEnd(){
                this.active=null;
            },
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
    .small-upload-button{position: relative;}
    .small-upload{display:inline-block;position: relative;}
    .small-upload-button-slot{margin-top:5px;}
    .small-upload-btn{display:inline-block;position: relative;}
    .small-upload-file{position: absolute;top:0px;left:0px;right:0px;bottom:0px;width:100%;height:100%;opacity:0;cursor: pointer;z-index:3;}
    .small-upload-button-list{margin-top:5px;}
    .small-upload-button-li{
        padding-left:5px;width:100%;height:25px;display:flex;align-items: center;justify-content: flex-start;transition: all 0.3s;cursor: pointer;position: relative;
        span{font-size:12px;color:#606266;margin-left:10px;transition: all 0.3s;}
    }
    .small-upload-button-close{position: absolute;right:10px;top:50%;transform: translateY(-50%);transition: all 0.3s;}
    .small-upload-button-active{
        background:#f5f7fa;
        span{
            color:#409eff !important;
        }
    }

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
