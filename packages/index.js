// 小谢
// 2020-06-05

import "./font/iconfont.css";
import sButton from "./button";
import sSlide from "./slide";
import {sLoading,$loading} from "./loading";
import sMessage from "./message";
import sMessageBox from "./message-box";
import sRow from "./row";
import sIcon from "./icon";
import sAlert from "./alert";
import sTooltip from "./tooltip";
import sSwitch from "./switch";
import {sRadio,sRadioGroup} from "./radio";
import {sCheckbox,sCheckboxGroup} from "./checkbox";
import sInput from "./input";
import {sDatePicker} from "./date-picker";

function install (_vue){
    _vue.component(sButton.name,sButton);
    _vue.component(sSlide.name,sSlide);
    _vue.component(sRow.name,sRow);
    _vue.component(sLoading.name,sLoading);
    _vue.component(sIcon.name,sIcon);
    _vue.component(sAlert.name,sAlert);
    _vue.component(sTooltip.name,sTooltip);
    _vue.component(sSwitch.name,sSwitch);
    _vue.component(sInput.name,sInput);
    _vue.component(sRadio.name,sRadio);
    _vue.component(sRadioGroup.name,sRadioGroup);
    _vue.component(sCheckbox.name,sCheckbox);
    _vue.component(sCheckboxGroup.name,sCheckboxGroup);
    _vue.component(sDatePicker.name,sDatePicker);
    _vue.prototype.$message=sMessage;
    _vue.prototype.$alert=sMessageBox.alert;
    _vue.prototype.$confirm=sMessageBox.confirm;
    _vue.prototype.$prompt=sMessageBox.prompt;
    _vue.prototype.$loading=$loading;
}


export {
    sMessage,
    sButton,
    sAlert,
    sIcon,
    sRow,
    sSwitch,
    sTooltip,
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


