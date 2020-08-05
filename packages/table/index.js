import sTable from "./components/table";
import sTableColumn from "./components/table-column.js";

sTable.install=function(Vue){
    Vue.component(sTable.name,sTable);
}
sTableColumn.install=function(Vue){
    Vue.component(sTableColumn.name,sTableColumn);
}

export {
    sTable,
    sTableColumn,
};
