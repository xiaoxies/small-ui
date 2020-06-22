import sAlert from "./components/alert";

sAlert.install=function(Vue){
    Vue.component(sAlert.name, sAlert)
}

export default sAlert;
