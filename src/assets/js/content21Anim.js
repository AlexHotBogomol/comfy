const content21 = intro.querySelector("#content21");

const content21sceneStart = new ScrollMagic.Scene({
  triggerElement: intro,
  offset: 19100,
  duration: 200,
  triggerHook: 0
})
  .setTween(initStartTimeline(content21))
  .addTo(controller);

const content21sceneEnd = new ScrollMagic.Scene({
  triggerElement: intro,
  offset: 19800,
  duration: 200,
  triggerHook: 0
})
  .setTween(initEndTimeline(content21))
  .addTo(controller);