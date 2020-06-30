<template>
    <div v-dropdown-event class="small-dropdown">
        <slot></slot>
        <transition name="dropdown">
            <div v-show="visible" :style="style" ref="dropdown" class="small-dropdown-list-menu">
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
                            if(!vnode.context.visible && vnode.context.closed){
                                vnode.context.show();
                            }else{
                                if(vnode.context.trigger=="click"){
                                    vnode.context.close();
                                }
                            }
                        }else{
                            if(vnode.context.visible && vnode.context.closed){
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
                closed:true,
                position:"bottom",
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
                this.$nextTick(()=>{
                    let parentWidth=this.$el.offsetWidth;//主元素宽度
                    let parentHeight=this.$el.offsetHeight;//主元素高度
                    let windowWidth=document.body.offsetWidth;//可视区宽度
                    let windowHeight=document.body.offsetHeight;//可视区高度
                    let windowHeights = window.scrollY + document.documentElement.clientHeight; //可视区高度范围
                    let windowWidths = window.scrollX + document.documentElement.clientWidth; //可视区高度范围
                    let width=this.$refs.dropdown.offsetWidth;//
                    let height=this.$refs.dropdown.offsetHeight;//
                    let parentTop=this.$el.offsetTop;//
                    let parentLeft=this.$el.offsetLeft;//
                    let parentRight=windowWidth-parentLeft-width;//
                    let parentBottom=windowHeight-parentTop-height;//
                    if(windowHeights-parentTop-parentHeight-height>0){
                        this.style={
                            top:parentHeight-5+"px",
                            left:-((width-parentWidth)/2)+"px"
                        }
                    }else if(parentLeft-parentWidth-width>0){
                        this.style={
                            left:-(width-5)+"px",
                            top:-((height-parentHeight)/2)+"px"
                        }
                    }else if(parentTop-parentHeight-height>0){
                        this.style={
                            top:-(height-5)+"px",
                            left:-((width-parentWidth)/2)+"px"
                        }
                    }else{
                        this.style={
                            right:-(width-5)+"px",
                            top:-((height-parentHeight)/2)+"px"
                        }
                    }
                })



            },
            close(){
                this.visible=false;
                this.closed=false;
                this.$emit("close");
                setTimeout(()=>{this.closed=true;},100)
            }
        }
    }
</script>

<style scoped lang="less">
    .small-dropdown{position: relative;display:inline-block;}
    .small-dropdown-list-menu{
        position: absolute;top:45px;z-index:49;
    }

    .dropdown-enter-active {animation: dropdown-in .3s; }
    .pdropdown-leave-active { animation: dropdown-out .3s;}
    @keyframes dropdown-in {
        0% {opacity: 0; transform: translate3d(0%, -20px, 0);}
        100% {opacity: 1;transform: translate3d(0%, 0px, 0);}
    }
    @keyframes dropdown-out {
        0% {opacity: 1;transform: translate3d(0%, 0px, 0);}
        100% {opacity: 0;transform: translate3d(0%, -20px, 0);}
    }
</style>
