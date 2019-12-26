const content3 = intro.querySelector("#content3"),
  content3Heading1 = content3.querySelector("h4:first-of-type"),
  content3Heading2 = content3.querySelector("h4:last-of-type"),
  content3Description1 = content3.querySelector("p:first-of-type"),
  content3Description2 = content3.querySelector("p:last-of-type");

//GSAP

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

//Scroll Magic

const content3scene1 = new ScrollMagic.Scene({
  triggerElement: intro,
  offset: 10450,
  duration: 300,
  triggerHook: 0
})
  .setTween(content3Heading1Anim)
  .addTo(controller);

const content3scene2= new ScrollMagic.Scene({
  triggerElement: intro,
  offset: 10500,
  duration: 250,
  triggerHook: 0
})
  .setTween(content3Description1Anim)
  .addTo(controller);

const content3scene3 = new ScrollMagic.Scene({
  triggerElement: intro,
  offset: 10850,
  duration: 300,
  triggerHook: 0
})
  .setTween(content3Heading2Anim)
  .addTo(controller);

const content3scene4 = new ScrollMagic.Scene({
  triggerElement: intro,
  offset: 10900,
  duration: 250,
  triggerHook: 0
})
  .setTween(content3Description2Anim)
  .addTo(controller);

const content3scene5 = new ScrollMagic.Scene({
  triggerElement: intro,
  offset: 11900,
  duration: 300,
  triggerHook: 0
})
  .setTween(content3Anim)
  .addTo(controller);