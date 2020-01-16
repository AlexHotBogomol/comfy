const intro = document.querySelector(".intro");
const video = intro.querySelector("#video");

const framesPerSecond = 25;
const pixelsPerSecond = 700;
const timeToUpdateFrames = 1000 / framesPerSecond; // refresh rate in milliseconds
const sceneDuration = video.duration * pixelsPerSecond; // duration of scene with video


const sceneDelay = 8000; // delay before scroll
// video.readyState === 4  video ready to play
// video.currentTime

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
  triggerElement: intro,
  duration: sceneDuration,
  triggerHook: 0
})
  .setPin(intro)
  .addTo(controller);

//Video Animation
let accelamount = 0.1;
let scrollpos = 0;
let delay = 0;

scene.on("update", e => {
  scrollpos = e.scrollPos / pixelsPerSecond;
});

setInterval(() => {
  delay += (scrollpos - delay) * accelamount;
  video.currentTime = delay;
}, timeToUpdateFrames);

