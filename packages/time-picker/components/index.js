import sTimeFixedPicker from "./time-fixed-picker";
import {inputMixins} from "../../utils/mixins";

export default {
    name:"sTimePicker",
    componentName:"sTimePicker",
    mixins:[inputMixins],
    props:{
        type:{type:String,default:"fixed"},
        start:{type:String,default:"00:00"},
        end:{type:String,default:"24:00"},
        step:{type:String,default:"00:15"},
        value:String|Date
    },
    render(h){
        const self = this;
        switch(this.type){
            case 'fixed':
                return h(sTimeFixedPicker,{
                    attrs:Object.assign({},this.$props,this.$attrs),
                    on:{

                    }
                })
        }
    }
}
