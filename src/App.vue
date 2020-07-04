<template>
  <div id="app">
      <div style="width:700px;margin:0 auto;margin-top:100px;">
          <s-rate v-model="value" :max="7"></s-rate>
      </div>
  </div>
</template>

<script>
    export default {
        data(){
          return {
              value:0
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
