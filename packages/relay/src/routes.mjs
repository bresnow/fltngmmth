
import Gun from "gun"
import { Router } from "express";
export const gun = Gun({
  peers: ["http://front_app:3333/gun"]})
const routes = new Router();


const htmlNode = gun.get('EXPRESS_RESPONSE_ONE')

const css = `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: sans-serif;
}
i,
svg {
  pointer-events: none;
}

.kick-pad,
.snare-pad,
.hihat-pad {
  width: 5rem;
  height: 5rem;
  margin: 1rem 0.5rem;
  cursor: pointer;
  border-radius: 50%
}
.kick-pad {
  background: rgb(160, 211, 224);
}
.snare-pad {
  background: rgb(224, 160, 208);
}
.hihat-pad {
  background: rgb(224, 194, 160);
}
.kick-pad.active {
  background: rgb(59, 197, 231);
}
.snare-pad.active {
  background: rgb(218, 58, 178);
}
.hihat-pad.active {
  background: rgb(241, 158, 64);
}

.sequencer {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.hihat-track,
.snare-track,
.kick-track {
  display: flex;
  align-items: center;
  width: 70%;
  justify-content: space-between;
  margin-top: 5rem;
}
.kick,
.snare,
.hihat {
  display: flex;
}
.controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  margin: 0rem 2rem;
}
.controls button {
  padding: 1rem;
  border: none;
  background: rgb(88, 88, 88);
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.5s ease;
}

.pad {
  transition: all 0.5s ease;
}

.play {
  padding: 1rem 2rem;
  font-size: 1.5rem;
  background: rgb(88, 88, 88);
  color: white;
  border: none;
  cursor: pointer;
  margin-top: 3rem;
}

select {
  padding: 1rem;
  font-size: 1rem;
}

.mute.active {
  background: rgb(182, 182, 182);
}

.tempo {
  margin: 3rem;
  width: 30%;
}
.tempo-slider {
  padding: 0.2rem;
  -webkit-appearance: none;
  margin: 1rem 0rem;
  width: 100%;
  position: relative;
  background: rgb(88, 88, 88);
  cursor: pointer;
  border-radius: 1rem;
}
.tempo p {
  font-size: 1.5rem;
  margin: 2rem;
  text-align: center;
}

@keyframes playTrack {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.2);
  }
}
`

