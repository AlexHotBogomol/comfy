const content32 = intro.querySelector("#content32");

const content32sceneStart = new ScrollMagic.Scene({
  triggerElement: intro,
  offset: 39300,
  duration: 200,
  triggerHook: 0
})
  .setTween(initStartTimeline(content32))
  .addTo(controller);

const content32sceneEnd = new ScrollMagic.Scene({
  triggerElement: intro,
  offset: 40000,
  duration: 200,
  triggerHook: 0
})
  .setTween(initEndTimeline(content32))
  .addTo(controller);