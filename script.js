let target_time = new Date("Febuary 11 2026 17:45:00").getTime();

let day = document.getElementById("days");
let hour = document.getElementById("hours");
let minute = document.getElementById("minutes");
let second = document.getElementById("seconds");

function timer(){
    let current_time = new Date().getTime();
    let distance = target_time - current_time;

    let dday = Math.floor(distance/1000/60/60/24);
    let dhour = Math.floor(distance/1000/60/60) %24;
    let dminute = Math.floor(distance/1000/60) % 60;
    let dsecond = Math.floor(distance/1000) % 60;

    
    day.innerHTML = dday
    hour.innerHTML = dhour
    minute.innerHTML = dminute
    second.innerHTML =dsecond
}

setInterval(timer, 1000)