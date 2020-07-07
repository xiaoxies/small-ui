<script>
    import buttonUpload from "./button-upload";
    export default {
        name:"sUpload",
        componentName:"sUpload",
        props:{
            type:{type:String,default:"button"},
            limit:Number,
            multiple:{type:Boolean,default:false},
            accept:{type:String,default:"image/*"},
        },
        render(h){
            switch(this.type){
                case "button":
                    let Element=h(buttonUpload,{attrs:this.$attrs});
                    return Element;
            }
        }
    }
</script>
