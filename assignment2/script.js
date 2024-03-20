// Create a slide show with at least 20 images (take some dummy images)
// There should be a button to stop the slide show and start the slide show (see if you can do both start and stop using single button)
// Provide a next and previous button below the slide show.
// On clicking the next or previous button the automatic slide show will stop
// And it will work as a normal slider


let prev = document.querySelector(".prev");
let next = document.querySelector(".next");

prev.addEventListener("click", handlePrev)
next.addEventListener("click", handleNext);


let slide = document.querySelectorAll(".slide")
var counter = 0;

slide.forEach(
    (slide,index) => {
        slide.style.left = `${index * 100}%`
        slide.style.left = `${index * 100}%`;
}
);

const slideimage = () => {
    slide.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${counter*100}%)`
        }
    )
}

function handlePrev() {
    counter--
    // alert()
    slideimage()
}

function handleNext() {
    counter++;
    // alert()
  slideimage();
}