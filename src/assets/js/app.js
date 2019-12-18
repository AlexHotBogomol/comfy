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

scene.on("update", e => {
  video.currentTime = e.scrollPos / 1000;
});

//CONTENT1 ANIMATION

const content1 = intro.querySelector("#content1"),
  content1HeadingSpan1 = content1.querySelector("h2 span:first-child"),
  content1HeadingSpan2 = content1.querySelector("h2 span:last-child"),
  content1Btn = content1.querySelector(".btn");

const content1HeadingSpan1Anim = gsap.fromTo(
  content1HeadingSpan1,
  { opacity: 0, y: 15 },
  { opacity: 1, ease: "linear", y: 0, visibility: "visible" }
);
const content1HeadingSpan2Anim = gsap.fromTo(
  content1HeadingSpan2,
  { opacity: 0, y: 20 },
  { opacity: 1, ease: "linear", y: 0, visibility: "visible" }
);

const content1BtnAnim = gsap.fromTo(
  content1Btn,
  { opacity: 0, x: -200 },
  { opacity: 1, ease: "linear", x: 0, visibility: "visible" }
);
const content1Anim = gsap.to(content1, {
  ease: "linear.inOut",
  y: -250,
  opacity: 0,
  visibility: "hidden"
});

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
  duration: 600,
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

let scene5 = new ScrollMagic.Scene({
  triggerElement: intro,
  offset: 9150,
  duration: 800,
  triggerHook: 0
})
  .setTween(content1Anim)
  .addTo(controller);

//CONTENT2 ANIMATION

const content2 = intro.querySelector("#content2"),
  content2Heading = content2.querySelector("h3"),
  content2Description = content2.querySelector("p");

const content2HeadingAnim = gsap.to(content2Heading, {
  opacity: 1,
  ease: "linear",
  visibility: "visible"
});
const content2DescriptionAnim = gsap.to(content2Description, {
  opacity: 1,
  ease: "linear",
  visibility: "visible"
});
const content2Anim = gsap.to(content2, {
  opacity: 0,
  ease: "linear",
  y: -200,
  visibility: "hidden"
});

let scene6 = new ScrollMagic.Scene({
  triggerElement: intro,
  offset: 10000,
  duration: 500,
  triggerHook: 0
})
  .setTween(content2HeadingAnim)
  .addTo(controller);

let scene7 = new ScrollMagic.Scene({
  triggerElement: intro,
  offset: 10150,
  duration: 500,
  triggerHook: 0
})
  .setTween(content2DescriptionAnim)
  .addTo(controller);

let scene8 = new ScrollMagic.Scene({
  triggerElement: intro,
  offset: 11500,
  duration: 500,
  triggerHook: 0
})
  .setTween(content2Anim)
  .addTo(controller);

//CONTENT3 ANIMATION

const content3 = intro.querySelector("#content3"),
  content3Heading1 = content3.querySelector("h4:first-of-type"),
  content3Heading2 = content3.querySelector("h4:last-of-type"),
  content3Description1 = content3.querySelector("p:first-of-type"),
  content3Description2 = content3.querySelector("p:last-of-type");

const content3Heading1Anim = gsap.fromTo(
  content3Heading1,
  { x: -50 },
  { opacity: 1, ease: "linear", x: 0, visibility: "visible" }
);
const content3Description1Anim = gsap.fromTo(
  content3Description1,
  { x: -100 },
  { opacity: 1, ease: "linear", x: 0, visibility: "visible" }
);
const content3Heading2Anim = gsap.fromTo(
  content3Heading2,
  { x: -50 },
  { opacity: 1, ease: "linear", x: 0, visibility: "visible" }
);
const content3Description2Anim = gsap.fromTo(
  content3Description2,
  { x: -100 },
  { opacity: 1, ease: "linear", x: 0, visibility: "visible" }
);
const content3Anim = gsap.to(content3, {
  opacity: 0,
  ease: "linear",
  y: -100,
  visibility: "hidden"
});

let scene9 = new ScrollMagic.Scene({
  triggerElement: intro,
  offset: 10150,
  duration: 300,
  triggerHook: 0
})
  .setTween(content3Heading1Anim)
  .addTo(controller);

let scene10 = new ScrollMagic.Scene({
  triggerElement: intro,
  offset: 10200,
  duration: 300,
  triggerHook: 0
})
  .setTween(content3Description1Anim)
  .addTo(controller);

let scene11 = new ScrollMagic.Scene({
  triggerElement: intro,
  offset: 10250,
  duration: 300,
  triggerHook: 0
})
  .setTween(content3Heading2Anim)
  .addTo(controller);

let scene12 = new ScrollMagic.Scene({
  triggerElement: intro,
  offset: 10300,
  duration: 300,
  triggerHook: 0
})
  .setTween(content3Description2Anim)
  .addTo(controller);

let scene13 = new ScrollMagic.Scene({
  triggerElement: intro,
  offset: 11000,
  duration: 600,
  triggerHook: 0
})
  .setTween(content3Anim)
  .addTo(controller);

//CONTENT4 ANIMATION

const content4 = intro.querySelector("#content4"),
  content4Heading = content4.querySelector("h3"),
  content4Btn = content4.querySelector(".btn");

const content4HeadingAnim = gsap.fromTo(content4Heading, {
  x: -50,
  y: 5
}, {
  opacity: 1,
  ease: "linear",
  x: 0,
  y: 0,
  visibility: "visible"
});
const content4BtnAnim = gsap.fromTo(content4Btn, {
  x: -100
}, {
  opacity: 1,
  ease: "linear",
  x: 0,
  visibility: "visible"
});
// const content4Anim = gsap.to(content4, {
//   opacity: 0,
//   ease: "linear",
//   visibility: "hidden"
// });

let scene14 = new ScrollMagic.Scene({
  triggerElement: intro,
  offset: 11600,
  duration: 600,
  triggerHook: 0
})
  .setTween(content4HeadingAnim)
  .addTo(controller);

let scene15 = new ScrollMagic.Scene({
  triggerElement: intro,
  offset: 11800,
  duration: 300,
  triggerHook: 0
})
  .setTween(content4BtnAnim)
  .addTo(controller);