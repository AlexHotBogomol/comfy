const content36 = intro.querySelector("#content36");

const content36sceneStart = new ScrollMagic.Scene({
  triggerElement: intro,
  offset: 23800,
  duration: 200,
  triggerHook: 0
})
  .setTween(initStartTimeline(content36))
  .addTo(controller);