const criationsImg = document.querySelectorAll('.criations__img')
const  criationsTitle = document.querySelectorAll(".criations__title");
const burger = document.querySelector(".header__burger")
const headerMobile = document.querySelector(".header__top-mobile")
const headerTop = document.querySelector('.header__top')
const close = document.querySelector('.menu__close')

criationsImg.forEach(function(elem) {
    elem.addEventListener("mouseover", function() {
        console.log(elem)
        elem.style.opacity = "0.3";
     
    });
});
criationsImg.forEach(function(elem) {
    elem.addEventListener("mouseout", function() {
        console.log(elem)
        elem.style.opacity = "1";
     
    });
});

burger.addEventListener('click',()=>{
    headerMobile.style.display = 'flex'
    headerTop.style.display = 'none'

})
close.addEventListener('click', ()=>{
    headerMobile.style.display = 'none'
    headerTop.style.display = 'flex'

})