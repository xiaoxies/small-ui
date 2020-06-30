<script>
    import Progress from "./progress";
    import Circle from "./circle";
    export default {
        props:{
            circle:{type:Boolean,default:false}
        },
        name:"sProgress",
        componentName:"sProgress",
        render(h){
            if(this.circle){
                let Element=h(Circle,{attrs:this.$attrs});
                return Element
            }else{
                let Element=h(Progress,{attrs:this.$attrs});
                return Element
            }
        }
    }
</script>

