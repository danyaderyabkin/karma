import './style.css'
(() => {
    const swiper = new Swiper('.js-hero-slider', {
        slidesPerView: 1,
        loop: false,
        pagination: {
            el: '.js-pagination',
            clickable: true,
        },
        a11y: {
            paginationBulletMessage: 'К следущему {{index}}',
        },
    });
})();


