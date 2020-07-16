<template>
    <div :class="[
        'small-tabs-panel',
        'small-tabs-panel-'+sTabs.type,
        sTabs.value==name?'small-tabs-panel-active-'+sTabs.type:'',
    ]" @click="clickHander">
        <s-icon :type="icon" v-if="icon" :color="sTabs.value==name?sTabs.activeColor:''"></s-icon>
        <span class="small-tabs-panel-title" :style="{
            color:sTabs.value==name?sTabs.activeColor:''
        }">{{title}}</span>
        <s-icon style="margin-left:10px;" v-if="clear" @click="closeHander" type="icon-cuowuguanbiquxiao-xianxingyuankuang" size="16px" :color="sTabs.value==name?sTabs.activeColor:'#666'"></s-icon>
    </div>
</template>

<script>
    import sIcon from "../../icon";
    export default {
        name:"sTabsPanel",
        componentName:"sTabsPanel",
        components:{sIcon},
        props:{
          title:String,
          name:String,
          icon:String,
          clear:{type:Boolean,default:false},
          row:Object
        },
        inject:['sTabs'],
        beforeCreate() {
            this.$parent.panels.push(this);
        },
        mounted(){
            this.$nextTick(()=>{
                if(this.sTabs.value == this.name){
                    this.clickHander();
                }
            })
        },
        methods:{
            closeHander(){
                this.sTabs.tabClose(this);
            },
            clickHander(){
                this.sTabs.tabClick(this);
            }
        },
    }
</script>

<style scoped lang="less">
    .small-tabs-panel{display:flex;align-items: center;justify-content: center;cursor: pointer;transition: all 0.3s;}
    .small-tabs-panel-default{margin:0px 15px;height:40px;}
    .small-tabs-panel-default:first-child{margin-left:0px;}
    .small-tabs-panel-card{
        height:40px;padding:0px 15px;
        border-left:1px solid #e4e7ed;
    }
    .small-tabs-panel-border-card{
        height:40px;padding:0px 15px;
    }
    .small-tabs-panel-active-border-card{
        background:#fff;position: relative;transform: translate3d(0,0,0);

    }
    .small-tabs-panel-active-card{}
    .small-tabs-panel-card:first-child{border-left:0px;}
    .small-tabs-panel-title{font-size:14px;    color: #303133;}
</style>
