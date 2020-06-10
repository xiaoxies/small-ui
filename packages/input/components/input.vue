<template>
    <div class="small-input">
        <input
                :value="value"
                type="text"
                @input="onInput"
                ref="input"
                :placeholder="placeholder"
                :disabled="disabled"
                :readonly="readonly"
                :class="[
                    'small-input__inner',
                    'small-input-'+size,
                ]"
        >
        <div class="small-input-clear" v-if="showClearIcon" @click="clearHandler">
            <i class="iconfont icon-cuowuguanbiquxiao-xianxingyuankuang"></i>
        </div>
    </div>
</template>

<script>
    export default {
        name:"sInput",
        model:{
            props:"value",
            event:"update::value"
        },
        props:{
            value:[Date,String],
            clear:{
                type:Boolean,
                default:true
            },
            size:{
                type:String,
                default:"medium"
            },
            readonly:{
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
            return {}
        },
        computed:{
            showClearIcon(){
                return this.clear && !this.disabled && !this.readonly && this.value!==''
            }
        },
        methods:{
            clearHandler(){
                this.$emit("update::value","");
                this.$refs.input.focus();
            },
            onInput(e){
                this.$emit("update::value",e.target.value);
            }
        }
    }
</script>

<style scoped lang="less">
    .small-input{width:100%;position: relative;display:flex;align-items: center;justify-content: flex-start;}
    .small-input__inner{
        -webkit-appearance: none;background-color: #fff;cursor: pointer;
        background-image: none;border-radius: 4px;
        border: 1px solid #dcdfe6;box-sizing: border-box;
        color: #606266;display: inline-block;
        outline: none;padding: 0 15px;font-size:14px;padding-right:30px;
        transition: all .2s cubic-bezier(.645,.045,.355,1);width: 100%;
        &:focus{border-color: #409eff;}
    }
    .small-input-clear{
        position: absolute;right:0px;top:0px;width:30px;height:100%;display:flex;align-items: center;justify-content: center;
        cursor: pointer;transition: color .2s cubic-bezier(.645,.045,.355,1);
        i{color:#c0c4cc;font-size: 14px;&:hover{color:#909399;}}
    }
    .small-input-big{height: 40px;line-height: 40px;}
    .small-input-medium{height: 36px;line-height: 36px;}
    .small-input-small{height: 32px;line-height: 32px;}
    .small-input-mini{height: 28px;line-height: 28px;font-size:12px;}

</style>
