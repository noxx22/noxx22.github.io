"use strict";

$(function () {
  /*====== PRELOADER ======*/
  $("#preloader").delay(1000).fadeOut("slow");
  $("body").css({
    "background-color": "#ffffff"
  });
  /*======Gallery Hover======*/

  $('.gallery-item__inner').hover(function () {
    $(this).find(':last-child').animate({
      left  : 0,
      top   : 0,
      right : 0,
      bottom: 0
    }, 500);
    $(this).find(':last-child').children().animate({
      opacity: 1
    }, 200);
  }, function () {
    $(this).find(':last-child').children().animate({
      opacity: 0
    }, 100, function () {
      $(this).parent().animate({
        left  : '+=100%',
        top   : '+=100%',
        right : '+=100%',
        bottom: '+=100%'
      }, 500);
    });
  });
});
var wow = new WOW({
  animateClass: 'animate__animated'
});
wow.init();