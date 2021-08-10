console.group("MusicPlayer"); 
// >> Variables <<< Const ================ 
const title = document.getElementById(`title`); 
console.log(title); 
const cover = document.getElementById(`cover`); 
console.log(cover); 
const audio = document.getElementById(`audio`); 
console.log(audio); 
const progressContainer = document.getElementById(`progress-container`); 
const progress = document.getElementById(`progress`); 
console.log(progress); 

const controls = document.querySelector(`.controls`); 
const prev = document.getElementById(`prev`); 
const next = document.getElementById(`next`); 
const play = document.getElementById(`play`); 
const pause = document.getElementById(`pause`); 

const songs = document.getElementById(`songs`); 

// Song Data ==== > 
const songList = [
    {
      title: "Dream of my Life",
      file: "audioOne.mp3", 
      cover: "1.jpg"
    }, 
    {
      title: "One future space on my life",
      file: "audioblocks-heros-path_HV33f5QSu_WM-SBA-346470570-preview.mp3",
      cover: "2.jpg",
    },
    {
      title: "Creative World",
      file:"audioblocks-in-my-heart_rkd92NBhH_WM-SBA-300416957-preview.mp3",
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
        link.addEventListener(`click`, () => loadSong(index)); 
        // Añadir a li => 
        li.appendChild(link);
        // Añadir li a ul =>  
        songs.appendChild(li); 
   })
}; 
loadSongs(); 

// === Canción actual === Nullo = No hay ======================= > 
let actualSong = null; 

// ==== Cargar Canciones seleccionadas ========================  >
loadSong = (songIndex) => {
  //console.log(songIndex); 
  // ==== Condicional ===== > No se vuelva a activar la canción => Si no lo he pedido ===
  if(songIndex !== actualSong) {
    // = Change Active Class = >
    changeActiveClass(actualSong, songIndex); 
     // = No existe antes de activar una canción ==> 
     actualSong = songIndex;
     console.log(actualSong);
     // === Audio === Llamar >>>
     audio.src = "./audio/" + songList[songIndex].file;
     
     // >> Invocar las funciones al cargar << 
     changeCover(songIndex); 
     changeSong(songIndex); 
  }
}

// === Progress Container ======================================================= >


// === Progress ============================================================== >

// === Play =============== >
play.addEventListener("click", () => {
  console.log("Play"); 

  allPLay = () => {
    if(actualSong !== null) {
      audio.play(); 
   }
  }
  allPLay(); 
}); 
// === Paused ================ > 
pause.addEventListener("click", () => {
   console.log("Paused"); 

  allPause = () => {
    if(audio.paused) {
      audio.play(); 
   }else {
     audio.pause(); 
   }
  }
  allPause(); 
}); 
// ========== PREVIOUS Btn =========== > 
prev.addEventListener("click", () => {
  prevSong = () => {
    if(actualSong > 0) {
      loadSong(actualSong - 1)
    }else {
      loadSong(songList.length - 1)
    }
 }
 prevSong()
}); 

// ========= AFTER Btn ============== > 
next.addEventListener("click", () => {
  nextSong = () => {
    if(actualSong < songList.length - 1) {
       loadSong(actualSong + 1); 
    }else {
       loadSong(0); 
    }
  }
  nextSong(); 
}); 
// < ===== Change active Class / Cambiar clase activa ============== >
changeActiveClass = (lastIndex, newIndex) => {

  const links = document.querySelectorAll(`a`); 
  console.log(links);

  if(lastIndex !== null) {
    links[lastIndex].classList.remove("active"); 
  }
  links[newIndex].classList.add("active");
}

// === Change Song // Cambiar la imagen de la canción =========== > 
changeCover = (songIndex) => {
   // === Imágenes se activan con la música === >
   cover.src = "./img/" + songList[songIndex].cover; 
}

// == Change title of the song / Cambiar el título de la canción ============ > 
changeSong = (songIndex) => {
  // === Agregar el título de la canción === >
  title.innerText = songList[songIndex].title; 
}

// == GO !!! ==
loadSong(); 
console.groupEnd(); 