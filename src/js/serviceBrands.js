import Swiper from 'swiper/bundle';
import '../js/swiper-bundle.min.js'; 
document.addEventListener("DOMContentLoaded", function () {   
    const gadgetsSwiper = new Swiper(".brands-swiper", {
        slidesPerView: 'auto',
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

const button = document.querySelector('.status');
const icon = button.querySelector('.status__icon');
const slides = document.querySelectorAll('.brands-swiper .swiper-slide');
let SlidesCount = 0;
let heightToOpen, heightToClose;

const updateScreen = () => {
    const screen = window.innerWidth; // Обновляем значение screen

    if (screen >= 767 && screen < 1359) {
        SlidesCount = 5;
        heightToOpen = 384;
        heightToClose = 208;
    } else if (screen >= 1360) {
        SlidesCount = 3;
        heightToOpen = 286;
        heightToClose = 208;
    }
  // Сначала убираем класс hidden у всех слайдов
  slides.forEach(slide => {
    slide.classList.remove('hidden');
    slide.classList.remove('visible');
});
    // Обновляем видимость слайдов при изменении размера окна
    for (let i = slides.length - SlidesCount; i < slides.length; i++) {
        slides[i].classList.add('hidden');
    }
    button.classList.add('status--showAll');
};

// Инициализация значений при загрузке страницы
updateScreen();

// Обработчик события resize
window.addEventListener('resize', updateScreen);

const toggleSlides = function (count) {
    const totalSlides = slides.length;
    const slidesToToggle = Math.min(count, totalSlides);

    for (let i = totalSlides - slidesToToggle; i < totalSlides; i++) {
        if (slides[i].classList.contains('hidden')) {
            slides[i].classList.remove('hidden');
            slides[i].classList.add('visible');
        } else {
            slides[i].classList.remove('visible');
            slides[i].classList.add('hidden');
        }
    }
};
const IconChange = function () {
    const ButtonToOpen = button.classList.contains('status--showAll');
    const ButtonToClose = button.classList.contains('status--closeAll');
    
    const navHeight = document.querySelector('.brands-swiper');
    const textNode = button.querySelector('.status__icon + span');

    if (ButtonToOpen) {
        button.classList.remove('status--showAll');
        button.classList.add('status--closeAll');
        textNode.textContent = 'Скрыть';
        icon.classList.remove('status__icon--Show');
        icon.classList.add('status__icon--Hide');
        navHeight.style.height = heightToOpen + 'px';
        toggleSlides(SlidesCount);
    } else if (ButtonToClose) {
        button.classList.remove('status--closeAll');
        button.classList.add('status--showAll');
        icon.classList.remove('status__icon--Hide');
        icon.classList.add('status__icon--Show');
        textNode.textContent = 'Показать все';
        navHeight.style.height = heightToClose + 'px';
        toggleSlides(SlidesCount);
    }
};
button.addEventListener('click', IconChange);

});

