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
    const isVisible = !back.classList.contains('not-visible')
    if (screen >=1360){
        
        back.classList.remove('not-visible')
    console.log(back.classList)
    }
    else  if(!isVisible){
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

overlay.addEventListener('click',function(){
    back.classList.add('not-visible')
    overlay.classList.add('overlay--hidden')
})

window.addEventListener('resize', modalVisibility);

const mainMenue = document.querySelector('.main')
const readMore = mainMenue.querySelector('.read-more')
const readMore_close = mainMenue.querySelector('.close')
const show768 = mainMenue.querySelector('.main__text--orientation-768')
const show1360 = mainMenue.querySelector('.main__text--orientation-1360')
const showLorem = mainMenue.querySelector('.main__text--lorem-ipsum')




readMore.addEventListener('click', function(){

const changeButtonStyle = function(){
    readMore.style.display = 'none'
    readMore_close.style.display = 'flex'
    

}
const screen = window.innerWidth
if(screen >= 320 && screen < 767){
    show768.style.display = "inline"
    show1360.style.display = "inline"
    showLorem.style.display = "inline"
    changeButtonStyle();
    
}
if(screen >= 768 && screen <= 1359){
    show1360.style.display = "inline"
    showLorem.style.display = "inline"
    changeButtonStyle();
}
else if(screen >=1360 ){
    showLorem.style.display = "inline"
    changeButtonStyle();
}


}
)

readMore_close.addEventListener('click', function(){
    const changeButtons = function(){
        readMore_close.style.display = "none"
        readMore.style.display = "flex"
        
    
    }
    const screen = window.innerWidth
    if(screen >= 320 && screen < 767){
        show768.style.display = "none"
        show1360.style.display = "none"
        showLorem.style.display = "none"
        changeButtons();
    }
    if(screen >= 768 && screen <= 1359){
        show1360.style.display = "none"
        showLorem.style.display = "none"
        changeButtons();
    }
    else if(screen >=1360 ){
        showLorem.style.display = "none"
        changeButtons();
    }
    
})


})

