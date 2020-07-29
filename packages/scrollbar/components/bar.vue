<template>
    <div :class="[
        'small-scrollbar-'+bar.key
    ]">
        <div :class="[
            'small-scrollbar-'+bar.key+'-thumb'
        ]" ref="thumb" @mousedown.stop="clickThumbHandler" :style="renderThumbStyle()"></div>
    </div>
</template>

<script>
    export default {
        props:{
            bar:Object,
            size:String,
            move:Number,
        },
        data(){
            return {
                cursorDown:false
            }
        },
        computed:{
            wrap(){
                return this.$parent.$refs.wrap;
            }
        },
        destroyed() {
            document.removeEventListener('mouseup', this.mouseUpDocumentHandler);

        },
        methods:{
            renderThumbStyle(){
                let style={};
                style[this.bar.size] = this.size;
                style.transform = `translate${this.bar.axis}(${ this.move }%)`;;
                return style;
            },
            startDrag(e) {
                e.stopImmediatePropagation();
                this.cursorDown = true;
                document.addEventListener('mousemove', this.mouseMoveDocumentHandler)
                document.addEventListener('mouseup', this.mouseUpDocumentHandler)
                document.onselectstart = () => false;
            },
            mouseMoveDocumentHandler(e) {
                if (this.cursorDown === false) return;
                const prevPage = this[this.bar.axis];
                if (!prevPage) return;
                const offset = ((this.$el.getBoundingClientRect()[this.bar.direction] - e[this.bar.client]) * -1);
                const thumbClickPosition = (this.$refs.thumb[this.bar.offset] - prevPage);
                const thumbPositionPercentage = ((offset - thumbClickPosition) * 100 / this.$el[this.bar.offset]);
                this.wrap[this.bar.scroll] = (thumbPositionPercentage * this.wrap[this.bar.scrollSize] / 100);
            },

            mouseUpDocumentHandler(e) {
                this.cursorDown = false;
                this[this.bar.axis] = 0;
                document.removeEventListener('mousemove', this.mouseMoveDocumentHandler)
                document.onselectstart = null;
            },
            clickThumbHandler(e){
                if (e.ctrlKey || e.button === 2) {
                    return;
                }
                this.startDrag(e);
                this[this.bar.axis] = (e.currentTarget[this.bar.offset] - (e[this.bar.client] - e.currentTarget.getBoundingClientRect()[this.bar.direction]));
            }
        }
    }
</script>

<style scoped lang="less">
    .small-scrollbar-vertical{
        position: absolute;top:2px;right:2px;width:7px;bottom:2px;opacity:0;
        transition: all 0.3s;
        .small-scrollbar-vertical-thumb{
            width: 100%;background-color: #ccc;cursor: pointer;border-radius: 4px;
            &:hover{
                background:#90939980;
            }
        }
    }
    .small-scrollbar-horizontal{
        position: absolute;bottom:2px;left:2px;height:6px;right:2px;opacity:0;
        transition: all 0.3s;
        .small-scrollbar-horizontal-thumb{
            height:100%;background-color: #ccc;cursor: pointer;border-radius: 4px;
            &:hover{
                background:#90939980;
            }
        }
    }
</style>
