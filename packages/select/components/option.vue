<template>
    <div class="small-option">
        <span>{{label}}</span>
        <s-icon type="icon-zhengquewancheng" size="16px" color="#409eff"></s-icon>
    </div>
</template>

<script>
    import sIcon from "../../icon";
    export default {
        name:"sOption",
        componentName:"sOption",
        components:{sIcon},
        props:{
            label:String,
            value:String
        },
        inject:['sSelect'],
        data() {
            return {}
        }
    }
</script>

<style scoped lang="less">
    .small-option{
        width:100%;padding:0px 20px;height:35px; color: #606266;cursor: pointer;
        display:flex;align-items: center;justify-content: space-between;font-size:14px;
        &:hover{background:#f5f7fa;}
    }
    .small-option-active{
        color:#409eff;font-weight:bold;
    }
</style>
