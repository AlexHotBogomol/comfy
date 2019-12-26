const content7 = intro.querySelector("#content7"),
  content7HeadingSpan1 = content7.querySelector("h2 span:first-child"),
  content7HeadingSpan2 = content7.querySelector("h2 span:last-child");

//GSAP

const content7HeadingSpan1Anim = gsap.fromTo(
  content7HeadingSpan1,
  { opacity: 0, y: 15 },
  { opacity: 1, ease: "linear", y: 0, visibility: "visible" }
);
const content7HeadingSpan2Anim = gsap.fromTo(
  content7HeadingSpan2,
  { opacity: 0, y: 20 },
  { opacity: 1, ease: "linear", y: 0, visibility: "visible" }
);

const content7Anim = gsap.to(content7, {
  ease: "linear.inOut",
  y: -350,
  opacity: 0,
  visibility: "hidden"
});


//Scroll Magic

const content7scene1 = new ScrollMagic.Scene({
  triggerElement: intro,
  offset: 15000,
  duration: 200,
  triggerHook: 0
})
  .setTween(content7HeadingSpan1Anim)
  .addTo(controller);

const content7scene2 = new ScrollMagic.Scene({
  triggerElement: intro,
  offset: 15100,
  duration: 200,
  triggerHook: 0
})
  .setTween(content7HeadingSpan2Anim)
  .addTo(controller);

const content7scene3 = new ScrollMagic.Scene({
  triggerElement: intro,
  offset: 15400,
  duration: 350,
  triggerHook: 0
})
  .setTween(content7Anim)
  .addTo(controller);