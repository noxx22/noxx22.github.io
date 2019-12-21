$(function () {

    $('.portfolio-item:odd').addClass('item--odd');

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
        }, 900)

    });

});