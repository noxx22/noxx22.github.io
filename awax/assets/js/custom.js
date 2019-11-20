$(function () {

    //======TEAM-CAROUSEL======

    $('.team-carousel').owlCarousel({

        autoplay          : true,
        autoplayHoverPause: true,
        smartSpeed        : 1000,
        loop              : true,
        nav               : false,
        margin            : 30,
        dots              : false,
        autoWidth         : false,
        responsiveClass   : true,
        responsive        : {
            0  : {
                items    : 1,
                dots     : true,
                center   : true,
                autoWidth: false,
                margin   : 20
            },
            640: {
                items    : 2,
                dots     : true,
                autoWidth: false,
                margin   : 10
            },
            992: {
                items : 3,
                margin: 20,
                dots  : true
            }

        }
    });

    //======LOGOS-CAROUSEL======

    $('.logos-carousel').owlCarousel({

        autoplay          : true,
        autoplayHoverPause: true,
        smartSpeed        : 1000,
        loop              : true,
        nav               : false,
        margin            : 30,
        dots              : false,
        autoWidth         : false,
        responsiveClass   : true,
        responsive        : {
            0  : {
                items : 2,
                margin: 10
            },
            480: {
                items : 3,
                margin: 10
            },
            576: {
                items : 4,
                margin: 10
            },
            768: {
                items : 5,
                margin: 10
            },
            992: {
                items : 6,
                margin: 20
            }

        }
    });

    //======HERO-SLIDER======

    $(".hero-slider").bxSlider({

        mode        : 'horizontal', // тип перехода между слайдами может быть 'horizontal', 'vertical', 'fade'
        captions    : false, // отображение title
        easing      : 'easeInOutQuad', // анимация слайда
        controls    : false, // отображение стрелки - вперед, назад
        startSlide  : 0, // Показ начнется с заданного слайда
        infiniteLoop: true, // показывать первый слайд за последним
        autoHover   : true, // пауза при наведении на слайд
        pager       : true, // показ кнопки пейджера
        pagerCustom : '.hero-slider-pager',
        auto        : true, // сделать автоматический переход
        autoControls: false, // показывает кнопку плей и стоп
        video       : true, // включить видео
        pause       : 4000, // время между сменой слайдов в м-сек
        speed       : 500, // длительность перехода слайда в м-сек
        useCSS      : false // CSS переходы

    });

    //======CLIENTS SLIDER======

    $(".clients-slider").bxSlider({

        mode        : 'horizontal', // тип перехода между слайдами может быть 'horizontal', 'vertical', 'fade'
        captions    : false, // отображение title
        easing      : 'easeInOutQuad', // анимация слайда
        controls    : false, // отображение стрелки - вперед, назад
        startSlide  : 0, // Показ начнется с заданного слайда
        infiniteLoop: true, // показывать первый слайд за последним
        autoHover   : true, // пауза при наведении на слайд
        pager       : true, // показ кнопки пейджера
        pagerCustom : '.clients-slider-pager',
        auto        : true, // сделать автоматический переход
        autoControls: false, // показывает кнопку плей и стоп
        video       : true, // включить видео
        pause       : 4000, // время между сменой слайдов в м-сек
        speed       : 800, // длительность перехода слайда в м-сек
        useCSS      : false // CSS переходы

    });

    //======PREMIUM SLIDER======

    $(".premium-slider").bxSlider({

        mode        : 'horizontal', // тип перехода между слайдами может быть 'horizontal', 'vertical', 'fade'
        captions    : false, // отображение title
        easing      : 'easeInOutQuad', // анимация слайда
        controls    : false, // отображение стрелки - вперед, назад
        startSlide  : 0, // Показ начнется с заданного слайда
        infiniteLoop: true, // показывать первый слайд за последним
        autoHover   : true, // пауза при наведении на слайд
        pager       : true, // показ кнопки пейджера
        pagerCustom : '.premium-slider-pager',
        auto        : false, // сделать автоматический переход
        autoControls: false, // показывает кнопку плей и стоп
        video       : true, // включить видео
        pause       : 4000, // время между сменой слайдов в м-сек
        speed       : 500, // длительность перехода слайда в м-сек
        useCSS      : false // CSS переходы

    });

    //======PROJECTS TABS======

    $("a.projects-tabs__nav-link").click(function () {

        var t_content;
        $("a.projects-tabs__nav-link").removeClass("projects-tabs__nav-link--active");
        $(this).addClass("projects-tabs__nav-link--active");

        $(".projects-tabs__content-item").hide(700);
        t_content = $(this).attr("href");
        $(t_content).show(700);

        return false
    });

    $("a.projects-tabs__nav-link:first").trigger("click");

    //======MENU TOGGLE BUTTON======

    var $menuIcon = $('.menu-icon');
    var $menu = $('.header-nav');
    var headerHeight = $('.header').innerHeight();
    var heroHeight = $('.hero').innerHeight();
    var menuHeight = heroHeight - headerHeight;
    var widq = window.matchMedia("(max-width: 1065px)");

    $(window).load(function () {

        if (widq.matches) {

            $menu.css({'display': 'none', 'height': menuHeight + 'px'});
            $menu.addClass('mobile');

        } else {

            $menu.css({'display': 'block', 'height': 'initial'});
            $menu.removeClass('mobile');
        }
    });

    $(window).resize(function () {

        var headerHeightDin = $('.header').innerHeight();
        var heroHeightDin = $('.hero').innerHeight();
        var menuHeight = heroHeightDin - headerHeightDin;

        if (widq.matches &&

            $menuIcon.hasClass('opened') &&

            $menu.hasClass('mobile')) {

            $menu.css({'display': 'block', 'height': menuHeight + 'px'});

        } else {

            if (widq.matches && $menu.hasClass('mobile')) {

                $menu.css({'display': 'none', 'height': menuHeight + 'px'});

            } else {

                if (! widq.matches) {

                    $menu.css({'display': 'block', 'height': 'initial'});
                    $menu.removeClass('mobile');
                    $menuIcon.removeClass('opened');

                } else {

                    $menu.css({'display': 'none', 'height': menuHeight + 'px'});
                    $menu.addClass('mobile');
                }
            }
        }
    });

    $menuIcon.click(function () {

        $(this).toggleClass('opened');

        if ($(this).hasClass('opened')) {

            $menu.slideDown(400);

        } else {

            $menu.slideUp(400);
        }
    });

    //======SCROLL TO TOP======

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

    //======SCROLL-TO-ID======

    $('.header-nav__link').mPageScroll2id({

        highlightClass      : "header-nav__link--active",
        forceSingleHighlight: false

    });

    //======ANIMATE NUMBER===============================


    $('.facts__number').counterUp({

        delay: 10,
        time : 1500

    });

    //======CALL-ME FORM MODAL======

    var $callMeForm = $('#call-form');

    $('#call-me-back').on('click', function () {

        $.fancybox.open({

            src     : $callMeForm,
            type    : 'inline',
            smallBtn: false

        })

    });

    $($callMeForm).submit(function () {

        return false;

    });

    var $callMeDone = $('.call-me__done');

    $('.call-me__button').on('click', function () {

        $.fancybox.close();

        $.fancybox.open({

            src     : $callMeDone,
            type    : 'inline',
            smallBtn: false
        })
    });

    //======CONTACTS FORM SUCCESS MODAL======

    $('.contacts-form').submit(function () {

        return false;
    });

    $('.contacts__button').on('click', function () {

        $.fancybox.open({

            src     : $('.contacts__report'),
            type    : 'inline',
            smallBtn: false
        })
    });

    //======FOOTER FORM SUCCESS MODAL======

    $('.footer-form').submit(function () {

        return false

    });

    $('.footer-form__button').on('click', function () {

        $.fancybox.open({

            src     : $('.footer-subscribe__report'),
            type    : 'inline',
            smallBtn: false

        })
    })

});


