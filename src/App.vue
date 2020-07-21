<template>
  <div id="app">
      <s-button @click="clickHander">开始</s-button>
        <s-select v-model="value">
            <s-option label="男1111" value="1"></s-option>
            <s-option label="女222" value="0"></s-option>
            <s-option label="女333" value="2"></s-option>
            <s-option label="女444" value="3"></s-option>
            <s-option label="女555" value="4"></s-option>
            <s-option label="女666" value="5"></s-option>
            <s-option label="女777" value="6"></s-option>
            <s-option label="女888" value="7"></s-option>
            <s-option label="女999" value="8"></s-option>
            <s-option label="女1010" value="9"></s-option>
            <s-option label="女1111" value="10"></s-option>
        </s-select>


  </div>
</template>

<script>
    export default {
        data(){
          return {
              value:""
          }
        },
        methods:{
            clickHander(){
                this.value="5";
            }
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
