
$(document).ready(function() {
  $(".owl-carousel").owlCarousel({
    items: 1, 
    smartSpeed: 1500,
  })
})

setTimeout(function() {
  $('.pre-loader').addClass('hide');
}, 0);

// $(document).ready(function() {
//     $(".owl-carousel").owlCarousel({
//       items: 1,
//       smartSpeed: 1500,
//     })
//   })
'use strict';
(function ($){
  $(document).ready( function () {
    $('.menu-bars').on('click', function () {
      $('.header-right').toggleClass('active')
    })
  })
})(jQuery)

