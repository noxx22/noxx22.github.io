"use strict";

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
        }, 900);
    }); //==========HAMBURGER==========

    var nav = $('.header__nav');
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