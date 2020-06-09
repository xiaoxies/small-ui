<template>
    <div v-click-out-side class="small-date-row">
        <input type="text" v-model="date">
        <transition>
            <div v-show="show" class="small-date">
                <div class="small-date-header">
                    <div class="small-date-header-left">
                        <i class="iconfont icon-zhixiangzuo"></i>
                        <i class="iconfont icon-shangyiyehoutuifanhui"></i>
                    </div>
                    <div class="small-date-header-center">
                        <span class="small-date-header-center-span">2020年</span>
                        <span class="small-date-header-center-span">6月</span>
                    </div>
                    <div class="small-date-header-right">
                        <i class="iconfont icon-xiayiyeqianjinchakangengduo"></i>
                        <i class="iconfont icon-zhixiangyou"></i>
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
                    <div class="small-date-panel-bottom-day" v-for="(item,index) in dayList" :key="index">{{item.day}}</div>
                </div>
                <div class="popper__arrow"></div>
            </div>
        </transition>
    </div>
</template>

<script>
    import {getDate,getDayTime} from "../../utils/common";
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
        model:{
            props:"value",
            event:"update::value"
        },
        props:{
            value:Date|String,
            format:{
                type:String,
                default:"yyyy-mm-dd"
            }
        },
        computed:{
            dayList(){
                let arr=[];
                const {year,month,days,week,time}=getDayTime(this.value||new Date());
                const firstDay = new Date(year,month-1,1); //获取选择的日期的第一天
                const startDay = new Date(firstDay.getTime()-3600*24*1000*firstDay.getDay());
                for(let i=0;i<42;i++){
                    let obj=getDayTime(startDay.getTime()+1000*3600*24*i);
                    obj.is_today=year==obj.year && month==obj.month && days==obj.days ? true : false;

                    arr.push(obj)
                }
                return arr;
            },
            date(){
                let day="";
                if(this.value){
                    day=getDate(this.value,this.format);
                    this.$emit("update::value",day);
                }

                return day;
            }
        },
        data(){
            return {
                show:false
            }
        },
        methods:{
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
    .v-leave-active, .v-enter-active {transition: all 0.2s ease;opacity: 0.6;}

    .small-date-row{position: relative;width:100%;}
    .small-date{
        position: absolute;top:45px;width:322px;
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
