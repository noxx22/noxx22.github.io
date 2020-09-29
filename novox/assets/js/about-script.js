"use strict";

$(function () {
  /*====== PRELOADER ======*/
  $("#preloader").delay(1000).fadeOut("slow");
  $("body").css({
    "background-color": "#ffffff"
  });
  /*====== COUNTER-UP ======*/

  $('.facts-item__data').counterUp({
    delay: 10,
    time : 1500
  });
});
var wow = new WOW({
  animateClass: 'animate__animated' // animation css class (default is animated)

});
wow.init();
/*====== TINY-SLIDER ======*/

var sliderTestimonialsAbout = tns({
  container           : '.testi-about-slider',
  controls            : false,
  nav                 : true,
  navPosition         : 'bottom',
  navContainer        : '.testi-slider-dots',
  speed               : 1000,
  autoplayTimeout     : 6000,
  autoplayHoverPause  : true,
  mouseDrag           : false,
  autoplayButtonOutput: false,
  autoplay            : true,
  responsive          : {
    320: {
      edgePadding: 0,
      gutter     : 20,
      items      : 1,
      slideBy    : 1
    }
  }
});
var sliderLogos = tns({
  container           : '.logos-slider',
  controls            : false,
  nav                 : false,
  speed               : 1000,
  autoplayTimeout     : 6000,
  autoplayHoverPause  : true,
  mouseDrag           : false,
  autoplayButtonOutput: false,
  autoplay            : true,
  responsive          : {
    320 : {
      edgePadding: 0,
      gutter     : 20,
      items      : 1,
      slideBy    : 1
    },
    370 : {
      edgePadding: 0,
      gutter     : 20,
      items      : 2,
      slideBy    : 1
    },
    576 : {
      edgePadding: 0,
      gutter     : 20,
      items      : 3,
      slideBy    : 1
    },
    768 : {
      edgePadding: 0,
      gutter     : 20,
      items      : 4,
      slideBy    : 1
    },
    992 : {
      edgePadding: 0,
      gutter     : 20,
      items      : 5,
      slideBy    : 2
    },
    1200: {
      edgePadding: 0,
      gutter     : 20,
      items      : 6,
      slideBy    : 3
    }
  }
});