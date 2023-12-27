
//Стили
import 'animate.css';
import './public/assets/css/style.css';

import './public/assets/js/jquery-3.7.1.min.js';
import './public/assets/bootstrap/js/bootstrap.min.js';
import './public/assets/js/validation.js';
import './public/assets/js/swiper.min.js';
//Анимация
new WOW().init();

//Слайдер
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


