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

function change_main_header_visibility() {
    is_main_header_visible = !is_main_header_visible;
    let main_header = document.getElementById("main-header");
    let button_icon = document.getElementById("hide-show-icon");
    
    main_header.classList.remove("showed", "hidden");
    main_header.classList.toggle(is_main_header_visible ? "showed" : "hidden");
    button_icon.classList.remove("fa-angles-up", "fa-angles-down");
    button_icon.classList.toggle(is_main_header_visible ? "fa-angles-up" : "fa-angles-down");
}