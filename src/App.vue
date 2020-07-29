<template>
  <div id="app">
      <s-time-picker v-model="value"></s-time-picker>
  </div>
</template>

<script>
    export default {
        data(){
          return {
              value:"",
              list:[
                  {label:"第一个",value:1},
                  {label:"第二个",value:2},
                  {label:"第三个",value:3},
                  {label:"第四个",value:4},
              ]
          }
        },
        methods:{
            pageChange(page,size,type){
                console.log(page,size,type,"=============");
                this.page=page;
                this.page_size=size;
            },
        }
    }
</script>

<style lang="less">
    *{padding:0px;margin:0px;}
    body{padding:0px;margin:0px;box-sizing: border-box;}
    #app{
      padding:200px;width:600px;
    }
</style>
