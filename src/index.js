import './sass/main.scss'
import './fonts/fonts.scss'
import './assets/logo320.png'
import './assets/logo768.png'
import './assets/logo1020.png'
import './js/serviceBrands.js'
import './js/serviceGadgets.js'
import './js/prices.js'
import './sass/modal.scss'


const hello = require('./js/hello')

/*function highlightElement(id) {
    const element = document.getElementById(id);
    if (element) {
        element.classList.add('highlight'); // Добавляем класс подсветки
        setTimeout(() => {
            element.classList.remove('highlight'); // Убираем класс через 1 секунду
        }, 1000); // Время в миллисекундах
    }
}

// Слушаем событие перехода по якорной ссылке
window.addEventListener('hashchange', () => {
    const id = location.hash.substring(1); // Получаем id из URL
    highlightElement(id); // Подсвечиваем элемент
});

// Если страница загружается с якорем, подсвечиваем сразу
if (location.hash) {
    highlightElement(location.hash.substring(1));
}*/
const burgerClose = document.querySelector(".block-header__button--burger");
const back = document.querySelector('.block');
const burgerShows = document.querySelector('.header-buttons__button--burger');
const overlay = document.querySelector('.overlay-hidden');

const showUl = function() {
    back.classList.toggle('not-visible'); 

    if (!back.classList.contains('not-visible')) {
        overlay.classList.add('overlay');
        overlay.classList.remove('overlay-hidden');
    } else {
        overlay.classList.add('overlay-hidden');
        overlay.classList.remove('overlay');
    }
}

burgerClose.addEventListener('click', showUl);
burgerShows.addEventListener('click', showUl);

