// 小谢
// 2020-06-05

import "./font/iconfont.css";
import sButton from "./button";
import sInput from "./input";
import {sDatePicker} from "./date-picker";

function install (_vue){
    _vue.component(sButton.name,sButton);
    _vue.component(sInput.name,sInput);
    _vue.component(sDatePicker.name,sDatePicker);
}


export {
    sButton,
    sInput,
    sDatePicker
}

export default{
    version:"1.0",
    install
};


