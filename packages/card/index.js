import sCard from "./components/card";

sCard.install=function(Vue){
    Vue.component(sCard.name, sCard)
}

export default sCard;