import sBadge from "./components/badge";

sBadge.install=function(Vue){
    Vue.component(sBadge.name, sBadge)
}

export default sBadge;
