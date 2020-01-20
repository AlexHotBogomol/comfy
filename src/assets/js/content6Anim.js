const content6 = intro.querySelector("#content6");

const content6sceneStart = new ScrollMagic.Scene({
  triggerElement: intro,
  offset: 5400,
  duration: 200,
  triggerHook: 0
})
  .setTween(initStartTimeline(content6))
  .addTo(controller);

const content6sceneEnd = new ScrollMagic.Scene({
  triggerElement: intro,
  offset: 6000,
  duration: 200,
  triggerHook: 0
})
  .setTween(initEndTimeline(content6))
  .addTo(controller);