function initStartTimeline(element, duration = 1, delay = '0') {
  return gsap.timeline().fromTo(element, {
    y: 80
  }, {
    opacity: 1,
    y: 0,
    ease: "linear",
    visibility: "visible",
    // zIndex: 100,
    duration: duration
  }, delay)
}

function initEndTimeline(element) {
  return gsap.timeline().to(element, {
    opacity: 0,
    ease: "linear",
    y: -160,
  });
}

//Content 1

const content1scene1 = new ScrollMagic.Scene({
  triggerElement: intro,
  offset: 200,
  duration: 200,
  triggerHook: 0
})
  .setTween(initEndTimeline(content1))
  .addTo(controller);

