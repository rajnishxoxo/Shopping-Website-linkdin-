const imageSlider = document.getElementById("imageSlider");
const slideWidth = 400; // Width of each image slide in pixels
const interval = 3000; // Auto-slide interval in milliseconds (3 seconds)

let currentIndex = 0;

function updateSlider() {
  const translateX = -currentIndex * slideWidth;
  imageSlider.style.transition = "transform 0.3s ease-in-out";
  imageSlider.style.transform = `translateX(${translateX}px)`;
}

function nextSlide() {
  currentIndex++;
  if (currentIndex >= imageSlider.children.length) {
    currentIndex = 0; // Loop back to the first image
  }
  updateSlider();
}

function startAutoSlide() {
  setInterval(nextSlide, interval);
}

startAutoSlide(); // Start the auto-slide when the page loads
