<template>
    <div class="small-rate" >
        <i :class="{
            'iconfont':true,
            [item.icon]: !item.active,
            [item.activeIcon] : item.active,
            'small-rate-scale':!readonly
        }" v-for="(item,index) in list" :style="{
            'color':item.color
        }" @mouseover="moveActive(item,index)" @click="setValue(item,index)" @mouseleave="leaveActive(item,index)" :key="index"></i>
        <span class="small-rate-text">{{text}}</span>
    </div>
</template>

<script>
    import {inputMixins} from "../../utils/mixins";
    export default {
        name:"sRate",
        componentName:"sRate",
        mixins:[inputMixins],
        props:{
            value:Number,
            max:{type:Number,default:5},
            icon:{type:String,default:"icon-shoucang-xianxing"},
            activeIcon:{type:String,default:"icon-shoucang"},
            activeColor:{type:String,default:"#f7ba2a"},
            color:{type:String|Object,default:"#c0c4cc"},
            data:Object,
            showText:{type:Boolean,default:false},
            readonly:{type:Boolean,default:false},
        },
        data(){
            return {
                list:[],
                text:""
            }
        },
        created(){
            this.list=[];
            for(let i=1;i<=this.max;i++){
                let active=false;
                let color=this.color;
                if(this.value && this.value!==0 && i<=this.value){
                    active=true
                    color=this.activeColor;
                }
                this.list.push({
                    index:i,
                    active:active,
                    icon:this.icon,
                    activeIcon:this.activeIcon,
                    color:color
                })
            }
            this.computedText(this.value);
        },
        methods:{
            computedText(value){
                if(value==""||!value||value==0){
                    return
                }

                let str="";
                const setText=()=>{
                    let arr=['极差','失望','一般','满意','十分满意'];
                    if(value == this.list.length){
                        str = arr[arr.length-1];
                    }else{
                        str = arr[parseInt(value/(this.list.length/arr.length))];
                    }
                }
                if(this.readonly){
                    setText();
                    this.text=str;
                    return
                }
                if(this.data){
                    if(this.data[value]){
                        let obj = this.data[value];
                        if(obj.text){
                            str=obj.text;
                        }
                        this.list=this.list.map((item,index)=>{
                            item=Object.assign(item,obj)
                            if(value>=(index+1)){
                                if(obj.activeColor){
                                    item.color=obj.activeColor
                                }
                            }else{
                                if(obj.color){
                                    item.color=obj.color
                                }else{
                                    item.color=this.color
                                }
                            }
                            return item;
                        })
                    }else{
                        str="";
                        this.list=this.list.map((item,index)=>{
                            item.icon=this.icon
                            item.activeIcon=this.activeIcon
                            item.icon=this.icon
                            item.color=this.activeColor
                            return item;
                        })
                        setText();
                    }
                }else{
                    str="";
                    setText();
                }
                this.text=str;
            },
            setValue(item,index){
                if(this.readonly){
                    return
                }
                this.$emit("update::value",item.index);
                this.computedText(item.index);
            },
            leaveActive(item,index){
                if(this.readonly){
                    return
                }
                let obj=this.data[this.value];
                this.list=this.list.map((row,index)=>{
                    if(row.index<=this.value){
                        row.active=true
                        row=Object.assign({},row,obj||{})
                        if(obj && obj.activeColor){
                            row.color=obj.activeColor
                        }else{
                            row.color=this.activeColor
                        }
                    }else{
                        row.active=false
                        row=Object.assign({},row,obj||{})
                        if(obj && obj.color){
                            row.color=obj.color
                        }else{
                            row.color=this.color;
                        }

                    }
                    return row;
                })
            },
            moveActive(item,index){
                if(this.readonly){
                    return
                }
                this.list=this.list.map((row,index)=>{
                    if(row.index<=item.index){
                        row.active=true
                        row.color=this.activeColor
                    }else{
                        row.active=false
                        row.color=this.color;
                    }
                    return row;
                })
                this.computedText(item.index);
            }
        }
    }
</script>

<style scoped lang="less">
    .small-rate,.small-rate *{box-sizing: border-box;}
    .small-rate{display:flex;justify-content: flex-start;align-items: flex-start;flex-wrap: wrap;cursor: pointer;}
    .small-rate i {padding-right:5px;color:#c0c4cc;font-size:18px;transition: all 0.5s;}
    .small-rate-scale:hover{transform: scale(1.3)}
    .small-rate-text{font-size:14px;padding-top:1px;}
</style>
