const content11 = intro.querySelector("#content11");

const content11sceneStart = new ScrollMagic.Scene({
  triggerElement: intro,
  offset: 6800,
  duration: 100,
  triggerHook: 0
})
  .setTween(initStartTimeline(content11))
  .addTo(controller);

const content11sceneEnd = new ScrollMagic.Scene({
  triggerElement: intro,
  offset: 7400,
  duration: 100,
  triggerHook: 0
})
  .setTween(initEndTimeline(content11))
  .addTo(controller);