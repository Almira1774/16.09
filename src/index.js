import './sass/main.scss'
import './fonts/fonts.scss'
import './assets/logo320.png'
import './assets/logo768.png'
import './assets/logo1020.png'
import './js/serviceBrands.js'
import './js/serviceGadgets.js'
import './js/prices.js'
import './sass/_modal.scss'
document.addEventListener('DOMContentLoaded', () => {

const hello = require('./js/hello')




const burgerClose = document.querySelector(".block-header__button--close");
const back = document.querySelector('.block');
const burgerShows = document.querySelector('.header-buttons__button--burger');
const overlay = document.querySelector('.overlay');

const modalVisibility = function(){
    const screen = window.innerWidth;
    if (screen >=1360){
        
        back.classList.remove('not-visible')
    console.log(back.classList)
    }
    else  {
        back.classList.add('not-visible')
        console.log(back.classList)
       
    }

}


burgerShows.addEventListener('click', function(){
    back.classList.remove('not-visible')
    overlay.classList.remove('overlay--hidden')



});

burgerClose.addEventListener('click',function(){
    back.classList.add('not-visible')
    overlay.classList.add('overlay--hidden')
})

window.addEventListener('resize', modalVisibility);








})

