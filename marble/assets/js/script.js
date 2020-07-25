"use strict";

$(function () {
    /*====== Preloader ======*/
    $('#loader').delay(1500).fadeOut('slow');
    $('body').css({
        'background-color': '#ffffff'
    });
    /*====== CAROUSEL-TESTIMONIALS ======*/
    
    $(".carousel-testimonials").slick({
        dots          : false,
        arrows        : false,
        infinite      : true,
        slidesToShow  : 1,
        slidesToScroll: 1,
        fade          : false,
        autoplay      : true,
        autoplaySpeed : 5000,
        speed         : 1000
    });
    /*====== SCROLL TO TOP ======*/
    
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
    });
    /*===== HAMBURGER ======*/
    
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
    var wid = window.matchMedia('(min-width: 768px)');
    $(window).resize(function () {
        if (wid.matches) {
            nav.removeAttr('style');
            menu.removeClass('opened');
        }
    });
});