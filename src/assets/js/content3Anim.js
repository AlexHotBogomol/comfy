const content3 = intro.querySelector("#content3"),
  content3Heading1 = content3.querySelector("h5:first-of-type"),
  content3Heading2 = content3.querySelector("h5:last-of-type");

const content3StartTL = gsap.timeline();
content3StartTL.set(content3, {zIndex: 100});
content3StartTL.fromTo(
  content3Heading1,
  {
    y: 80
  },
  {
    opacity: 1,
    y: 0,
    ease: "linear",
    visibility: "visible",
    duration: 1
  }
);


const content3StartTL2 = gsap.timeline();
content3StartTL2.fromTo(
  content3Heading2,
  {
    y: 80
  },
  {
    opacity: 1,
    y: 0,
    ease: "linear",
    visibility: "visible",
    duration: 0.8
  }
);

const content3sceneStart = new ScrollMagic.Scene({
  triggerElement: intro,
  offset: 1800,
  duration: 300,
  triggerHook: 0
})
  .setTween(content3StartTL)
  .addTo(controller);

const content3sceneStart2 = new ScrollMagic.Scene({
  triggerElement: intro,
  offset: 2800,
  duration: 300,
  triggerHook: 0
})
  .setTween(content3StartTL2)
  .addTo(controller);

const content3EndTL = gsap.timeline();
content3EndTL.to(content3, {
  opacity: 0,
  ease: "linear",
  y: -160,
});
content3EndTL.set(content3, {
  zIndex: -1,
  visibility: "hidden",
});

const content3sceneEnd = new ScrollMagic.Scene({
  triggerElement: intro,
  offset: 3400,
  duration: 400,
  triggerHook: 0
})
  .setTween(content3EndTL)
  .addTo(controller);
