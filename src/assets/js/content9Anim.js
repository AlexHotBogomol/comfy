const content9 = intro.querySelector("#content9"),
  content9Heading = content9.querySelector("h3");

const content9AnimStart = gsap.to(content9Heading, {
  ease: "linear.inOut",
  y: -100,
  opacity: 1,
  visibility: "visible"
});

const content9AnimEnd = gsap.to(content9, {
  ease: "linear.inOut",
  y: -200,
  opacity: 0,
  visibility: "hidden"
});

const content9scene1 = new ScrollMagic.Scene({
  triggerElement: intro,
  offset: 18200,
  duration: 400,
  triggerHook: 0
})
  .setTween(content9AnimStart)
  .addTo(controller);

const content9scene2 = new ScrollMagic.Scene({
  triggerElement: intro,
  offset: 20500,
  duration: 400,
  triggerHook: 0
})
  .setTween(content9AnimEnd)
  .addTo(controller);

