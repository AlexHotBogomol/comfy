const content18 = intro.querySelector("#content18");

const content18sceneStart = new ScrollMagic.Scene({
  triggerElement: intro,
  offset: 15200,
  duration: 200,
  triggerHook: 0
})
  .setTween(initStartTimeline(content18))
  .addTo(controller);

const content18sceneEnd = new ScrollMagic.Scene({
  triggerElement: intro,
  offset: 15900,
  duration: 200,
  triggerHook: 0
})
  .setTween(initEndTimeline(content18))
  .addTo(controller);