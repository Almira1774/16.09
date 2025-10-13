import Swiper from 'swiper/bundle';
import '../js/swiper-bundle.min.js'; 

const button = document.querySelector('.status');
const icon = button.querySelector('.status__icon');
const slides = document.querySelectorAll('.brands-swiper .swiper-slide');
let SlidesCount = 0;
let heightToOpen, heightToClose;

const updateScreenValues = () => {
    const screen = window.innerWidth; // Обновляем значение screen

    if (screen > 767 && screen < 1119) {
        SlidesCount = 5;
        heightToOpen = 384;
        heightToClose = 208;
    } else if (screen > 1120) {
        SlidesCount = 3;
        heightToOpen = 286;
        heightToClose = 208;
    }

    // Обновляем видимость слайдов при изменении размера окна
    for (let i = slides.length - SlidesCount; i < slides.length; i++) {
        slides[i].classList.add('hidden');
    }
    button.classList.add('status--showAll');
};

// Инициализация значений при загрузке страницы
updateScreenValues();

// Обработчик события resize
window.addEventListener('resize', updateScreenValues);

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




