<template>
    <div class="small-upload-avatars">
        <div class="small-upload-avatar" :style="{
            width,
            height,
            'border-radius':circle?'50%':''
        }">
                <s-icon :type="icon" v-if="value==''" :size="size" :color="color"></s-icon>
                <img :src="value" v-if="value!==''">
                <input type="file" @change="fileChange" class="small-upload-file">
        </div>
        <div class="small-upload-avatar-slot"><slot></slot></div>
    </div>
</template>

<script>

    import sIcon from "../../icon";
    import {compileImage,noCompile} from "../../utils/common";
    export default {
        name:"sAvatarUpload",
        components:{sIcon},
        props:{
          width:{type:String,default:"150px"},
          height:{type:String,default:"150px"},
          value:{type:String,default:""},
          circle:{type:Boolean,default:false},
          size:{type:String,default:"30px"},
          color:{type:String,default:"#8c939d"},
          icon:{type:String,default:"icon-jia"},
          compress:{type:Boolean,default:true}

        },
        data() {
            return {}
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
            }
        }
    }
</script>

<style scoped lang="less">
    .small-upload-avatars{display:inline-block;}
    .small-upload-file{position: absolute;top:0px;left:0px;width:100%;height:100%;opacity:0;cursor: pointer;}
    .small-upload-avatar{border: 1px dashed #d9d9d9;border-radius: 6px;overflow: hidden;display:flex;align-items: center;justify-content: center;cursor: pointer;position: relative;}
    .small-upload-avatar img{max-width:100%;max-height:100%;}
    .small-upload-avatar-slot{margin-top:5px;}
</style>
