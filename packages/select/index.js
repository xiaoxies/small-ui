import sOption from "./components/option";
import sSelect from "./components/select";

sOption.install=function(Vue){
    Vue.component(sOption.name,sOption);
}
sSelect.install=function(Vue){
    Vue.component(sSelect.name,sSelect);
}

export {
    sOption,
    sSelect
}


