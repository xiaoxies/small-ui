import sTimelineItem from "./components/timeline-item";
import sTimeline from "./components/timeline";

sTimeline.install=function(Vue){
    Vue.component(sTimeline.name,sTimeline);
}
sTimelineItem.install=function(Vue){
    Vue.component(sTimelineItem.name,sTimelineItem);
}

export {
    sTimelineItem,
    sTimeline
};
