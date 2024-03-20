let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let slide = document.querySelectorAll(".slide");
let counter = 0;
let intervalId;

// Set initial slide positions
slide.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

const slideimage = () => {
  slide.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
};

function handlePrev() {
  counter--;
  if (counter < 0) {
    counter = slide.length - 1;
  }
  slideimage();
}

function handleNext() {
  counter++;
  if (counter >= slide.length) {
    counter = 0;
  }
  slideimage();
}

// Start automatic sliding
function startSlider() {
  intervalId = setInterval(() => {
    counter++;
    if (counter >= slide.length) {
      counter = 0;
    }
    slideimage();
  }, 1000); 
}

// Stop automatic sliding
function stopSlider() {
  clearInterval(intervalId);
}

prev.addEventListener("click", () => {
  stopSlider();
  handlePrev();
});
next.addEventListener("click", () => {
  stopSlider();
  handleNext();
});

// Start automatic slider when the page loads
startSlider();
