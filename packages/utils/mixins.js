export const inputMixins = {
    model:{
        props:"value",
        event:"update::value"
    },
    methods:{
        dispatch(component,methods,value){
            component[methods](value);
        },
        updateModel(data){
            this.$emit('update::value',data);
        }
    }
}
