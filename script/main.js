// TIMER

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

// SETTINGS

let settings = document.getElementById("settings-container");
let is_settings_open = false;

document.addEventListener('keydown', function(event) {
    if (event.key == "Escape" && is_settings_open){
        close_settings()
    }
});

function open_settings() {
    settings.classList.toggle("open");
    is_settings_open = true;
}

function close_settings() {
    settings.classList.toggle("open");
    is_settings_open = false;
}

let is_main_header_visible = true;
let hover_animation = false;
let scroll_animation = false;
let bg_video_play = false;

function reload_settings(){
    var iframe = document.getElementById("content");
    var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
    var body = iframeDocument.getElementById('body');

    if (hover_animation){
        body.classList.add("hover-animation");
    }
    if (scroll_animation){
        body.classList.add("scroll-animation");
    }}

setInterval(reload_settings, 1000)

function change_main_header_visibility() {
    is_main_header_visible = !is_main_header_visible;
    let main_header = document.getElementById("main-header");
    // let button_icon = document.getElementById("hide-show-icon");
    
    main_header.classList.remove("showed", "hidden");
    main_header.classList.toggle(is_main_header_visible ? "showed" : "hidden");
    // button_icon.classList.remove("fa-angles-up", "fa-angles-down");
    // button_icon.classList.toggle(is_main_header_visible ? "fa-angles-up" : "fa-angles-down");
}



function toggle_hover_animation() {
    var iframe = document.getElementById("content");
    var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
    var body = iframeDocument.getElementById('body');   
    body.classList.toggle("hover-animation");
    hover_animation = !hover_animation;
}

function toggle_scroll_animation() {
    var iframe = document.getElementById("content");
    var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
    var body = iframeDocument.getElementById('body');
    body.classList.toggle("scroll-animation");
    scroll_animation = !scroll_animation;
}

function toggle_background_video() {
    var bgvideo= document.getElementById("background-video");
    bgvideo.classList.toggle("off");
    bg_video_play =! bg_video_play;
        
}