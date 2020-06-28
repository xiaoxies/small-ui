import sCollapse from "./components/collapse";
import sCollapseItem from "./components/collapse-item";

sCollapse.install=function(Vue){
    Vue.component(sCollapse.name, sCollapse)
}
sCollapseItem.install=function(Vue){
    Vue.component(sCollapseItem.name, sCollapseItem)
}

export {
    sCollapse,
    sCollapseItem
}
