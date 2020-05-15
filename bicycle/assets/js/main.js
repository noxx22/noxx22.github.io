$(function () {

    /*======TWITTER CAROUSEL======*/

    $(".twitter-carousel").slick({

        dots          : true,
        arrows        : false,
        infinite      : true,
        appendDots    : '.twitter-dots',
        slidesToShow  : 1,
        slidesToScroll: 1,
        fade          : true,
        autoplay      : true,
        autoplaySpeed : 5000,
        speed         : 1000

    });


    /*======TOGGLE MENU======*/

    $('.icon-menu-bars').on('click', function () {

        $('.navbar-nav__left, .navbar-nav__right').fadeToggle();

    });

    var wid = window.matchMedia('(min-width: 768px)');

    $(window).resize(function () {

        if (wid.matches) {

            $('.navbar-nav__left, .navbar-nav__right').removeAttr('style');

        }

    });

    /*======SMOOTH SCROLL======*/

    $(".navbar-nav__link, a[href^='#']").mPageScroll2id({

        highlightSelector   : ".active",
        forceSingleHighlight: false

    });

    var $btnTop = $('.btn-top');

    $(window).on('scroll', function () {

        if ($(window).scrollTop() >= 100) {

            $btnTop.fadeIn();

        } else {

            $btnTop.fadeOut();

        }

    });

});

var wow = new WOW({

    animateClass: 'animate__animated'

});

wow.init();