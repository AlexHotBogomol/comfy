const content10 = intro.querySelector("#content10");

const content10sceneStart = new ScrollMagic.Scene({
  triggerElement: intro,
  offset: 8700,
  duration: 200,
  triggerHook: 0
})
  .setTween(initStartTimeline(content10))
  .addTo(controller);

const content10sceneEnd = new ScrollMagic.Scene({
  triggerElement: intro,
  offset: 9400,
  duration: 200,
  triggerHook: 0
})
  .setTween(initEndTimeline(content10))
  .addTo(controller);