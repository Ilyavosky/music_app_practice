import createPlaylist from "./utils/playlist.js";
import audioController from "./domain/audio_controller.js";



let play_btn = document.getElementById("play");
const song_img = document.getElementById("song-img");
const lastest = document.getElementById("lastest");
const forward = document.getElementById("forward")

const songs = [
        {
            song_name : "Last Shot",
            artist_name: "Valorant",
            song_url: "./media/Last Shot.mp3",
            caratula: "https://picsum.photos/200"
        },
        {
            song_name : "Hell of Life",
            artist_name: "Kanye West",
            song_url: "./media/song_2.mp3",
            caratula: "https://picsum.photos/200"
        },
        {
            song_name : "So be It",
            artist_name: "",
            song_url: "./media/song_3.mp3",
            caratula: "https://picsum.photos/200"
        },
    ];

const last = [];

const playlist = createPlaylist(songs.length);

window.addEventListener('DOMContentLoaded', () => {
    audioController.initializePlayer(createPlaylist(songs, null));
    console.log(audioController._nextSongs);
    console.log(audioController._actualSong);
    loadSong(audioController._actualSong);
})

function loadSong(i){
   


    media.src = now.song_url;
    title.innerText = now.song_name;
    artist.innerText = now.artist_name;
    song_img.src = now.caratula;
}





lastest.addEventListener('click', function(){
    if(!last.length == 0){
        playlist.push(playingNow);
        playingNow = last.pop();
        loadSong(playingNow)
    }
});
forward.addEventListener('click', function(){
    if(!playlist.length == 0){
        last.push(playingNow);
        playingNow = playlist.pop();
        loadSong(playingNow)
    }
});



play_btn.addEventListener("click", playPause);

function playPause(){
    if(play_btn.classList.contains("pause")){
        media.pause();
        play_btn.classList.remove("pause");
        play_btn.classList.add("play");
        play_btn.innerText = "Play"
    }else{
        media.play();
        play_btn.classList.remove("play");
        play_btn.classList.add("pause");
        play_btn.innerText = "Pause";
    }
}

