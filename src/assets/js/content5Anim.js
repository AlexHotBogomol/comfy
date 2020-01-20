const content5 = intro.querySelector("#content5");

const content5sceneStart = new ScrollMagic.Scene({
  triggerElement: intro,
  offset: 4600,
  duration: 200,
  triggerHook: 0
})
  .setTween(initStartTimeline(content5))
  .addTo(controller);

const content5sceneEnd = new ScrollMagic.Scene({
  triggerElement: intro,
  offset: 5200,
  duration: 200,
  triggerHook: 0
})
  .setTween(initEndTimeline(content5))
  .addTo(controller);