<template>
  <div id="app">
    <div style="width:100%;">
        <s-switch v-model="checked" openColor="#13ce66" ></s-switch>
    </div>
  </div>
</template>

<script>
    export default {
        data(){
          return {
            checked:false,
          }
        },
        methods:{
          clickHandel(){
            this.checked=!this.checked;
          }
        }
    }
</script>

<style lang="less">
    body{padding:0px;margin:0px;box-sizing: border-box;}
    #app{padding:20px;}
</style>
