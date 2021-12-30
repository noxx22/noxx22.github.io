"use strict";

$(function () {
  /*====== PRELOADER ======*/
  $("#preloader").delay(1000).fadeOut("slow");
  $("body").css({
    "background-color": "#ffffff"
  });
  /*====== MFP-VIDEO ======*/

  $('.btn-welcome-video').magnificPopup({
    type: 'iframe'
  });
  /*====== MFP-IMAGES ======*/

  $('.gallery-home-slider__overlay a').magnificPopup({
    type: 'image'
  });
  /*====== Jquery Countdown ======*/

  $('.event-time__outer').countdown({
    until: '+73d +00h +00m +10s',
    format: 'DHMS',
    padZeroes: true
  });
});
var wow = new WOW({
  animateClass: 'animate__animated' // animation css class (default is animated)

});
wow.init();
/*====== TINY-SLIDER ======*/

/*=== Gallery-home-slider ===*/

var gallerySlider = tns({
  container: '.gallery-home-slider',
  controls: false,
  nav: false,
  speed: 1000,
  autoplayHoverPause: true,
  mouseDrag: false,
  autoplayButtonOutput: false,
  autoplay: true,
  responsive: {
    320: {
      edgePadding: 15,
      gutter: 30,
      items: 1,
      slideBy: 1
    },
    480: {
      items: 2,
      gutter: 15
    },
    768: {
      items: 3
    },
    992: {
      items: 1,
      slideBy: 1,
      gutter: 15
    },
    1366: {
      items: 2,
      slideBy: 1,
      gutter: 15
    }
  }
});
/*=== Testimonials slider ===*/

var sliderTestimonials = tns({
  container: '.testi-slider',
  controls: false,
  nav: true,
  navPosition: 'bottom',
  navContainer: '.testi-slider-dots',
  speed: 1000,
  autoplayTimeout: 6000,
  autoplayHoverPause: true,
  mouseDrag: false,
  autoplayButtonOutput: false,
  autoplay: true,
  responsive: {
    320: {
      edgePadding: 0,
      gutter: 20,
      items: 1,
      slideBy: 1
    }
  }
});
/*=== News-Home slider ===*/

var sliderNews = tns({
  container: '.news-home-slider',
  controls: false,
  nav: true,
  navPosition: 'bottom',
  navContainer: '.news-home-dots',
  speed: 1000,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  mouseDrag: false,
  autoplayButtonOutput: false,
  autoplay: true,
  autoWidth: false,
  responsive: {
    320: {
      edgePadding: 0,
      gutter: 30,
      items: 1,
      slideBy: 1
    },
    480: {
      edgePadding: 0,
      gutter: 15,
      items: 2,
      slideBy: 1
    },
    992: {
      edgePadding: 0,
      gutter: 30,
      items: 3,
      slideBy: 2
    }
  }
});