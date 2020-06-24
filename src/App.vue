<template>
  <div id="app" >
    <s-button size="mini" type="primary" @click="show">开始</s-button>
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
            const loading=this.$loading({
              text:"开始了..."
            })
            setTimeout(()=>{
              loading.setText("倒计时4");
            },1000)
            setTimeout(()=>{
              loading.setText("倒计时3");
            },2000)
            setTimeout(()=>{
              loading.setText("倒计时2");
            },3000)
            setTimeout(()=>{
              loading.setText("倒计时1");
            },4000)
            setTimeout(()=>{
              loading.close();
            },5000)
          }
        }
    }
</script>

<style lang="less">
    *{padding:0px;margin:0px;box-sizing: border-box;}
    body{padding:0px;margin:0px;box-sizing: border-box;}
    #app{padding:20px;padding-top:200px;}
</style>
