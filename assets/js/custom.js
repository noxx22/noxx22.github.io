$(function () {

    $('.portfolio-item:odd').addClass('item--odd');

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

    var nav = $('.header-nav');
    var menu = $('.menu-icon');

    menu.click(function () {

        menu.toggleClass('opened');

        if (menu.hasClass('opened')) {

            nav.slideDown();

        } else {

            nav.slideUp();

        }

        //======MOBILE MENU BUTTON

    });

    var wid = window.matchMedia('(max-width: 576px)');

    $(window).resize(function () {

        if (! wid.matches) {

            nav.removeAttr('style');
            menu.removeClass('opened');

        }

    });

    //======PAGE SCROLL TO ID==============

    $('.header-nav__link').mPageScroll2id({

        highlightClass      : "nav__link--active",
        forceSingleHighlight: true

    });


});