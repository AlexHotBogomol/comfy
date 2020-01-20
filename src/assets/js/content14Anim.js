const content14 = intro.querySelector("#content14");

const content14sceneStart = new ScrollMagic.Scene({
  triggerElement: intro,
  offset: 12500,
  duration: 200,
  triggerHook: 0
})
  .setTween(initStartTimeline(content14))
  .addTo(controller);

const content14sceneEnd = new ScrollMagic.Scene({
  triggerElement: intro,
  offset: 13200,
  duration: 200,
  triggerHook: 0
})
  .setTween(initEndTimeline(content14))
  .addTo(controller);