const intro = document.querySelector(".intro");
const video = intro.querySelector("#video");

//SCROLLMAGIC
const controller = new ScrollMagic.Controller();

//Scenes
let scene = new ScrollMagic.Scene({
  duration: 34000,
  triggerElement: intro,
  triggerHook: 0
})
  .addIndicators()
  .setPin(intro)
  .addTo(controller);


//Video Animation
let accelamount = 0.1;
let scrollpos = 0;
let delay = 0;

scene.on("update", e => {
  scrollpos = e.scrollPos / 1000;
});

setInterval(() => {
  delay += (scrollpos - delay) * accelamount;
  console.log(scrollpos, delay);

  video.currentTime = delay;
}, 33.3);

//TEXT ANIMATION

const content1 = intro.querySelector("#content1"),
      content1HeadingSpan1 = content1.querySelector("h2 span:first-child"),
      content1HeadingSpan2 = content1.querySelector("h2 span:last-child"),
      content1Btn = content1.querySelector(".btn");

const content1HeadingSpan1Anim = gsap.fromTo(
  content1HeadingSpan1,
  { opacity: 0, y: 15 },
  { opacity: 1, ease: "linear", y: 0 }
);
const content1HeadingSpan2Anim = gsap.fromTo(
  content1HeadingSpan2,
  { opacity: 0, y: 20 },
  { opacity: 1, ease: "linear", y: 0 }
);

const content1BtnAnim = gsap.fromTo(
  content1Btn,
  { opacity: 0, x: -200 },
  { opacity: 1, ease: "linear", x: 0 }
);

let scene2 = new ScrollMagic.Scene({
  triggerElement: intro,
  offset: 7300,
  duration: 800,
  triggerHook: 0
})
  .setTween(content1HeadingSpan1Anim)
  .addTo(controller);

let scene3 = new ScrollMagic.Scene({
  triggerElement: intro,
  offset: 7500,
  duration: 500,
  triggerHook: 0
})
  .setTween(content1HeadingSpan2Anim)
  .addTo(controller);

let scene4 = new ScrollMagic.Scene({
  triggerElement: intro,
  offset: 7900,
  duration: 100,
  triggerHook: 0
})
  .setTween(content1BtnAnim)
  .addTo(controller);



