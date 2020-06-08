<template>
  <div id="app">
    {{date}}
    <s-date-picker v-model="date"></s-date-picker>
  </div>
</template>

<script>

    export default {
        data(){
          return {
            date:new Date()
          }
        }
    }
</script>

<style lang="less">
    body{padding:0px;margin:0px;box-sizing: border-box;}
    #app{padding:20px;}
</style>
