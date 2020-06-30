<template>
  <div id="app">
      <s-progress :percentage="chang" height="10px" :text-inside="true" type="warning" circle></s-progress>
  </div>
</template>

<script>
    export default {
        data(){
          return {
              chang:22
          }
        },
        mounted(){
            let timer=setInterval(()=>{
                if(this.chang>=100){
                    clearInterval(timer);
                }else{
                    this.chang+=3;
                }
            },500)
        }
    }
</script>

<style lang="less">
    *{padding:0px;margin:0px;box-sizing: border-box;}
    body{padding:0px;margin:0px;box-sizing: border-box;}
    #app{flex:1;display:flex;width:500px;margin:0 auto;margin-top:100px;}
</style>
