"use strict";

$(function () {
    /*====== WORKS GALLERY ======*/
    $('[data-fancybox="gallery"]').fancybox({
        keyboard        : true,
        arrows          : true,
        animationEffect : "zoom",
        transitionEffect: "fade",
        wheel           : "auto"
    });
    /*====== BEHIND CAROUSEL ======*/
    
    $(".behind__carousel").owlCarousel({
        loop              : true,
        margin            : 15,
        nav               : false,
        dots              : false,
        autoplay          : true,
        autoplayTimeout   : 4000,
        autoplayHoverPause: true,
        smartSpeed        : 1000,
        responsive        : {
            0  : {
                items: 1
            },
            480: {
                items : 2,
                margin: 20
            },
            768: {
                items : 3,
                margin: 30
            }
        }
    });
    /*====== FACTS COUNTER ======*/
    
    $('.facts__counter').counterUp({
        delay: 10,
        time : 1500
    });
    /*====== PROCESS TABS ======*/
    
    $(".tabs_menu li").click(function () {
        if (! $(this).hasClass("active")) {
            var i = $(this).index();
            $(".tabs_menu li.active").removeClass("active");
            $(".tabs .active").hide().removeClass("active");
            $(this).addClass("active");
            $($(".tabs").children(".info")[ i ]).fadeIn(1000).addClass("active");
        }
    });
    /*====== MISSION ACCORDEON ======*/
    
    $(".mission__acc-title").on("click", function () {
        var $this = $(this);
        
        if (! $this.hasClass("active")) {
            $(".mission__acc-desc").slideUp();
            $(".mission__acc-title").removeClass("active");
        }
        
        $this.toggleClass("active");
        $this.next().slideToggle();
    });
    /*====== TESTIMONIALS CAROUSEL ======*/
    
    $(".testi__carousel").owlCarousel({
        loop              : true,
        margin            : 10,
        nav               : false,
        dots              : false,
        autoplay          : true,
        autoplayTimeout   : 5000,
        autoplayHoverPause: true,
        smartSpeed        : 1000,
        responsive        : {
            0: {
                items: 1
            }
        }
    });
    /*====== PAGE SCROLL TO ID ======*/
    
    $("a[href^='#']").mPageScroll2id({
        highlightClass      : "nav-link-current",
        forceSingleHighlight: false,
        offset              : 90
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
    /*====== HAMBURGER ======*/
    
    var nav = $('.header-nav');
    var menu = $('.menu-icon');
    menu.click(function () {
        menu.toggleClass('opened');
        
        if (menu.hasClass('opened')) {
            nav.css({
                'display': 'block'
            });
            nav.animate({
                'right': '0px'
            }, 500);
        } else {
            nav.slideUp(function () {
                nav.css({
                    'right': '-280px'
                });
            });
        }
    });
    var wid = window.matchMedia('(min-width: 852px)');
    $(window).resize(function () {
        if (wid.matches) {
            nav.removeAttr('style');
            menu.removeClass('opened');
        }
    });
    
    /*====== STICKY NAVIGATION ======*/
    
    function stickyNav() {
        var sliderHeight;
        var contactHeight;
        var heightSum;
        var scrollW;
        var scrollNav;
        sliderHeight = $('.header__slide').outerHeight();
        contactHeight = $('.header-top').outerHeight();
        scrollW = $(window).scrollTop();
        heightSum = sliderHeight + contactHeight;
        scrollNav = scrollW - heightSum;
        
        if (scrollNav >= 0 && wid.matches) {
            $('.header-bottom').css({
                'position'   : 'fixed',
                'padding-top': '28px',
                'top'        : 0
            });
            $('.header').css({
                'padding-bottom': '90px'
            });
        } else {
            $('.header-bottom').removeAttr('style');
            $('.header').removeAttr('style');
        }
    }
    
    stickyNav();
    $(window).on("resize scroll", function () {
        stickyNav();
    });
});
new WOW().init();