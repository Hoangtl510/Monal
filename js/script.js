
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


function animateNumber(finalNumber, delay, startNumber = 0, callback) {
  let currentNumber = startNumber
  const interval = window.setInterval(updateNumber, delay)
  function updateNumber() {
    if (currentNumber >= finalNumber) {
      clearInterval(interval)
    } else {
      currentNumber++
      callback(currentNumber)
    }
  }
}

document.addEventListener('DOMContentLoaded', function () {
  animateNumber(32, 100, 0, function (number) {
    const formattedNumber = number.toLocaleString()
    document.getElementById('count-number').innerText = formattedNumber
  })
});




