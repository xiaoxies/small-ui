<template>
  <div id="app" >

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
          this.$message.danger("错误了");
          setTimeout(()=>{
            this.$message({
              type:"info",
              message:"fddfdf",
              duration:0
            });
          },500)
          setTimeout(()=>{
            this.$message.primary("错误了");
          },1000)
          setTimeout(()=>{
            this.$message.warning("错误了");
          },1500)
          setTimeout(()=>{
            this.$message.success("错误了");
          },2000)
        },
        methods:{

        }
    }
</script>

<style lang="less">
    *{padding:0px;margin:0px;box-sizing: border-box;}
    body{padding:0px;margin:0px;box-sizing: border-box;}
    #app{padding:20px;padding-top:200px;}
</style>
