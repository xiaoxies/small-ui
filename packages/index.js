import sButton from "./button";

function install (_vue){
    _vue.component(sButton.name,sButton);
}


export default{
    install,
    sButton
};


