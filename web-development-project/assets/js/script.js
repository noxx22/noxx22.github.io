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
          0  : {
              items : 1,
              margin: 10,
              dots  : true
      },
      361    : {
          items : 1,
          margin: 10,
          dots  : true
      },
      576    : {
          items : 2,
          margin: 15,
          dots  : true
      },
          992: {
              items : 3,
              dots  : true,
              loop  : true,
              margin: 30
      }
    }
  });
    /*======SCROLL-TO-ID======*/
    
    $("a[href^='#']").mPageScroll2id({
        highlightClass      : "nav-link-active",
        forceSingleHighlight: false,
        offset              : 60
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
    /*====== Sticky Navigation ======*/
    
    var windowWidth = window.matchMedia('(min-width: 992px)');
    var header = $('.header');
    
    function stickyNav() {
        var scrollWindow = $(window).scrollTop();
        var headerHeight = header.outerHeight();
        
        if (scrollWindow > 0 && windowWidth.matches) {
            header.css({
                'position'     : 'fixed',
                'top'          : 0,
                'border-bottom': '1px solid #dddddd'
            });
            $('.hero').css({
                'margin-top': headerHeight + 'px'
            });
        } else {
            header.removeAttr('style');
            $('.hero').css({
                'margin-top': 0
            });
        }
    }
    
    stickyNav();
    $(window).on('scroll resize', function () {
        stickyNav();
    });
});
new WOW().init();