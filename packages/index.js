// 小谢
// 2020-06-05

import "./font/iconfont.css";
import sButton from "./button";

function install (_vue){
    _vue.component(sButton.name,sButton);
}


export default{
    version:"1.0",
    install,
    sButton
};


