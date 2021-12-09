(function ($) {
  "use strict";

  let Lol = $(".slider");

  Lol.slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 1200,
    pauseOnHover: false,
    pauseOnFocus: false,
  });

  $(".slider-team").slick({
    arrows: false,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    pauseOnFocus: false,
    asNavFor: ".slider_testimonial",
  });


  $(".slider_testimonial").slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    pauseOnFocus: false,
    asNavFor: ".slider-team",
  })

  $(".feedback_slider").slick({
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    pauseOnFocus: false,
  })
  
})(window.jQuery);
