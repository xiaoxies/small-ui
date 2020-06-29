<template>
  <div id="app">
      
  </div>
</template>

<script>
    export default {
        data(){
          return {
            show:false,
            name:"1"
          }
        },
        methods:{
          sure(){
            console.log("你点击了确定");
          },
          close(done){
            this.$confirm({
              title:"温馨提示",
              content:"确认关闭吗?",
              success(){
                done();
              }
            })
          }
        }
    }
</script>

<style lang="less">
    *{padding:0px;margin:0px;box-sizing: border-box;}
    body{padding:0px;margin:0px;box-sizing: border-box;}
    #app{flex:1;width:100%;display:flex;padding:200px;}
</style>
