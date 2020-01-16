const content1EndTL = gsap.timeline();

content1EndTL.to(content1, {
  opacity: 0,
  ease: "linear",
  y: -160,
});
content1EndTL.set(content1, {
  zIndex: -1,
  visibility: "hidden",
});

const content1scene1 = new ScrollMagic.Scene({
  triggerElement: intro,
  offset: 400,
  duration: 400,
  triggerHook: 0
})
  .setTween(content1EndTL)
  .addTo(controller);