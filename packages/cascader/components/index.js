import cascader from "./cascader";
import {inputMixins} from "../../utils/mixins";
export default {
    name:"sCascader",
    componentName:"sCascader",
    mixins:[inputMixins],
    props:{
        type:String,
        data:{type:Array,required:true},
        trigger:{type:String,default:"click"},
        value:{type:Array,required:true}
    },
    render(h){
        const self=this;
        switch(this.type){
            default:
                let cascaderElmenet = h(cascader,{attrs:Object.assign({},this.$props,this.$attrs),on:{
                        value(value){
                            self.$emit("update::value",value);
                        }
                    }});
                return cascaderElmenet;
        }
    }
}
