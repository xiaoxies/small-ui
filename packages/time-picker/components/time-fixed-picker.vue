<template>
    <div class="small-time-fixed" v-time-fixed>
        <s-input readonly size="medium" prefix-icon="icon-shijian-xianxing" v-model="value"></s-input>
        <transition name="time-fixed">
            <div class="small-time-fixed-body" v-show="visible">
                <ul class="small-time-fixed-menu">
                    <s-scrollbar>
                        <li v-for="(item,index) in list" :key="index">{{item}}</li>
                    </s-scrollbar>
                </ul>
                <div class="small-time-arrow"></div>
            </div>
        </transition>
    </div>
</template>

<script>
    import sInput from "../../input";
    import sScrollbar from "../../scrollbar";
    const compareTime = function(time1, time2) {
        const value1 = parseTime(time1);
        const value2 = parseTime(time2);

        const minutes1 = value1.minutes + value1.hours * 60;
        const minutes2 = value2.minutes + value2.hours * 60;

        if (minutes1 === minutes2) {
            return 0;
        }
        return minutes1 > minutes2 ? 1 : -1;
    };
    const formatTime = function(time) {
        return (time.hours < 10 ? '0' + time.hours : time.hours) + ':' + (time.minutes < 10 ? '0' + time.minutes : time.minutes);
    };
    const nextTime = function(time, step) {
        const timeValue = parseTime(time);
        const stepValue = parseTime(step);

        const next = {
            hours: timeValue.hours,
            minutes: timeValue.minutes
        };

        next.minutes += stepValue.minutes;
        next.hours += stepValue.hours;

        next.hours += Math.floor(next.minutes / 60);
        next.minutes = next.minutes % 60;

        return formatTime(next);
    };
    const parseTime = function(time) {
        const values = (time || '').split(':');
        if (values.length >= 2) {
            const hours = parseInt(values[0], 10);
            const minutes = parseInt(values[1], 10);

            return {
                hours,
                minutes
            };
        }
        /* istanbul ignore next */
        return null;
    };
    export default {
        name:"sTimeFixedPicker",
        componentName:"sTimeFixedPicker",
        components:{sInput,sScrollbar},
        props:{
            value:String | Date,
            start:{type:String,default:"00:00"},
            end:{type:String,default:"24:00"},
            step:{type:String,default:"00:15"},
        },
        directives:{
            timeFixed:{
                bind(el,bindings,vnode){
                    el.handler=(e)=>{
                        if(!vnode.context.closed){
                            return
                        }
                        if(el.contains(e.target)){
                            if(!vnode.context.visible){
                                vnode.context.show();
                            }else{
                                if(el.trigger=="click"){
                                    vnode.context.hide();
                                }
                            }
                        }else{
                            vnode.context.hide();
                        }
                    };
                    document.addEventListener('click',el.handler)
                },
                unbind(el,bindings,vnode){
                    document.removeEventListener('click',el.handler)
                }
            }
        },
        methods:{
            show(){
                this.visible=true;
                this.$emit("show");
            },
            hide(){
                this.visible=false;
                this.closed=false;
                setTimeout(()=>{
                    this.closed=true;
                },300)
                this.$emit("hide");
            }
        },
        computed:{
            list() {
                const start = this.start;
                const end = this.end;
                const step = this.step;
                const result = [];

                if (start && end && step) {
                    let current = start;
                    while (compareTime(current, end) <= 0) {
                        result.push(current);
                        current = nextTime(current, step);
                    }
                }
                return result;
            }
        },
        data() {
            return {
                visible:false,
                closed:true
            }
        }
    }
</script>

<style scoped lang="less">
    ul,li,ol{list-style:none;}
    .small-time-fixed,.small-time-fixed *{box-sizing: border-box;}
    .small-time-fixed{
        width:100%;position: relative;
    }
    .small-time-fixed-menu{
        background:#fff;position: relative;overflow-y: auto;
        border: 1px solid #e4e7ed;border-radius: 4px;
        box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
        li{
            width:100%;padding:0px 15px;color: #606266;font-size:14px;height:35px;line-height:35px;cursor: pointer;
            &:hover{
                background-color: #f5f7fa;font-weight:bold;
            }
        }
    }
    .small-time-fixed-menu::-webkit-scrollbar-button{display:none;}
    .small-time-arrow{
        position: absolute;width:0;height:0;border-left: 10px solid transparent;border-right: 10px solid transparent;
        top:3px;left:50%;transform: translateX(-50%);border-bottom:10px solid #e4e7ed;
        &::after{
            content:" ";position: absolute;width:0;height:0;border-left: 10px solid transparent;border-right: 10px solid transparent;
            top:1px;left:50%;transform: translateX(-50%);border-bottom:10px solid #fff;
        }
    }
    .small-time-fixed-body{
        position: absolute;width:100%;left:0px;top:35px;padding-top:13px;
    }

    .time-fixed-enter-active{animation: time-fixed-fade-in 0.3s;}
    .time-fixed-leave-active{animation: time-fixed-fade-out 0.3s;}
    @keyframes time-fixed-fade-in {
        0%{transform: translate3d(0,-20px,0);opacity:0}
        100%{transform: translate3d(0,0,0);opacity:1}
    }
    @keyframes time-fixed-fade-out {
        0%{transform: translate3d(0,0,0);opacity:1}
        100%{transform: translate3d(0,-20px,0);opacity:0}
    }

</style>
