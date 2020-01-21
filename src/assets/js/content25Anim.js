const content25 = intro.querySelector("#content25");

const content25sceneStart = new ScrollMagic.Scene({
  triggerElement: intro,
  offset: 25475,
  duration: 200,
  triggerHook: 0
})
  .setTween(initStartTimeline(content25))
  .addTo(controller);

const content25sceneEnd = new ScrollMagic.Scene({
  triggerElement: intro,
  offset: 27650,
  duration: 200,
  triggerHook: 0
})
  .setTween(initEndTimeline(content25))
  .addTo(controller);