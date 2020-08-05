export default {
    name:"sTableColumn",
    componentName:"sTableColumn",
    props:{
        label:String,
        prop:String,
        width:String,
        fixed:String,
        align:{type:String,default:"left"}
    },
    inject:["sTable"],
    created(){
        if(this.sTable){
            if(this.sTable.columns.indexOf(this)==-1){
                if(this.fixed){
                    switch(this.fixed){
                        case 'left':
                            this.sTable.fixedLeft.push(this);
                            break;
                        case 'right':
                            this.sTable.fixedRight.push(this);
                            break;
                        default:
                            this.sTable.fixedRight.push(this);
                    }
                }else{
                    this.sTable.columns.push(this);
                }

            }
        }
    },
    render(h){
        return null;
    }
}
