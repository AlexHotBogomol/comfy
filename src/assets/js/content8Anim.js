const content8 = intro.querySelector("#content8"),
  content8Heading = content8.querySelector("h3");

const content8AnimStart = gsap.to(content8Heading, {
  ease: "linear.inOut",
  y: -100,
  opacity: 1,
  visibility: "visible"
});

const content8AnimEnd = gsap.to(content8, {
  ease: "linear.inOut",
  y: -200,
  opacity: 0,
  visibility: "hidden"
});

const content8scene1 = new ScrollMagic.Scene({
  triggerElement: intro,
  offset: 15700,
  duration: 400,
  triggerHook: 0
})
  .setTween(content8AnimStart)
  .addTo(controller);

const content8scene2 = new ScrollMagic.Scene({
  triggerElement: intro,
  offset: 18000,
  duration: 400,
  triggerHook: 0
})
  .setTween(content8AnimEnd)
  .addTo(controller);

