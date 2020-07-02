import sSteps from "./components/steps";
import sStepsItem from "./components/steps-item";

sSteps.install=function(Vue){
    Vue.component(sSteps.name,sSteps);
}

sStepsItem.install=function(Vue){
    Vue.component(sStepsItem.name,sStepsItem);
}


export {
    sStepsItem,
    sSteps
}
