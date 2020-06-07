<template>
    <div v-click-out-side>
        <input type="text" v-model="value">
        <div v-if="show">
            我是日立
        </div>

    </div>
</template>

<script>
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
        props:["value"],
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

<style scoped>

</style>