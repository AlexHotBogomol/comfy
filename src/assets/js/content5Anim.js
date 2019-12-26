const content5 = intro.querySelector("#content5"),
  content5Heading = content5.querySelector("h3"),
  content5Btn = content5.querySelector(".btn");

//GSAP

const content5HeadingAnim = gsap.fromTo(content5Heading, {
  x: -50,
  y: 5
}, {
  opacity: 1,
  ease: "linear",
  x: 0,
  y: 0,
  visibility: "visible"
});
const content5BtnAnim = gsap.fromTo(content5Btn, {
  x: -200
}, {
  opacity: 1,
  ease: "linear",
  x: 0,
  visibility: "visible"
});
const content5Anim = gsap.to(content5, {
  opacity: 0,
  ease: "linear",
  x: 100,
  visibility: "hidden"
});


//Scroll Magic

const content5scene1 = new ScrollMagic.Scene({
  triggerElement: intro,
  offset: 12950,
  duration: 200,
  triggerHook: 0
})
  .setTween(content5HeadingAnim)
  .addTo(controller);

const content5scene2 = new ScrollMagic.Scene({
  triggerElement: intro,
  offset: 13000,
  duration: 150,
  triggerHook: 0
})
  .setTween(content5BtnAnim)
  .addTo(controller);

const content5scene3 = new ScrollMagic.Scene({
  triggerElement: intro,
  offset: 13600,
  duration: 200,
  triggerHook: 0
})
  .setTween(content5Anim)
  .addTo(controller);