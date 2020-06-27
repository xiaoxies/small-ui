import Notify from "./components/notify";
import {getZIndex} from "../utils/common";
import Vue from "vue";
import sMessage from "../message";


const NotifyController = Vue.extend(Notify);
let uid=1;
let notifyList=[];

const sNotify = (options)=>{
    let id="notify-"+ uid++;
    let top=20;
    options.onClose = function() {
        sNotify.onClose(id);
    };
    const NotifyInstance = new NotifyController({
        data:options
    });
    NotifyInstance.id=id;
    NotifyInstance.$mount();
    document.body.appendChild(NotifyInstance.$el);
    notifyList.forEach((item)=>{
        top+=item.$el.offsetHeight+20;
    })
    NotifyInstance.visible=true;
    NotifyInstance.$el.style.zIndex=getZIndex();
    NotifyInstance.top=top
    notifyList.push(NotifyInstance);
    return NotifyInstance;
}

sNotify.onClose=function(id){
    let len=notifyList.length;
    let removedHeight;
    let index=-1;
    for (let i = 0; i < len; i++) {
        if (id === notifyList[i].id) {
            removedHeight = notifyList[i].$el.offsetHeight;
            index = i;
            notifyList.splice(i, 1);
            break;
        }
    }
    if (len <= 1 || index === -1 || index > notifyList.length - 1) return;
    for (let i = index; i < len - 1 ; i++) {
        let dom = notifyList[i].$el;
        dom.style['top'] =
            parseInt(dom.style['top'], 10) - removedHeight - 20 + 'px';
    }
}


sNotify.closeAll=function(){
    for (let i =0;i<notifyList.length;i++) {
        notifyList[i].close();
    }
}

export default sNotify;

