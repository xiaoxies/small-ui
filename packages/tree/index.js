import sTree from "./components/tree";
import sTreeItem from "./components/tree-item";


sTree.install=function(Vue){
    Vue.component(sTree.name,sTree)
}
sTreeItem.install=function(Vue){
    Vue.component(sTreeItem.name,sTreeItem)
}

export {
    sTree,
    sTreeItem
};
