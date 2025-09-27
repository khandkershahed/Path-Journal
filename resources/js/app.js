// import './bootstrap';

// import Alpine from 'alpinejs';

// window.Alpine = Alpine;

// Alpine.start();


import './bootstrap';

import Alpine from 'alpinejs';

import $ from 'jquery';
window.$ = window.jQuery = $;

import 'slick-carousel/slick/slick.css';
import 'slick-carousel';

window.Alpine = Alpine;

Alpine.start();

$(function() {
    $('.card__post-carousel').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        // adaptiveHeight: true,
        // Add or adjust options as you like
    });
});

import 'select2/dist/css/select2.css'; // CSS for Select2
import 'select2';  // JS for Select2