const js = `class DrumKit {
  constructor() {
    this.pads = document.querySelectorAll(".pad");
    this.playBtn = document.querySelector(".play");
    this.currentKick = "./sounds/kick-classic.wav";
    this.currentSnare = "./sounds/snare-acoustic01.wav";
    this.currentHihat = "./sounds/hihat.acoustic01.wav";
    this.kickAudio = document.querySelector(".kick-sound");
    this.snareAudio = document.querySelector(".snare-sound");
    this.hihatAudio = document.querySelector(".hihat-sound");
    this.index = 0;
    this.bpm = 150;
    this.isPlaying = null;
    this.selects = document.querySelectorAll("select");
    this.muteBtns = document.querySelectorAll(".mute");
    this.tempoSlider = document.querySelector(".tempo-slider");
  }
  activePad() {
    this.classList.toggle("active"); //setState
  }
  repeat() {
    let step = this.index % 8;// let step = index % 8;
    const activeBars = document.querySelectorAll(\`.b\${ step }\`);
    //Loop over the pads
    activeBars.forEach(bar => {
      bar.style.animation = \`playTrack 0.3s alternate ease -in -out 2\`;
      if (bar.classList.contains("active")) {
        if (bar.classList.contains("kick-pad")) {
          this.kickAudio.currentTime = 0;
          this.kickAudio.play();
        }
        if (bar.classList.contains("snare-pad")) {
          this.snareAudio.currentTime = 0;
          this.snareAudio.play();
        }
        if (bar.classList.contains("hihat-pad")) {
          this.hihatAudio.currentTime = 0;
          this.hihatAudio.play();
        }
      }
    });
    this.index++;
  }
  start() {
    const interval = (60 / this.bpm) * 1000;
    //Check if it's playing

    if (this.isPlaying) {
      //Clear the interval
      clearInterval(this.isPlaying);
      console.log(this.isPlaying);
      this.isPlaying = null;
    } else {
      this.isPlaying = setInterval(() => {
        this.repeat();
      }, interval);
    }
  }
  updateBtn() {
    //NULL

    if (!this.isPlaying) {
      this.playBtn.innerText = "Stop";
      this.playBtn.classList.add("active");
    } else {
      this.playBtn.innerText = "Play";
      this.playBtn.classList.remove("active");
    }
  }
  changeSound(e) {
    const selectionName = e.target.name;
    const selectionValue = e.target.value;
    switch (selectionName) {
      case "kick-select":
        this.kickAudio.src = selectionValue;
        break;
      case "snare-select":
        this.snareAudio.src = selectionValue;
        break;
      case "hihat-select":
        this.hihatAudio.src = selectionValue;
        break;
    }
  }
  mute(e) {
    const muteIndex = e.target.getAttribute("data-track");
    e.target.classList.toggle("active");
    if (e.target.classList.contains("active")) {
      switch (muteIndex) {
        case "0":
          this.kickAudio.volume = 0;
          break;
        case "1":
          this.snareAudio.volume = 0;
          break;
        case "2":
          this.hihatAudio.volume = 0;
          break;
      }
    } else {
      switch (muteIndex) {
        case "0":
          this.kickAudio.volume = 1;
          break;
        case "1":
          this.snareAudio.volume = 1;
          break;
        case "2":
          this.hihatAudio.volume = 1;
          break;
      }
    }
  }
  changeTempo(e) {
    const tempoText = document.querySelector(".tempo-nr");

    tempoText.innerText = e.target.value;
  }
  updateTempo(e) {
    this.bpm = e.target.value;
    clearInterval(this.isPlaying);
    this.isPlaying = null;
    const playBtn = document.querySelector(".play");
    if (playBtn.classList.contains("active")) {
      this.start();
    }
  }
}

const drumKit = new DrumKit();

//Event Listeners

drumKit.pads.forEach(pad => {
  pad.addEventListener("click", drumKit.activePad);
  pad.addEventListener("animationend", function () {
    this.style.animation = "";
  });
});

drumKit.playBtn.addEventListener("click", function () {
  drumKit.updateBtn();
  drumKit.start();
});

drumKit.selects.forEach(select => {
  select.addEventListener("change", function (e) {
    drumKit.changeSound(e);
  });
});
drumKit.muteBtns.forEach(btn => {
  btn.addEventListener("click", function (e) {
    drumKit.mute(e);
  });
}); LZGUNSEAOPTS

drumKit.tempoSlider.addEventListener("input", function (e) {
  drumKit.changeTempo(e);
});
drumKit.tempoSlider.addEventListener("change", function (e) {
  drumKit.updateTempo(e);
});
`
const html = (script, style)=>`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./style.css" />
    <title>Beatmaker</title>
  </head>
  <style>
  ${style}
  </style>
  <body>
<div class="sequencer">
      <div class="kick-track">
        <div class="controls">
          <h1>Bells</h1>

        </div>
        <div class="kick">
          <div class="pad kick-pad b0"></div>
          <div class="pad kick-pad b1"></div>
          <div class="pad kick-pad b2"></div>
          <div class="pad kick-pad b3"></div>
          <div class="pad kick-pad b4"></div>
          <div class="pad kick-pad b5"></div>
          <div class="pad kick-pad b6"></div>
          <div class="pad kick-pad b7"></div>
        </div>
      </div>
      <div class="snare-track">
        <div class="controls">
          <h1>TribalDrum</h1>

        </div>
        <div class="snare">
          <div class="pad snare-pad b0"></div>
          <div class="pad snare-pad b1"></div>
          <div class="pad snare-pad b2"></div>
          <div class="pad snare-pad b3"></div>
          <div class="pad snare-pad b4"></div>
          <div class="pad snare-pad b5"></div>
          <div class="pad snare-pad b6"></div>
          <div class="pad snare-pad b7"></div>
        </div>
      </div>
      <div class="hihat-track">
        <div class="controls">
          <h1>Loop3</h1>

        </div>
        <div class="hihat">
          <div class="pad hihat-pad b0"></div>
          <div class="pad hihat-pad b1"></div>
          <div class="pad hihat-pad b2"></div>
          <div class="pad hihat-pad b3"></div>
          <div class="pad hihat-pad b4"></div>
          <div class="pad hihat-pad b5"></div>
          <div class="pad hihat-pad b6"></div>
          <div class="pad hihat-pad b7"></div>
        </div>
      </div>
      <button class="play">Play</button>

    </div>

    <audio class="kick-sound" src="https://assets.mixkit.co/sfx/preview/mixkit-fail-drum-and-bells-571.mp3"></audio>
    <audio class="snare-sound" src="https://assets.mixkit.co/sfx/preview/mixkit-hand-tribal-drum-562.mp3"></audio>
    <audio class="hihat-sound" src="https://assets.mixkit.co/sfx/preview/mixkit-achievement-win-drums-555.mp3"></audio>
   

    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/js/all.min.js"
      integrity="sha256-MAgcygDRahs+F/Nk5Vz387whB4kSK9NXlDN3w58LLq0="
      crossorigin="anonymous"
    ></script>
    <script >
    ${script}
    </script>
      <script type="module" >
  window.addEventListener("load", function () {
    window.scrollTo(0, 0);
  })
  </script>
  </body>
</html>
`
htmlNode.put({ html: html('<---REPLACE_JS-->', '<---REPLACE_CSS-->'), js, css})


routes.get("/", (req, res) => htmlNode.on(({html, js, css})=>{
  html = html.replace('<---REPLACE_JS-->', js).replace('<---REPLACE_CSS-->', css)
  res.send(html)
}));


routes.get("/healthcheck", (req, res) => res.json({ ok: true }));


export default routes;
