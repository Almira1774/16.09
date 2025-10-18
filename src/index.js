import './sass/main.scss'
import './fonts/fonts.scss'
import './assets/logo320.png'
import './assets/logo768.png'
import './assets/logo1020.png'
import './js/serviceBrands.js'
import './js/serviceGadgets.js'
import './js/prices.js'
import './sass/_modal.scss'


const hello = require('./js/hello')



// Сначала объявляем все переменные
const burgerClose = document.querySelector(".block-header__button--close");
const back = document.querySelector('.block');
const burgerShows = document.querySelector('.header-buttons__button--burger');
const overlay = document.querySelector('.overlay-hidden');

// Функция для обновления значений в зависимости от ширины экрана


// Функция для показа/скрытия модального окна
const showmodal = function() {
    const screen = window.innerWidth;

    if (screen <= 1425) {
        

        if (!back.classList.contains('not-visible')) {
            overlay.classList.add('overlay');
            overlay.classList.remove('overlay-hidden');
            console.log(overlay.classList);
            console.log(back.classList);
        } else {
            overlay.classList.add('overlay-hidden');
            overlay.classList.remove('overlay');
            console.log(overlay.classList);
            console.log(back.classList);
        }
    }
};
const updateScreen = () => {
    const screen = window.innerWidth;

    if (screen > 1425) {
        overlay.classList.remove('overlay');
        overlay.classList.add('overlay-hidden'); // Убедись, что overlay имеет нужные стили
        back.classList.remove('not-visible');
        console.log(overlay.classList);
        console.log(back.classList);
    } else {
       showmodal();
        console.log(overlay.classList);
        console.log(back.classList);
        
    }
};

// Добавляем обработчики событий
burgerClose.addEventListener('click', showmodal);
burgerShows.addEventListener('click', showmodal);

// Инициализация значений при загрузке страницы
updateScreen();

// Обработчик события resize
window.addEventListener('resize', updateScreen);







