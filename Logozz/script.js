// slider js start

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n){
    showSlides(slideIndex += n);
}

function currentSlide(n){
    showSlides(slideIndex = n);
}

function showSlides(n){
    var i;
    var slides = document.getElementsByClassName("myslides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length){ slideIndex = 1 }
    if (n < 1){ slideIndex = slides.length }
    for ( i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for ( i = 0; i < dots.length; i++){
    dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}



// slider js ends


// .icons-section .icons-container .texti .t1{
//     display: flex;
//     justify-content: space-between;
//     padding-left: 40px;
//     padding-right: 40px;
// }

// .icons-section .icons-container .texti .ti1 i{
//     position: absolute;
//     left: 85rem;
//     top: 282%;
//     font-size: 20px;
// }

// .icons-section .icons-container .texti .ti2 i{
//     position: absolute;
//     right: 42.2rem;
//     top: 282%;
//     font-size: 20px;
// }