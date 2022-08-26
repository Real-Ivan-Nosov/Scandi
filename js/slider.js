const swiper = new Swiper('.swiper', {
    // Optional parameters
    allowTouchMove: false,
    spaceBetween: 50,
    speed: 500,
    loop: true,

    // Modules

    navigation: {
        nextEl: '.swiper-button-next--rev',
        prevEl: '.swiper-button-prev--rev',
    },

    autoplay: {
        delay: 7000,
    },
});