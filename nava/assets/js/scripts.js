$(function () {

    //==========HAMBURGER==========

    var nav = $('.navbar-nav');
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

    //======SCROLL-TO-ID======

    $('.nav-link').mPageScroll2id({

        highlightClass      : "nav-link--active",
        forceSingleHighlight: false

    });

});

new WOW().init();