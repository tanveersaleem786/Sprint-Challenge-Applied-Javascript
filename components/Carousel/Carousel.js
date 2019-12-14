/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

function createCarousel() {

  let div = document.createElement('div');
  div.classList.add('carousel');

  let leftBtn = document.createElement('div');
  leftBtn.classList.add('left-button');
  leftBtn.textContent = ' < ';
  div.appendChild(leftBtn);

  leftBtn.addEventListener('click', () => plusSlides(-1));

  let image1 = document.createElement('img');
  image1.setAttribute('src', './assets/carousel/mountains.jpeg');
  div.appendChild(image1);

  let image2 = document.createElement('img');
  image2.setAttribute('src', './assets/carousel/computer.jpeg');
  div.appendChild(image2);

  let image3 = document.createElement('img');
  image3.setAttribute('src', './assets/carousel/trees.jpeg');
  div.appendChild(image3);

  let image4 = document.createElement('img');
  image4.setAttribute('src', './assets/carousel/turntable.jpeg');
  div.appendChild(image4);

  let rightBtn = document.createElement('div');
  rightBtn.classList.add('right-button');
  rightBtn.textContent = ' > ';
  div.appendChild(rightBtn);

  rightBtn.addEventListener('click', () => plusSlides(1));
  

  let carouselContainer = document.querySelector('.carousel-container');
  carouselContainer.appendChild(div);
}

createCarousel();

// Slider Code
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var i;
  var images = document.querySelectorAll(".carousel-container img");
  
  if (n > images.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = images.length}
  for (i = 0; i < images.length; i++) {
    images[i].style.display = "none";  
  }
 
  images[slideIndex-1].style.display = "block";  
  
}


