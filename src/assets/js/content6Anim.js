const content6 = intro.querySelector("#content6"),
  content6Heading = content6.querySelector("h3"),
  content6Btn = content6.querySelector(".btn");

//GSAP

const content6HeadingAnim = gsap.fromTo(content6Heading, {
  x: -50,
  y: 5
}, {
  opacity: 1,
  ease: "linear",
  x: 0,
  y: 0,
  visibility: "visible"
});
const content6BtnAnim = gsap.fromTo(content6Btn, {
  x: -200
}, {
  opacity: 1,
  ease: "linear",
  x: 0,
  visibility: "visible"
});
const content6Anim = gsap.to(content6, {
  opacity: 0,
  ease: "linear",
  x: 100,
  visibility: "hidden"
});


//Scroll Magic

const content6scene1 = new ScrollMagic.Scene({
  triggerElement: intro,
  offset: 13700,
  duration: 200,
  triggerHook: 0
})
  .setTween(content6HeadingAnim)
  .addTo(controller);

const content6scene2 = new ScrollMagic.Scene({
  triggerElement: intro,
  offset: 13750,
  duration: 150,
  triggerHook: 0
})
  .setTween(content6BtnAnim)
  .addTo(controller);

const content6scene3 = new ScrollMagic.Scene({
  triggerElement: intro,
  offset: 14350,
  duration: 200,
  triggerHook: 0
})
  .setTween(content6Anim)
  .addTo(controller);