"use strict";

$(document).ready(function () {
    /*======PRELOADER======*/
    $("#preloader").delay(1000).fadeOut("slow");
    $('body').css({
        'background-color': '#ffffff'
    });
    /*======ACCORDION======*/

    $(".tabs-menu li").click(function () {
        if (! $(this).hasClass("active")) {
            var i = $(this).index();
            $(".tabs-menu li.active").removeClass("active");
            $(".tabs .active").hide().removeClass("active");
            $(this).addClass("active");
            $($(".tabs").children(".info")[ i ]).fadeIn(1000).addClass("active");
    }
    });
    /*======TEAM-CAROUSEL======*/

  $('.team-carousel').owlCarousel({
      autoplay        : true,
    autoplayHoverPause: true,
      smartSpeed      : 1000,
      loop            : true,
      nav             : false,
      margin          : 30,
      dots            : true,
      responsiveClass : true,
      autoWidth       : false,
      dotsContainer   : '.team-carousel-pager',
      dotClass        : 'team-dot',
      responsive      : {
          0: {
              items : 1,
              margin: 10,
              dots  : true
      },
      361: {
          items : 1,
          margin: 10,
          dots  : true
      },
      576: {
          items : 2,
          margin: 15,
          dots  : true
      },
      853: {
          items : 3,
          dots  : true,
          loop  : true,
          margin: 15
      }
    }
  });
    /*======SCROLL-TO-ID======*/

    $(".nav-link, a[href^='#']").mPageScroll2id({
        highlightClass      : "nav-link-active",
        forceSingleHighlight: false
    });
    /*======SCROLL TO TOP======*/

  var $btnTop = $('.btn-top');
  $(window).on('scroll', function () {
    if ($(window).scrollTop() >= 100) {
      $btnTop.fadeIn();
    } else {
      $btnTop.fadeOut();
    }
  });
});
new WOW().init();