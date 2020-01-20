const content19 = intro.querySelector("#content19");

const content19sceneStart = new ScrollMagic.Scene({
  triggerElement: intro,
  offset: 16200,
  duration: 200,
  triggerHook: 0
})
  .setTween(initStartTimeline(content19))
  .addTo(controller);

const content19sceneEnd = new ScrollMagic.Scene({
  triggerElement: intro,
  offset: 16900,
  duration: 200,
  triggerHook: 0
})
  .setTween(initEndTimeline(content19))
  .addTo(controller);