// 小谢
// 2020-06-05

import "./font/iconfont.css";
import {sCollapseItem,sCollapse} from "./collapse";
import {sBreadcrumb,sBreadcrumbItem} from "./breadcrumb";
import {sDropdown,sDropdownItem,sDropdownMenu} from "./dropdown";
import {sRadio,sRadioGroup} from "./radio";
import {sTabs,sTabsPanel} from "./tabs";
import {sCheckbox,sCheckboxGroup,sModelCheckbox} from "./checkbox";
import {sDatePicker} from "./date-picker";
import {sLoading,$loading} from "./loading";
import {sTimelineItem,sTimeline} from "./timeline";
import {sSteps,sStepsItem} from "./steps";
import {sTree,sTreeItem} from "./tree";
import sCard from "./card";
import sCascader from "./cascader";
import sTimePicker from "./time-picker";
import sDrawer from "./drawer";
import sAside from "./aside";
import sPagination from "./pagination";
import sProgress from "./progress";
import sHeader from "./header";
import sContainer from "./container";
import sFooter from "./footer";
import sScrollbar from "./scrollbar";
import {sSelect,sOption} from "./select";
import sMain from "./main";
import sPopconfirm from "./popconfirm";
import sPopover from "./popover";
import sModal from "./modal";
import sBadge from "./badge";
import sCol from "./col";
import sRate from "./rate";
import sSlide from "./slide";
import sButton from "./button";
import sBacktop from "./backtop";
import sUpload from "./upload";
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
import {sTable,sTableColumn} from "./table";

function install (_vue){
    _vue.component(sTable.name,sTable);
    _vue.component(sTableColumn.name,sTableColumn);
    _vue.component(sScrollbar.name,sScrollbar);
    _vue.component(sTimePicker.name,sTimePicker);
    _vue.component(sPagination.name,sPagination);
    _vue.component(sSteps.name,sSteps);
    _vue.component(sSelect.name,sSelect);
    _vue.component(sOption.name,sOption);
    _vue.component(sTabsPanel.name,sTabsPanel);
    _vue.component(sTabs.name,sTabs);
    _vue.component(sTree.name,sTree);
    _vue.component(sTreeItem.name,sTreeItem);
    _vue.component(sModelCheckbox.name,sModelCheckbox);
    _vue.component(sCascader.name,sCascader);
    _vue.component(sUpload.name,sUpload);
    _vue.component(sStepsItem.name,sStepsItem);
    _vue.component(sTag.name,sTag);
    _vue.component(sProgress.name,sProgress);
    _vue.component(sTimelineItem.name,sTimelineItem);
    _vue.component(sTimeline.name,sTimeline);
    _vue.component(sDrawer.name,sDrawer);
    _vue.component(sAside.name,sAside);
    _vue.component(sMain.name,sMain);
    _vue.component(sHeader.name,sHeader);
    _vue.component(sFooter.name,sFooter);
    _vue.component(sContainer.name,sContainer);
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
    _vue.component(sRate.name,sRate);
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
    sTable,
    sTableColumn,
    sScrollbar,
    sTimePicker,
    sPagination,
    sOption,
    sSelect,
    sTabsPanel,
    sTabs,
    sTree,
    sTreeItem,
    sModelCheckbox,
    sUpload,
    sCascader,
    sRate,
    sStepsItem,
    sSteps,
    sProgress,
    sTimeline,
    sTimelineItem,
    sCard,
    sAside,
    sHeader,
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


