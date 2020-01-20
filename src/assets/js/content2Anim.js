const content2 = intro.querySelector("#content2");

const content2sceneStart = new ScrollMagic.Scene({
  triggerElement: intro,
  offset: 800,
  duration: 200,
  triggerHook: 0
})
  .setTween(initStartTimeline(content2))
  .addTo(controller);

const content2sceneEnd = new ScrollMagic.Scene({
  triggerElement: intro,
  offset: 3400,
  duration: 400,
  triggerHook: 0
})
  .setTween(initEndTimeline(content2))
  .addTo(controller);