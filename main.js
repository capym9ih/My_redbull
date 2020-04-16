$(document).ready(function () {
    $('.slider').bxSlider({
        auto: false,
        speed: 2500,
        controls: true
    });
});
$(document).ready(function () {
    $('.slider-bx').bxSlider({
        auto: true,
        speed: 2500,
        controls: false
    });
});
$(document).ready(function () {
    $('.carusel').bxSlider({
        auto: true,
        speed: 500,
        controls: false,
        pager: false,
        minSlides: 1,
        maxSlides: 6,
        moveSlides: 1,
        slideWidth: 105,
        slideMargin: 50
    });
});