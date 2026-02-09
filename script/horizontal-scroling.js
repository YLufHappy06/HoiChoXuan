window.addEventListener("wheel", (event) =>{
    event.preventDefault();
    
    window.scrollBy({
        left: event.deltaY,
        behavior:"smooth"
    });
}, {passive:false});
