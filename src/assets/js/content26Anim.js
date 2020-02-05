const content26 = intro.querySelector("#content26");

const content26sceneStart = new ScrollMagic.Scene({
  triggerElement: intro,
  offset: 11500,
  duration: 200,
  triggerHook: 0
})
  .setTween(initStartTimeline(content26))
  .addTo(controller);

const content26sceneEnd = new ScrollMagic.Scene({
  triggerElement: intro,
  offset: 14500,
  duration: 200,
  triggerHook: 0
})
  .setTween(initEndTimeline(content26))
  .addTo(controller);