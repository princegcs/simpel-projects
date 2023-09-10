const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");
const ampm = document.getElementById("ampm");

function updateClock(){
    let hr = new Date().getHours();
    let min = new Date().getMinutes();
    let sec = new Date().getSeconds();
    let am_pm = "AM"

    if( hr > 12){
        hr = hr - 12;
        am_pm = "PM";
    }

    if( hr < 10){
        hr = "0" + hr;
    }
    if( min < 10){
        min = "0" + min;
    }
    if( sec < 10){
        sec  = "0" + sec;
    }

    hour.innerText = hr;
    minute.innerText = min;
    second.innerText = sec;
    ampm.innerText = am_pm;

    setInterval(updateClock , 1000);
}

updateClock();