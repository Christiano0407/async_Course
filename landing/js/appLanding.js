console.group("Menú / Nav"); 
// < ==== VARIABLES ==== > 
let menuTog = document.querySelector(`.menu-toggle`); 
let nav = document.querySelector(`.nav`); 
let navLeft = document.querySelector(`.nav-left`); 
let navRight = document.querySelector(`.nav-right`); 
let navLinks = Array.from(document.querySelectorAll(`.nav-link`)); 
let contact = document.querySelector(`.contact`); 


menuTog.addEventListener(`click`, () => {
    console.log("MenuToggle"); 
     // Menu => 
    menuTog.classList.toggle(`active`); 
    // Nav => 
    nav.classList.toggle(`active`); 
    // Nav Left => 
    navLeft.classList.toggle(`active`); 
    // Nav Right => 
    navRight.classList.toggle(`active`); 
    // Nav Links => 
    
    // contact => 

    // <<<<< ===== Remove Active Class to restart effects ===== >>>>
    contact.classList.remove(`active`); 
    navRight.classList.remove(`active`); 

    // >>>>>> Conditionals <<<<<< ========== > 
    if(menuTog.classList.contains(`active`)) {
        setTimeout(() => {
            navRight.classList.add(`active`); 
        }, 100); 

        for(let i = 0; i < navLinks.length; i ++) {
            navLinks[i].classList.remove(`active`); 

            setTimeout(() => {
            navLinks[i].classList.add(`active`); 
            }, i * 100); 
        }

        setTimeout(() => {
            contact.classList.add(`active`); 
        }, 700); 
    }
}); 

// Carousel ============== > 
let sliderWrap = document.querySelector(`.slider-wrap`); 
let slider = document.querySelector(`.slider`); 
let clonesWidth; 
let sliderWidth; 
let clones = []; 
let disableScroll = false; 
let scrollPos; 

let items = [...document.querySelectorAll(`.slider-item`)]; 
let images = [...document.querySelectorAll(`.img-div`)]; 
// >>>>>>>>> Llamar a las imágenes >>>>>>>>>>
images.forEach((image, idx) => {
    image.style.backgroundImage = `url(/landing/assets/image/${idx+1}.jpg)`; 
} ); 
// <<< Clonar y agregar la imagen / Array >>>>
items.forEach(item => {
    let clone = item.cloneNode(true); 
    clone.classList.add(`clone`); 
    slider.appendChild(clone); 
    clones.push(clone); 
}); 
// === Sumar el el ancho del slider a imagen >>>
getClonesWith = () => {
    let width = 0; 

    clones.forEach(clone => {
        width += clone.offsetWidth; 
    })
    return width; 
}

console.groupEnd(); 
// ========== Scroll Y >>>>>>>>>>
/* function getScrollPost() { */
/*     return window.scrollY;  */
/* } */
/*  */
/* function scrollUpdate() { */
/*     scroll = getScrollPost();  */
/*  */
/*     if(clonesWidth + scrollPos >= sliderWidth) { */
/*         window.scrollTo({top: 1});  */
/*     }else if(scrollPos <= 0) { */
/*          window.scrollTo({top: sliderWidth - clonesWidth - 1}) */
/*     }else { */
/*           console.log("Sorry");  */
/*     } */
/*  */
/*     slider.style.transform = `translateX(${-window.scrollY}px)`;  */
/*  */
/*     requestAnimationFrame(scrollUpdate);  */
/* } */
/*  */
/* onLoad = () => { */
/*     calculateDimension();  */
/*  */
/*     document.body.style.height = `${sliderWidth}px`;  */
/*  */
/*     window.scrollTo({top: 1});  */
/*     scrollUpdate();  */
/* } */
/*  */
/* calculateDimension = () => { */
/*     sliderWidth = slider.getBoundingClientRect().width;  */
/*  */
/*     clonesWidth = getClonesWith();  */
/* } */
/*  */
/* onLoad();  */