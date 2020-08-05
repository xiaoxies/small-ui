<template>
  <div id="app">
      <s-table :data="tableData" border>
          <s-table-column label="姓名" prop="name" width="300" >
              <template slot-scope="row">
                  <div>
                      <span>你说没什么{{row.age}}</span>
                      <em>{{row.name}}</em>
                  </div>
              </template>
          </s-table-column>
          <s-table-column label="年龄1" prop="age" width="300"></s-table-column>
          <s-table-column label="年龄2" prop="age" width="300"></s-table-column>
          <s-table-column label="年龄3" prop="age" width="300"  ></s-table-column>
          <s-table-column label="年龄4" prop="age" width="300"></s-table-column>
          <s-table-column label="性别" prop="gender" width="300" ></s-table-column>
          <s-table-column label="生日" prop="shengri" width="300"></s-table-column>
          <s-table-column label="操作" prop="shengri" width="150" fixed="right" align="center">
              <template slot-scope="row">
                    <s-button size="mini" type="primary">编辑</s-button>
                  <s-button size="mini" type="warning">警告</s-button>
                  <s-button size="mini" type="primary">开始</s-button>
                  <s-button size="mini" type="primary" disabled>关闭</s-button>
                    <s-button size="mini" type="danger">删除</s-button>
              </template>
          </s-table-column>
      </s-table>
  </div>
</template>

<script>
    export default {
        data(){
          return {
              tableData:[
                  {name:"第一个",age:11,gender:"男",shengri:"1994-1-23"},
                  {name:"第二个",age:14,gender:"女",shengri:"1992-2-12"},
                  {name:"第三个",age:16,gender:"女",shengri:"1996-12-4"},
                  {name:"第四个",age:18,gender:"男",shengri:"1998-9-21"},
              ]
          }
        },
        methods:{
            ss(e){
                console.log(e);
            }
        }
    }
</script>

<style lang="less">
    *{padding:0px;margin:0px;}
    body{padding:0px;margin:0px;box-sizing: border-box;}
    #app{
      padding:200px;width:1200px;
    }
</style>
