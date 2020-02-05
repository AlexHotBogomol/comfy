const content7 = intro.querySelector("#content7");

const content7AnimStart = gsap.to(content7, {
  opacity: 1,
  y: 0,
  ease: "linear",
  visibility: "visible",
  zIndex: 100,
  duration: 1
});

const content7EndTL = gsap.timeline();
content7EndTL.to(content7, {
  opacity: 0,
  ease: "linear",
  y: -40,
});
content7EndTL.set(content7, {
  zIndex: -1,
  visibility: "hidden",
});

const content7sceneStart = new ScrollMagic.Scene({
  triggerElement: intro,
  offset: 4420,
  duration: 100,
  triggerHook: 0
})
  .setTween(content7AnimStart)
  .addTo(controller);

const content7sceneEnd = new ScrollMagic.Scene({
  triggerElement: intro,
  offset: 4650,
  duration: 100,
  triggerHook: 0
})
  .setTween(content7EndTL)
  .addTo(controller);