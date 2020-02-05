const content24 = intro.querySelector("#content24");

const content24sceneStart = new ScrollMagic.Scene({
  triggerElement: intro,
  offset: 9800,
  duration: 200,
  triggerHook: 0
})
  .setTween(initStartTimeline(content24))
  .addTo(controller);

const content24sceneEnd = new ScrollMagic.Scene({
  triggerElement: intro,
  offset: 10500,
  duration: 200,
  triggerHook: 0
})
  .setTween(initEndTimeline(content24))
  .addTo(controller);