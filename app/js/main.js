$(function () {

  $('.slider-top__inner').slick({
    prevArrow: '<button type="button" class="slider-top__slick slider-top__slick--prev"><svg width="19" height="32" viewBox="0 0 19 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.384767 17.0149L16.3981 31.6079C16.9235 32.1307 17.7757 32.1307 18.3012 31.6079C18.8267 31.0851 18.8267 30.2369 18.3012 29.7141L3.25346 16L18.2999 2.2859C18.8254 1.76309 18.8254 0.914839 18.2999 0.392073C17.7744 -0.130695 16.9222 -0.130695 16.3968 0.392072L0.383432 14.9851C0.103363 15.2638 -0.0167127 15.6332 0.00199458 15.9986C-0.0154195 16.3654 0.104617 16.7348 0.384767 17.0149Z" fill="#505050"/></svg></button>',
    nextArrow: '<button type="button" class="slider-top__slick slider-top__slick--next"><svg width="19" height="32" viewBox="0 0 19 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.3105 14.9851L2.29726 0.392105C1.77179 -0.130702 0.919579 -0.130702 0.394105 0.392105C-0.131368 0.914872 -0.131368 1.76312 0.394105 2.28593L15.4419 16L0.395438 29.7141C-0.130036 30.2369 -0.130036 31.0852 0.395438 31.6079C0.920912 32.1307 1.77312 32.1307 2.29855 31.6079L18.3119 17.0149C18.592 16.7362 18.712 16.3668 18.6933 16.0014C18.7107 15.6346 18.5907 15.2652 18.3105 14.9851Z" fill="#505050"/></svg></button>',
    infinite: false,
    responsive: [{
      breakpoint: 1600,
      settings: {
         arrows: false,
         dots: true
      }
    },]
  });


  // $("#rateYo").rateYo({
  //   starWidth: "40px",
  //   normalFill: "#A0A0A0",
  //   ratedFill: "#E74C3C",
  //   readOnly: true
  // });

  $('.header__catalog, .burger__menu-btn, .burger__list').on('click', function () {
    $('.header__catalog, .header__catalog-list, .burger__list, .burger__wrapper').toggleClass('btn--active');
  });
  
  $(".header__btn-close").on("click", function() {
    $(this).parent().removeClass("btn--active")
  })

  $('.header__btn-search').on('click', function () {
    $('.header__form-inner').toggleClass('search--active');
  });


  var containerEl1 = document.querySelector('[data-ref="container-1"]');
  var containerEl2 = document.querySelector('[data-ref="container-2"]');

  var config = {
    controls: {
      scope: 'local'
    }
  };

  var mixer1 = mixitup(containerEl1, config);
  var mixer2 = mixitup(containerEl2, config);

});

const swiper = new Swiper('.swiper', {
  // Optional parameters
  // direction: 'horizontal',
  loop: true,
  slidesPerView: 6,
  spaceBetween: 40,
  speed: 1000,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    360: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    575: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1200: {
      slidesPerView: 6,
      spaceBetween: 40,
    }
  },
  // speed: 400,
  //  spaceBetween: 100,

  // // If we need pagination
  // pagination: {
  //   el: '.swiper-pagination',
  // },

  // // Navigation arrows
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },

  // // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});