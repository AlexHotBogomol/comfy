const content4 = intro.querySelector("#content4");

const content4sceneStart = new ScrollMagic.Scene({
  triggerElement: intro,
  offset: 3100,
  duration: 200,
  triggerHook: 0
})
  .setTween(initStartTimeline(content4))
  .addTo(controller);

const content4sceneEnd = new ScrollMagic.Scene({
  triggerElement: intro,
  offset: 4000,
  duration: 200,
  triggerHook: 0
})
  .setTween(initEndTimeline(content4))
  .addTo(controller);