<template>
    <transition name="modal">
        <div class="small-modal"  @click.self="hide" v-show="value"  :style="{
            'zIndex':zIndex
        }">
            <div class="small-modal-body" :style="{
                'width':width,
                'margin-top':top
            }">
                <div class="small-modal-header">
                    <div class="small-modal-header-title" :style="{'textAlign':center?'center':''}">{{title}}</div>
                    <div class="small-modal-header-icon" @click="hide">
                        <i class="iconfont icon-cuowuguanbiquxiao-xianxingyuankuang"></i>
                    </div>
                </div>
                <div class="small-modal-content" :style="{'padding':padding,'maxHeight':maxHeight+'vh'}">
                    <slot></slot>
                </div>
                <div class="small-modal-footer" v-if="$slots.footer" :style="{'textAlign':center?'center':''}">
                    <slot name="footer"></slot>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    import {inputMixins} from "../../utils/mixins";
    import {getZIndex} from "../../utils/common";
    export default {
        name:"sModal",
        componentName:"sModal",
        mixins:[inputMixins],
        props:{
            value:Boolean,
            width:{type:String,default:"35%"},
            top:{type:String,default:"100px"},
            padding:{type:String, default:"15px"},
            center:{type:Boolean,default:false},
            title:{type:String,default:""},
            maxHeight:{type:Number,default:60},
            beforeClose:Function
        },
        data() {
            return {
                zIndex:getZIndex()
            }
        },
        methods:{
            hide(){
                if(this.beforeClose && typeof this.beforeClose === 'function'){
                    this.beforeClose(this.close);
                }else{
                    this.close();
                }
            },
            close(e){
                this.$emit("update::value",false);
            }
        }
    }
</script>

<style scoped lang="less">
    .small-modal{
        position: fixed;top:0px;left:0px;right:0px;bottom:0px;background:rgba(0,0,0,0.4);
        display:flex;align-items: flex-start;justify-content: center;
    }
    .small-modal-content{
        width:100%;overflow-y: auto;
    }
    .small-modal-body{border-radius: 6px;background:#fff;box-shadow: 0 1px 3px rgba(153, 153, 153, 0.3);overflow:hidden;text-align:left;}
    .small-modal-header{
        padding:15px;border-bottom: 1px solid #e5e5e5;position: relative;
        .small-modal-header-title{font-size:16px;}
        .small-modal-header-icon{
            position: absolute;right:20px;top:50%;transform: translateY(-50%);color:#909399;cursor: pointer;
            i{font-size:20px;}
            &:hover{color:#409eff;}
        }
    }
    .small-modal-footer{
        padding:15px;border-top: 1px solid #e5e5e5;text-align:right;
    }



    .modal-enter-active {animation: modal-in .3s; }
    .modal-leave-active { animation: modal-out .3s;}
    @keyframes modal-in {
        0% {transform: translate3d(0, -30px, 0); opacity: 0;}
        100% {transform: translate3d(0, 0, 0);opacity: 1;}
    }
    @keyframes modal-out {
        0% {transform: translate3d(0, 0, 0);opacity: 1;}
        100% {transform: translate3d(0, -30px, 0);opacity: 0;}
    }
</style>
