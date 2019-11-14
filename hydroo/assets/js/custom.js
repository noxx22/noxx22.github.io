"use strict";

$(function () {
    //======WORKS GALLERY======
    $('[data-fancybox="gallery"]').fancybox({
        keyboard        : true,
        arrows          : true,
        animationEffect : "zoom",
        transitionEffect: "fade",
        wheel           : "auto"
    }); //======BEHIND CAROUSEL======

    $(".behind__carousel").owlCarousel({
        loop              : true,
        margin            : 10,
        nav               : false,
        dots              : false,
        autoplay          : true,
        autoplayTimeout   : 3000,
        autoplayHoverPause: true,
        smartSpeed        : 1000,
        responsive        : {
            0  : {
                items: 1
            },
            480: {
                items : 2,
                margin: 15
            },
            768: {
                items : 3,
                margin: 15
            },
            852: {
                items : 3,
                margin: 15
            },
            992: {
                items : 3,
                margin: 30
            }
        }
    }); //======FACTS COUNTER======

    $('.facts__counter').counterUp({
        delay: 10,
        time : 1500
    }); //======PROCESS TABS======

    $(".tabs_menu li").click(function () {
        if (! $(this).hasClass("active")) {
            var i = $(this).index();
            $(".tabs_menu li.active").removeClass("active");
            $(".tabs .active").hide().removeClass("active");
            $(this).addClass("active");
            $($(".tabs").children(".info")[ i ]).fadeIn(1000).addClass("active");
        }
    }); //======MISSION ACCORDEON======

    $(".mission__acc-title").on("click", function () {
        var $this = $(this);

        if (! $this.hasClass("active")) {
            $(".mission__acc-desc").slideUp();
            $(".mission__acc-title").removeClass("active");
        }

        $this.toggleClass("active");
        $this.next().slideToggle();
    }); //======TESTIMONIALS CAROUSEL======

    $(".testi__carousel").owlCarousel({
        loop              : true,
        margin            : 10,
        nav               : false,
        dots              : false,
        autoplay          : true,
        autoplayTimeout   : 3000,
        autoplayHoverPause: true,
        smartSpeed        : 1000,
        responsive        : {
            0: {
                items: 1
            }
        }
    }); //======SCROLL TO TOP==================================

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
});