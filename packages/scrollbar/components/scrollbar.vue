<template>
    <div class="small-scrollbar">
        <div class="small-wrapper" ref="wrap" :style="{maxHeight:height}" @scroll="scrollHander">
            <slot></slot>
        </div>
        <bar :bar="vertical" :move="moveY" :size="sizeHeight"></bar>
        <bar :bar="horizontal" :move="moveX" :size="sizeWidth"></bar>
    </div>
</template>

<script>
    import bar from "./bar";
    export default {
        name:"sScrollbar",
        componentName:"sScrollbar",
        components:{bar},
        props:{
            height:{type:String,default:"200px"}
        },
        mounted(){
            this.$nextTick(this.update);
        },
        destroyed(){
            if(this.observer){  //清除监听
                this.observer.disconnect();
                this.observer.takeRecords();
                this.observer=null;
            }
        },
        methods:{
            eventSize(){
                this.observer = new MutationObserver((mutationsList, observer)=>{
                    this.update();
                })
                this.observer.observe(this.$refs.wrap, {'childList': true,'attributes':true});
            },
            scrollHander(){
                const wrap = this.$refs.wrap;
                this.moveY = ((wrap.scrollTop * 100) / wrap.clientHeight);
                this.moveX = ((wrap.scrollLeft * 100) / wrap.clientWidth);
            },
            update(){
                const wrap = this.$refs.wrap;
                if(!wrap){
                    return
                }
                let heightPercentage = (wrap.clientHeight * 100 / wrap.scrollHeight);
                let widthPercentage = (wrap.clientWidth * 100 / wrap.scrollWidth);
                this.sizeHeight = (heightPercentage < 100) ? (heightPercentage + '%') : '0';
                this.sizeWidth = (widthPercentage < 100) ? (widthPercentage + '%') : '0';
                this.eventSize();
            }
        },
        data() {
            return {
                observer:null,
                sizeHeight:"",
                sizeWidth:"",
                moveX: 0,
                moveY: 0,
                vertical: {
                    offset: 'offsetHeight',
                    scroll: 'scrollTop',
                    scrollSize: 'scrollHeight',
                    size: 'height',
                    key: 'vertical',
                    axis: 'Y',
                    client: 'clientY',
                    direction: 'top'
                },
                horizontal: {
                    offset: 'offsetWidth',
                    scroll: 'scrollLeft',
                    scrollSize: 'scrollWidth',
                    size: 'width',
                    key: 'horizontal',
                    axis: 'X',
                    client: 'clientX',
                    direction: 'left'
                }
            }
        }
    }
</script>

<style scoped lang="less">
    .small-scrollbar,.small-scrollbar *{box-sizing: border-box;}
    .small-scrollbar{
        position: relative;overflow:hidden;
        &:hover .small-scrollbar-vertical{opacity:1;}
        &:hover .small-scrollbar-horizontal{opacity:1;}
    }
    .small-wrapper{
        overflow:scroll;position: relative;display:block;margin: 0;margin-bottom: -17px;
        margin-right: -17px;user-select:none;
    }

</style>
