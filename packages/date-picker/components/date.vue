<template>
    <div v-click-out-side class="small-date-row">
        <s-input prefix-icon="icon-rili" v-model="value"  :readonly="true"></s-input>
        <transition>
            <div v-show="show" class="small-date">
                <div class="small-date-header">
                    <div class="small-date-header-left">
                        <i class="iconfont icon-zhixiangzuo" @click="computedDate(1,false)"></i>
                        <i class="iconfont icon-shangyiyehoutuifanhui" @click="computedDate(2,false)"></i>
                    </div>
                    <div class="small-date-header-center">
                        <span class="small-date-header-center-span">{{myDate.year}}年</span>
                        <span class="small-date-header-center-span">{{myDate.months}}月</span>
                    </div>
                    <div class="small-date-header-right">
                        <i class="iconfont icon-xiayiyeqianjinchakangengduo" @click="computedDate(2,true)"></i>
                        <i class="iconfont icon-zhixiangyou" @click="computedDate(1,true)"></i>
                    </div>
                </div>
                <div class="small-date-panel-header">
                    <span class="small-date-panel-header-date">日</span>
                    <span class="small-date-panel-header-date">一</span>
                    <span class="small-date-panel-header-date">二</span>
                    <span class="small-date-panel-header-date">三</span>
                    <span class="small-date-panel-header-date">四</span>
                    <span class="small-date-panel-header-date">五</span>
                    <span class="small-date-panel-header-date">六</span>
                </div>
                <div class="small-date-panel-bottom">
                    <div class="small-date-panel-bottom-day" v-for="(item,index) in dayList" :key="index" @click="dayClick(item)" v-html="render(item)"></div>
                </div>
                <div class="popper__arrow"></div>
            </div>
        </transition>
    </div>
</template>

<script>
    import {getDate,getDayTime} from "../../utils/common";
    import {inputMixins} from "../../utils/mixins";
    export default {
        directives:{
            clickOutSide:{
                bind(el,bindings,vnode){
                    el.handler=(e)=>{
                       if(el.contains(e.target)){
                           if(!vnode.context.show){
                               vnode.context.focus();
                           }
                       }else{
                           if(vnode.context.show){
                               vnode.context.blur();
                           }
                       }
                    };
                    document.addEventListener("click",el.handler)
                },
                unbind(el){
                   document.removeEventListener("click",el.handler)
                }
            }
        },
        name: "sDatePicker",
        componentName:"sDatePicker",
        mixins:[inputMixins],
        props:{
            value:{
                type:[Date,String]
            },
            render:{
                type:Function,
                default:(item)=>{
                    return `<div class="${!item.is_month?'prev-month':''}">
                                <span class="${item.is_active&&item.is_month?'day_active':''}">${item.day}</span>
                            </div>`
                }
            },
            multiple:{
                type:Boolean,
                default:false
            },
            format:{
                type:String,
                default:"yyyy-mm-dd"
            }
        },
        created(){
            const day=getDayTime(this.value||new Date());
            if(this.value){
                this.updateModel(getDate(this.value,this.format));
            }
            this.myDate=day;
        },
        computed:{
            dayList:{
                get(){
                    return this.renderDate(this.myDate);
                },
                set(newValue){
                    this.myDate=newValue;
                }

            },
            date(){
                let day="";
                if(this.value){
                    day=getDate(this.value,this.format);
                    this.updateModel(day);
                }
                return day;
            }
        },
        data(){
            return {
                show:false,
                myDate:{}
            }
        },
        methods:{
            computedDate(type,isTrue){
                switch(type){
                    case 1: //type=1 等于选择年     type=2  等于选择月     num 是正数就是加一个月，负数就是减一个月
                        const day=getDayTime(new Date(
                            isTrue?this.myDate.year+1:this.myDate.year-1,
                            this.myDate.month-1,
                            this.myDate.day,
                            this.myDate.hour,
                            this.myDate.minute,
                            this.myDate.sencond
                        ));
                        this.myDate=day;
                        this.dayList=day;
                        break;
                    case 2:
                        if(isTrue){
                            const day=getDayTime(new Date(
                                this.myDate.month==12?this.myDate.year+1:this.myDate.year,
                                this.myDate.month==12?0:this.myDate.month,
                                this.myDate.day,
                                this.myDate.hour,
                                this.myDate.minute,
                                this.myDate.sencond
                            ));
                            this.myDate=day;
                            this.dayList=day;
                        }else{
                            const day=getDayTime(new Date(
                                this.myDate.month==1?this.myDate.year-1:this.myDate.year,
                                this.myDate.month==1?11:this.myDate.month-2,
                                this.myDate.day,
                                this.myDate.hour,
                                this.myDate.minute,
                                this.myDate.sencond
                            ));
                            this.myDate=day;
                            this.dayList=day;
                        }
                        break;
                }
            },
            renderDate({year,month,days,week,time}){
                let arr=[];
                const firstDay = new Date(year,month-1,1); //获取选择的日期的第一天
                const startDay = new Date(firstDay.getTime()-3600*24*1000*firstDay.getDay());
                for(let i=0;i<42;i++){
                    let obj=getDayTime(startDay.getTime()+1000*3600*24*i);
                    obj.is_month=year==obj.year && month==obj.month?true:false;
                    if(this.value!==''){
                        let today=getDayTime(this.value);
                        obj.is_active=today.year==obj.year && today.month==obj.month && today.days==obj.days? true : false;
                    }else{
                        obj.is_active=false;
                    }
                    arr.push(obj)
                }
                return arr;
            },
            dayClick(item){
                let day=new Date(item.year,item.month-1,item.day,item.hour,item.minute,item.sencond)
                this.myDate=getDayTime(day);
                this.updateModel(getDate(day,this.format));
                setTimeout(()=>{
                    this.blur();
                },0)
            },
            focus(){
                this.show=true;
            },
            blur(){
                this.show=false;
            }
        }
    }
