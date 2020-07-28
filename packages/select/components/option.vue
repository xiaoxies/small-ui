<template>
    <div :class="[
        'small-option',
        {'small-option-disabled':disabled}
    ]" @click.stop="clickHander" v-show="visible">
        <span :class="{'small-option-active':isShow}">{{label}}</span>
        <s-icon v-if="iconShow" type="icon-zhengquewancheng" size="16px" color="#409eff"></s-icon>
    </div>
</template>

<script>
    import sIcon from "../../icon";
    export default {
        name:"sOption",
        componentName:"sOption",
        components:{sIcon},
        props:{
            label:String,
            value:String|Number,
            icon:{
                type:Boolean,
                default:true
            },
            disabled:{
                type:Boolean,
                default:false
            }
        },
        inject:['sSelect'],
        computed:{
            iconShow(){
                if(!this.icon){
                    return false;
                }
                return this.isShow;
            },
            isShow(){
                if(this.sSelect.multiple && this.sSelect.value.indexOf(this.value)!==-1){
                    return true
                }else{
                    if(this.sSelect.value == this.value){
                        return true
                    }
                    return false;
                }
            }
        },
        methods:{
            clickHander(){
                if(this.disabled){
                    return
                }
                this.sSelect.clickHander(this.label,this.value);
            },
            escapeRegexpString(value = ''){
                return String(value).replace(/[|\\{}()[\]^$+*?.]/g, '\\$&')
            },
            queryVisible(query){
                this.visible = new RegExp(this.escapeRegexpString(query), 'i').test(this.label);
                console.log(this.visible,"============this.visible");
                return this.visible;
            }
        },
        mounted(){
          this.$nextTick(()=>{
              if(this.sSelect.multiple && this.sSelect.value.indexOf(this.value)!==-1){
                  this.sSelect.clickHander(this.label,this.value);
              }else{
                  if(this.sSelect.value == this.value){
                      this.sSelect.clickHander(this.label,this.value);
                  }
              }
          })
        },
        created(){
            this.sSelect.options.push(this);
            this.sSelect.filteredOptionsCount++;
            this.sSelect.optionsCount++;
        },
        beforeDestroy(){
            let index=this.sSelect.options.indexOf(this);
            if(index!==-1){
                this.sSelect.options.splice(index,1);
            }
        },
        data() {
            return {
                visible:true
            }
        }
    }
</script>

<style scoped lang="less">
    .small-option{
        width:100%;padding:0px 15px;height:35px; color: #606266;cursor: pointer;
        display:flex;align-items: center;justify-content: space-between;font-size:14px;
        &:hover{background:#f5f7fa;}
    }
    .small-option-active{
        color:#409eff;font-weight:bold;
    }
    .small-option-disabled{
        background-color: #f5f7fa;
        border-color: #e4e7ed;
        color: #c0c4cc;cursor: not-allowed;
    }
</style>
