$(document).ready(function() {
  $(".owl-carousel").owlCarousel({
    items: 1, 
    smartSpeed: 1500,
  })
})

setTimeout(function() {
  $('.pre-loader').addClass('hide');
}, 0);
