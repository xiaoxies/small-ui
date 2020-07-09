
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
        year,month,months,day,days,week,hour,hours,minute,minutes,sencond,senconds,time,date
    }
}

let num=1000;
function getZIndex(){
    return num++;
}

//图片文件压缩
function compileImage(file){
    let name=file.name;
    let type=file.type;
    return new Promise((resolve, reject)=>{
        var reader = new FileReader();
        reader.readAsDataURL(file);
        var img = document.createElement('img');
        reader.onload = function (e) {
               let quality = 0.8; //图像质量
               let canvas = document.createElement("canvas");
               let drawer = canvas.getContext("2d");

            img.src=e.target.result;
            img.onload=function(){
                canvas.width = img.width;
                canvas.height = img.height;
                drawer.fillStyle = "#fff";
                drawer.fillRect(0, 0, canvas.width, canvas.height);
                drawer.drawImage(img, 0, 0, canvas.width, canvas.height);
                let imageData = drawer.getImageData(0, 0, canvas.width, canvas.height); //将背景颜色从黑色转换为白色
                for(var i = 0; i < imageData.data.length; i += 4) {
                    // 当该像素是透明的，则设置成白色
                    if(imageData.data[i + 3] == 0) {
                        imageData.data[i] = 255;
                        imageData.data[i + 1] = 255;
                        imageData.data[i + 2] = 255;
                        imageData.data[i + 3] = 255;
                    }
                }
                drawer.putImageData(imageData, 0, 0);

                const base64 = canvas.toDataURL('image/jpeg', 0.75);
                var arr = base64.split(',');
                let mime = arr[0].match(/:(.*?);/)[1];
                let bstr = atob(arr[1]);
                let n = bstr.length;
                let u8arr = new Uint8Array(n);
                while(n--){
                    u8arr[n] = bstr.charCodeAt(n);
                }
                resolve({
                    base64,
                    file:new File([u8arr], name, {type:type}),
                    name,
                    type
                });
            }

        }
    })

}

//获取文件的base64
function noCompile(file){
    let name=file.name;
    let type=file.type;
    return new Promise((resolve, reject)=>{
        var reader = new FileReader();
        reader.readAsDataURL(file);
        var img = document.createElement('img');
        reader.onload = function (e) {
            resolve({
                base64:e.target.result,
                file:new File([u8arr], name, {type:type}),
                name,
                type
            });

        }
    })

}

export {
    getZIndex,
    getDate,
    getDayTime,
    compileImage,
    noCompile
}
