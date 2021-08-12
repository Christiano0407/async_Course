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
        songName: "Light of the Night",
    },
    {
        path: "audioblocks-in-my-heart_rkd92NBhH_WM-SBA-300416957-preview.mp3",
        songName: "Light of the Night",
    },   
]
console.log(songList); 

console.groupEnd(); 