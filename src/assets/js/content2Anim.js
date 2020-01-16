const content2 = intro.querySelector("#content2"),
  content2Heading = content2.querySelector("h3"),
  content2Description = content2.querySelector("p");

const content2AnimStart = gsap.fromTo("#content2", {
  y: 80
}, {
  opacity: 1,
  y: 0,
  ease: "linear",
  visibility: "visible",
  zIndex: 100,
  duration: 1
});

// const content2EndTL = gsap.timeline();
// content2EndTL.to(content2, {
//   opacity: 0,
//   ease: "linear",
//   y: -160,
// });
// content2EndTL.set(content2, {
//   zIndex: -1,
//   visibility: "hidden",
// });

const content2sceneStart = new ScrollMagic.Scene({
  triggerElement: intro,
  offset: 800,
  duration: 200,
  triggerHook: 0
})
  .setTween(content2AnimStart)
  .addTo(controller);

// const content2sceneEnd = new ScrollMagic.Scene({
//   triggerElement: intro,
//   offset: 1600,
//   duration: 400,
//   triggerHook: 0
// })
//   .setTween(content2EndTL)
//   .addTo(controller);