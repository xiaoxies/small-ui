<template>
  <div id="app">
      <div style="width:700px;margin:0 auto;margin-top:100px;">
          <s-steps v-model="chang" align-center>
              <s-steps-item  content="这是一段很长很长很长的描述性文字" title="步骤1"> </s-steps-item>
              <s-steps-item  content="这是一段很长很长很长的描述性文字" title="步骤2"></s-steps-item>
              <s-steps-item  content="这是一段很长很长很长的描述性文字" title="步骤3"></s-steps-item>
              <s-steps-item content="这是一段很长很长很长的描述性文字" title="步骤4"></s-steps-item>
          </s-steps>
      </div>

      <s-button @click="clickHandel">你说</s-button>
  </div>
</template>

<script>
    export default {
        data(){
          return {
              chang:0
          }
        },
        methods:{
            clickHandel(){
                if(this.chang==4){
                    this.chang=1;
                }else{
                    this.chang++;
                }
            }
        }
    }
</script>

<style lang="less">
    *{padding:0px;margin:0px;box-sizing: border-box;}
    body{padding:0px;margin:0px;box-sizing: border-box;}
</style>
