import Swiper from 'swiper/bundle';
import '../js/swiper-bundle.min.js'; 

document.addEventListener("DOMContentLoaded", function () {   
    const gadgetsSwiper = new Swiper(".prices__swiper", {
        slidesPerView: 1.9,
        slidesPerGroup: 1,
        centeredSlides: false,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        effect: 'coverflow',
        coverflowEffect: {
            slideShadows: true,
            modifier: 0,
        },
        on: {
            init: function () {
                document
                    .querySelectorAll(".prices__swiper .swiper-slide-active .slide-content")
                    .forEach((el) => {
                        el.style.opacity = "1";
                        el.style.transform = "translateY(0)";
                    });
            },
        },
    });

   

});



