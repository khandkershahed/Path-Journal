import './bootstrap';

import Alpine from 'alpinejs';
window.Alpine = Alpine;

import $ from 'jquery';
window.$ = window.jQuery = $;

import 'slick-carousel/slick/slick.css';
import 'slick-carousel';

// Import Select2
import 'select2/dist/css/select2.css';
import 'select2';

Alpine.start();

// === Wait for DOM to be ready ===
$(document).ready(function () {

    // Helper function to initialize slick if not already done
    function initSlick(selector, options) {
        $(selector).each(function () {
            if (!$(this).hasClass('slick-initialized')) {
                $(this).slick(options);
            }
        });
    }

    initSlick(".card__post-carousel", {
        slidesToShow: 1,
        autoplay: true,
        dots: false,
        lazyLoad: "progressive",
        prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left'></i></button>",
        nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right'></i></button>",
    });

    initSlick(".top__news__slider", {
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        loop: true,
        dots: false,
        lazyLoad: "progressive",
        arrows: false,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 3, infinite: true } },
            { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 2 } },
            { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
        ],
    });

    initSlick(".article__entry-carousel", {
        slidesToShow: 4,
        autoplay: true,
        dots: false,
        lazyLoad: "progressive",
        prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left'></i></button>",
        nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right'></i></button>",
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 4, slidesToScroll: 3, infinite: true } },
            { breakpoint: 992, settings: { slidesToShow: 3, slidesToScroll: 2 } },
            { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 2 } },
            { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
        ],
    });

    initSlick(".article__entry-carousel-three", {
        slidesToShow: 3,
        autoplay: true,
        dots: false,
        lazyLoad: "progressive",
        prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left'></i></button>",
        nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right'></i></button>",
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 3, infinite: true, dots: true } },
            { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 2 } },
            { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
        ],
    });

    initSlick(".card__post-carousel-height", {
        slidesToShow: 4,
        autoplay: true,
        dots: true,
        lazyLoad: "progressive",
        prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left'></i></button>",
        nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right'></i></button>",
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 4, slidesToScroll: 3, infinite: true, dots: true } },
            { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 2 } },
            { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
        ],
    });

    initSlick(".wrapp__list__article-responsive-carousel", {
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        dots: false,
        lazyLoad: "progressive",
        arrows: false,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 3, infinite: true } },
            { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 2 } },
            { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
        ],
    });

    initSlick(".trending-news-slider", {
        infinite: true,
        arrows: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 5000,
        prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left'></i></button>",
        nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right'></i></button>",
        responsive: [
            { breakpoint: 768, settings: { dots: false, arrows: false } }
        ],
    });

});
