const content2 = intro.querySelector("#content2"),
  content2Heading = content2.querySelector("h3"),
  content2Description = content2.querySelector("p");

const content2AnimStart = 2700;

//GSAP

const content2HeadingAnim = gsap.to(content2Heading, {
  opacity: 1,
  ease: "linear",
  visibility: "visible"
});
const content2DescriptionAnim = gsap.to(content2Description, {
  opacity: 1,
  ease: "linear",
  visibility: "visible"
});
const content2Anim = gsap.to(content2, {
  opacity: 0,
  ease: "linear",
  y: -200,
  visibility: "hidden"
});


//Scroll Magic

const content2scene1 = new ScrollMagic.Scene({
  triggerElement: intro,
  offset: content2AnimStart,
  duration: 300,
  triggerHook: 0
})
  .setTween(content2HeadingAnim)
  .addTo(controller);

const content2scene2 = new ScrollMagic.Scene({
  triggerElement: intro,
  offset: content2AnimStart + 150,
  duration: 200,
  triggerHook: 0
})
  .setTween(content2DescriptionAnim)
  .addTo(controller);

const content2scene3 = new ScrollMagic.Scene({
  triggerElement: intro,
  offset: content2AnimStart + 1900,
  duration: 300,
  triggerHook: 0
})
  .setTween(content2Anim)
  .addTo(controller);