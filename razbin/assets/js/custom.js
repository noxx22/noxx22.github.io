$(function () {

    //==========HAMBURGER==========

    var nav = $('.nav__list');
    var menu = $('.menu-icon');

    menu.click(function () {

        menu.toggleClass('opened');

        if (menu.hasClass('opened')) {

            nav.slideDown();

        } else {

            nav.slideUp();

        }

    });

    var wid = window.matchMedia('(max-width: 768px)');

    $(window).resize(function () {

        if (! wid.matches) {

            nav.removeAttr('style');
            menu.removeClass('opened');

        }

    });

    //======HOME-BANNER SLIDER======

    $(".home-banner__slider").bxSlider({

        mode          : 'fade', //'horizontal', 'vertical', 'fade'
        captions      : false, //title
        easing        : 'easeInOutQuad', //animation type
        controls      : true, // show previous, next buttons
        startSlide    : 0,
        infiniteLoop  : true,
        autoHover     : true,
        adaptiveHeight: true,
        pager         : false, //show pager
        pagerCustom   : '', //pager Jquery object
        auto          : true,
        autoControls  : false, //show play and stop buttons
        video         : true, // option for video - if video present
        pause         : 4000,
        speed         : 700,
        useCSS        : false

    });

    //======TESTIMONIALS SLIDER======

    $(".what-slider").bxSlider({

        mode          : 'fade', //'horizontal', 'vertical', 'fade'
        captions      : false, //title
        easing        : 'easeInOutQuad', //animation type
        controls      : false, // show previous, next buttons
        startSlide    : 0,
        infiniteLoop  : true,
        autoHover     : true,
        adaptiveHeight: true,
        pager         : true, //show pager
        pagerCustom   : '.what-slider-pager', //pager Jquery object
        auto          : true,
        autoControls  : false, //show play and stop buttons
        video         : true, // option for video - if video present
        pause         : 4000,
        speed         : 700,
        useCSS        : false

    });

    //============SCROLL-TO-ID=============

    $('.nav__link').mPageScroll2id({

        highlightClass      : "nav__link--active",
        forceSingleHighlight: false

    });

    //======SCROLL TO TOP==================================

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
        }, 900)

    });

    $('.facts-item__counter').counterUp({
        delay: 20,
        time : 2500
    });

    //======CLIENTS-CAROUSEL======

    $('.clients-carousel').owlCarousel({
        autoplay          : true,
        autoplayHoverPause: true,
        smartSpeed        : 1000,
        loop              : true,
        nav               : false,
        margin            : 30,
        responsiveClass   : true,
        autoWidth         : false,
        responsive        : {
            0   : {
                items : 2,
                margin: 30
            },
            480 : {
                items : 3,
                margin: 30
            },
            576 : {
                items : 4,
                margin: 30
            },
            768 : {
                items : 4,
                margin: 30
            },
            992 : {
                items : 5,
                margin: 30
            },
            1200: {
                items : 6,
                margin: 30
            }
        }
    });

    //======TEAM-CAROUSEL======

    $('.team-carousel').owlCarousel({
        autoplay          : true,
        autoplayHoverPause: true,
        smartSpeed        : 1000,
        loop              : true,
        nav               : false,
        margin            : 30,
        dots              : true,
        dotsContainer     : '.team-carousel-pager',
        dotClass          : 'team-dot',
        responsiveClass   : true,
        autoWidth         : false,
        responsive        : {
            0   : {
                items : 1,
                margin: 30
            },
            380 : {
                items    : 2,
                autoWidth: true,
                center   : true,
                margin   : 20
            },
            480 : {
                items : 2,
                margin: 30
            },
            700 : {
                items : 3,
                margin: 30
            },
            992 : {
                items : 4,
                margin: 30
            },
            1200: {
                items : 4,
                margin: 30
            }
        }
    });

    //======PROJECTS TABS======

    $("a.projects__nav-link").click(function () {

        var t_content;

        $("a.projects__nav-link").removeClass("projects__nav-link--active");
        $(this).addClass("projects__nav-link--active");

        $(".projects-content__item").hide(700);
        t_content = $(this).attr("href");
        $(t_content).show(700);

        return false

    });

    $("a.projects__nav-link:first").trigger("click");

    //======START ACCORDION======

    $(".start-acc__item-inner").on("click", function () {

        var $this = $(this);

        if (! $this.hasClass("active")) {
            $(".start-acc__desc").slideUp();
            $(".start-acc__item-inner").removeClass("active");
        }

        $this.toggleClass("active");
        $this.next().slideToggle();

    });

});

new WOW().init();

//======GOOGLE MAP======

function initialize() {
    var myLatlng = new google.maps.LatLng(53.3271878, - 3.096656, 20),
        mapOptions = {
            zoom     : 16,
            center   : new google.maps.LatLng(53.328032, - 3.094531, 16),
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            style    : [
                {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers"    : [
                        {
                            "color": "#e9e9e9"
                        },
                        {
                            "lightness": 17
                        }
                    ]
                },
                {
                    "featureType": "landscape",
                    "elementType": "geometry",
                    "stylers"    : [
                        {
                            "color": "#f5f5f5"
                        },
                        {
                            "lightness": 20
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.fill",
                    "stylers"    : [
                        {
                            "color": "#ffffff"
                        },
                        {
                            "lightness": 17
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.stroke",
                    "stylers"    : [
                        {
                            "color": "#ffffff"
                        },
                        {
                            "lightness": 29
                        },
                        {
                            "weight": 0.2
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "geometry",
                    "stylers"    : [
                        {
                            "color": "#ffffff"
                        },
                        {
                            "lightness": 18
                        }
                    ]
                },
                {
                    "featureType": "road.local",
                    "elementType": "geometry",
                    "stylers"    : [
                        {
                            "color": "#ffffff"
                        },
                        {
                            "lightness": 16
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "geometry",
                    "stylers"    : [
                        {
                            "color": "#f5f5f5"
                        },
                        {
                            "lightness": 21
                        }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "geometry",
                    "stylers"    : [
                        {
                            "color": "#dedede"
                        },
                        {
                            "lightness": 21
                        }
                    ]
                },
                {
                    "elementType": "labels.text.stroke",
                    "stylers"    : [
                        {
                            "visibility": "on"
                        },
                        {
                            "color": "#ffffff"
                        },
                        {
                            "lightness": 16
                        }
                    ]
                },
                {
                    "elementType": "labels.text.fill",
                    "stylers"    : [
                        {
                            "saturation": 36
                        },
                        {
                            "color": "#333333"
                        },
                        {
                            "lightness": 40
                        }
                    ]
                },
                {
                    "elementType": "labels.icon",
                    "stylers"    : [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "transit",
                    "elementType": "geometry",
                    "stylers"    : [
                        {
                            "color": "#f2f2f2"
                        },
                        {
                            "lightness": 19
                        }
                    ]
                },
                {
                    "featureType": "administrative",
                    "elementType": "geometry.fill",
                    "stylers"    : [
                        {
                            "color": "#fefefe"
                        },
                        {
                            "lightness": 20
                        }
                    ]
                },
                {
                    "featureType": "administrative",
                    "elementType": "geometry.stroke",
                    "stylers"    : [
                        {
                            "color": "#fefefe"
                        },
                        {
                            "lightness": 17
                        },
                        {
                            "weight": 1.2
                        }
                    ]
                }
            ]

        };

    var map = new google.maps.Map(document.getElementById('map'), mapOptions),
        contentString = 'Place your text here',
        infowindow = new google.maps.InfoWindow({
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