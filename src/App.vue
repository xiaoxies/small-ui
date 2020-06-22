<template>
  <div id="app" >
    <s-button size="mini" type="primary" @click="show">开始</s-button>
  </div>
</template>

<script>
    export default {
        data(){
          return {
            date:new Date()
          }
        },
        created(){
        },
        methods:{
          show(){
            this.$message.success("错误了");
          }
        }
    }
</script>

<style lang="less">
    *{padding:0px;margin:0px;box-sizing: border-box;}
    body{padding:0px;margin:0px;box-sizing: border-box;}
    #app{padding:20px;padding-top:200px;}
</style>
