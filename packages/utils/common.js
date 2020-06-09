
//将时间转换为 yyyt-mm-dd正常的格式
function getDate(time=new Date(),format){
    let date=new Date(time);
    let year = date.getFullYear();
    let month = date.getMonth()+1;
    let months = ('0' + (date.getMonth() + 1)).substr(-2);
    let day = date.getDate();
    let days = ('0' + date.getDate()).substr(-2);
    let week = date.getDay();
    let hour = date.getHours();
    let hours = ('0' + date.getHours()).substr(-2);
    let minute = date.getMinutes();
    let minutes = ('0' + date.getMinutes()).substr(-2);
    let sencond = date.getSeconds();
    let senconds = ('0' + date.getSeconds()).substr(-2);
    return format
        .replace('yyyy',year)
        .replace('mm',months)
        .replace('dd',days)
        .replace('hh',hours)
        .replace('ii',minutes)
        .replace('ss',senconds)
        .replace('w',week)
        .replace('d',day)
        .replace('m',month)
        .replace('h',hour)
        .replace('i',minute)
        .replace('s',sencond)

}


//将时间的所有年月份都返回出去
function getDayTime(times=new Date()){
    let date=new Date(times);
    let year = date.getFullYear();
    let month = date.getMonth()+1;
    let months = ('0' + (date.getMonth() + 1)).substr(-2);
    let day = date.getDate();
    let days = ('0' + date.getDate()).substr(-2);
    let week = date.getDay();
    let hour = date.getHours();
    let hours = ('0' + date.getHours()).substr(-2);
    let minute = date.getMinutes();
    let minutes = ('0' + date.getMinutes()).substr(-2);
    let sencond = date.getSeconds();
    let senconds = ('0' + date.getSeconds()).substr(-2);
    let time = date.getTime();
    return {
        year,month,months,day,days,week,hour,hours,minute,minutes,sencond,senconds,time
    }
}




export {
    getDate,
    getDayTime
}