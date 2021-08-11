console.group("CarouselTwo"); 
// ============== Variables ===================================== >
let images = [...document.querySelectorAll(`.img`)]; 
console.log(images); 

let slider = document.querySelector(`.slider`); 
let innerSlider = document.querySelector(`.slider-inner`); 
let pressed = false; 
let startX; 
let X; 


// ===================== Eventos and functions ============================ >
images.forEach((img, idx) => {
   img.style.backgroundImage = `url(/carouselOne/images/${idx+1}.jpg)`; 
}); 

slider.addEventListener(`mousedown`, (e) => {
   pressed = true; 
   startX = e.offsetX - innerSlider.offsetLeft; 
   //console.log(innerSlider.offsetLeft); 
   slider.style.cursor = "grabbing"; 
}); 

slider.addEventListener(`mouseenter`, () => {
    slider.style.cursor = "grab"; 
})




console.groupEnd(); 