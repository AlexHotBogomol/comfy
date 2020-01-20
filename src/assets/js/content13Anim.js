const content13 = intro.querySelector("#content13");

const content13sceneStart = new ScrollMagic.Scene({
  triggerElement: intro,
  offset: 11400,
  duration: 200,
  triggerHook: 0
})
  .setTween(initStartTimeline(content13))
  .addTo(controller);

const content13sceneEnd = new ScrollMagic.Scene({
  triggerElement: intro,
  offset: 12100,
  duration: 200,
  triggerHook: 0
})
  .setTween(initEndTimeline(content13))
  .addTo(controller);