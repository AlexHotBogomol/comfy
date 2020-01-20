const content17 = intro.querySelector("#content17");

const content17sceneStart = new ScrollMagic.Scene({
  triggerElement: intro,
  offset: 15200,
  duration: 200,
  triggerHook: 0
})
  .setTween(initStartTimeline(content17))
  .addTo(controller);

const content17sceneEnd = new ScrollMagic.Scene({
  triggerElement: intro,
  offset: 15900,
  duration: 200,
  triggerHook: 0
})
  .setTween(initEndTimeline(content17))
  .addTo(controller);