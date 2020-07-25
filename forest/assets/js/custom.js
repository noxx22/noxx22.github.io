"use strict";

$(function () {
    //==========HAMBURGER==========
    var nav = $('.header-nav');
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
    }); //======SCROLL-TO-ID======
    
    $('.header-nav__link').mPageScroll2id({
        highlightClass      : "header-nav__link--active",
        forceSingleHighlight: false
    }); //======WORKS-CAROUSEL======
    
    $('.works-carousel').owlCarousel({
        autoplay          : true,
        autoplayHoverPause: true,
        smartSpeed        : 1000,
        loop              : true,
        center            : false,
        nav               : false,
        dots              : false,
        responsiveClass   : true,
        responsive        : {
            0   : {
                items : 1,
                margin: 0
            },
            576 : {
                items : 2,
                margin: 0
            },
            852 : {
                items : 3,
                margin: 0
            },
            1100: {
                items : 4,
                margin: 0
            },
            1601: {
                items : 5,
                margin: 0
            }
        }
    }); //======TEAM-CAROUSEL======
    
    $('.team-carousel').owlCarousel({
        autoplay          : true,
        autoplayHoverPause: true,
        smartSpeed        : 1000,
        loop              : true,
        center            : false,
        nav               : false,
        dots              : false,
        responsiveClass   : true,
        responsive        : {
            0  : {
                items : 1,
                margin: 0
            },
            576: {
                items : 2,
                margin: 20
            },
            852: {
                items : 3,
                margin: 20
            }
        }
    }); //======HOVER для ссылки 'SHARE' в карусели
    
    $('.works-share__link').hover(function () {
        $(this).css({
            'background-color': 'cyan'
        });
        $(this).next().css('color', 'cyan');
    }, function () {
        $(this).css({
            'background-color': 'white'
        });
        $(this).next().css('color', 'white');
    });
});
new WOW().init();