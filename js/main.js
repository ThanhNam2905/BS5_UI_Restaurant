(function ($) {
    "use strict";

    // Initiate the wowjs
    new WOW().init();
    
    // CounterUp js
    // $('[data-toggle="counter-up"]').counterUp({
    //     dalay: 10,
    //     time: 3000,
    // });

    // Owl-Carousel js
    $('.testimonials__carousel').owlCarousel({
        autoplay: true,
        loop: true,
        smartSpeed: 1500,
        dots: true,
        nav: false,
        center: true,
        margin: 24,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    })
    $(window).scroll(function() {
        if($(this).scrollTop() > 400) {
            $('.btn__scroll-top').fadeIn('slow');
        }
        else {
            $('.btn__scroll-top').fadeOut('slow');
        }
    });

    $('.btn__scroll-top').click(function() {
        $('html, body').animate({scrollTop: 0}, 700, 'easeInOutExpo');
        return false;
    });
   
})(jQuery);

