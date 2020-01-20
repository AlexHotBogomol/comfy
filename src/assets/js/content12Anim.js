const content12 = intro.querySelector("#content12");

const content12sceneStart = new ScrollMagic.Scene({
  triggerElement: intro,
  offset: 10500,
  duration: 200,
  triggerHook: 0
})
  .setTween(initStartTimeline(content12))
  .addTo(controller);

const content12sceneEnd = new ScrollMagic.Scene({
  triggerElement: intro,
  offset: 11200,
  duration: 200,
  triggerHook: 0
})
  .setTween(initEndTimeline(content12))
  .addTo(controller);