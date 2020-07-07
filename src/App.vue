<template>
  <div id="app">
    <div style="padding:200px;">
      <s-upload ></s-upload>
    </div>
  </div>
</template>

<script>
    export default {
        data(){
          return {
              value:4
          }
        },
        methods:{
          onchange(e){
            console.log(e.target.files,"===========");
          }
        }
    }
</script>

<style lang="less">
    *{padding:0px;margin:0px;box-sizing: border-box;}
    body{padding:0px;margin:0px;box-sizing: border-box;}
</style>
