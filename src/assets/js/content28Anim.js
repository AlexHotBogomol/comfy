const content28 = intro.querySelector("#content28");

const content28sceneStart = new ScrollMagic.Scene({
  triggerElement: intro,
  offset: 16200,
  duration: 200,
  triggerHook: 0
})
  .setTween(initStartTimeline(content28))
  .addTo(controller);

const content28sceneEnd = new ScrollMagic.Scene({
  triggerElement: intro,
  offset: 17600,
  duration: 200,
  triggerHook: 0
})
  .setTween(initEndTimeline(content28))
  .addTo(controller);