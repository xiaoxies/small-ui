<template>
    <div class="small-pagination">
        <div class="small-pagination-count"  v-if="isShow('total')">共 {{total}} 条</div>
        <div class="small-pagination-pager" v-if="isShow('size')">
            <s-select v-model="current" size="small" @change="pagerChange">
                <s-option v-for="(item,index) in pagerOptions" :icon="false" :key="index" :label="item.label" :value="item.value"></s-option>
            </s-select>
        </div>

        <div :class="[
            'small-pagination-prev',
            {'small-pagination-background':background},
            {'small-pagination-prev-disabled':currentPage <=1}
        ]" @click="prvePage"  v-if="isShow('prev')">
            <i class="iconfont icon-shangyiyehoutuifanhui"></i>
        </div>
        <div :class="[
            'small-pagination-li',
            {'small-pagination-background':background},
            currentPage==item && background ? 'small-pagination-background-active': (currentPage==item?'small-pagination-active':'')
        ]"  v-for="(item,index) in pages" :key="index" @click="indexPage(item)">{{item}}</div>
        <div :class="[
            'small-pagination-next',
            {'small-pagination-background':background},
            {'small-pagination-next-disabled':currentPage >= countPage}
        ]"  @click="nextPage" v-if="isShow('next')">
            <i class="iconfont icon-xiayiyeqianjinchakangengduo"></i>
        </div>

        <div class="small-pagination-jumper"  v-if="isShow('jumper')">
            <span>前往</span>
            <s-input :clear="false" style="width:50px;margin:0px 5px;"  v-model="page" @blur="onBlur" type="number" :min="1" size="small" :max="countPage"></s-input>
            <span>页</span>
        </div>
    </div>
</template>

<script>
    import {sSelect,sOption} from "../../select";
    import sInput from "../../input";
    export default {
        name:"sPagination",
        componentName:"sPagination",
        components:{sSelect,sOption,sInput},
        props:{
            pageSize:{type:Number,default:10},
            pageCount:{type:Number,default:7},
            currentPage:{type:Number,default:1},
            total:{type:Number,default:0},
            pageNumber:{type:Array,default:()=>[10,20,50,100,200]},
            layout:{type:Array,default:()=>['prev','next']},
            background:{type:Boolean,default:true}
        },
        computed:{
            pagerOptions(){
                let array= this.pageNumber.map((item,index)=>{
                    return {
                        label:`${item}条/页`,
                        value:item
                    }
                })
                return array;
            },
            countPage(){
                return Math.ceil(this.total/this.pageSize);
            },
            pages() {
               const array=[];
               const countPage = this.countPage; //总页数
               const pageCount = this.pageCount; //每次显示的分页数(默认是7页)
               const currentPage = this.currentPage; //当前页
               let page = 1;
               let count = 0;
               if(countPage < pageCount){
                   count = countPage;
               }else{
                  if(currentPage>3 && currentPage < countPage-3){
                      page = currentPage - 2 >0 ? currentPage - 3: currentPage - 2;
                      count = currentPage+(countPage-currentPage )
                  }else if(currentPage<=3){
                      page =1;
                      count = pageCount
                  }else if(currentPage+3>=countPage){
                      page = countPage-5;
                      count=countPage;
                  }else{
                      page = countPage - 3;
                      count = countPage;
                  }
               }
               for(let i=page;i<= count;i++){
                   if(array.length < pageCount){
                       array.push(i);
                   }
               }
               return array;
            }
        },
        methods:{
            onBlur(e){
                let page = Number(e.target.value);
                if(page>this.countPage){
                    this.page=1;
                }else{
                    this.page=page;
                    this.$emit("change",this.page,this.pageSize,"jumper")
                }
            },
            isShow(val){
                return this.layout.indexOf(val)!==-1
            },
            pagerChange(val){
                this.$emit("change",this.currentPage,val,"size")
            },
            nextPage(){
                let newPage = this.currentPage;
                if(newPage >= this.countPage){
                    return
                }
                this.$emit("change",newPage+=1,this.pageSize,"next")
            },
            prvePage(){
                let newPage = this.currentPage;
                if(newPage==1){
                    return
                }
                this.$emit("change",newPage-=1,this.pageSize,"prve")
            },
            indexPage(page){
                this.$emit("change",page,this.pageSize,"pager")
            }
        },
        created(){
            this.current=this.pageNumber[0]
        },
        data() {
            return {
                current:0,
                page:1,
                showPrevMore: false,
                showNextMore: false,
            }
        }
    }
</script>

<style scoped lang="less">
    .small-pagination{
        display:flex;align-items: center;justify-content: flex-start;
    }
    /deep/ .small-pagination-jumper{
        margin-left:15px;font-size:14px;color: #606266;display:flex;align-items: center;justify-content: flex-start;
        input{padding-left:0px;padding-right:0px;text-align:center;}
    }
    .small-pagination-pager{width:110px;margin-right:15px;}
    .small-pagination-count{color: #606266;font-size:14px;margin-right:15px;}
    .small-pagination-li{
        width:30px;height:28px;line-height:28px;text-align:center;font-size:13px;cursor:pointer;&:hover{color:#409eff;}
    }
    .small-pagination-background{
        background-color: #f4f4f5;color: #606266;margin:0px 5px;border-radius: 4px;
        &:hover{background:#409eff;color:#fff;}
        &:hover i{color:#fff;}
    }
    .small-pagination-background-active{
        background:#409eff;color:#fff;font-weight:bold;
    }
    .small-pagination-active{font-weight:bold;color:#409eff;}
    .small-pagination-next{font-size:13px;width:30px;height:28px;line-height:28px;text-align:center;cursor:pointer;border-radius:4px;margin:0px 5px;&:hover{color:#409eff;}}
    .small-pagination-prev{font-size:13px;width:30px;height:28px;line-height:28px;text-align:center;cursor:pointer;border-radius:4px;margin:0px 5px;&:hover{color:#409eff;}}
    .small-pagination-prev-disabled{
        color: #c0c4cc;background-color: #f4f4f5;cursor: not-allowed;
        &:hover{color: #c0c4cc;background-color: #f4f4f5;}
        &:hover i{color:#c0c4cc;}
    }
    .small-pagination-next-disabled{
        color: #c0c4cc;background-color: #f4f4f5;cursor: not-allowed;
        &:hover{color: #c0c4cc;background-color: #f4f4f5;}
        &:hover i{color:#c0c4cc;}
    }
</style>
