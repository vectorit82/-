$(function () {

    $('.slider__top-inner').slick({
        prevArrow: '<button type="button" class="slick-prev"><img src="images/slider/arrow-left.svg" alt="предыдущий"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/slider/arrow-right.svg" alt="следующий"></button>',
        infinite: false
    })


    var containerEl1 = document.querySelector('[data-ref="container-1"]');
    var containerEl2 = document.querySelector('[data-ref="container-2"]');

    var config = {
        controls: {
            scope: 'local'
        }
    };


    var mixer = mixitup('.catalog__inner');

    var mixer = mixitup('.action__content');

});