<template>

        <div class="small-collapse-item" @click="isShow">
            <div class="small-collapse-item-title" >
                {{title}}
                <i class="iconfont icon-xiayiyeqianjinchakangengduo"></i>
            </div>
            <transition name="collapse">
                <div class="small-collapse-item-content" :style="{
                'height':show?'auto':'0px',
                'padding-bottom':show?'20px':'0px',
                }"><slot></slot></div>
            </transition>
        </div>
</template>

<script>
    export default {
        name:"sCollapseItem",
        componentName:"sCollapseItem",
        props:{
            title:String,
            name:{
                type:String,
                required:true
            }
        },
        inject:['sCollapse'],
        computed:{
            show(){
                if(this.sCollapse.accordion){
                    return this.sCollapse.value==this.name;
                }else{
                    return this.ok;
                }
            }
        },
        data(){
            return {
                ok:false
            }
        },
        methods:{
            isShow(){
                if(!this.sCollapse.accordion){
                    this.ok=!this.ok;
                }
                this.sCollapse.onChange(this.name)
            }
        },
        mounted(){
            if(this.sCollapse.value==this.name){
                this.ok=true;
            }
        }
    }
</script>

<style scoped lang="less">
    .small-collapse-item{
        width:100%;border-bottom: 1px solid #ebeef5;
    }
    .small-collapse-item-title{
        width:100%;height:45px;font-size:14px;background:#fff;color:#303133;line-height:45px;position: relative;cursor: pointer;
        i{
            position: absolute;right:10px;top:50%;transform: translateY(-50%);
        }
    }
    .small-collapse-item-content{font-size:14px;color:#303133;transition: all 0.2s;overflow:hidden;}

    .collapse-enter-active {
        animation: collapse-fade-in .3s;
    }

    .collapse-leave-active {
        animation: collapse-fade-out .3s;
    }

    @keyframes collapse-fade-in {
        0% {
            transform: translate3d(0%, -20px, 0);
            opacity: 0;
        }
        100% {
            transform: translate3d(0%, 0, 0);
            opacity: 1;
        }
    }

    @keyframes collapse-fade-out {
        0% {
            transform: translate3d(0%, 0, 0);
            opacity: 1;
        }
        100% {
            transform: translate3d(0%, -20px, 0);
            opacity: 0;
        }
    }
</style>
