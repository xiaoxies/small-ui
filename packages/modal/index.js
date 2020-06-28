import sModal from "./components/modal";

sModal.install=function(Vue){
    Vue.component(sModal.name,sModal)
}

export default sModal;
