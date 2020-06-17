<template>
  <div id="app">
    <div style="width:100%;">
        <s-checkbox-group v-model="value">
            <s-checkbox label="0" disabled>女</s-checkbox>
        </s-checkbox-group>

        <s-radio disabled>545454545454</s-radio>
    </div>
  </div>
</template>

<script>
    export default {
        data(){
          return {
            value:["0"]
          }
        },
        methods:{

        }
    }
</script>

<style lang="less">
    body{padding:0px;margin:0px;box-sizing: border-box;}
    #app{padding:20px;}
</style>
