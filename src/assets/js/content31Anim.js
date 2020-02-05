const content31 = intro.querySelector("#content31");

const content31sceneStart = new ScrollMagic.Scene({
  triggerElement: intro,
  offset: 19200,
  duration: 200,
  triggerHook: 0
})
  .setTween(initStartTimeline(content31))
  .addTo(controller);

const content31sceneEnd = new ScrollMagic.Scene({
  triggerElement: intro,
  offset: 21000,
  duration: 200,
  triggerHook: 0
})
  .setTween(initEndTimeline(content31))
  .addTo(controller);