const criationsImg = document.querySelectorAll('.criations__img')
const  criationsTitle = document.querySelectorAll(".criations__title");




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
