const content27 = intro.querySelector("#content27");

const content27sceneStart = new ScrollMagic.Scene({
  triggerElement: intro,
  offset: 30225,
  duration: 200,
  triggerHook: 0
})
  .setTween(initStartTimeline(content27))
  .addTo(controller);

const content27sceneEnd = new ScrollMagic.Scene({
  triggerElement: intro,
  offset: 32400,
  duration: 200,
  triggerHook: 0
})
  .setTween(initEndTimeline(content27))
  .addTo(controller);