</script>

<style scoped lang="less">
    //过场动画设置
    .v-enter, .v-leave-to { opacity: 1;transform: translateY(10px);}
    .v-leave-active, .v-enter-active {transition: all 0.2s ease;opacity:0.8;}

    .small-date-row{position: relative;width:100%;}
    .small-date{
        font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
        position: absolute;top:55px;width:322px;
        box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);background: #fff;
        border-radius: 4px;padding:10px 15px;    color: #606266;border: 1px solid #e4e7ed;
        .small-date-header{
            width:100%;display:flex;align-items: center;justify-content: space-between;
            height:30px;
            .small-date-header-left,.small-date-header-right{flex:1;display:flex;align-items: center;justify-content: space-between;}
            .small-date-header-left i:hover,.small-date-header-right i:hover{color:#409eff;cursor: pointer;}
            .small-date-header-center{
                flex:4;display:flex;align-items: center;justify-content: center;cursor: pointer;font-size:14px;
            }
            .small-date-header-center-span:first-child{margin-right:10px;}
            .small-date-header-center-span:hover{color:#409eff;}
        }
        .small-date-panel-header{
            width:100%;height:35px;margin-top:10px;border-bottom: 1px solid #e4e7ed;
            .small-date-panel-header-date{float:left;display:inline-block;line-height:35px;text-align:center;width:46px;font-size:12px;cursor: default;}
        }
        .small-date-panel-bottom{
            width:100%;
            .small-date-panel-bottom-day{
                float:left;text-align:center;width:46px;font-size:12px;cursor: default;height:40px;
                display:flex;align-items: center;justify-content: center;flex-direction: column;
                padding:0px 5px;box-sizing: border-box;
                &:hover{color:#409eff;cursor: pointer;}
                /deep/ .prev-month{
                    span{color:#c0c4cc;}

                }
                /deep/ .day_active{display:block;width:24px;height:24px;line-height:24px;text-align:center;color:#fff;background:#409eff;border-radius: 50%;}
            }
        }
        .popper__arrow{
            position: absolute;top:-4px;left:20%;
            &:after{content: '';
                position: absolute;width: 0;height: 0;top: 0px;border-style: solid; border-width: 4px;border-color: transparent transparent #fff #fff;
                transform: rotate(135deg);box-shadow: -1px 1px 3px 0 rgba(0, 0, 0, 0.2);
            }
        }
    }
</style>
