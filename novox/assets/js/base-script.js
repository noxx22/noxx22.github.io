"use strict";

$(function () {
  /*====== PRELOADER ======*/
  $("#preloader").delay(1000).fadeOut("slow");
  $("body").css({
    "background-color": "#ffffff"
  });
});
var wow = new WOW({
  animateClass: 'animate__animated'
});
wow.init();