"use strict";

$(function () {
  /*====== PRELOADER ======*/
  $("#preloader").delay(1000).fadeOut("slow");
  $("body").css({
    "background-color": "#ffffff"
  });
  /*======Project buttons======*/
  
  $('.btn-amount').on('click', function () {
    var projectInput = $('.input-amount');
    var choice = 'Other amount';
    var yourChoice = 'Your choice?';
    var btnText = $(this).text();
    
    if (btnText !== choice) {
      projectInput.attr('value', btnText).val(btnText);
    } else {
      projectInput.val(yourChoice).on('click', function () {
        $(this).val('').change(function () {
          var changed = projectInput.val();
          $(this).attr('value', changed);
        });
      });
    }
  });
});
var wow = new WOW({
  animateClass: 'animate__animated'
});
wow.init();