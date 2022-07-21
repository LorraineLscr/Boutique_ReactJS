/* import React from "react";
import MediaPlayerContext from "../../MediaPlayerContext";

const data = React.useContext(MediaPlayerContext);

const play = () => {
    audio.play()
    document.querySelector(".playPause img").src = "./assets/img/buttons/pause-solid.svg";
}
const pause = () => {
    audio.pause()
    document.querySelector(".playPause img").src = "./assets/img/buttons/play-solid.svg";
}

const audioManager = () => {
    playPause.addEventListener("click", () => {
        if (audio.paused) {
            play();
        } else {
            pause();
        }
    })
    // bouton next
    next.addEventListener("click", ()=>{
        pause(); 
        console.log(currentTrack);
        audio = new Audio(playlist[currentTrack].mp3);
        play(); 
    })
    // bouton prev
    prev.addEventListener("click", ()=>{
        pause(); 
        console.log(currentTrack);
        audio = new Audio(playlist[currentTrack].mp3);
        play(); 
    })
    hammerSlider.get('swipe').set({ direction: Hammer.DIRECTION_HORIZONTAL });
    hammerSlider.on("swipeleft swiperight", function (ev) {
        if(ev.type === "swiperight"){
            pause(); 
            console.log(currentTrack);
            audio = new Audio(playlist[currentTrack].mp3);
            play(); 
            infosManager(); 
    }
    if(ev.type === "swipeleft"){
        pause(); 
        console.log(currentTrack);
        audio = new Audio(playlist[currentTrack].mp3);
        play(); 
        infosManager(); 
    }})
}


export {
    play,
    pause,
    audioManager
}
 */