import sCheckbox from "./components/checkbox";
import sCheckboxGroup from "./components/checkbox-group";


sCheckbox.install=function(Vue){
    Vue.component(sCheckbox.name, sCheckbox)
}
sCheckboxGroup.install=function(Vue){
    Vue.component(sCheckboxGroup.name, sCheckboxGroup)
}

export  {
    sCheckbox,
    sCheckboxGroup
};
