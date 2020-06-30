<template>
    <li
        @click.self="clickHandel"
        :style="{
            'width':(100/sDropdownMenu.col)+'%'
        }"
       :class="[
            'small-dropdown-item',
            disabled?'small-dropdown-item-disabled':''
       ]"
    >
        <slot></slot>
    </li>
</template>

<script>
    export default {
        name: "sDropdownItem",
        componentName:"sDropdownItem",
        inject: ['sDropdown','sDropdownMenu'],
        props:{
            row:String|Object|Array|Number,
            name:String,
            disabled:{
                type:Boolean,
                default:false
            }
        },
        methods:{
            clickHandel(){
                this.sDropdown.click(this.name,this.row)
            }
        }
    }
</script>

<style scoped lang="less">
    .small-dropdown-item{
        font-size:12px;color: #606266;text-align:center;line-height:35px;cursor: pointer;width:100%;
        &:hover{
            background-color: #ecf5ff;
            color: #66b1ff;
        }
    }
    .small-dropdown-item-disabled{
        cursor: default;
        color: #bbb;
        pointer-events: none;
    }
</style>
