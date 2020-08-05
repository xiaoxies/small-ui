<template>
    <div class="small-breadcrumb">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "sBreadcrumb",
        componentName:"sBreadcrumb",
        provide(){
            return {
                sBreadcrumb:this
            }
        },
        props:{
            type:String
        },
        methods:{
            clickHandel(name,row){
                this.$emit("click",name,row);
            }
        },
        mounted(){
            let item=this.$el.querySelectorAll('.small-breadcrumb-item');
            if(item.length){
                item[item.length-1].querySelector('.small-breadcrumb-item-icon').style.display="none";
            }

        }
    }
</script>

<style scoped lang="less">
    .small-breadcrumb{display:flex;align-items:center;justify-content: flex-start;}
</style>
