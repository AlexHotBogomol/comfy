const content20 = intro.querySelector("#content20");

const content20sceneStart = new ScrollMagic.Scene({
  triggerElement: intro,
  offset: 17100,
  duration: 200,
  triggerHook: 0
})
  .setTween(initStartTimeline(content20))
  .addTo(controller);

const content20sceneEnd = new ScrollMagic.Scene({
  triggerElement: intro,
  offset: 18000,
  duration: 200,
  triggerHook: 0
})
  .setTween(initEndTimeline(content20))
  .addTo(controller);