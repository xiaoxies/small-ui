// 小谢
// 2020-06-05

import "./font/iconfont.css";
import {sCollapseItem,sCollapse} from "./collapse";
import {sBreadcrumb,sBreadcrumbItem} from "./breadcrumb";
import {sDropdown,sDropdownItem,sDropdownMenu} from "./dropdown";
import {sRadio,sRadioGroup} from "./radio";
import {sCheckbox,sCheckboxGroup} from "./checkbox";
import {sDatePicker} from "./date-picker";
import {sLoading,$loading} from "./loading";
import sCard from "./card";
import sPopconfirm from "./popconfirm";
import sPopover from "./popover";
import sModal from "./modal";
import sBadge from "./badge";
import sCol from "./col";
import sSlide from "./slide";
import sButton from "./button";
import sBacktop from "./backtop";
import sTag from "./tag";
import sRow from "./row";
import sIcon from "./icon";
import sAlert from "./alert";
import sTooltip from "./tooltip";
import sSwitch from "./switch";
import sInput from "./input";
import sMessage from "./message";
import sMessageBox from "./message-box";
import sNotify from "./notify";

function install (_vue){
    _vue.component(sTag.name,sTag);
    _vue.component(sPopconfirm.name,sPopconfirm);
    _vue.component(sPopover.name,sPopover);
    _vue.component(sModal.name,sModal);
    _vue.component(sBacktop.name,sBacktop);
    _vue.component(sCollapseItem.name,sCollapseItem);
    _vue.component(sCollapse.name,sCollapse);
    _vue.component(sBadge.name,sBadge);
    _vue.component(sBreadcrumb.name,sBreadcrumb);
    _vue.component(sBreadcrumbItem.name,sBreadcrumbItem);
    _vue.component(sDropdown.name,sDropdown);
    _vue.component(sDropdownItem.name,sDropdownItem);
    _vue.component(sDropdownMenu.name,sDropdownMenu);
    _vue.component(sButton.name,sButton);
    _vue.component(sSlide.name,sSlide);
    _vue.component(sRow.name,sRow);
    _vue.component(sCol.name,sCol);
    _vue.component(sCard.name,sCard);
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
    _vue.prototype.$notify=sNotify;
}


export {
    sCard,
    sPopconfirm,
    sPopover,
    sBacktop,
    sModal,
    sTag,
    sCollapse,
    sCollapseItem,
    sBadge,
    sBreadcrumbItem,
    sBreadcrumb,
    sDropdownMenu,
    sDropdownItem,
    sDropdown,
    sLoading,
    sButton,
    sAlert,
    sIcon,
    sRow,
    sCol,
    sSwitch,
    sTooltip,
    sInput,
    sDatePicker,
    sCheckboxGroup,
    sCheckbox,
    sRadio,
    sRadioGroup,
    sMessage,
    sNotify,
    sMessageBox,
}

export default{
    version:"1.0",
    install
};


