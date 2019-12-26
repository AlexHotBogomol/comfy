const content10 = intro.querySelector("#content10"),
  content10Heading = content10.querySelector("h3");

const content10AnimStart = gsap.to(content10Heading, {
  ease: "linear.inOut",
  y: -100,
  opacity: 1,
  visibility: "visible"
});

const content10AnimEnd = gsap.to(content10, {
  ease: "linear.inOut",
  y: -200,
  opacity: 0,
  visibility: "hidden"
});

const content10scene1 = new ScrollMagic.Scene({
  triggerElement: intro,
  offset: 20700,
  duration: 400,
  triggerHook: 0
})
  .setTween(content10AnimStart)
  .addTo(controller);

const content10scene2 = new ScrollMagic.Scene({
  triggerElement: intro,
  offset: 23000,
  duration: 400,
  triggerHook: 0
})
  .setTween(content10AnimEnd)
  .addTo(controller);

