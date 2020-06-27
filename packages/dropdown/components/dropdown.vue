<template>
    <div v-dropdown-event class="small-dropdown">
        <slot></slot>
        <transition name="dropdown">
            <div v-show="visible" :style="style" class="small-dropdown-list-menu">
                <slot name="menu" ></slot>
            </div>
        </transition>
    </div>
</template>

<script>
    export default {
        name: "sDropdown",
        componentName:"sDropdown",
        provide(){
            return {
                sDropdown:this
            }
        },
        directives:{
            dropdownEvent:{
                bind(el,bindings,vnode){
                    el.handler=(e)=>{
                        if(el.contains(e.target)){
                            vnode.context.style={
                                top:el.offsetHeight+8+"px"
                            }
                            if(!vnode.context.visible){
                                vnode.context.show();
                            }else{
                                if(vnode.context.trigger=='click'){
                                    vnode.context.close();
                                }
                            }
                        }else{
                            if(vnode.context.show){
                                vnode.context.close();
                            }
                        }
                    };
                    document.addEventListener(vnode.context.trigger,el.handler)
                },
                unbind(el,bindings,vnode){
                    document.removeEventListener(vnode.context.trigger,el.handler)
                }
            }
        },
        props:{
            trigger:{
                type:String,
                default:"mouseover"
            }
        },
        data(){
            return {
                visible:false,
                style:{top:"0px"}
            }
        },
        methods:{
            click(name,row){
                this.$emit("click",name,row);
                this.close();
            },
            show(){
                this.visible=true;
                this.$emit("show");
            },
            close(){
                this.visible=false;
                this.$emit("close");
            }
        }
    }
</script>

<style scoped lang="less">
    .small-dropdown{position: relative;display:inline-block;}
    .small-dropdown-list-menu{
        position: absolute;top:45px;z-index:49;width:100%;
    }
</style>