import messageBox from "./components/message-box";
import {getZIndex} from "../utils/common";
import Vue from "vue";

const messageBoxController = Vue.extend(messageBox);
let uid=1;

const sMessageBox = (options)=>{
    let id="message-box-"+uid++;
    let userSuccess = options.success||function(){};
    let userCancel = options.cancel||function(){};
    delete options.success;
    delete options.cancel;
    const MessageBoxInstance = new messageBoxController({
        data:options,
        methods:{
            success:userSuccess,
            cancel:userCancel
        }
    })
    MessageBoxInstance.id = id;
    MessageBoxInstance.$mount(); // 挂载但是并未插入dom，
    document.body.appendChild(MessageBoxInstance.$el);
    MessageBoxInstance.show=true;
    MessageBoxInstance.$el.style.zIndex=getZIndex();
}

sMessageBox.alert=(options)=>{
    return new sMessageBox(options);
}
sMessageBox.confirm=(options)=>{
    options.confirm=true;
    options.prompt=false;
    return new sMessageBox(options);
}
sMessageBox.prompt=(options)=>{
    options.confirm=false;
    options.prompt=true;
    return new sMessageBox(options);
}

export default sMessageBox;
