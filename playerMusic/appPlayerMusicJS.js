console.group("Music Player Neomorfismo"); 
//) > ================ Variables =================== <
const audio = document.getElementById(`audio`); 
const playPause = document.getElementById(`play`); 

//) > ================ Funciones y eventos =================== <
playPause.addEventListener(`click`, () => {

    if(audio.paused || audio.ended) {
       playPause.querySelector(`.pause-btn`).classList.toggle(`hide`); 
       playPause.querySelector(`.play-btn`).classList.toggle(`hide`); 
       audio.play();

    }else {
       audio.pause(); 
       playPause.querySelector(`.pause-btn`).classList.toggle(`hide`); 
       playPause.querySelector(`.play-btn`).classList.toggle(`hide`); 
    }
}); 

//) > ================ Ejecutar =================== <
console.log(audio); 
console.log(playPause); 

console.groupEnd(); 