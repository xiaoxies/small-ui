import sRadio from "./components/radio";
import sRadioGroup from "./components/radio-group";

sRadio.install=function(Vue){
    Vue.component(sRadio.name, sRadio)
}
sRadioGroup.install=function(Vue){
    Vue.component(sRadioGroup.name, sRadioGroup)
}

export {
    sRadio,
    sRadioGroup
};
