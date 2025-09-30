import getRandom from "./utils.js"

export default function createPlaylist(data,actual_playlist){

    let playlist = [];

    if(actual_playlist !== null){
        playlist = actual_playlist;
    }

    console.log(data);

    if(data.length !== 0){


        let index_song = getRandom(data.length);
        let song = data[index_song];


        playlist.push(data[index_song]);
        data.splice(index_song, 1);

         console.log(playlist);

        return createPlaylist(data, playlist);

    }

    return playlist;
}