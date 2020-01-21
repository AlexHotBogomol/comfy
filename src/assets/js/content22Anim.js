const content22 = intro.querySelector("#content22");

const content22sceneStart = new ScrollMagic.Scene({
  triggerElement: intro,
  offset: 20000,
  duration: 200,
  triggerHook: 0
})
  .setTween(initStartTimeline(content22))
  .addTo(controller);

const content22sceneEnd = new ScrollMagic.Scene({
  triggerElement: intro,
  offset: 21700,
  duration: 200,
  triggerHook: 0
})
  .setTween(initEndTimeline(content22))
  .addTo(controller);