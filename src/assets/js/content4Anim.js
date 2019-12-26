const content4 = intro.querySelector("#content4"),
  content4Heading = content4.querySelector("h3"),
  content4Btn = content4.querySelector(".btn");

//GSAP

const content4HeadingAnim = gsap.fromTo(content4Heading, {
  x: -50,
  y: 5
}, {
  opacity: 1,
  ease: "linear",
  x: 0,
  y: 0,
  visibility: "visible"
});
const content4BtnAnim = gsap.fromTo(content4Btn, {
  x: -200
}, {
  opacity: 1,
  ease: "linear",
  x: 0,
  visibility: "visible"
});
const content4Anim = gsap.to(content4, {
  opacity: 0,
  ease: "linear",
  x: 100,
  visibility: "hidden"
});


//Scroll Magic

const content4scene1 = new ScrollMagic.Scene({
  triggerElement: intro,
  offset: 12200,
  duration: 200,
  triggerHook: 0
})
  .setTween(content4HeadingAnim)
  .addTo(controller);

const content4scene2 = new ScrollMagic.Scene({
  triggerElement: intro,
  offset: 12250,
  duration: 150,
  triggerHook: 0
})
  .setTween(content4BtnAnim)
  .addTo(controller);

const content4scene3 = new ScrollMagic.Scene({
  triggerElement: intro,
  offset: 12850,
  duration: 200,
  triggerHook: 0
})
  .setTween(content4Anim)
  .addTo(controller);