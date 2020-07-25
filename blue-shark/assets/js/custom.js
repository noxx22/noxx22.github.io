"use strict";

$(document).ready(function () {
    /*======SKILL CHARTS ANIMATION======*/
    $("#skills-circle1").circliful({
        animation            : 1,
        animationStep        : 5,
        animateInView        : true,
        foregroundBorderWidth: 15,
        backgroundBorderWidth: 15,
        backgroundColor      : '#ececec',
        fontColor            : '#636363',
        percent              : 90,
        percentageTextSize   : 32,
        textAdditionalCss    : 'font-weight: light'
    });
    $("#skills-circle2").circliful({
        animation            : 1,
        animationStep        : 5,
        animateInView        : true,
        foregroundBorderWidth: 15,
        backgroundBorderWidth: 15,
        backgroundColor      : '#ececec',
        fontColor            : '#636363',
        percent              : 75,
        percentageTextSize   : 32,
        textAdditionalCss    : 'font-weight: light'
    });
    $("#skills-circle3").circliful({
        animation            : 1,
        animationStep        : 5,
        animateInView        : true,
        foregroundBorderWidth: 15,
        backgroundBorderWidth: 15,
        backgroundColor      : '#ececec',
        fontColor            : '#636363',
        percent              : 85,
        percentageTextSize   : 32,
        textAdditionalCss    : 'font-weight: light'
    });
    $("#skills-circle4").circliful({
        animation            : 1,
        animationStep        : 5,
        animateInView        : true,
        foregroundBorderWidth: 15,
        backgroundBorderWidth: 15,
        backgroundColor      : '#ececec',
        fontColor            : '#636363',
        percent              : 80,
        percentageTextSize   : 32,
        textAdditionalCss    : 'font-weight: light'
    });
    /*======SMOOTH SCROLL======*/
    
    $(".nav-link, a[href^='#']").mPageScroll2id({
        highlightClass      : "active",
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
new WOW().init();