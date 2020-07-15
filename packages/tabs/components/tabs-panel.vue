<template>
    <div class="small-tabs-panel">
        <s-icon :type="icon" v-if="icon"></s-icon>
        <span class="small-tabs-panel-title">{{title}}</span>
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
          icon:String
        },
        inject:['sTabs'],
        beforeCreate() {
            this.$parent.panels.push(this);
        },
        created(){
            console.log(this.sTabs);
        },
        data() {
            return {}
        }
    }
</script>

<style scoped lang="less">
    .small-tabs-panel{padding:0px 15px;height:40px;display:flex;align-items: center;justify-content: center;cursor: pointer;}
    .small-tabs-panel-title{font-size:14px;    color: #303133;}
</style>
