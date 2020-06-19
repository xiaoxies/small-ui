<template>
    <div class="small-switch-home">
        <div class="small-switch-open-font" v-if="closeText" :style="'color:'+(!value?closeColor:'')">{{closeText}}</div>
        <div :class="[
                'small-switch',
                'small-switch-'+size,
                value?'small-switch-open':'small-switch-close',
                {'small-switch-disabled':disabled}
            ]"
            :style="'background:'+(value?openColor:closeColor)"
             @click="clickHander"
        >
            <div class="small-switch-open-text" v-if="value&&size=='big'">
                <slot name="open"></slot>
            </div>
            <div  class="small-switch-close-text" v-if="!value&&size=='big'">
                <slot name="close"></slot>
            </div>
        </div>
        <div class="small-switch-close-font" v-if="openText" :style="'color:'+(value?openColor:'')">{{openText}}</div>
    </div>
</template>

<script>
    import {inputMixins} from "../../utils/mixins";
    export default {
        name:"sSwitch",
        componentName:"sSwitch",
        mixins:[inputMixins],
        props:{
            size:{
                type:String,
                default:"medium"
            },
            value:{
                type:Boolean,
                default:false
            },
            openColor:{
                type:String,
                default:"#409eff"
            },
            closeColor:{
                type:String,
                default:"#dcdfe6"
            },
            disabled:{
                type:Boolean,
                default:false
            },
            openText:String,
            closeText:String

        },
        methods:{
            clickHander(){
                if(!this.disabled){
                    this.$emit("update::value",!this.value);
                    this.$emit("change",!this.value);
                }
            }
        }
    }
</script>

<style scoped lang="less">
    .small-switch-home{display:flex;align-items: center;justify-content: flex-start;font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;}
    .small-switch{
        display:inline-block;position: relative;background: #ccc;transition: all 0.3s;
        cursor: pointer;outline: none;box-sizing: border-box;border-radius: 20px;
    }
    .small-switch-medium{
        height:24px;width: 48px;
        &::after{
            width:20px;height:20px;border-radius: 50%;background:#fff;position: absolute;top:2px;content:" ";transition: all 0.3s;
        }
    }
    .small-switch-big{
        height:24px;width: 60px;
        &::after{
            width:20px;height:20px;border-radius: 50%;background:#fff;position: absolute;top:2px;content:" ";transition: all 0.3s;
        }
    }
    .small-switch-small{
        height:20px;width: 36px;
        &::after{
            width:16px;height:16px;border-radius: 50%;background:#fff;position: absolute;top:2px;content:" ";transition: all 0.3s;
        }
    }
    .small-switch-open{
        &::after{
            right:3px;top:2px;transition: all 0.3s;
        }
    }
    .small-switch-close{
        &::after{
            left:3px;top:2px;transition: all 0.3s;
        }
    }
    .small-switch-disabled{cursor: not-allowed;opacity:0.6;}
    .small-switch-open-font{font-size:14px;margin-right:10px;color:#303133;}
    .small-switch-close-font{font-size:14px;margin-left:10px;color:#303133;}
    .small-switch-open-text{height:100%;width:100%;text-align:left;color:#fff;padding-left:10px;box-sizing: border-box;font-size:12px;line-height:24px;}
    .small-switch-close-text{height:100%;width:100%;text-align:right;color:#fff;padding-right:10px;box-sizing: border-box;font-size:12px;line-height:24px;}
</style>
