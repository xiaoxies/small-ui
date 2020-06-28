<template>
    <div class="small-badge">
        <slot></slot>
        <div v-if="!isDot" :class="[
            'small-badge-label',
            'small-badge-'+type
        ]">{{label}}</div>
        <div v-if="isDot" :class="[
            'small-badge-dot',
            'small-badge-'+type
        ]"></div>
    </div>
</template>

<script>
    export default {
        name:"sBadge",
        componentName:"sBadge",
        props:{
            value:{
                type:String|Number,
                required:true
            },
            max:Number,
            type:{
                type:String,
                default:"danger"
            },
            isDot:{
                type:Boolean,
                default:false
            }
        },
        computed:{
            label(){
                let label="";
                if(this.value&&typeof this.value == 'number'){
                    if(this.max&&this.value>this.max){
                        label=this.max+"+"
                    }else{
                        label=this.value;
                    }
                }else{
                    label=this.value;
                }
                return label;
            }
        }
    }
</script>

<style scoped lang="less">
    .small-badge,.small-badge *{box-sizing: border-box;}
    .small-badge{position: relative;display:inline-block;}
    .small-badge-label{
        position: absolute;top:0px;right:10px;font-size:12px;display:inline-block;color:#fff;border-radius:10px;padding:1px 6px;transform: translateY(-50%) translateX(100%);
    }
    .small-badge-dot{position: absolute;right:5px;top:0px;transform: translateY(-50%) translateX(100%);width:8px;height:8px;border-radius: 50%;}



    .small-badge-danger{background:#f56c6c;}
    .small-badge-success{background:#67c23a;}
    .small-badge-info{background:#909399;}
    .small-badge-warning{background:#e6a23c;}
    .small-badge-primary{background:#409eff;}

</style>
