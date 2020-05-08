$(function () {

    /*======PRELOADER======*/

    $(".cube-wrapper").delay(3000).fadeOut();
    $(".preloader-body").delay(4000).fadeOut();

    /*======SLICK SLIDER======*/

    $(".carousel-top").slick({

        dots          : false,
        arrows        : false,
        infinite      : true,
        slidesToShow  : 1,
        slidesToScroll: 1,
        fade          : true,
        autoplay      : true,
        autoplaySpeed : 5000,
        speed         : 1000

    });

    $(".carousel-projects").slick({

        dots          : false,
        arrows        : false,
        infinite      : true,
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

    $(".reviews-carousel").slick({

        dots          : false,
        arrows        : false,
        infinite      : true,
        asNavFor      : '.review-nav',
        slidesToShow  : 1,
        fade          : true,
        slidesToScroll: 1,
        autoplay      : true,
        autoplaySpeed : 5000,
        speed         : 1000

    });

    $(".review-nav").slick({

        dots          : false,
        arrows        : false,
        infinite      : true,
        asNavFor      : '.reviews-carousel',
        centerMode    : true,
        centerPadding : '0px',
        focusOnSelect : true,
        slidesToShow  : 5,
        slidesToScroll: 1,
        autoplay      : true,
        autoplaySpeed : 5000,
        speed         : 1000

    });

    /*======NAVIGATION======*/

    $(".nav-item .nav-link,a[href='#header']").mPageScroll2id({

        highlightSelector   : ".nav-item .nav-link",
        forceSingleHighlight: false

    });

    var $btnTop = $('.btn-top');

    $(window).on('scroll', function () {

        if ($(window).scrollTop() >= 200) {

            $btnTop.fadeIn();

        } else {

            $btnTop.fadeOut();

        }

    });

});

var wow = new WOW();

wow.init();

