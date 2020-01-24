const banner = document.querySelector('#banner');

const bannerSceneStart = new ScrollMagic.Scene({
  triggerElement: intro,
  offset: 1000,
  triggerHook: 0
})
  .setClassToggle(banner, "appear")
  .addTo(controller);