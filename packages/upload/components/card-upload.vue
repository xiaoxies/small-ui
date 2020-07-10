<template>
    <div class="small-upload-card" >
        <transition-group name="upload-card" class="small-upload-transition" >
            <div class="small-upload-card-li" v-for="(item,index) in value" :key="item.url" :style="{
                width,
                height,
                'border-radius':circle?'50%':''
            }">
                <img :src="item.url" alt="">
                <div class="small-upload-success"></div>
                <i class="icon-zhengquewancheng iconfont small-upload-success-icon"></i>
                <div class="small-upload-loading">
                    <s-icon color="#fff" type="icon-xianshikejian" :size="iconSize" @click="see(item,index)"></s-icon>
                    <s-icon color="#fff" type="icon-xiazaidaoru" :size="iconSize" @click="download(item,index)"></s-icon>
                    <s-icon color="#fff" type="icon-cuowuguanbiquxiao-yuankuang" @click="remove(item,index)" :size="iconSize"></s-icon>
                </div>
            </div>
            <div class="small-upload-card-btn" key="small-upload-content" :style="{
                width,
                height,
                'border-radius':circle?'50%':''
            }">
                    <s-icon :type="icon" :size="size" :color="color"></s-icon>
                    <input type="file" @change="fileChange" class="small-upload-card-file" :multiple="multiple" :accept="accept">
            </div>
        </transition-group>
    </div>
</template>

<script>
    import sIcon from "../../icon";

    import {compileImage,noCompile,download} from "../../utils/common";
    export default {
        name:"cardUpload",
        componentName:"cardUpload",
        components:{sIcon},
        props:{
            width:{type:String,default:"150px"},
            height:{type:String,default:"150px"},
            value:{type:Array,default:()=>[]},
            circle:{type:Boolean,default:false},
            size:{type:String,default:"30px"},
            color:{type:String,default:"#8c939d"},
            icon:{type:String,default:"icon-jia"},
            iconSize:{type:String,default:"20px"},
            compress:{type:Boolean,default:true},
            limit:Number,
            multiple:{type:Boolean,default:false},
            accept:{type:String,default:"image/*"},
        },
        methods:{
            see(item,index){
                this.$emit("see",item,index);
            },
            remove(item,index){
                this.value.splice(index,1);
                this.$emit("remove",item,index);
            },
            download(item,index){
                download(item.url,item.name);
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
        },

    }
</script>

<style scoped lang="less">
    .small-upload-card,.small-upload-card *{box-sizing: border-box;}
    .small-upload-card{width:100%;position: relative;box-sizing: border-box;display:flex;align-items: flex-start;justify-content: flex-start;flex-wrap: wrap;}
    .small-upload-card-btn{
        background-color: #fbfdff;border: 1px dashed #c0ccda;border-radius: 6px;display:flex;align-items: center;justify-content: center;transition: all 0.3s;cursor: pointer;
        position: relative;
        &:hover{border-color:#409eff;color:#409eff;}
    }
    .small-upload-success{
        position: absolute;right:-25px;top:0px;width:60px;height:20px;background:#67c23a;
        transform: rotate(45deg);
    }
    .small-upload-success-icon{
        position: absolute;
        right:0px;top:0px;color:#fff;
    }
    .small-upload-card-file{position: absolute;top:0px;left:0px;width:100%;height:100%;opacity:0;cursor: pointer;}
    .small-upload-card-li{
        background-color: #fff;border: 1px solid #c0ccda;border-radius: 6px;overflow:hidden;box-sizing: border-box;padding:10px;margin-right:10px;cursor: pointer;
        transition: all 0.3s;position: relative;display:flex;align-items: center;justify-content: center;margin-bottom:10px;
        .small-upload-loading{
            transition:all 0.4s;position: absolute;top:0px;left:0px;width:100%;height:100%;display:flex;align-items: center;justify-content: space-around;background:rgba(0,0,0,0.5);padding:0px 15%;opacity:0;z-index:2;       }
        &:hover .small-upload-loading{
            opacity:1;
        }
        &:hover  .small-upload-success{
            opacity:0;
        }
        img{max-width:100%;max-height:100%;}
    }
    .small-upload-transition{display:flex;align-items: flex-start;justify-content: flex-start;flex-wrap: wrap;}

    .upload-card-enter-active { animation: upload-card-in .5s; }
    .upload-card-leave-active {animation: upload-card-out .5s;}
    @keyframes upload-card-in {
        0% {transform: translate3d(0%, -60px, 0);opacity: 0;}
        100% {transform: translate3d(0%, 0, 0);opacity: 1;}
    }
    @keyframes upload-card-out {
        0% {transform: translate3d(0%, 0, 0);opacity: 1;}
        100% {transform: translate3d(0%, -30px, 0);opacity: 0;}
    }
</style>
