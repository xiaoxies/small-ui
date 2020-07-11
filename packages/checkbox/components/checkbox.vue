<template>
    <label
            :class="[
                'small-label-checkbox',
                isChecked?(border?'small-checkbox-checked small-checkbox-bordered':'small-checkbox-checked'):'',
                border?'small-checkbox-size-'+size:'',
                {'small-checkbox-border':border},
                {'small-checkbox-disabled':disabled},
                !isChecked && indeterminate?'small-checkbox-indeterminate':''
            ]"
    >
            <span class="small_checkbox_span">
                <span :class="[
                    'small-checkbox-inner'
                ]"></span>
                <input class="small-checkbox-input" :disabled="disabled"  :value="label" @change="onChange"  type="checkbox" >
            </span>
            <span class="small-checkbox-font" v-if="$slots.default"><slot></slot></span>
    </label>
</template>

<script>
    import {inputMixins} from "../../utils/mixins";
    export default {
        name:"sCheckbox",
        componentName:"sCheckbox",
        mixins:[inputMixins],
        props:{
            label:String,
            value:String|Boolean,
            indeterminate:Boolean,
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
            return {

            }
        },
        computed:{
            isChecked(){
                if(this.isGroup){
                    if(this._checkboxGroup.value.indexOf(this.label)!==-1){
                        return true;
                    }
                }
                return this.value;
            },
            isGroup(){
                let parent=this.$parent;
                while (parent) {
                    if (parent.$options.componentName !== 'sCheckboxGroup') {
                        parent = parent.$parent;
                    } else {
                        this._checkboxGroup = parent;
                        return true;
                    }
                }
                return false;
            }
        },
        methods:{
            onChange(e){
                if(this.isGroup){
                    this.dispatch(this._checkboxGroup,'update',e.target.value);
                }else{
                    //throw new Error("复选框必须有s-checkbox-group父组件")
                    if(!this.indeterminate){
                        this.$emit("update::value",!this.value);
                    }
                    this.$emit("change",!this.value);
                }
            }
        }
    }
</script>

<style scoped lang="less">
    .small-label-checkbox+.small-label-checkbox{margin-right:30px;}
    .small-label-checkbox{
        font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
        color: #606266;font-weight: 500;line-height: 1;position: relative;box-sizing: border-box;
        cursor: pointer;  white-space: nowrap;outline: none;font-size: 14px;display:inline-block;
        .small_checkbox_span{
            cursor: pointer;float:left;
            outline: none;position: relative;
        }
        .small-checkbox-inner{
            display: inline-block;height: 14px;width: 14px;
            position: relative;transition: border-color .25s cubic-bezier(.71,-.46,.29,1.46),background-color .25s cubic-bezier(.71,-.46,.29,1.46);
            border: 1px solid #dcdfe6;
            border-radius: 2px;
            box-sizing: border-box;
            &::after{
                box-sizing: content-box;
                content: ""; border: 1px solid #fff;
                border-left: 0;border-top: 0; height: 7px;
                left: 4px;position: absolute;
                top: 1px;transform: rotate(45deg) scaleY(0);
                width: 3px;transition: transform .15s ease-in .05s;transform-origin: center;
            }
        }
        .small-checkbox-input{
            opacity: 0;outline: none;position: absolute;z-index: -1;top: 0;
            left: 0; right: 0; bottom: 0;margin: 0;
        }
        .small-checkbox-font{padding-left: 10px;font-size:14px;float:left;}
    }

    .small-checkbox-checked{
        .small-checkbox-inner{
            border-color: #409eff; background: #409eff;
            &::after{
                transform: rotate(45deg) scaleY(1);
            }
        }
        .small-checkbox-font{color: #409eff;}
    }
    .small-checkbox-indeterminate{
        .small-checkbox-inner{
            border-color: #409eff; background: #409eff;
            &::before{
                content:" ";width:80%;height:2px;background:#fff;position: absolute;top:50%;left:10%;transform: translateY(-50%);
            }
        }
    }
    .small-checkbox-disabled{
        cursor: not-allowed;
        .small-checkbox-inner{
            background-color: #f2f6fc;
            border-color: #dcdfe6;cursor: not-allowed;
            &::after{
                border-color: #c0c4cc;
                transform: rotate(45deg) scaleY(1);
            }
        }
        .small-checkbox-font{color: #c0c4cc;cursor: not-allowed;}
    }
    .small-checkbox-border{border: 1px solid #dcdfe6;box-sizing: border-box;}
    .small-checkbox-bordered{border-color: #409eff;;box-sizing: border-box;}

    .small-checkbox-size-big{padding: 12px 10px 0 10px;height: 40px;border-radius: 4px;box-sizing: border-box;}
    .small-checkbox-size-medium{padding: 10px 10px 0 10px;border-radius: 4px;height: 36px;box-sizing: border-box;}
    .small-checkbox-size-small{padding: 8px 10px 0 10px;border-radius: 3px;    height: 32px;box-sizing: border-box;}
    .small-checkbox-size-mini{padding: 6px 10px 0 10px;border-radius: 3px;height: 28px;box-sizing: border-box;}

</style>
