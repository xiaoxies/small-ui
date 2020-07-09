<script>
    import buttonUpload from "./button-upload";
    import avatarUpload from "./avatar-upload";
    import cardUpload from "./card-upload";
    import {inputMixins} from "../../utils/mixins";
    export default {
        name:"sUpload",
        componentName:"sUpload",
        mixins:[inputMixins],
        props:{
            type:{type:String,default:"button"},
            value:{type:String|Array,default:()=>[]}
        },
        render(h){
            const self=this;
            switch(this.type){
                case "button":
                    let buttonElement=h(buttonUpload,{attrs:Object.assign({},this.$props,this.$attrs),on:{
                            change(e){
                                self.$emit("change",e);
                            },
                            exceed(file,fileList){
                                self.$emit("exceed",file,fileList);
                            },
                            value(list){
                                self.$emit("update::value",list)
                            },
                            remove(item,index){
                                self.$emit("remove",item,index)
                            },
                            click(item,index){
                                this.$emit("click",item,index);
                            }
                        }},[this.$slots.default]);
                    return buttonElement;
                case "avatar":
                    let avatarElement=h(avatarUpload,{attrs:Object.assign({},this.$props,this.$attrs),on:{
                            change(e){
                                self.$emit("change",e);
                            },
                            value(val){
                                self.$emit("update::value",val)
                            }
                        }},[this.$slots.default]);
                    return avatarElement;
                case 'card':
                    let cardElement=h(cardUpload,{attrs:Object.assign({},this.$props,this.$attrs),on:{
                            change(e){
                                self.$emit("change",e);
                            },
                            exceed(file,fileList){
                                self.$emit("exceed",file,fileList);
                            },
                        }});
                    return cardElement;


            }
        }
    }
</script>
