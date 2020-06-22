import sTooltip from "./components/tooltip";


sTooltip.install=function(Vue){
    Vue.component(sTooltip.name, sTooltip)
}

export default sTooltip;
