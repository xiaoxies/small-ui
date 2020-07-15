import sTabs from "./components/tabs";
import sTabsPanel from "./components/tabs-panel";

sTabs.install=function(Vue){
    Vue.component(sTabs.name,sTabs);
}
sTabsPanel.install=function(Vue){
    Vue.component(sTabsPanel.name,sTabsPanel);
}

export {
    sTabs,
    sTabsPanel
}
