<template>
    <div v-click-out-side class="small-date-row">
        <input type="text" v-model="date">
        {{dayList}}
        <div v-if="show" class="small-date">
            <div class="small-date-panel-header">

            </div>
            <div class="popper__arrow"></div>
        </div>
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
                const {year,month,days,week,time}=getDayTime(this.value);
                const firstDay = new Date(year,month-1,1); //获取选择的日期的第一天
                const startDay = new Date(firstDay.getTime()-3600*24*1000*firstDay.getDay());
                for(let i=0;i<42;i++){
                    arr.push(getDayTime(startDay.getTime()+1000*3600*24*i))
                }
                return arr;
            },
            date(){
                let day=getDate(this.value,this.format);
                this.$emit("update::value",day);
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
    .small-date-row{position: relative;width:100%;}
    .small-date{
        position: absolute;top:45px;width:322px;
        box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);background: #fff;
        border-radius: 4px;padding:15px;    color: #606266;border: 1px solid #e4e7ed;

        .popper__arrow{
            position: absolute;top:-4px;left:20%;
            &:after{
                content: '';
                position: absolute;
                width: 0;
                height: 0;
                top: 0px;
                border-style: solid;
                border-width: 4px;
                border-color: transparent transparent #fff #fff;
                transform: rotate(135deg);
                box-shadow: -1px 1px 3px 0 rgba(0, 0, 0, 0.2);
            }
        }
    }
</style>
