"use strict";

var productsContent = document.body.querySelector('.products__content');
var $body = $('body');
var $headerUser = $('.header__user');
var $headerNotify = $('.header__user-notify');
var $headerNotifyNav = $('.header-notify__nav');
var $headerMail = $('.header__user-mail');
var $headerMailNav = $('.header-mail__nav');
var $headerCart = $('.header__user-cart');
var $headerCartNav = $('.header-cart__nav');
var $headerProfile = $('.header__profile');
var $headerProfileName = $('.header__profile-name');
var $headerProfileNav = $('.header-profile__nav');
var $nav = $('.header__nav-list');
var $menu = $('.menu-icon');
var $modalInput = $('.login-form__input');
var $btnLogin = $('.header__account-login');
var $modalOverlay = $('.modal-overlay');
var $closeModal = $('.close-modal');
/*
 =====================
 ----Destroy Mixer----
 =====================
 */

var mixer = {};

function checkContentWrapper(contentWrapper) {
  if (contentWrapper !== null) {
    if (contentWrapper === productsContent) {
      return mixer = mixitup('.products-content');
    }
  }
}

checkContentWrapper(productsContent);
$(function () {
  /*
   =======================
   ----Header Switcher----
   =======================
   */
  function openNav(headerLink, headerNav) {
    if (!$headerUser.hasClass('header--login')) {
      return;
    }

    headerLink.on('click', function (e) {
      var navOpened = $headerUser.find('.opened-nav');
      e.preventDefault();
      e.stopPropagation();

      if (navOpened.hasClass('opened-nav') && headerNav.hasClass('opened-nav')) {
        headerNav.removeClass('opened-nav').slideUp();
      } else {
        headerNav.addClass('opened-nav').slideDown();
        navOpened.removeClass('opened-nav').slideUp();
        $headerProfileName.removeClass('icon-angle-up').addClass('icon-angle-down');
      }
    });
  }

  function closeNav(headerNav) {
    $body.on('click', function () {
      headerNav.removeClass('opened-nav').slideUp();
    });
  }
  /*
   ===========================
   ----Header Notify Click----
   ===========================
   */


  openNav($headerNotify, $headerNotifyNav);
  closeNav($headerNotifyNav);
  /*
   =========================
   ----Header Mail Click----
   =========================
   */

  openNav($headerMail, $headerMailNav);
  closeNav($headerMailNav);
  /*
   =========================
   ----Header Cart Click----
   =========================
   */

  openNav($headerCart, $headerCartNav);
  closeNav($headerCartNav);
  /*
   ============================
   ----Header Profile Click----
   ============================
   */

  $headerProfile.on('click', function (e) {
    var navOpened = $headerUser.find('.opened-nav');
    e.preventDefault();
    e.stopPropagation();
    $headerProfileName.removeClass('icon-angle-up').addClass('icon-angle-down');

    if ($headerProfileNav.hasClass('opened-nav')) {
      $headerProfileNav.removeClass('opened-nav').slideUp();
      $headerProfileName.removeClass('icon-angle-up').addClass('icon-angle-down');
    } else {
      navOpened.removeClass('opened-nav').slideUp();
      $headerProfileNav.addClass('opened-nav').slideDown();
      $headerProfileName.removeClass('icon-angle-down').addClass('icon-angle-up');
    }
  });
  $body.on('click', function () {
    $headerProfileNav.removeClass('opened-nav').slideUp();
    $headerProfileName.removeClass('icon-angle-up').addClass('icon-angle-down');
  });
  /*
   ======================
   ----HAMBURGER MENU----
   ======================
   */

  $menu.click(function () {
    $menu.toggleClass('opened');

    if ($menu.hasClass('opened')) {
      $nav.css({
        'display': 'block'
      });
      $nav.animate({
        'right': '0px'
      }, 500);
    } else {
      $nav.slideUp(function () {
        $nav.css({
          'right': '-280px'
        });
      });
    }
  });
  var wid = window.matchMedia('(max-width: 852px)');
  $(window).resize(function () {
    if (wid.matches) {
      $nav.removeAttr('style');
      $menu.removeClass('opened');
    }
  });
  /*
   ======================
   ----Slick-Carousel----
   ======================
   */

  $('.week-slider').slick({
    arrows: false,
    dots: true,
    appendDots: '.week-dots',
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1000,
    pauseOnHover: true,
    responsive: [{
      breakpoint: 1320,
      settings: {
        slidesToShow: 3
      }
    }, {
      breakpoint: 992,
      settings: {
        slidesToShow: 2
      }
    }, {
      breakpoint: 670,
      settings: {
        slidesToShow: 1,
        centerMode: true,
        centerPadding: "100px"
      }
    }, {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        centerMode: true,
        centerPadding: "50px"
      }
    }, {
      breakpoint: 440,
      settings: {
        slidesToShow: 1,
        fade: true,
        centerMode: true,
        centerPadding: "0px"
      }
    }]
  });
  /*
   ========================
   ----Show Login Modal----
   ========================
   */

  $btnLogin.on('click', function (e) {
    e.preventDefault();
    $modalOverlay.addClass('modal-visual');
  });
  /*
   ========================
   ----Hide Login Modal----
   ========================
   */

  $closeModal.on('click', function (e) {
    e.preventDefault();
    $modalOverlay.removeClass('modal-visual');
  });
  /*
   ===================================
   ----Modal Inputs Label Switcher----
   ===================================
   */

  $modalInput.focusin(function () {
    var $this = $(this);
    $this.siblings().fadeOut();
  });
  $modalInput.focusout(function () {
    var $this = $(this);
    var value = $this.val();

    if (value === '') {
      $this.siblings().fadeIn();
    }
  });
  /*
   ============
   ----Tabs----
   ============
   */

  $('.market-tabs__item').on('click', function (e) {
    var $this = $(this);
    var tabActive = 'market-tabs__item--active';
    var content = '.market-content__item';
    var contentActive = 'market-content__item--active';
    e.preventDefault();
    var link = $this.attr('href');
    $this.siblings().removeClass(tabActive);
    $this.addClass(tabActive);
    $(content).removeClass(contentActive);
    $(link).addClass(contentActive);
  });
  /*
   ==========================
   ----jQuery Form Styler----
   ==========================
   */

  $('select').styler();
  /*
   ======================
   ----ionRangeSlider----
   ======================
   */

  var $range = $(".js-range-slider"),
      $inputFrom = $(".js-input-from"),
      $inputTo = $(".js-input-to"),
      instance,
      min = 0,
      max = 1000,
      from = 0,
      to = 0;
  $range.ionRangeSlider({
    skin: "round",
    type: "double",
    min: min,
    max: max,
    from: 0,
    to: 600,
    step: 20,
    min_interval: 100,
    hide_min_max: true,
    hide_from_to: true,
    prefix: '$',
    onStart: updateInputs,
    onChange: updateInputs
  });
  instance = $range.data("ionRangeSlider");

  function updateInputs(data) {
    from = data.from;
    to = data.to;
    $inputFrom.prop("value", from);
    $inputTo.prop("value", to);
  }

  $inputFrom.on("input", function () {
    var val = $(this).prop("value"); // validate

    if (val < min) {
      val = min;
    } else if (val > to) {
      val = to;
    }

    instance.update({
      from: val
    });
  });
  $inputTo.on("input", function () {
    var val = $(this).prop("value"); // validate

    if (val < from) {
      val = from;
    } else if (val > max) {
      val = max;
    }

    instance.update({
      to: val
    });
  });
  /*
   ================================
   ----Category Layout Switcher----
   ================================
   */

  var $items = $('.category__content, .category__card, .product-card__info, .product-card__image, .product-card__inner, .product-card__user, .sales-box, .info-ratio__box-full');
  var $cards = $('.category__card:nth-child(8),.category__card:nth-child(9),.category__card:nth-child(10),.category__card:nth-child(11),.category__card:nth-child(12)');
  $('.category__button').on('click', function () {
    if ($(this).hasClass('icon-list')) {
      $(this).addClass('category__button--active');
      $(this).siblings().removeClass('category__button--active');
      $items.addClass('list-layout');
      $cards.remove();
    }

    if ($(this).hasClass('icon-grid')) {
      $(this).addClass('category__button--active');
      $(this).siblings().removeClass('category__button--active');
      $items.removeClass('list-layout');
      $('.category__content').append($cards);
    }
  });
});