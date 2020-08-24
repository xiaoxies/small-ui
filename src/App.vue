<template>
  <div id="app">
    <s-table :data="tableData">
      <s-table-column label="1111"></s-table-column>
    </s-table>
  </div>
</template>

<script>
    export default {
        data(){
          return {
              tableData:[]
          }
        },
        methods:{

        }
    }
</script>

<style lang="less">
    body{padding:0px;margin:0px;box-sizing: border-box;}
    #app{
      padding:200px;width:1200px;
    }
</style>
