<template>
  <div id="app">
    <s-popover title="第一个" position="right" trigger="click" content="我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容">
      <s-button type="primary" size="big">开始了吧</s-button>
    </s-popover>
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
          shows(){
              this.show=!this.show;
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
