<template>
  <div id="app" >

  </div>
</template>

<script>
    export default {
        data(){
          return {
            date:new Date(),
            shows:false
          }
        },
        created(){
        },
        methods:{
          show(){
            this.$notify({
              title:"我是标题11",
              content:"登录成功",
              type:"success",
            });
          }
        }
    }
</script>

<style lang="less">
    *{padding:0px;margin:0px;box-sizing: border-box;}
    body{padding:0px;margin:0px;box-sizing: border-box;}
    #app{padding:20px;padding-top:200px;}
    .slide{width:50%;height:400px;border:1px solid #ccc;margin:0 auto;}
</style>