//===============================================


var listener = google.maps.event.addDomListener(window, 'load', init);

function init() {

    var widMap = window.matchMedia('(max-width: 768px)');
    var mobile = new google.maps.LatLng(- 37.8979, 145.008);
    var desktop = new google.maps.LatLng(- 37.8974757, 145.0052993);

    function centerMap() {

        return widMap.matches ? mobile : desktop;
    }

    var map = new google.maps.Map(document.getElementById('map'), {

        zoom            : 17,
        disableDefaultUI: true,
        center          : centerMap(widMap),
        zoomControl     : false,
        gestureHandling : 'none',
        mapTypeId       : google.maps.MapTypeId.ROADMAP,
        styles          : [
            {
                "elementType": "geometry",
                "stylers"    : [
                    {
                        "color": "#f5f5f5"
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
                "elementType": "labels.text.fill",
                "stylers"    : [
                    {
                        "color": "#616161"
                    }
                ]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers"    : [
                    {
                        "color": "#f5f5f5"
                    }
                ]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "labels.text.fill",
                "stylers"    : [
                    {
                        "color": "#bdbdbd"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers"    : [
                    {
                        "color": "#eeeeee"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers"    : [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers"    : [
                    {
                        "color": "#e5e5e5"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers"    : [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers"    : [
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.text.fill",
                "stylers"    : [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers"    : [
                    {
                        "color": "#dadada"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers"    : [
                    {
                        "color": "#616161"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers"    : [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            },
            {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers"    : [
                    {
                        "color": "#e5e5e5"
                    }
                ]
            },
            {
                "featureType": "transit.station",
                "elementType": "geometry",
                "stylers"    : [
                    {
                        "color": "#eeeeee"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers"    : [
                    {
                        "color": "#c9c9c9"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers"    : [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            }
        ]

    });

    map.addListener('bounds_changed', function () {

        size = widMap.matches ? mobile : desktop;
        map.setCenter(size);
    });

    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(- 37.8979, 145.008),
        map     : map,
        title   : 'Awax Map',
        icon    : 'assets/img/marker/awax-pin.png'
    });

}

wow = new WOW().init();
