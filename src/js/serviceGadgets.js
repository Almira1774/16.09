import Swiper from 'swiper/bundle';
import '../js/swiper-bundle.min.js'; 

document.addEventListener("DOMContentLoaded", function () {   
    const gadgetsSwiper = new Swiper(".gadgets-swiper", {
        slidesPerView: 1.2,
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
                    .querySelectorAll(".gadgets-swiper.swiper-slide-active .swiper-slide")
                    .forEach((el) => {
                        el.style.opacity = "1";
                        el.style.transform = "translateY(0)";
                    });
            },
        },
    });

    const gadgetsButton = document.querySelector('.status-gadgets');
    const gadgetsIcon = gadgetsButton.querySelector('.status-gadgets__icon');
    const gadgetsSlides = document.querySelectorAll('.gadgets-swiper .swiper-wrapper .swiper-slide');
    let gadgetsSlidesCount = 0;
    let heightToOpen, heightToClose;

    const updateScreenValues = () => {
        const screen = window.innerWidth; // Обновляем значение screen

        if (screen >= 767 && screen < 1425) {
            gadgetsSlidesCount = 3;
            heightToOpen = 384;
            heightToClose = 208;
        } else if (screen >= 1425) {
            gadgetsSlidesCount = 2;
            heightToOpen = 384;
            heightToClose = 208;
        }

        gadgetsSlides.forEach(slide => {
            slide.classList.remove('hidden');
            slide.classList.remove('visible');
        });

        // Обновляем видимость слайдов
        for (let i = gadgetsSlides.length - gadgetsSlidesCount; i < gadgetsSlides.length; i++) {
            gadgetsSlides[i].classList.add('hidden');
        }
        gadgetsButton.classList.add('status-gadgets--showAll');
    };

    // Инициализация значений при загрузке страницы
    updateScreenValues();

    // Обработчик события resize
    window.addEventListener('resize', updateScreenValues);

    const toggleGadgetsSlides = function (count) {
        const totalSlides = gadgetsSlides.length;
        const slidesToToggle = Math.min(count, totalSlides);

        for (let i = totalSlides - slidesToToggle; i < totalSlides; i++) {
            if (gadgetsSlides[i].classList.contains('hidden')) {
                gadgetsSlides[i].classList.remove('hidden');
                gadgetsSlides[i].classList.add('visible');
            } else {
                gadgetsSlides[i].classList.remove('visible');
                gadgetsSlides[i].classList.add('hidden');
            }
        }
    };

    const gadgetsIconChange = function () {
        const gadgetsButtonToOpen = gadgetsButton.classList.contains('status-gadgets--showAll');
        const gadgetsButtonToClose = gadgetsButton.classList.contains('status-gadgets--closeAll');
        
        const navHeight = document.querySelector('.gadgets-swiper');
        const textNode = gadgetsButton.querySelector('.status-gadgets__icon + span');

        if (gadgetsButtonToOpen) {
            gadgetsButton.classList.remove('status-gadgets--showAll');
            gadgetsButton.classList.add('status-gadgets--closeAll');
            textNode.textContent = 'Скрыть';
            gadgetsIcon.classList.remove('status-gadgets__icon--Show');
            gadgetsIcon.classList.add('status-gadgets__icon--Hide');
            navHeight.style.height = heightToOpen + 'px';
            toggleGadgetsSlides(gadgetsSlidesCount);
        } else if (gadgetsButtonToClose) {
            gadgetsButton.classList.remove('status-gadgets--closeAll');
            gadgetsButton.classList.add('status-gadgets--showAll');
            gadgetsIcon.classList.remove('status-gadgets__icon--Hide');
            gadgetsIcon.classList.add('status-gadgets__icon--Show');
            textNode.textContent = 'Показать все';
            navHeight.style.height = heightToClose + 'px';
            toggleGadgetsSlides(gadgetsSlidesCount);
        }
    };

    gadgetsButton.addEventListener('click', gadgetsIconChange);
});





