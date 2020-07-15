"use strict";

$(function () {
  //======OWL-CAROUSEL===================================
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
          0   : {
              items : 1,
              margin: 10,
              dots  : true
      },
          361 : {
              items : 1,
              margin: 10,
              dots  : true
      },
          576 : {
              items : 2,
              margin: 15,
              dots  : true
      },
          853 : {
              items: 3,
              dots : true,
              loop : true,
        margin: 15
      },
          1200: {
              items : 4,
              dots  : true,
              loop  : true,
              margin: 15
      }
    }
  });
  $('.blog-carousel').owlCarousel({
      autoplay        : true,
    autoplayHoverPause: true,
      smartSpeed      : 1000,
      loop            : true,
      nav             : false,
      margin          : 30,
      dots            : true,
      responsiveClass : true,
      autoWidth       : false,
      dotsContainer   : '.blog-pager',
      dotClass        : 'blog-dot',
      responsive      : {
          0   : {
              items : 1,
              margin: 30,
              dots  : true
      },
          361 : {
              items : 1,
              margin: 10,
              dots  : true
      },
          576 : {
              items : 2,
              margin: 10,
              dots  : true
      },
          853 : {
              items : 3,
              dots  : true,
              loop  : true,
              margin: 20,
              center: false,
        autoplay: true
      },
          1100: {
              items : 3,
              dots  : false,
              loop  : true,
              margin: 30,
        autoplay: true
      }
    }
  });
  $('.clients-carousel').owlCarousel({
      autoplay        : true,
    autoplayHoverPause: true,
      smartSpeed      : 1000,
      loop            : true,
      nav             : false,
      margin          : 30,
      responsiveClass : true,
      autoWidth       : false,
      responsive      : {
          0: {
              items: 2,
        margin: 30
      },
      480: {
          items : 3,
          margin: 30
      },
      576: {
          items : 4,
          margin: 30
      },
      768: {
          items : 4,
          margin: 30
      },
      853: {
          items : 5,
          margin: 30
      },
      992: {
          items : 6,
          margin: 30
      }
    }
  }); //======BX-SLIDER======================================

  $('.testi-slider').bxSlider({
      mode        : 'fade',
    // тип перехода между слайдами может быть 'horizontal', 'vertical', 'fade'
      captions    : false,
    // отображение title
      easing      : 'easeInOutQuad',
    // анимация слайда
      controls    : false,
    // отображение стрелки - вперед, назад
      startSlide  : 0,
    // Показ начнется с заданного слайда
      infiniteLoop: true,
    // показывать первый слайд за последним
      autoHover   : true,
    // пауза при наведении на слайд
      pager       : true,
    // показ номера страницы
      pagerCustom : '.testi-pager',
      auto        : true,
    // сделать автоматический переход
      autoControls: false,
    // показывает кнопку плей и стоп
      video       : true,
    // включить видео
      pause       : 4000,
    // время между сменой слайдов в м-сек
      speed       : 500,
    // длительность перехода слайда в м-сек
      useCSS      : false // CSS переходы

  }); //======SCROLL TO TOP==================================

  var $btnTop = $('.btn-top');
  $(window).on('scroll', function () {
    if ($(window).scrollTop() >= 100) {
      $btnTop.fadeIn();
    } else {
      $btnTop.fadeOut();
    }
  });
    /*======STICKY NAVIGATION======*/

    var widx = window.matchMedia("(min-width:852px)");
    $(window).load(function () {
        if (widx.matches && $(window).scrollTop() > 0) {
            $('.header').css({
                'position'        : 'fixed',
                'top'             : 0,
                'background-color': '#000000',
                'padding-top'     : '20px'
            });
        }
    });
    $(window).on('scroll resize', function () {
        var scrollWindow = $(this).scrollTop();

        if (scrollWindow > 0 && widx.matches) {
            $('.header').css({
                'position'        : 'fixed',
                'top'             : 0,
                'background-color': '#000000',
                'padding-top'     : '20px'
            });
        } else {
            $('.header').css({
                'position'        : 'absolute',
                'top'             : 'initial',
                'background-color': 'transparent',
                'padding-top'     : '40px'
            });
        }
  }); //============SCROLL-TO-ID=============

    $("a[href^='#']").mPageScroll2id({
        highlightClass  : "header-nav__link--active",
    forceSingleHighlight: false,
        offset          : 60
  }); //==========HAMBURGER==========

  var nav = $('.header-nav');
  var menu = $('.menu-icon');
  menu.click(function () {
    menu.toggleClass('opened');

    if (menu.hasClass('opened')) {
      nav.slideDown();
    } else {
      nav.slideUp();
    }
  });
    var wid = window.matchMedia('(max-width: 852px)');
  $(window).resize(function () {
      if (! wid.matches) {
      nav.removeAttr('style');
      menu.removeClass('opened');
    }
  });
}); //============GOOGLE MAP===============

