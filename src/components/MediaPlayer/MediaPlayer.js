import React from "react";
import { playlist } from "./lib/playlist.js";
import { slider } from "./lib/slider.js";
/* import { play, pause, audioManager } from "./lib/audioManager.js"; */
import { volumeManager } from "./lib/volumeManager.js";
import { timeManager } from "./lib/timeManager.js";
import { infosManager } from "./lib/infosManager.js";
import MediaPlayerContext from "../../MediaPlayerContext.js";
import Hammer from "hammerjs";

import "./MediaPlayer.css";


class MediaPlayer extends React.Component {
    constructor(props) {
        super(props)
        this.slider = slider;
        this.audioManager = this.audioManager;
        this.volumeManager = volumeManager;
        this.timeManager = timeManager;
        this.infosManager = infosManager;
        this.state = {
            currentTrack: 0,
            next: document.querySelector(".next"),
            prev: document.querySelector(".prev"),
            playPause: document.querySelector(".playPause"),
            volumeDown: document.querySelector(".volumeDown"),
            volumeUp: document.querySelector(".volumeUp"),
            time: document.querySelector(".time"),
            sliderDiv: document.querySelector(".slider"),
            hammerSlider: new Hammer(this.sliderDiv),
            playlist: playlist,
            infosManager: infosManager,
            audio: new Audio(this.playlist[this.currentTrack].mp3)
        }
    }
    // declaration des methodes
    play = () => {
        this.state.audio.play()
        document.querySelector(".playPause img").src = "./assets/img/buttons/pause-solid.svg";
    }
    pause = () => {
        this.state.audio.pause()
        document.querySelector(".playPause img").src = "./assets/img/buttons/play-solid.svg";
    }
    audioManager = () => {
        this.state.playPause.addEventListener("click", () => {
            if (this.state.audio.paused) {
                this.play();
            } else {
                this.pause();
            }
        })
        // bouton next
        this.state.next.addEventListener("click", () => {
            this.pause();
            console.log(this.state.currentTrack);
            this.setState({ audio: new Audio(this.state.playlist[this.state.currentTrack].mp3) })
            this.play();
        })
        // bouton prev
        this.state.prev.addEventListener("click", () => {
            this.pause();
            console.log(this.state.currentTrack);
            this.setState({ audio: new Audio(this.state.playlist[this.state.currentTrack].mp3) })
            this.play();
        })
        this.state.hammerSlider.get('swipe').set({ direction: Hammer.DIRECTION_HORIZONTAL });
        this.state.hammerSlider.on("swipeleft swiperight", function (ev) {
            if (ev.type === "swiperight") {
                this.pause();
                console.log(this.state.currentTrack);
                this.setState({ audio: new Audio(this.state.playlist[this.state.currentTrack].mp3) })
                this.play();
                infosManager();
            }
            if (ev.type === "swipeleft") {
                this.pause();
                console.log(this.state.currentTrack);
                this.setState({ audio: new Audio(this.state.playlist[this.state.currentTrack].mp3) })
                this.play();
                infosManager();
            }
        })
    }
    render() {
        return (
            <MediaPlayerContext.Provider value={this.state}>
                <div className="playerContainer" >
                    <div className="player">
                        <img className="logo" src="./assets/img/Spotify_logo_with_text.svg.png" alt="" />
                        <div className="slider">
                        </div>
                        <div className="title">
                        </div>
                        <div className="nav">
                            <div className="prev">
                                <img src="./assets/img/buttons/backward-step-solid.svg" alt="" />
                            </div>
                            <div className="playPause">
                                <img src="./assets/img/buttons/play-solid.svg" alt="" />
                            </div>
                            <div className="next">
                                <img src="./assets/img/buttons/forward-step-solid.svg" alt="" />
                            </div>
                        </div>
                        <div className="time">
                            <p>00:00 / 00:00</p>
                        </div>
                        <div className="infos">
                            <p>Genre : French Urban Pop/R&B</p>
                            <p>Année : 2022</p>

                        </div>
                        <div className="navVolume">
                            <div className="volumeDown">
                                <img src="./assets/img/buttons/volume-low-solid.svg" alt="" />
                            </div>
                            <div className="volumeUp">
                                <img src="./assets/img/buttons/volume-high-solid.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </div >
            </MediaPlayerContext.Provider>
        )
    }
}


export default MediaPlayer