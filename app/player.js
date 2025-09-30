import audioController from "../domain/audio_controller";

const player ={
    _last: document.getElementById("last"),
    _forward: document.getElementById("forward"),
    _play : document.getElementById("play"),
    _controller: audioController,
    initializePlayer(){
        this._last.addEventListener('click', this._controller._nextSong);
        this._next.addEventListener('click', this._controller.nextSong);
        this._play.addEventListener('click', )

    }
}