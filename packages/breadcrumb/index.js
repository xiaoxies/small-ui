import sBreadcrumbItem  from "./components/breadcrumb-item";
import sBreadcrumb from "./components/breadcrumb";

sBreadcrumbItem.install=function(Vue){
    Vue.component(sBreadcrumbItem.name, sBreadcrumbItem)
}
sBreadcrumb.install=function(Vue){
    Vue.component(sBreadcrumb.name, sBreadcrumb)
}

export {
    sBreadcrumbItem,
    sBreadcrumb
};
