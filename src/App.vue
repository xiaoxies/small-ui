<template>
  <div id="app" >
      <s-button type="primary" icon="icon-cuowuguanbiquxiao-yuankuang" circle></s-button>
      <s-button type="warning" icon="icon-cuowuguanbiquxiao-yuankuang" circle></s-button>
      <s-modal v-model="show" width="600px" title="我是第一个modal" >
        <div style="height:100px;">
          我是内容
        </div>
      </s-modal>
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
    #app{padding:20px;padding-top:200px;height:200vh;}
    .slide{width:50%;height:400px;border:1px solid #ccc;margin:0 auto;}
</style>
