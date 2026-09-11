/*clock*/
function displayTime(){
    var dateTime = new Date();
    var hrs = dateTime.getHours();
    var min = dateTime.getMinutes();
    var sec = dateTime.getSeconds();
    const weekday = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

    const d = new Date();
    let day = weekday[d.getDay()];

    document.getElementById('hours').innerHTML = hrs.toString().padStart(2, '0');;
    document.getElementById('minutes').innerHTML = min.toString().padStart(2, '0');;
    document.getElementById('seconds').innerHTML = sec.toString().padStart(2, '0');;
    document.getElementById('weekday').innerHTML = day;
}
setInterval(displayTime, 10);
/*clock*/
