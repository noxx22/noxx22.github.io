"use strict";

$(function () {
  /*====== Preloader ======*/
  $(".preloader").delay(1000).fadeOut("slow");
  $('body').css({
    'background-color': 'initial'
  });
  $('.body-bg').css({
    'background-color': '#ececec'
  });
  /*====== Sticky Navigation ======*/
  
  var navbar = $('.navbar-outer');
  
  function stickyNav() {
    var scrollWindow = $(window).scrollTop();
    
    if (scrollWindow > 55) {
      navbar.css({
        'position'        : 'fixed',
        'top'             : 0,
        'background-color': '#34055a'
      });
    } else {
      navbar.removeAttr('style');
    }
  }
  
  stickyNav();
  $(window).on('scroll', function () {
    stickyNav();
  });
  /*====== MFP-VIDEO ======*/
  
  $('.facts-video__link, .btn-review-look, .review-video__link').magnificPopup({
    type: 'iframe'
  });
});
var wow = new WOW({
  animateClass: 'animate__animated'
});
wow.init();