let menu = document.querySelector('.header__menu')
let btn = document.querySelector('.header__burgermenu')

btn.addEventListener('click' , function(){
    menu.classList.toggle('active')
})