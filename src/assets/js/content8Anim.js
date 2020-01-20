const content8 = intro.querySelector("#content8");

const content8sceneStart = new ScrollMagic.Scene({
  triggerElement: intro,
  offset: 6900,
  duration: 200,
  triggerHook: 0
})
  .setTween(initStartTimeline(content8))
  .addTo(controller);

const content8sceneEnd = new ScrollMagic.Scene({
  triggerElement: intro,
  offset: 7600,
  duration: 200,
  triggerHook: 0
})
  .setTween(initEndTimeline(content8))
  .addTo(controller);