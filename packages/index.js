// 小谢
// 2020-06-05

import "./font/iconfont.css";
import sButton from "./button";
import sSwitch from "./switch";
import {sRadio,sRadioGroup} from "./radio";
import {sCheckbox,sCheckboxGroup} from "./checkbox";
import sInput from "./input";
import {sDatePicker} from "./date-picker";

function install (_vue){
    _vue.component(sButton.name,sButton);
    _vue.component(sSwitch.name,sSwitch);
    _vue.component(sInput.name,sInput);
    _vue.component(sRadio.name,sRadio);
    _vue.component(sRadioGroup.name,sRadioGroup);
    _vue.component(sCheckbox.name,sCheckbox);
    _vue.component(sCheckboxGroup.name,sCheckboxGroup);
    _vue.component(sDatePicker.name,sDatePicker);
}


export {
    sButton,
    sSwitch,
    sInput,
    sDatePicker,
    sCheckboxGroup,
    sCheckbox,
    sRadio,
    sRadioGroup
}

export default{
    version:"1.0",
    install
};


