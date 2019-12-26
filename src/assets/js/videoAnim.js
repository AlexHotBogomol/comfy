const intro = document.querySelector(".intro");
const video = intro.querySelector("#video");

const controller = new ScrollMagic.Controller();
const scene = new ScrollMagic.Scene({
  triggerElement: intro,
  duration: 69000,
  triggerHook: 0
})
  .addIndicators()
  .setPin(intro)
  .addTo(controller);

let accelamount = 0.1;
let scrollpos = 0;
let delay = 0;

scene.on("update", e => {
  scrollpos = e.scrollPos / 1000;
});

setInterval(() => {
  delay += (scrollpos - delay) * accelamount;
  video.currentTime = delay;
}, 33.3);


