const content33 = intro.querySelector("#content33");

const content33sceneStart = new ScrollMagic.Scene({
  triggerElement: intro,
  offset: 22000,
  duration: 200,
  triggerHook: 0
})
  .setTween(initStartTimeline(content33))
  .addTo(controller);

const content33sceneEnd = new ScrollMagic.Scene({
  triggerElement: intro,
  offset: 22800,
  duration: 200,
  triggerHook: 0
})
  .setTween(initEndTimeline(content33))
  .addTo(controller);