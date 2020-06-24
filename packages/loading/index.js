import sLoading from "./components/loading";
import Vue from "vue";

const loadingController = Vue.extend(sLoading);
let uid=0;


sLoading.install=function(Vue){
    Vue.component(sLoading.name, sLoading)
}

const $loading = (options)=>{
    let id = 'message-' + uid++;
    options.show=true;
    const loadingInstance = new loadingController({
        propsData:options
    });
    loadingInstance.id = id;
    loadingInstance.$mount();
    document.body.appendChild(loadingInstance.$el);
    return loadingInstance;
}



export {
    sLoading,
    $loading
}
