const intro = document.querySelector(".intro");
const video = intro.querySelector("#video");
const videoDelay = 8000;
let stopPosition = 0;

setTimeout(() => {
  video.pause();
  console.log(video.currentTime);
  stopPosition = video.currentTime;
  video.dispatchEvent(readyEvent);
}, videoDelay);

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
  triggerElement: intro,
  triggerHook: 0
})
  .setPin(intro)
  .addTo(controller);

const readyEvent = new Event('readyToScroll');

video.addEventListener('readyToScroll', (event) => {
  let accelamount = 0.1;
  let scrollpos = stopPosition;
  let delay = stopPosition;

  scene.duration((video.duration - stopPosition) * 1000);

  scene.on("update", e => {
    scrollpos = e.scrollPos / 1000 + stopPosition;
  });

  setInterval(() => {
    delay += (scrollpos - delay) * accelamount;
    video.currentTime = delay;
  }, 33.3);
});
