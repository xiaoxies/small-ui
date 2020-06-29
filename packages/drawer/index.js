import sDrawer from "./components/drawer";

sDrawer.install=function(Vue){
    Vue.component(sDrawer.name,sDrawer);
}

export default sDrawer;
