// 小谢
// 2020-06-05

import "./font/iconfont.css";
import sButton from "./button";
import sRadio from "./radio";
import {sCheckbox,sCheckboxGroup} from "./checkbox";
import sInput from "./input";
import {sDatePicker} from "./date-picker";

function install (_vue){
    _vue.component(sButton.name,sButton);
    _vue.component(sInput.name,sInput);
    _vue.component(sRadio.name,sRadio);
    _vue.component(sCheckbox.name,sCheckbox);
    _vue.component(sCheckboxGroup.name,sCheckboxGroup);
    _vue.component(sDatePicker.name,sDatePicker);
}


export {
    sButton,
    sInput,
    sDatePicker,
    sCheckboxGroup,
    sCheckbox,
    sRadio
}

export default{
    version:"1.0",
    install
};


