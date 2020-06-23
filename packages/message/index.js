import Message from "./components/message";
import {getZIndex} from "../utils/common";
import Vue from "vue";

const messageController = Vue.extend(Message);
let uid=1;
let messageList=[];
const sMessage = (options)=>{
    let id = 'message-' + uid++;
    let userOnClose = options.onClose;
    let top=20;
    options=options||{};
    if (typeof options === 'string') {
        options = {
            message: options
        };
    }
    options.onClose = function() {
        sMessage.close(id, userOnClose);
    };
    const MessageInstance = new messageController({
        data:options
    })
    MessageInstance.id = id;
    MessageInstance.$mount(); // 挂载但是并未插入dom，
    document.body.appendChild(MessageInstance.$el);
    messageList.forEach((item)=>{
        top+=item.$el.offsetHeight+20;
    })
    MessageInstance.visible=true;
    MessageInstance.$el.style.zIndex=getZIndex();
    MessageInstance.top=top
    messageList.push(MessageInstance);
    return MessageInstance
}
['primary','success', 'warning', 'info', 'danger'].forEach(type => {
    sMessage[type] = options => {
        if (typeof options === 'string') {
            options = {
                message: options
            };
        }
        options.type = type;
        return sMessage(options);
    };
});

sMessage.close=function(id,useCloseFn){
    let len=messageList.length;
    let removedHeight;
    let index=-1;
    for (let i = 0; i < len; i++) {
        if (id === messageList[i].id) {
            removedHeight = messageList[i].$el.offsetHeight;
            index = i;
            if (typeof useCloseFn === 'function') {
                useCloseFn(messageList[i]);
            }
            messageList.splice(i, 1);
            break;
        }
    }
    if (len <= 1 || index === -1 || index > messageList.length - 1) return;
    for (let i = index; i < len - 1 ; i++) {
        let dom = messageList[i].$el;
        dom.style['top'] =
            parseInt(dom.style['top'], 10) - removedHeight - 20 + 'px';
    }
}


sMessage.closeAll=function(){
    for (let i =0;i<messageList.length;i++) {
        messageList[i].close();
    }
}

export default sMessage;
