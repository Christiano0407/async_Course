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
// =========== Obtener Imágenes =========== >>
images.forEach((img, idx) => {
   img.style.backgroundImage = `url(/carouselOne/images/${idx+1}.jpg)`; 
}); 
// =============== Slider y manita =============== >
slider.addEventListener(`mousedown`, (e) => {
   pressed = true; 
   startX = e.offsetX - innerSlider.offsetLeft; 
   //console.log(innerSlider.offsetLeft); 
   slider.style.cursor = "grabbing"; 
}); 

slider.addEventListener(`mouseenter`, () => {
    slider.style.cursor = "grab"; 
}); 

/* slider.addEventListener(`mouseleave`, () => { */
/*     slider.style.cursor = "default";  */
/* }); */

slider.addEventListener(`mouseup`, () => {
    slider.style.cursor = "grab";  
}); 
slider.addEventListener(`mouseup`, () => {
    pressed = false; 
}); 

// === Ejecutar el scroll === >
slider.addEventListener(`mousemove`, (e) => {
     if(!pressed)return; 
     e.preventDefault(); 

     x = e.offsetX; 

     innerSlider.style.left = `${x - startX}px`; 

     checkbounddary(); 
}); 

// ===== Scroll con parámetros un stop a las imágenes =========================== > 

checkbounddary = () => {
  let outer = slider.getBoundingClientRect(); 
  let inner = innerSlider.getBoundingClientRect(); 
 
  if(parseInt(innerSlider.style.left) > 0) {
      innerSlider.style.left = `0px`; 
  }else if(inner.right < outer.right) {
    innerSlider.style.left = ` -${inner.width - outer.width}px`; 
  }
}; 

//checkbounddary(); 

console.groupEnd(); 