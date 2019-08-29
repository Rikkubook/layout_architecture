//ScrollTop
$(document).ready(function() {

    $('.top a').click(function(event) {
        event.preventDefault();
        $('html,body').animate({
        scrollTop: 0}, 1000);
    });

});

//mySwiper
var mySwiper = new Swiper('.swiper-container', {
    effect: "coverflow",
    // width: 1000,
    // height: 500,
    speed: 3000,
    loop: true,
    autoplay: {
      delay: 1500,
    },
    spaceBetween: 20,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  })

  lightbox.option({
    'resizeDuration': 500, //速度
  })