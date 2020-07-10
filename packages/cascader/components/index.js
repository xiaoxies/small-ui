import cascader from "./cascader";

export default {
    name:"sCascader",
    componentName:"sCascader",
    props:{
        type:String
    },
    render(h){
        switch(this.type){
            default:
                let cascaderElmenet = h(cascader,{attrs:Object.assign({},this.$props,this.$attrs)});
                return cascaderElmenet;
        }
    }
}
