const content30 = intro.querySelector("#content30");

const content30sceneStart = new ScrollMagic.Scene({
  triggerElement: intro,
  offset: 35100,
  duration: 200,
  triggerHook: 0
})
  .setTween(initStartTimeline(content30))
  .addTo(controller);

const content30sceneEnd = new ScrollMagic.Scene({
  triggerElement: intro,
  offset: 36850,
  duration: 200,
  triggerHook: 0
})
  .setTween(initEndTimeline(content30))
  .addTo(controller);