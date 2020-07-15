import sCheckbox from "./components/checkbox";
import sCheckboxGroup from "./components/checkbox-group";
import sModelCheckbox from "./components/modelCheckbox";

sCheckbox.install=function(Vue){
    Vue.component(sCheckbox.name, sCheckbox)
}
sCheckboxGroup.install=function(Vue){
    Vue.component(sCheckboxGroup.name, sCheckboxGroup)
}
sModelCheckbox.install=function(Vue){
    Vue.component(sModelCheckbox.name, sModelCheckbox)
}

export  {
    sCheckbox,
    sCheckboxGroup,
    sModelCheckbox
};
