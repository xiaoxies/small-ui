import sPopover from "./components/popover";

sPopover.install=function(Vue){
    Vue.component(sPopover.name,sPopover);
}

export default sPopover;
