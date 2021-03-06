document.addEventListener("DOMContentLoaded", function() {
  const intro = document.querySelector(".intro");
  const video = intro.querySelector("#video");
  const preloader = document.querySelector('#preloader');

  // const url = './assets/videos/iphone2.mp4';

  // fetch(url, {
  //   method: 'GET',
  // })
  //   .then(res => res.blob())
  //   .then(blob => initVideo(blob));

  // function initVideo(blob) {
    // const videoSrc = URL.createObjectURL(blob);
    // video.src = videoSrc;
    // hidePreloader();
    // prepareVideoToScroll();
  // }

  function hidePreloader() {
    preloader.style.display = 'none';
  }

  function initVideo(){
    hidePreloader();
    prepareVideoToScroll();
    video.removeEventListener("canplay", initVideo);
  }

  video.addEventListener('canplay', initVideo);

  function prepareVideoToScroll() {
    const framesPerSecond = 25;
    const pixelsPerSecond = 500;
    const sceneDelay = 8.5; // delay before scroll in seconds
    const timeToUpdateFrames = 1000 / framesPerSecond; // refresh rate in milliseconds

    video.addEventListener("timeupdate", videoTimeupdateHandler);

    function videoTimeupdateHandler(event) {
      if (video.currentTime >= sceneDelay) {
        video.pause();
        video.removeEventListener("timeupdate", videoTimeupdateHandler);
        // make content1 visible after paused video
        showFirstContent();
        initScroll();
      }
    }

    function showFirstContent() {
      const content1 = document.querySelector('#content1');
      gsap.fromTo(content1, 0.5, {
        y: 80
      }, {
        opacity: 1,
        y: 0,
        ease: "linear",
        visibility: "visible",
        zIndex: 100,
      });
    }

    function initScroll() {
      const videoDuration = video.duration * pixelsPerSecond; // video duration in pixels
      const sceneOffset = video.currentTime * pixelsPerSecond; // offset duration in pixels
      const sceneDuration = videoDuration - sceneOffset; // duration of scene subtract sceneOffset

      const controller = new ScrollMagic.Controller();

      const scene = new ScrollMagic.Scene({
        triggerElement: intro,
        duration: sceneDuration,
        triggerHook: 0
      })
        .setPin(intro)
        .addTo(controller);

      //Video Animation

      let accelamount = 0.5;
      let scrollpos = sceneOffset / pixelsPerSecond;
      let delay = sceneOffset / pixelsPerSecond;

      scene.on("update", e => {
        scrollpos = (e.scrollPos + sceneOffset) / pixelsPerSecond;
      });

      setInterval(() => {
        delay += (scrollpos - delay) * accelamount;
        video.currentTime = delay;
      }, timeToUpdateFrames);


      //TEXT ANIMATION

      // =require content1Anim.js
      // =require content2Anim.js
      // =require content3Anim.js
      // =require content4Anim.js
      // =require content7Anim.js
      // =require content8Anim.js
      // =require content9Anim.js
      // =require content11Anim.js
      // =require content12Anim.js
      // =require content13Anim.js
      // =require content22Anim.js
      // =require content23Anim.js
      // =require content24Anim.js
      // =require content25Anim.js
      // =require content26Anim.js
      // =require content27Anim.js
      // =require content28Anim.js
      // =require content29Anim.js
      // =require content31Anim.js
      // =require content32Anim.js
      // =require content33Anim.js
      // =require content34Anim.js
      // =require content35Anim.js
      // =require content36Anim.js
      // =require bannerAnim.js
    }
  }
});