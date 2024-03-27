const slidesContainer = document.querySelector(".slides-1"); 
const prev = document.querySelector(".prev-1")
const next = document.querySelector(".next-1");
let currentIndex = 0;


prev.addEventListener("click", handlePrev)
next.addEventListener("click", handleNext);

var counter = 0
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

fetch("db.json")
  .then((response) => response.json())
  .then((data) => {
    data.product_data.forEach((product) => {
      const slideElement = document.createElement("div");
      slideElement.classList.add("slide");
      slideElement.classList.add("image");
      slideElement.classList.add("title");
      slideElement.classList.add("price");
      slideElement.innerHTML = `
        <img src="${product.image}" alt="${product.title}">
        <div class="product-details">
          <h3>${product.title}</h3>
          <p>${product.price}</p>
        </div>`;
      slidesContainer.appendChild(slideElement);
    });
  });

function changeSlide(direction) {
  const slides = document.querySelectorAll(".slide");
  const totalSlides = slides.length;
  currentIndex = (currentIndex + direction + totalSlides) % totalSlides;
  const offset = -currentIndex * 100;
  slidesContainer.style.transform = `translateX(${offset}%)`;
}
