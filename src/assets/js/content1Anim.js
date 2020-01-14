const content1 = intro.querySelector("#content1"),
  content1HeadingSpan1 = content1.querySelector("h2 span:first-child"),
  content1HeadingSpan2 = content1.querySelector("h2 span:last-child"),
  content1Btn = content1.querySelector(".btn");

const content1AnimStart = 0;

//GSAP

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


//Scroll Magic

const content1scene1 = new ScrollMagic.Scene({
  triggerElement: intro,
  offset: content1AnimStart + 0,
  duration: 800,
  triggerHook: 0
})
  .setTween(content1HeadingSpan1Anim)
  .addTo(controller);

const content1scene2 = new ScrollMagic.Scene({
  triggerElement: intro,
  offset: content1AnimStart + 200,
  duration: 600,
  triggerHook: 0
})
  .setTween(content1HeadingSpan2Anim)
  .addTo(controller);

const content1scene3 = new ScrollMagic.Scene({
  triggerElement: intro,
  offset: content1AnimStart + 600,
  duration: 100,
  triggerHook: 0
})
  .setTween(content1BtnAnim)
  .addTo(controller);

const content1scene4 = new ScrollMagic.Scene({
  triggerElement: intro,
  offset: content1AnimStart + 1850,
  duration: 800,
  triggerHook: 0
})
  .setTween(content1Anim)
  .addTo(controller);