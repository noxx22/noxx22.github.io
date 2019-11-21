"use strict";

$(function () {
    //======SLIDERS======
    $('.hero-slider').bxSlider({
        mode        : 'horizontal',
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
        pagerCustom : '.hero-slider-pager',
        auto        : true,
        // сделать автоматический переход
        autoControls: false,
        // показывает кнопку плей и стоп
        video       : true,
        // включить видео
        pause       : 4000,
        // время между сменой слайдов в м-сек
        speed       : 800,
        // длительность перехода слайда в м-сек
        useCSS      : false // CSS переходы

    }); //=======WORKS-TABS======

    $('.works__tabs').easyResponsiveTabs({
        type       : 'default',
        //Types: default, vertical, accordion
        width      : 'auto',
        //auto or any width like 600px
        fit        : false,
        // 100% fit in a container
        tabidentify: 'hor_1',
        // The tab groups identifier
        activate   : function activate(event) {
            // Callback function if tab is switched
            var $tab = $(this);
            var $info = $('#nested-tabInfo');
            var $name = $('span', $info);
            $name.text($tab.text());
            $info.show();
        }
    }); //==========OWL-CAROUSEL=====================

    $('.features-carousel').owlCarousel({
        autoplay          : true,
        autoplayHoverPause: true,
        smartSpeed        : 800,
        loop              : true,
        nav               : false,
        margin            : 30,
        dots              : false,
        responsiveClass   : true,
        dotsContainer     : '.features-carousel-dots',
        dotClass          : 'features-carousel-dot',
        responsive        : {
            0  : {
                items : 1,
                center: true,
                margin: 10,
                dots  : true
            },
            577: {
                items : 2,
                margin: 15,
                dots  : true
            },
            901: {
                items   : 3,
                dots    : false,
                loop    : true,
                autoplay: true
            }
        }
    });
    $('.team-carousel').owlCarousel({
        autoplay          : true,
        autoplayHoverPause: true,
        smartSpeed        : 800,
        loop              : true,
        nav               : false,
        margin            : 30,
        dots              : false,
        responsiveClass   : true,
        dotsContainer     : '.team-carousel-dots',
        dotClass          : 'team-carousel-dot',
        responsive        : {
            0   : {
                items : 1,
                margin: 5,
                dots  : true
            },
            510 : {
                items : 2,
                margin: 10,
                dots  : true
            },
            576 : {
                items : 2,
                margin: 15,
                dots  : true
            },
            800 : {
                items : 3,
                margin: 15,
                dots  : true
            },
            852 : {
                items : 3,
                dots  : true,
                loop  : true,
                margin: 30
            },
            1100: {
                items   : 4,
                dots    : false,
                loop    : true,
                autoplay: false
            }
        }
    }); //======SCROLL TO TOP==================================

    var $btnTop = $('.btn-top');
    $(window).on('scroll', function () {
        if ($(window).scrollTop() >= 100) {
            $btnTop.fadeIn();
        } else {
            $btnTop.fadeOut();
        }
    });
    $btnTop.on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 900);
    }); //======PAGE SCROLL TO ID==============

    $('.nav__link').mPageScroll2id({
        highlightClass      : "nav__link--active",
        forceSingleHighlight: true
    }); //======ANIMATE NUMBER===============================

    $('.facts-item__number').counterUp({
        delay: 10,
        time : 1500
    }); //======MENU TOGGLE BUTTON===========================

    var nav = $('.nav');
    var menu = $('.menu-icon');
    menu.click(function () {
        menu.toggleClass('opened');

        if (menu.hasClass('opened')) {
            nav.slideDown();
        } else {
            nav.slideUp();
        }
    });
    var wid = window.matchMedia('(max-width: 576px)');
    $(window).resize(function () {
        if (! wid.matches) {
            nav.removeAttr('style');
            menu.removeClass('opened');
        }
    });
}); //======GOOGLE MAP======

function initialize() {
    var myLatlng   = new google.maps.LatLng(53.3271878, - 3.096656, 20),
        mapOptions = {
            zoom     : 16,
            center   : new google.maps.LatLng(53.328032, - 3.094531, 16),
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            style    : [ {
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
    var map           = new google.maps.Map(document.getElementById('map'), mapOptions),
        contentString = 'Some text here',
        infowindow    = new google.maps.InfoWindow({
            content : contentString,
            maxWidth: 500
        });
    var marker = new google.maps.Marker({
        position: myLatlng,
        map     : map,
        icon    : 'assets/img/marker/pin.png'
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
wow = new WOW().init();