const slidesContainer = document.querySelector('.slides');
let currentIndex = 0;

fetch('db.json')
  .then(response => response.json())
  .then(data => {
    data.product_data.forEach(product => {
      const slideElement = document.createElement('div');
      slideElement.classList.add('slide');
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
  const slides = document.querySelectorAll('.slide');
  const totalSlides = slides.length;
  currentIndex = (currentIndex + direction + totalSlides) % totalSlides;
  const offset = -currentIndex *100;
  slidesContainer.style.transform = `translateX(${offset}%)`;
}
