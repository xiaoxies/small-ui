<template>
  <div id="app">
    <s-checkbox v-model="value" >1111</s-checkbox>
  </div>
</template>

<script>
    export default {
        data(){
          return {
            indeterminate:true,
            value:false
              //value:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594290322572&di=08215bad5f1e5d6cba47bb8e05c7dcdd&imgtype=0&src=http%3A%2F%2Ffriendoprod.blob.core.windows.net%2Fmissionpics%2FEDM%2F20140519%2Fa99c0451-2701-4617-bb3a-a919d05fb0cc.jpg"
          }
        },
        methods:{
          onchange(e){
            this.value=e;
            if(e){
              this.indeterminate=false;
            }
          }
        }
    }
</script>

<style lang="less">
    *{padding:0px;margin:0px;box-sizing: border-box;}
    body{padding:0px;margin:0px;box-sizing: border-box;}
</style>
