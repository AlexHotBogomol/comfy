const intro = document.querySelector(".intro");

const images = [
  "./assets/i/frames/iphone%20001.jpg",
  "./assets/i/frames/iphone%20002.jpg",
  "./assets/i/frames/iphone%20003.jpg",
  "./assets/i/frames/iphone%20004.jpg",
  "./assets/i/frames/iphone%20005.jpg",
  "./assets/i/frames/iphone%20006.jpg",
  "./assets/i/frames/iphone%20007.jpg",
  "./assets/i/frames/iphone%20008.jpg",
  "./assets/i/frames/iphone%20009.jpg",
  "./assets/i/frames/iphone%20010.jpg",
  "./assets/i/frames/iphone%20011.jpg",
  "./assets/i/frames/iphone%20012.jpg",
  "./assets/i/frames/iphone%20013.jpg",
  "./assets/i/frames/iphone%20014.jpg",
  "./assets/i/frames/iphone%20015.jpg",
  "./assets/i/frames/iphone%20016.jpg",
  "./assets/i/frames/iphone%20017.jpg",
  "./assets/i/frames/iphone%20018.jpg",
  "./assets/i/frames/iphone%20019.jpg",
  "./assets/i/frames/iphone%20020.jpg",
  "./assets/i/frames/iphone%20021.jpg",
  "./assets/i/frames/iphone%20022.jpg",
  "./assets/i/frames/iphone%20023.jpg",
  "./assets/i/frames/iphone%20024.jpg",
  "./assets/i/frames/iphone%20025.jpg",
  "./assets/i/frames/iphone%20026.jpg",
  "./assets/i/frames/iphone%20027.jpg",
  "./assets/i/frames/iphone%20028.jpg",
  "./assets/i/frames/iphone%20029.jpg",
  "./assets/i/frames/iphone%20030.jpg",
  "./assets/i/frames/iphone%20031.jpg",
  "./assets/i/frames/iphone%20032.jpg",
  "./assets/i/frames/iphone%20033.jpg",
  "./assets/i/frames/iphone%20034.jpg",
  "./assets/i/frames/iphone%20035.jpg",
  "./assets/i/frames/iphone%20036.jpg",
  "./assets/i/frames/iphone%20037.jpg",
  "./assets/i/frames/iphone%20038.jpg",
  "./assets/i/frames/iphone%20039.jpg",
  "./assets/i/frames/iphone%20040.jpg",
  "./assets/i/frames/iphone%20041.jpg",
  "./assets/i/frames/iphone%20042.jpg",
  "./assets/i/frames/iphone%20043.jpg",
  "./assets/i/frames/iphone%20044.jpg",
  "./assets/i/frames/iphone%20045.jpg",
  "./assets/i/frames/iphone%20046.jpg",
  "./assets/i/frames/iphone%20047.jpg",
  "./assets/i/frames/iphone%20048.jpg",
  "./assets/i/frames/iphone%20049.jpg",
  "./assets/i/frames/iphone%20050.jpg",
  "./assets/i/frames/iphone%20051.jpg",
  "./assets/i/frames/iphone%20052.jpg",
  "./assets/i/frames/iphone%20053.jpg",
  "./assets/i/frames/iphone%20054.jpg",
  "./assets/i/frames/iphone%20055.jpg",
  "./assets/i/frames/iphone%20056.jpg",
  "./assets/i/frames/iphone%20057.jpg",
  "./assets/i/frames/iphone%20058.jpg",
  "./assets/i/frames/iphone%20059.jpg",
  "./assets/i/frames/iphone%20060.jpg",
  "./assets/i/frames/iphone%20061.jpg",
  "./assets/i/frames/iphone%20062.jpg",
  "./assets/i/frames/iphone%20063.jpg",
  "./assets/i/frames/iphone%20064.jpg",
  "./assets/i/frames/iphone%20065.jpg",
  "./assets/i/frames/iphone%20066.jpg",
  "./assets/i/frames/iphone%20067.jpg",
  "./assets/i/frames/iphone%20068.jpg",
  "./assets/i/frames/iphone%20069.jpg",
  "./assets/i/frames/iphone%20070.jpg",
  "./assets/i/frames/iphone%20071.jpg",
  "./assets/i/frames/iphone%20072.jpg",
  "./assets/i/frames/iphone%20073.jpg",
  "./assets/i/frames/iphone%20074.jpg",
  "./assets/i/frames/iphone%20075.jpg",
  "./assets/i/frames/iphone%20076.jpg",
  "./assets/i/frames/iphone%20077.jpg",
  "./assets/i/frames/iphone%20078.jpg",
  "./assets/i/frames/iphone%20079.jpg",
  "./assets/i/frames/iphone%20080.jpg",
  "./assets/i/frames/iphone%20081.jpg",
  "./assets/i/frames/iphone%20082.jpg",
  "./assets/i/frames/iphone%20083.jpg",
  "./assets/i/frames/iphone%20084.jpg",
  "./assets/i/frames/iphone%20085.jpg",
  "./assets/i/frames/iphone%20086.jpg",
  "./assets/i/frames/iphone%20087.jpg",
  "./assets/i/frames/iphone%20088.jpg",
  "./assets/i/frames/iphone%20089.jpg",
  "./assets/i/frames/iphone%20090.jpg",
  "./assets/i/frames/iphone%20091.jpg",
  "./assets/i/frames/iphone%20092.jpg",
  "./assets/i/frames/iphone%20093.jpg",
  "./assets/i/frames/iphone%20094.jpg",
  "./assets/i/frames/iphone%20095.jpg",
  "./assets/i/frames/iphone%20096.jpg",
  "./assets/i/frames/iphone%20097.jpg",
  "./assets/i/frames/iphone%20098.jpg",
  "./assets/i/frames/iphone%20099.jpg",
  "./assets/i/frames/iphone%20100.jpg",
];

// TweenMax can tween any property of any object. We use this object to cycle through the array
const obj = {curImg: 0};

// create tween
const tween = TweenMax.to(obj, 0.033,
  {
    curImg: images.length - 1,	// animate propery curImg to number of images
    roundProps: "curImg",				// only integers so it can be used as an array index
    immediateRender: true,			// load first image automatically
    ease: Linear.easeNone,			// show every image the same ammount of time
    onUpdate: function () {
      $("#myimg").attr("src", images[obj.curImg]); // set the image source
    }
  }
);

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
  triggerElement: intro,
  triggerHook: 0,
  duration: 3000
})
  .addIndicators()
  .setTween(tween)
  .setPin(intro)
  .addTo(controller);
