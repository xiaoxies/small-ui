<template>
  <div id="app">
      <div style="padding:15px;">
          <s-button :loading="true">default</s-button>
          <s-button :loading="true" type="primary" icon="icon-xinwenzixun">primary</s-button>
          <s-button type="warning">warning</s-button>
          <s-button type="info">info</s-button>
          <s-button type="danger">danger</s-button>
          <s-button type="success">danger</s-button>
      </div>

      <div style="padding:15px;">
          <s-button >default</s-button>
          <s-button type="primary" size="medium" icon="icon-xinwenzixun">primary</s-button>
          <s-button type="warning"  size="small" >warning</s-button>
          <s-button type="info" size="mini" >info</s-button>
          <s-button type="danger" size="mini">danger</s-button>
          <s-button type="success" size="mini">danger</s-button>
      </div>
      <div style="padding:15px;">
          <s-button plain>default</s-button>
          <s-button plain type="primary" icon="icon-xinwenzixun">primary</s-button>
          <s-button plain type="warning">warning</s-button>
          <s-button plain type="info">info</s-button>
          <s-button plain type="danger">danger</s-button>
          <s-button plain type="success">danger</s-button>
      </div>
      <div style="padding:15px;">
          <s-button plain round icon="icon-loading-B">default</s-button>
          <s-button plain round icon="icon-loading-A" type="primary" >primary</s-button>
          <s-button plain round icon="icon-loading-A" type="warning">warning</s-button>
          <s-button plain round icon="icon-loading-A" type="info">info</s-button>
          <s-button plain round icon="icon-loading-A" type="danger">danger</s-button>
          <s-button plain round icon="icon-loading-A" type="success">danger</s-button>
      </div>
      <div style="padding:15px;">
          <s-button round>default</s-button>
          <s-button round type="primary" icon="icon-xinwenzixun">primary</s-button>
          <s-button round type="warning">warning</s-button>
          <s-button round type="info">info</s-button>
          <s-button round type="danger">danger</s-button>
          <s-button  round type="success">danger11</s-button>
      </div>
      <div style="padding:15px;">
          <s-button disabled>default</s-button>
          <s-button disabled type="primary" icon="icon-xinwenzixun">primary</s-button>
          <s-button disabled type="warning">warning</s-button>
          <s-button disabled type="info">info</s-button>
          <s-button disabled type="danger">danger</s-button>
          <s-button disabled type="success">danger</s-button>
      </div>
      <div style="padding:15px;">
          <s-button  disabled plain>default</s-button>
          <s-button disabled plain type="primary" icon="icon-xinwenzixun">primary</s-button>
          <s-button disabled plain type="warning">warning</s-button>
          <s-button disabled plain type="info">info</s-button>
          <s-button disabled plain type="danger">danger</s-button>
          <s-button disabled plain type="success">danger</s-button>
      </div>
      <div style="padding:15px;">
          <s-button  type="text">danger</s-button>
          <s-button disabled type="text">warning</s-button>
      </div>
  </div>
</template>

<script>
export default {
    methods:{
        clicks(){
            console.log("触发点击了");
        }
    }
}
</script>

<style lang="less">
    body{padding:0px;margin:0px;box-sizing: border-box;}
</style>
