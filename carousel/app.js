//define slideIndex
//init showSlides(slideIndex) at the first slide
// add controls. When pluSlides(number) showSlides slideIndex is added by the number in plusSlides
// current slide

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
// add the controls onclick number to the slideCount to move the slideIndex
function plusSlides(n) {
    showSlides(slideIndex += n);
  }

//thumbnail controls
// the currentslide is equal to the slide's show index
function currentSlide(n){
    showSlides(slideIndex = n);
}

//show the slides
function showSlides(n) {
    //set default
    var i;
    //get slides
    var slides = document.getElementsByClassName('slides');
    //get dots
    var dots = document.getElementsByClassName('dot');
    //if n(assigned slide index) length is less than the slides length then slideIndex = 1
    if (n > slides.length) {
        slideIndex = 1;
    }
    // if asslgined slide is greater than slides length then return the slideIndex as the length of the number of slides
    if(n < 1) {
        slideIndex = slides.length;
    }
    // loop through slides and display none;
    for ( i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    //loop through indicators and add the classname of active if the dot is the active slide
    for (i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(" active", "");
    }
    //add styling and class to slide and indicators
    slides[slideIndex-1].style.display= "block";
    dots[slideIndex-1].className += " active";
}