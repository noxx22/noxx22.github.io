$(function () {

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

    //======CAROUSEL======

    $('.logo-carousel').owlCarousel({

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
                margin: 30
            },
            480: {
                items : 3,
                margin: 30
            },
            768: {
                items : 4,
                margin: 30
            }
        }
    });

    //==========HAMBURGER==========

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

    var wid = window.matchMedia('(max-width: 768px)');

    $(window).resize(function () {

        if (! wid.matches) {

            nav.removeAttr('style');
            menu.removeClass('opened');

        }

    });

});

new WOW().init();