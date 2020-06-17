<template>
    <label
            :class="[
                'small-label-radio',
                value&&value==label?(border?'small-radio-checked small-radio-bordered':'small-radio-checked'):'',
                'small-radio-size-'+size,
                {'small-radio-border':border},
                {'small-radio-disabled':disabled}
            ]"
    >
            <span class="small_radio_span">
                <span class="small-radio-inner"></span>
                <input class="small-radio-input" :value="label" @change="onChange" type="radio" v-model="value">
            </span>
        <span class="small-radio-font"><slot></slot></span>
    </label>
</template>

<script>
    import {inputMixins} from "../../utils/mixins";
    export default {
        name:"sRadio",
        componentName:"sRadio",
        mixins:[inputMixins],
        props:{
            label:String,
            value:String,
            border:{
                type:Boolean,
                default:false
            },
            disabled:{
                type:Boolean,
                default:false
            },
            size:{
                type:String,
                default:"medium"
            }
        },
        data() {
            return {}
        },
        methods:{
            onChange(e){
                this.$emit("update::value",this.label)
            }
        }
    }
</script>

<style scoped lang="less">

    .small-label-radio{
        color: #606266;font-weight: 500;line-height: 1;position: relative;box-sizing: border-box;
        cursor: pointer; display: inline-block; white-space: nowrap;outline: none;font-size: 14px;margin-right: 30px;
        .small_radio_span{
            white-space: nowrap;cursor: pointer;outline: none;display: inline-block;line-height: 1;position: relative;vertical-align: middle;
        }
        .small-radio-inner{
            border: 1px solid #dcdfe6;border-radius: 100%; width: 14px;height: 14px; background-color: #fff; position: relative;
            cursor: pointer; display: inline-block; box-sizing: border-box;
            &::after{
                width: 4px;height: 4px;border-radius: 100%; background-color: #fff;
                content: "";position: absolute;left: 50%;top: 50%;
                transform: translate(-50%,-50%) scale(0);transition: transform .15s ease-in;
            }
        }
        .small-radio-input{
            opacity: 0;outline: none;position: absolute;z-index: -1;top: 0;
            left: 0; right: 0; bottom: 0;margin: 0;
        }
        .small-radio-font{padding-left: 10px;font-size:14px;}
    }
    .small-radio-checked{
        .small-radio-inner{
            border-color: #409eff; background: #409eff;
            &::after{
                transform: translate(-50%,-50%) scale(1);
            }
        }
        .small-radio-font{color: #409eff;}
    }

    .small-radio-disabled{
        cursor: not-allowed;
        .small-radio-inner{
            background-color: #f2f6fc;
            border-color: #dcdfe6;cursor: not-allowed;
            &::after{
                border-color: #c0c4cc;
                transform: translate(-50%,-50%) scale(1);
            }
        }
        .small-radio-font{color: #c0c4cc;cursor: not-allowed;}
    }
    .small-radio-border{border: 1px solid #dcdfe6;box-sizing: border-box;}
    .small-radio-bordered{border-color: #409eff;;box-sizing: border-box;}

    .small-radio-size-big{padding: 12px 20px 0 10px;height: 40px;border-radius: 4px;box-sizing: border-box;}
    .small-radio-size-medium{padding: 10px 20px 0 10px;border-radius: 4px;height: 36px;box-sizing: border-box;}
    .small-radio-size-small{padding: 8px 15px 0 10px;border-radius: 3px;    height: 32px;box-sizing: border-box;}
    .small-radio-size-mini{padding: 6px 15px 0 10px;border-radius: 3px;height: 28px;box-sizing: border-box;}

</style>
