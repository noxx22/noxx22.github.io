$(function () {

    //======PRELOADER======

    $(".loader").delay(1000).fadeOut("slow");
    $("#overlayer").delay(1000).fadeOut("slow");

    //======SMOOTH SCROLL===

    $(".header-top__link, .nav-link, a[href='#home']").mPageScroll2id({

        highlightClass      : "nav-link-active",
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

    //======ANIMATE NUMBERS======

    $('.counters-item__number').counterUp({

        delay: 10,
        time : 2000

    });

    //======TEAM CAROUSEL======

    $(".team-carousel").slick({

        dots          : true,
        appendDots    : '.team-dots-wrapper',
        dotsClass     : 'team-slick-dots',
        arrows        : false,
        infinite      : true,
        mobileFirst   : true,
        slidesToShow  : 5,
        slidesToScroll: 1,
        autoplay      : true,
        autoplaySpeed : 5000,
        speed         : 1000,

        responsive: [ {

            breakpoint: 1500,
            settings  : {
                slidesToShow: 5
            }

        },
            {

                breakpoint: 1200,
                settings  : {
                    slidesToShow: 4
                }

            },

            {

                breakpoint: 992,
                settings  : {
                    slidesToShow: 3
                }

            },

            {

                breakpoint: 768,
                settings  : {
                    slidesToShow: 3
                }

            },

            {

                breakpoint: 320,
                settings  : {
                    slidesToShow: 2
                }

            } ]

    });

    //======PRODUCT ACCORDION======

    var $buttonToggle = $('.accordion-item-title .btn');

    $buttonToggle.on('click', function () {

        $buttonToggle.parent().removeClass('active-tab');

        if ($(this).hasClass('collapsed')) {

            $(this).parent().addClass('active-tab')

        }

    });

});

var wov = new WOW({

    boxClass: 'wov',

    callback: function () {

        $('.skills-set .skills-set-item .skills-set-outer').each(function () {

            var skillPercent = $(this).find('.skills-set-inner').attr('data-percent');

            $(this).children().animate({

                    width: skillPercent

                }, 2000
            )
        });
    }
});

var wow = new WOW();

wow.init();

wov.init();