<template>
  <div id="app" >
    <div class="slide">
      <s-slide></s-slide>
    </div>
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
            this.$prompt({
              title:"我是标题",
              content:"我是内容",
              tips:"请输入邮箱11111111",
              success:()=>{

              },
              cancel:()=>{

              }
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
