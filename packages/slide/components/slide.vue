<template>
    <div class="small-slide">
        <div class="small-slide-left-icon" @click="prevPage">
            <i class="iconfont icon-shangyiyehoutuifanhui"></i>
        </div>

        <ul class="small-slide-ul" :style="style" ref="slide">
            <li class="small-slide-li" style="background:#909399;">1</li>
            <li class="small-slide-li" style="background:#67c23a;">2</li>
            <li class="small-slide-li" style="background:#f56c6c;">3</li>
            <li class="small-slide-li" style="background:#e6a23c;">4</li>
            <li class="small-slide-li" style="background:#409eff;">5</li>
        </ul>

        <div class="small-slide-right-icon" @click="nextPage">
            <i class="iconfont icon-xiayiyeqianjinchakangengduo"></i>
        </div>
    </div>
</template>

<script>
    export default {
        name:"sSlide",
        componentName:"sSlide",
        data() {
            return {
                current:0
            }
        },
        computed:{
            style(){
                return `width:500%;left:-${(this.current)*100}%;`
            }
        },
        methods:{
            nextPage(){
                this.current++;

            },
            prevPage(){
                this.current--
            }
        }
    }
</script>

<style scoped lang="less">
    .small-slide{position: relative;width:100%;height:100%;overflow:hidden;}
    .small-slide *{box-sizing: border-box;list-style:none;}
    .small-slide-ul{white-space: nowrap;height:100%;position: absolute;top:0px;left:0px;bottom:0px;display:flex;align-items: center;justify-content: flex-start;transition: all 0.5s;}
    .small-slide-li{flex:1;height:100%;display:flex;align-items: center;justify-content: center;}
    .small-slide-left-icon{
        width:40px;height:40px;background:rgba(31,45,61,.11);border-radius: 50%;position: absolute;z-index:10;cursor: pointer;opacity:0;transition: all 0.3s;
        top:50%;transform: translateY(-50%);left:0px;display:flex;align-items: center;justify-content: center;color:#fff;font-size:20px;
        &:hover{background:rgba(31,45,61,.23);}
    }
    .small-slide-right-icon{
        width:40px;height:40px;background:rgba(31,45,61,.11);border-radius: 50%;position: absolute;z-index:10;cursor: pointer;opacity:0;transition: all 0.3s;
        top:50%;transform: translateY(-50%);right:0px;display:flex;align-items: center;justify-content: center;color:#fff;font-size:20px;
        &:hover{background:rgba(31,45,61,.23);}
    }
    .small-slide:hover .small-slide-left-icon{
        opacity:1;left:20px;
    }
    .small-slide:hover .small-slide-right-icon{
        opacity:1;right:20px;
    }
</style>
