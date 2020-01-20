const content9 = intro.querySelector("#content9");

const content9sceneStart = new ScrollMagic.Scene({
  triggerElement: intro,
  offset: 7800,
  duration: 200,
  triggerHook: 0
})
  .setTween(initStartTimeline(content9))
  .addTo(controller);

const content9sceneEnd = new ScrollMagic.Scene({
  triggerElement: intro,
  offset: 8500,
  duration: 200,
  triggerHook: 0
})
  .setTween(initEndTimeline(content9))
  .addTo(controller);