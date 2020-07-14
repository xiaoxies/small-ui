<template>
  <div id="app">

  </div>
</template>

<script>
    export default {
        data(){
          return {
            
          }
        },
        methods:{
          dd(){
            this.value=['zhinan','shejiyuanze','fankui'];
          },
          onchange(){
            console.log("sdsdsds");
            this.isTrue=!this.isTrue;
          },
        }
    }
</script>

<style lang="less">
    *{padding:0px;margin:0px;box-sizing: border-box;}
    body{padding:0px;margin:0px;box-sizing: border-box;}
    #app{
      padding:200px;width:900px;
    }
</style>
