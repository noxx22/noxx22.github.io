$(function () {

    /*======PRELOADER======*/

    $("#preloader").delay(1000).fadeOut("slow");
    $("body").css({"background-color": "#ffffff"});

    /*======ANIMATE NUMBERS======*/

    $('.facts__number').counterUp({

        delay: 10,
        time : 1500

    });

    /*======SMOOTH SCROLL======*/

    $(".nav-link, a[href='#home'], a[href='#appointment']").mPageScroll2id({

        highlightClass      : "nav-link--active",
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

    /*======BARBERS-CAROUSEL======*/

    $('.barbers-carousel').owlCarousel({
        autoplay          : true,
        autoplayHoverPause: true,
        smartSpeed        : 1000,
        loop              : true,
        nav               : false,
        margin            : 30,
        responsiveClass   : true,
        autoWidth         : false,
        responsive        : {
            0   : {
                items : 1,
                margin: 30
            },
            480 : {
                items : 2,
                margin: 30
            },
            992 : {
                items : 3,
                margin: 30
            },
            1200: {
                items : 4,
                margin: 30
            }
        }
    });

    /*====== CLIENTS-CAROUSEL ======*/

    $('.clients-carousel').owlCarousel({
        autoplay          : true,
        autoplayHoverPause: true,
        smartSpeed        : 1000,
        animateIn         : 'fadeIn',
        animateOut        : 'fadeOut',
        loop              : true,
        nav               : false,
        navContainer      : '.clients-nav',
        navClass          : [ 'icon-angle-left', 'icon-angle-right' ],
        navElement        : "button",
        dots              : false,
        margin            : 30,
        responsiveClass   : true,
        autoWidth         : false,
        responsive        : {
            0  : {
                items : 1,
                margin: 30
            },
            576: {
                items : 1,
                nav   : true,
                margin: 30
            }
        }
    });

    /*======STICKY NAVIGATION======*/

    var widx = window.matchMedia("(min-width:1200px)");

    $(window).load(function () {

        if (widx.matches && $(window).scrollTop() > 100) {

            $('.header-nav').css(
                {
                    'position'        : 'fixed',
                    'top'             : 0,
                    'background-color': '#000000'
                }
            );
        }
    });

    $(window).on('scroll resize', function () {

        var scrollWindow = $(this).scrollTop();

        if (( scrollWindow > 100 ) && widx.matches) {

            $('.header-nav').css(
                {
                    'position'        : 'fixed',
                    'top'             : 0,
                    'background-color': '#000000'
                }
            );

        } else {

            $('.header-nav').css({

                'position'        : 'absolute',
                'top'             : 'initial',
                'background-color': 'rgba(0, 0, 0, 0.55)'

            });
        }
    })

});

var wow = new WOW(
    {

        animateClass: 'animate__animated'

    }
);
wow.init();