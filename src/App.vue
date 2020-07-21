<template>
  <div id="app">
        <s-select v-model="value">
            <s-option label="男" value="1"></s-option>
            <s-option label="女" value="0"></s-option>
        </s-select>
  </div>
</template>

<script>
    export default {
        data(){
          return {
              value:"1"
          }
        },
        methods:{

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
