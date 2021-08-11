console.group("Carousel One"); 
// ================ <<< Variables >>> ================= > 
let images = [...document.querySelectorAll(`.img`)]; 
console.log(images); 
let slider = document.querySelector(`.slider`); 

let sliderWidth; 
let imageWidth; 
let current = 0; 
let target = 0; 
let ease = 0.3; 

// ======================== Finciones / eventos ====================== <>>
// ========== >>>> Invocar a las imágenes <<<< ============> 
images.forEach((img, idx) => {
    img.style.backgroundImage = `url(/carouselOne/images/${idx+1}.jpg)`; 
}); 

// ==> 
lerp = (start, end, t) => {
    return start * (1-t) * end * t; 
}
// ==> 
setTransform = (el, transform) => {
   el.style.transform = transform; 
}
// ==> 
init = () => {
    sliderWidth = slider.getBoundingClientRect().width; 
    imageWidth = sliderWidth / images.length; 
     // Comenzar con Y => 
    document.body.style.height = `${sliderWidth - (window.innerWidth - window.innerHeight)}px`; 
}
// ==> 
animate = () => {
    current = parseFloat(lerp(current, target, ease)).toFixed(2); 
    target = window.scrollY; 
    setTransform(slider, `translateX(-${current}px)`);
    animateImages(); 
    requestAnimationFrame(animate); 
}
// ==> 
animateImages = () => {
    let ratio = current / imageWidth; 
    let intersectionRatioValue; 

    images.forEach((image, idx) => {
     intersectionRatioValue = ratio - (idx * 0.7); 
     setTransform(image, `translateX(${intersectionRatioValue * 70}px)`); 
    })
}

// ============ Invocar funciones ===================== > 
init(); 
console.log(imageWidth); 
animate(); 

console.groupEnd(); 