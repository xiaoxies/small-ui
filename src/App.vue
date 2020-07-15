<template>
  <div id="app">
        <s-tabs>
            <s-tabs-panel title="用户管理" name="first">
                <span style="font-size:12px;">用户管理</span>
            </s-tabs-panel>
            <s-tabs-panel title="配置管理" name="second">配置管理</s-tabs-panel>
            <s-tabs-panel title="角色管理" name="third">角色管理</s-tabs-panel>
            <s-tabs-panel title="定时任务补偿" name="fourth">定时任务补偿</s-tabs-panel>
        </s-tabs>
  </div>
</template>

<script>
    export default {
        data(){
          return {

          }
        },
        methods:{
            sss(s){
                console.log(s);
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