function initialize() {
    var myLatlng = new google.maps.LatLng(40.781922, - 73.9718111),
      mapOptions = {
          zoom             : 16,
          center           : myLatlng,
          fullscreenControl: false,
          zoomControl      : false,
          mapTypeId        : google.maps.MapTypeId.ROADMAP,
          style            : [ {
              "featureType": "water",
              "elementType": "geometry",
              "stylers"    : [ {
                  "color": "#e9e9e9"
              }, {
                  "lightness": 17
              } ]
          }, {
              "featureType": "landscape",
              "elementType": "geometry",
              "stylers"    : [ {
                  "color": "#f5f5f5"
              }, {
                  "lightness": 20
              } ]
          }, {
              "featureType": "road.highway",
              "elementType": "geometry.fill",
              "stylers"    : [ {
                  "color": "#ffffff"
              }, {
                  "lightness": 17
              } ]
          }, {
              "featureType": "road.highway",
              "elementType": "geometry.stroke",
              "stylers"    : [ {
                  "color": "#ffffff"
              }, {
                  "lightness": 29
              }, {
                  "weight": 0.2
              } ]
          }, {
              "featureType": "road.arterial",
              "elementType": "geometry",
              "stylers"    : [ {
                  "color": "#ffffff"
              }, {
                  "lightness": 18
              } ]
          }, {
              "featureType": "road.local",
              "elementType": "geometry",
              "stylers"    : [ {
                  "color": "#ffffff"
              }, {
                  "lightness": 16
              } ]
          }, {
              "featureType": "poi",
              "elementType": "geometry",
              "stylers"    : [ {
                  "color": "#f5f5f5"
              }, {
                  "lightness": 21
              } ]
          }, {
              "featureType": "poi.park",
              "elementType": "geometry",
              "stylers"    : [ {
                  "color": "#dedede"
              }, {
                  "lightness": 21
              } ]
          }, {
              "elementType": "labels.text.stroke",
              "stylers"    : [ {
                  "visibility": "on"
              }, {
                  "color": "#ffffff"
              }, {
                  "lightness": 16
              } ]
          }, {
              "elementType": "labels.text.fill",
              "stylers"    : [ {
                  "saturation": 36
              }, {
                  "color": "#333333"
              }, {
                  "lightness": 40
              } ]
          }, {
              "elementType": "labels.icon",
              "stylers"    : [ {
                  "visibility": "off"
              } ]
          }, {
              "featureType": "transit",
              "elementType": "geometry",
              "stylers"    : [ {
                  "color": "#f2f2f2"
              }, {
                  "lightness": 19
              } ]
          }, {
              "featureType": "administrative",
              "elementType": "geometry.fill",
              "stylers"    : [ {
                  "color": "#fefefe"
              }, {
                  "lightness": 20
              } ]
          }, {
              "featureType": "administrative",
              "elementType": "geometry.stroke",
              "stylers"    : [ {
                  "color": "#fefefe"
              }, {
                  "lightness": 17
              }, {
                  "weight": 1.2
              } ]
          } ]
      };
  var map = new google.maps.Map(document.getElementById('map'), mapOptions),
      contentString = 'Some text here',
      infowindow = new google.maps.InfoWindow({
          content : contentString,
          maxWidth: 500
      });
  var marker = new google.maps.Marker({
    position: myLatlng,
      map   : map,
      icon  : 'assets/img/map/pin.png'
  });
  google.maps.event.addListener(marker, 'click', function () {
    infowindow.open(map, marker);
  });
  google.maps.event.addDomListener(window, "resize", function () {
    var center = map.getCenter();
    google.maps.event.trigger(map, "resize");
    map.setCenter(center);
  });
}

google.maps.event.addDomListener(window, 'load', initialize);
new WOW().init();