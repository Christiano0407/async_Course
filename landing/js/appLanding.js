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


console.groupEnd(); 