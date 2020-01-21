const content29 = intro.querySelector("#content29");

const content29sceneStart = new ScrollMagic.Scene({
  triggerElement: intro,
  offset: 35100,
  duration: 200,
  triggerHook: 0
})
  .setTween(initStartTimeline(content29))
  .addTo(controller);

const content29sceneEnd = new ScrollMagic.Scene({
  triggerElement: intro,
  offset: 39000,
  duration: 200,
  triggerHook: 0
})
  .setTween(initEndTimeline(content29))
  .addTo(controller);