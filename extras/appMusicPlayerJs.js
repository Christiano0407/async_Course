console.group("MusicPlayer"); 
// >> Variables <<< Const ================ 
const title = document.getElementById(`title`); 
const cover = document.getElementById(`cover`); 
const audio = document.getElementById(`audio`); 
const progressContainer = document.getElementById(`progress-container`); 
const progress = document.getElementById(`progress`); 

const controls = document.querySelector(`.controls`); 
const prev = document.getElementById(`prev`); 
const next = document.getElementById(`next`); 
const play = document.getElementById(`play`); 
const pause = document.getElementById(`pause`); 

const songs = document.getElementById(`songs`); 

// Song Data ==== > 
const songList = [
    {
      title: "Audio One",
      file: "audioOne.mp3", 
      cover: "1.jpg"
    }, 
    {
      title: "Alegria",
      file: "/extras/audio/audioblocks-heros-path_HV33f5QSu_WM-SBA-346470570-preview.mp3",
      cover: "2.jpg",
    },
    {
      title: "Creative World",
      file:"/extras/audio/audioblocks-in-my-heart_rkd92NBhH_WM-SBA-300416957-preview.mp3",
      cover: "3.jpg",
    },
]; 
console.log(songList); 

// ========== <<< Functions >>> ============ 
// ==== Charger Songs / Cargar canciones y mostrar el listado ===== >
loadSongs = () => {
   songList.forEach((song, index) => {
        //console.log(song) = Canciones >;
        // Crear li > 
        const li = document.createElement("li"); 
        // Crear a = link > 
        const link = document.createElement("a"); 
        // Añadir a => 
        link.textContent = song.title; 
        link.style.color = "#000"; 
        link.href = "#";
        // Index => El número de posición de cada canción > 
        link.addEventListener(`click`, () => loadSongs(index)); 
        // Añadir a li => 
        li.appendChild(link);
        // Añadir li a ul =>  
        songs.appendChild(li); 
   })
}; 
loadSongs(); 

// ==== Cargar Canciones seleccionadas ========== >

console.groupEnd(); 