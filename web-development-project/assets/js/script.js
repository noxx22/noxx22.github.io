"use strict";

$(document).ready(function () {
  // Ждём загрузки страницы
  $(".tabs_menu li").click(function () {
    // Событие нажатия на элемент меню вкладок
    if (! $(this).hasClass("active")) {
      // Проверка, не нажали ли мы на уже активный пункт
      var i = $(this).index(); // Получаем порядковый номер нажатого пункта, отстче идет от 0 (0,1,2)

      $(".tabs_menu li.active").removeClass("active"); // Удаляем активный класс у прошлого пункта меню

      $(".tabs .active").hide().removeClass("active"); // Скрываем и удаляем активный класс у прошлого контейнера
      // с содержимым

      $(this).addClass("active"); // Добавляем нажатому пункту меню активный класс

      $($(".tabs").children(".info")[ i ]).fadeIn(1000).addClass("active"); // Показываем и добавляем активный
      // класс соответствующему контейнеру
    }
  }); //======TEAM-CAROUSEL======

  $('.team-carousel').owlCarousel({
    autoplay          : true,
    autoplayHoverPause: true,
    smartSpeed        : 1000,
    loop              : true,
    nav               : false,
    margin            : 30,
    dots              : true,
    responsiveClass   : true,
    autoWidth         : false,
    dotsContainer     : '.team-carousel-pager',
    dotClass          : 'team-dot',
    responsive        : {
      0  : {
        items : 1,
        margin: 10,
        dots  : true
      },
      361: {
        items : 1,
        margin: 10,
        dots  : true
      },
      576: {
        items : 2,
        margin: 15,
        dots  : true
      },
      853: {
        items : 3,
        dots  : true,
        loop  : true,
        margin: 15
      }
    }
  }); //============SCROLL-TO-ID=============

  $('.nav-link').mPageScroll2id({
    forceSingleHighlight: false,
    offset              : - '70'
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
new WOW().init();