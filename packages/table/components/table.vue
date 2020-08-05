<template>
    <div :class="[
        'small-table',
        border?'small-table-border':''
    ]">
        <div class="small-table-wrapper">
            <div class="small-table-column">
                <slot></slot>
            </div>
            <div class="small-table-header-wrapper">
                <table-header :columns="getColumns()"></table-header>
            </div>
            <div class="small-table-body-wrapper">
                <table-body :columns="getColumns()" ref="body" :data="data"></table-body>
            </div>

            <div class="small-table-fixed-left" v-if="fixedLeft.length>0">
                <table-fixed fixed="left" :column="fixedLeft" :height="height" :data="data"></table-fixed>
            </div>
            <div class="small-table-fixed-right" v-if="fixedRight.length>0">
                <table-fixed fixed="right" :column="fixedRight" :height="height" :data="data"></table-fixed>
            </div>
        </div>
    </div>
</template>

<script>
    import tableHeader from "./table-header.js";
    import tableBody from "./table-body.js";
    import tableFixed from "./table-fixed";
    export default {
        name:"sTable",
        componentName:"sTable",
        components:{tableHeader,tableBody,tableFixed},
        props:{
            data:{type:Array,required:true},
            border:Boolean
        },
        watch:{
            data(){
                this.updateHeight();
            }
        },
        provide(){
            return {
                "sTable":this
            }
        },
        methods:{
            getColumns(){
                return this.fixedLeft.concat(this.columns).concat(this.fixedRight)
            },
            updateHeight(){
                let tr=this.$refs.body.$el.querySelectorAll('table tr');
                this.height=Array.from(tr).map((el,index)=>{
                  return el.offsetHeight;
                })
                console.log(this.height);
            }
        },
        data() {
            return {
                fixedLeft:[],
                columns:[],
                fixedRight:[],
                height:[]
            }
        },
        mounted(){
            this.$nextTick(this.updateHeight)
        }
    }
</script>

<style scoped lang="less">
    .small-table{
        width:100%;box-sizing: border-box;transform: translate3d(0,0,0);
    }
    .small-table-column{display:none;}
    .small-table-fixed-left{
        position: fixed;top:0px;left:0px;display:flex;align-items: flex-start;justify-content: flex-start;}
    .small-table-fixed-right{position: fixed;top:0px;right:0px;display:flex;align-items: flex-start;justify-content: flex-end;}
    .small-table-wrapper{width:100%;overflow:auto;position: relative;}
    .small-table-body-wrapper,.small-table-header-wrapper{position: relative;width:100%;}

    /deep/ .small-table-fixed-shadow{box-shadow: 0 0 10px rgba(0,0,0,.12);}
    /deep/ .small-table-fixed-header{
        table-layout: fixed;
        th{border-bottom: 1px solid #e0e6ed;padding:10px 0px;background:#eff2f7;font-size:14px;}
    }
    /deep/ .small-table-fixed-body{
        table-layout: fixed;
        td{border-bottom: 1px solid #e0e6ed;padding:10px 0px;font-size:14px;background:#fff;}
    }
    .small-table-border{
        border:1px solid #ebeef5;
        /deep/ .small-table-header_table th{border-right: 1px solid #e0e6ed;}
        /deep/ .small-table-body_table td{border-right: 1px solid #e0e6ed;}
    }
    /deep/ .small-table-cell{padding:0px 10px;}
    /deep/ .small-table-header{width:100%;position: relative;}
    /deep/ .small-table-header_table{
        table-layout: fixed;width:100%;
        th{border-bottom: 1px solid #e0e6ed;padding:10px 0px;background:#eff2f7;font-size:14px;}
    }
    /deep/ .small-table-header-left{text-align:left;}
    /deep/ .small-table-header-center{text-align:center;}
    /deep/ .small-table-header-right{text-align:right;}

    /deep/ .small-table-body{width:100%;}
    /deep/ .small-table-body_table{
        width:100%;table-layout: fixed;position: relative;
        th,td{
            padding:10px 0px;border-bottom: 1px solid #e0e6ed;font-size:14px;
        }
        td:last-child{border-right:0px;}
        tr:last-child{
            td{border-bottom:0px;}
        }
    }
    /deep/ .small-table-body-left{text-align:left;}
    /deep/ .small-table-body-center{text-align:center;}
    /deep/ .small-table-body-right{text-align:right;}
</style>
