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

    if (distance > 0){
        day.innerHTML = dday +" ngày"
        hour.innerHTML = dhour +" giờ"
        minute.innerHTML = dminute +" phút"
        second.innerHTML =dsecond +" giây"
    }
    else{
        day.innerHTML = "Sự"
        hour.innerHTML = " kiện"
        minute.innerHTML = " đã"
        second.innerHTML = "qua"
    }

}
setInterval(timer, 1000)

let is_main_header_visible = true;
let initial_display = document.getElementById("main-header").style.display;

function change_main_header_visibility() {
    is_main_header_visible = !is_main_header_visible;
    
    // document.getElementById("main-header").style.display = is_main_header_visible ? initial_display : "none";

    document.getElementById("main-header").classList.remove("showed", "hidden");
    document.getElementById("main-header").classList.toggle(is_main_header_visible ? "showed" : "hidden");
    document.getElementById("hide-show-button").innerHTML = is_main_header_visible ? "↑" : "↓";
}