console.group("Variante Music Player"); 
// ================= Variables =========================== > 
const audio = document.getElementById(`audio`); 
console.log(audio); 
const title = document.getElementById(`title`); 
const prev = document.querySelector(`.prev`); 
const play = document.querySelector(`.play`); 
const next = document.querySelector(`.next`); 

// ============================= Events / Function ================= > 
const songList = [
    {
      path: "audioOne.mp3",
      songName: "Dreams on Night",
    }, 
    {
        path: "audioblocks-heros-path_HV33f5QSu_WM-SBA-346470570-preview.mp3",
        songName: "Following The Sun",
    },
    {
        path: "audioblocks-in-my-heart_rkd92NBhH_WM-SBA-300416957-preview.mp3",
        songName: "I feel love",
    },
    {
        path: "audioblocks-heros-path_HV33f5QSu_WM-SBA-346470570-preview.mp3",
        songName: "Night and Sun",
    }, 
    {
        path: "audioOne.mp3",
        songName: "Remember your Madness",
    },
    {
        path: "audioblocks-in-my-heart_rkd92NBhH_WM-SBA-300416957-preview.mp3",
        songName: "Light of the Night",
    },   
]; 
console.log(songList); 
/*  */
/* let song_Playing = false;  */
/*  */
/* playSong = () => { */
/*     song_Playing = true;  */
/*     audio.play();  */
/* };  */
/*  */
/* pauseSong = () => { */
/*     song_Playing = false;  */
/*     audio.pause(); */
/* };  */
/*  */
/* play.addEventListener(`click`, () => ( */
/*     song_Playing ? pauseSong() : playSong() */
/* ));  */
/* // === Load Song >  */
/* loadSong = (songList) => { */
/*     title.textContent = songList.songName;  */
/*     audio.src = songList.path;  */
/* };  */
/* // == Current Song;  */
/* let i = 0;  */
/*  */
/* // On load = select first song from song list */
/* loadSong(songList[i]);  */
/*  */

console.groupEnd(); 