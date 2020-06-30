<template>
  <div id="app">
      <s-timeline>
          <s-timeline-item title="标题1" time="2018-12-11 10:12:14" >
                <s-card padding="15px">
                    个打个大哥
                </s-card>
          </s-timeline-item>
          <s-timeline-item title="标题2" time="2018-12-11 10:12:14">

          </s-timeline-item>
          <s-timeline-item title="标题3" time="2018-12-11 10:12:14">

          </s-timeline-item>
      </s-timeline>
  </div>
</template>

<script>
    export default {
        data(){
          return {

          }
        },
        mounted(){

        }
    }
</script>

<style lang="less">
    *{padding:0px;margin:0px;box-sizing: border-box;}
    body{padding:0px;margin:0px;box-sizing: border-box;}
    #app{flex:1;display:flex;width:500px;margin:0 auto;margin-top:100px;}
</style>
