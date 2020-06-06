$(function () {

    /*======PRELOADER======*/

    $("#preloader").delay(1000).fadeOut("slow");
    $("body").css({"background-color": "#ffffff"});

    /*======CAROUSELS======*/

    $(".insta-carousel").slick({

        dots          : false,
        arrows        : true,
        appendArrows  : ".insta-arrows",
        prevArrow     : ".insta-arrows span.icon-angle-left",
        nextArrow     : ".insta-arrows span.icon-angle-right",
        infinite      : true,
        slidesToShow  : 6,
        slidesToScroll: 1,
        autoplay      : true,
        autoplaySpeed : 5000,
        speed         : 1000,

        responsive: [ {

            breakpoint: 1200,
            settings  : {
                slidesToShow: 6
            }

        },
            {

                breakpoint: 992,
                settings  : {
                    slidesToShow: 4
                }

            },

            {

                breakpoint: 768,
                settings  : {
                    slidesToShow: 3
                }

            },

            {

                breakpoint: 576,
                settings  : {
                    slidesToShow: 2
                }

            },

            {

                breakpoint: 420,
                settings  : {
                    slidesToShow: 1
                }

            } ]

    });

    $(".clients-carousel").slick({

        dots          : false,
        arrows        : true,
        appendArrows  : ".clients-arrows",
        prevArrow     : ".clients-arrows span.icon-angle-left",
        nextArrow     : ".clients-arrows span.icon-angle-right",
        infinite      : true,
        slidesToShow  : 6,
        slidesToScroll: 1,
        autoplay      : true,
        autoplaySpeed : 5000,
        speed         : 1000,

        responsive: [ {

            breakpoint: 1200,
            settings  : {
                slidesToShow: 5
            }

        },
            {

                breakpoint: 992,
                settings  : {
                    slidesToShow: 4
                }

            },

            {

                breakpoint: 768,
                settings  : {
                    slidesToShow: 3
                }

            },

            {

                breakpoint: 420,
                settings  : {
                    slidesToShow  : 2,
                    slidesToScroll: 2
                }

            }

        ]

    });

    /*======SCROLL TO TOP======*/

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

});

var wow = new WOW({

    animateClass: 'animate__animated'

});

new WOW().init();