<template>
  <div id="app">
      
  </div>
</template>

<script>
    export default {
        data(){
          return {
            show:false
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
    #app{padding:200px;text-align:center;position: relative;}
    .slide{width:50%;height:400px;border:1px solid #ccc;margin:0 auto;}
</style>
