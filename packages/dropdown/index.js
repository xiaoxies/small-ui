import sDropdown from "./components/dropdown";
import sDropdownMenu from "./components/dropdown-menu";
import sDropdownItem from "./components/dropdown-item";


sDropdown.install=function(Vue){
    Vue.component(sDropdown.name, sDropdown)
}
sDropdownMenu.install=function(Vue){
    Vue.component(sDropdownMenu.name, sDropdownMenu)
}
sDropdownItem.install=function(Vue){
    Vue.component(sDropdownItem.name, sDropdownItem)
}

export {
    sDropdown,
    sDropdownMenu,
    sDropdownItem
}
