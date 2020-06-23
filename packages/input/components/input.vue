<template>
    <div class="small-input-row">
        <div class="small-input">
            <div class="small-input-prepend" v-if="$slots.prepend">
                <slot name="prepend"></slot>
            </div>
            <input
                    :style="!!prefixIcon?'padding-left:30px;':''"
                    :value="value"
                    :type="myType"
                    @input="onInput"
                    @focus="onFocus"
                    @blur="onBlur"
                    ref="input"
                    :placeholder="placeholder"
                    :disabled="disabled"
                    :readonly="readonly"
                    :class="[
                    'small-input__inner',
                    'small-input-'+size,
                    $slots.prepend ? 'slots-prepend':'',
                    $slots.append ? 'slots-append':''
                ]"
            >
            <div class="small-input-clear" v-if="showClearIcon" @click="clearHandler" @mousedown.prevent>
                <i class="iconfont icon-cuowuguanbiquxiao-xianxingyuankuang"></i>
            </div>
            <div class="small-input-clear" v-if="showPassIcon" @click="showPass" @mousedown.prevent>
                <i class="iconfont icon-xianshikejian"></i>
            </div>
            <div class="small-input-suffix-icon" v-if="suffixIcon && !$slots.append" >
                <i :class="'iconfont '+suffixIcon"></i>
            </div>
            <div class="small-input-prefix-icon" v-if="prefixIcon && !$slots.prepend" >
                <i :class="'iconfont '+prefixIcon"></i>
            </div>
            <div class="small-input-append" v-if="$slots.append">
                <slot name="append"></slot>
            </div>

        </div>
    </div>
</template>

<script>
    import {inputMixins} from "../../utils/mixins";
    export default {
        name:"sInput",
        componentName:"sInput",
        mixins:[inputMixins],
        props:{
            value:[Date,String],
            suffixIcon:String,
            prefixIcon:String,
            clear:{
                type:Boolean,
                default:true
            },
            size:{
                type:String,
                default:"medium"
            },
            type:{
                type:String,
                default:"text"
            },
            readonly:{
                type:Boolean,
                default:false
            },
            showPassword:{
                type:Boolean,
                default:false
            },
            disabled:{
                type:Boolean,
                default:false
            },
            placeholder:String
        },
        data() {
            return {
                showClear:false,
                myType:this.type
            }
        },
        computed:{
            showClearIcon(){
                return this.clear && !this.disabled && !this.readonly && this.value!==''&&this.showClear && !this.showPassword && !this.disabled&& !this.suffixIcon && !this.prefixIcon  && !this.$slots.append && !this.$slots.prepend
            },
            showPassIcon(){
                return this.showPassword && !this.disabled && !this.suffixIcon && !this.prefixIcon && !this.$slots.append && !this.$slots.prepend
            }
        },
        methods:{
            showPass(){
                this.myType=this.myType=="password"?'text':'password'
            },
            clearHandler(){
                this.$emit("update::value","");
                this.$emit("input","");
                this.$emit("clear","");
                //this.$refs.input.focus();
            },
            onFocus(e){
                this.showClear=true;
                this.$emit("focus",e);
            },
            onBlur(e){
                this.showClear=false;
                this.$emit("blur",e);
            },
            onInput(e){
                this.$emit("update::value",e.target.value);
                this.$emit("input",e)
            }
        }
    }
</script>

<style scoped lang="less">
    .small-input-row{width:100%;position: relative;font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;}
    .small-input{ position: relative;display:inline-table;width:100%;}
    .small-input__inner{
        -webkit-appearance: none;background-color: #fff;cursor: pointer;
        background-image: none;border-radius: 4px;
        border: 1px solid #dcdfe6;box-sizing: border-box;
        color: #606266;display: inline-block;
        outline: none;padding: 0 15px;font-size:14px;padding-right:30px;
        transition: all .2s cubic-bezier(.645,.045,.355,1);width: 100%;
        &:focus{border-color: #409eff;}
        &:disabled{
            background-color: #f5f7fa;border-color: #e4e7ed;color: #c0c4cc;cursor: not-allowed;
        }
    }
    .small-input-prepend{
        background-color: #f5f7fa;color: #909399;border: 1px solid #dcdfe6;border-radius: 4px;border-right: 0;
        border-top-right-radius: 0;border-bottom-right-radius: 0;
        vertical-align: middle;display: table-cell;position: relative;
        white-space: nowrap;height:100%;font-size:14px;padding:0px 15px;
    }
    .small-input-append{
        background-color: #f5f7fa;color: #909399;border: 1px solid #dcdfe6;border-radius: 4px;border-left: 0;
        border-top-left-radius: 0;border-bottom-left-radius: 0;
        vertical-align: middle;display: table-cell;position: relative;
        white-space: nowrap;height:100%;font-size:14px;padding:0px 15px;
    }
    .small-input-clear{
        position: absolute;right:0px;top:0px;width:30px;height:100%;display:flex;align-items: center;justify-content: center;
        cursor: pointer;transition: color .2s cubic-bezier(.645,.045,.355,1);
        i{color:#c0c4cc;font-size: 14px;&:hover{color:#909399;}}
    }
    .slots-prepend{border-top-left-radius: 0;border-bottom-left-radius: 0;}
    .slots-append{border-top-right-radius: 0;border-bottom-right-radius: 0;}
    .small-input-suffix-icon{
        position: absolute;right:0px;top:0px;width:30px;height:100%;display:flex;align-items: center;justify-content: center;
        cursor: pointer;transition: color .2s cubic-bezier(.645,.045,.355,1);z-index:1;
        i{color:#c0c4cc;font-size: 14px;}
    }
    .small-input-prefix-icon{
        position: absolute;left:0px;top:0px;width:30px;height:100%;display:flex;align-items: center;justify-content: center;
        cursor: pointer;transition: color .2s cubic-bezier(.645,.045,.355,1);z-index:1;
        i{color:#c0c4cc;font-size: 14px;}
    }
    .small-input-big{height: 40px;line-height: 40px;}
    .small-input-medium{height: 36px;line-height: 36px;}
    .small-input-small{height: 32px;line-height: 32px;}
    .small-input-mini{height: 28px;line-height: 28px;font-size:12px;}

</style>
