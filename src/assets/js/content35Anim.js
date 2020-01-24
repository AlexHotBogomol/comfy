const content35 = intro.querySelector("#content35");

const content35sceneStart = new ScrollMagic.Scene({
  triggerElement: intro,
  offset: 43000,
  duration: 200,
  triggerHook: 0
})
  .setTween(initStartTimeline(content35))
  .addTo(controller);