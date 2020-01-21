const content34 = intro.querySelector("#content34");

const content34sceneStart = new ScrollMagic.Scene({
  triggerElement: intro,
  offset: 41600,
  duration: 200,
  triggerHook: 0
})
  .setTween(initStartTimeline(content34))
  .addTo(controller);

const content34sceneEnd = new ScrollMagic.Scene({
  triggerElement: intro,
  offset: 42600,
  duration: 200,
  triggerHook: 0
})
  .setTween(initEndTimeline(content34))
  .addTo(controller);