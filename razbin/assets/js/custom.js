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