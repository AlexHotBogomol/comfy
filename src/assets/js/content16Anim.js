const content16 = intro.querySelector("#content16");

const content16sceneStart = new ScrollMagic.Scene({
  triggerElement: intro,
  offset: 14300,
  duration: 200,
  triggerHook: 0
})
  .setTween(initStartTimeline(content16))
  .addTo(controller);

const content16sceneEnd = new ScrollMagic.Scene({
  triggerElement: intro,
  offset: 15000,
  duration: 200,
  triggerHook: 0
})
  .setTween(initEndTimeline(content16))
  .addTo(controller);