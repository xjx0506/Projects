function showTime(){
    let date =  new Date();
    let hrs = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    // convert between am and pm
    let format = convertFormat(hrs);

    hrs = checkTime(hrs);

    hrs = addZero(hrs);
    min = addZero(min);
    sec = addZero(sec);
    document.getElementById('clock').innerHTML = `${hrs} : ${min} : ${sec} ${format}`;

}
function addZero(time){
    if(time < 10){
        time = "0" + time;
    }
    return time;
}
function convertFormat(time){
    let format = 'AM';
    if(time >= 12){
        format = 'PM';
    }
    return format;
}

function checkTime(time){
    if(time > 12){
        time= time - 12;
    }

    if(time === 0){
        time = 12;
    }
    return time;
}

showTime();
setInterval(showTime, 1000);