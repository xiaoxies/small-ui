<template>
  <div id="app">
    <div style="width:400px;">
      
    </div>
  </div>
</template>

<script>
    export default {
        data(){
          return {
            date:new Date(),
            text:"我是文本"
          }
        },
        created(){
            console.log(typeof new Date());
        },
        methods:{

        }
    }
</script>

<style lang="less">
    body{padding:0px;margin:0px;box-sizing: border-box;}
    #app{padding:20px;}
</style>
