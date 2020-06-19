<template>
    <div class="small-tooltip" v-mouseover-side>
        <div :class="[
                'small-tooltip-body',
                'small-tooltip-position-'+position
            ]"
             :style="style"
        >
            <div class="small-tooltip-content">
                <template v-if="!$slots.content">{{content}}</template>
                <slot name="content"></slot>
            </div>
            <div class="small-tooltip-div">
                <span class="small-tooltip-body-arrow"></span>
            </div>
        </div>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name:"sTooltip",
        componentName:"sTooltip",
        props:{
            position:{
                type:String,
                default:"top-center"
            },
            content:String
        },
        directives:{
            mouseoverSide:{
                bind(el,bindings,vnode){
                    el.handler=(e)=>{
                        if(el.contains(e.target)){
                            let height=el.offsetHeight;
                            let width=el.offsetWidth;
                            if(vnode.context.position.indexOf("top")!==-1){
                                vnode.context.style=`bottom:${height+15}px;display:inline-block;`
                            }
                            if(vnode.context.position.indexOf("right")!==-1){
                                vnode.context.style=`left:${width+15}px;display:inline-block;`
                            }
                            if(vnode.context.position.indexOf("bottom")!==-1){
                                vnode.context.style=`top:${height+15}px;display:inline-block;`
                            }
                            if(vnode.context.position.indexOf("left")!==-1){
                                vnode.context.style=`right:${width+15}px;display:inline-block;`
                            }

                        }else{
                            vnode.context.style=`display:none;`
                        }
                    }
                    document.addEventListener("mouseover",el.handler)
                },
                unbind(el){
                    document.removeEventListener("click",el.handler)
                }
            }
        },
        data() {
            return {
                style:""
            }
        }
    }
</script>

<style scoped lang="less">
    @height:8px;
    @padding:10px;

    .small-tooltip{ display:inline-block;position: relative;box-sizing: border-box;font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;}
    .small-tooltip-content{width:100%;text-align:left;white-space: nowrap;text-overflow: ellipsis;overflow:hidden;}
    .small-tooltip-body{
        display:none;position: absolute;max-width:250px;width:auto;text-align:center;background:#303133;border-radius: 4px;
        padding: 10px;color:#fff;font-size:12px;transition: all 0.3s;box-sizing: border-box;z-index:999;
        .small-tooltip-div{
            width:100%;position: absolute;height:100%;left:0px;top:0px;right:0px;bottom:0px;
            display:flex;align-items: flex-end;justify-content: center;box-sizing: border-box;
        }
        .small-tooltip-body-arrow{
            transition: all 0.3s;
            display: block;width: 0;height: 0; border-style: solid;
            border-left: 6px solid transparent;border-right: 6px solid transparent;
            border-top: @height solid #303133;border-bottom:0px;
        }
    }
    .small-tooltip-position-top-start{
        .small-tooltip-div{justify-content: flex-start;padding-left:15%;}
        .small-tooltip-body-arrow{margin-bottom: -@height;}
    }
    .small-tooltip-position-top-center{
        .small-tooltip-div{justify-content: center;}
        .small-tooltip-body-arrow{margin-bottom: -@height;}
    }
    .small-tooltip-position-top-end{
        .small-tooltip-div{justify-content: flex-end;padding-right:15%;}
        .small-tooltip-body-arrow{ margin-bottom: -@height; }
    }
    .small-tooltip-position-bottom-start{
        .small-tooltip-div{align-items: flex-start;justify-content: flex-start;padding-left:15%;}
        .small-tooltip-body-arrow{margin-top: -@height;border-bottom: @height solid #303133;border-top:0px;}
    }
    .small-tooltip-position-bottom-center{
        .small-tooltip-div{align-items: flex-start;justify-content: center;}
        .small-tooltip-body-arrow{margin-top: -@height;border-bottom: @height solid #303133;border-top:0px;}
    }
    .small-tooltip-position-bottom-end{
        .small-tooltip-div{align-items: flex-start;justify-content: flex-end;padding-right:15%;}
        .small-tooltip-body-arrow{ margin-top: -@height;border-bottom: @height solid #303133;border-top:0px; }
    }
    .small-tooltip-position-right-start{
        .small-tooltip-div{align-items: flex-start;justify-content: flex-start;padding-top:@padding;}
        .small-tooltip-body-arrow{margin-left: -@height;border-right: @height solid #303133;border-top:6px solid transparent;border-bottom:6px solid transparent;border-left: 0px;}
    }
    .small-tooltip-position-right-center{
        .small-tooltip-div{align-items: center;justify-content: flex-start;}
        .small-tooltip-body-arrow{margin-left: -@height;border-right: @height solid #303133;border-top:6px solid transparent;border-bottom:6px solid transparent;border-left: 0px;}
    }
    .small-tooltip-position-right-end{
        .small-tooltip-div{align-items: flex-end;justify-content: flex-start;padding-bottom:@padding;}
        .small-tooltip-body-arrow{margin-left: -@height;border-right: @height solid #303133;border-top:6px solid transparent;border-bottom:6px solid transparent;border-left: 0px;}
    }
    .small-tooltip-position-left-start{
        .small-tooltip-div{align-items: flex-start;justify-content: flex-end;padding-top:@padding;}
        .small-tooltip-body-arrow{margin-right: -@height;border-left: @height solid #303133;border-top:6px solid transparent;border-bottom:6px solid transparent;border-right: 0px;}
    }
    .small-tooltip-position-left-center{
        .small-tooltip-div{align-items: center;justify-content: flex-end;}
        .small-tooltip-body-arrow{margin-right: -@height;border-left: @height solid #303133;border-top:6px solid transparent;border-bottom:6px solid transparent;border-right: 0px;}
    }
    .small-tooltip-position-left-end{
        .small-tooltip-div{align-items: flex-end;justify-content: flex-end;padding-bottom:@padding;}
        .small-tooltip-body-arrow{margin-right: -@height;border-left: @height solid #303133;border-top:6px solid transparent;border-bottom:6px solid transparent;border-right: 0px;}
    }
</style>
