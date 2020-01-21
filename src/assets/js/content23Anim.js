const content23 = intro.querySelector("#content23");

const content23sceneStart = new ScrollMagic.Scene({
  triggerElement: intro,
  offset: 22400,
  duration: 200,
  triggerHook: 0
})
  .setTween(initStartTimeline(content23))
  .addTo(controller);

const content23sceneEnd = new ScrollMagic.Scene({
  triggerElement: intro,
  offset: 22900,
  duration: 200,
  triggerHook: 0
})
  .setTween(initEndTimeline(content23))
  .addTo(controller);