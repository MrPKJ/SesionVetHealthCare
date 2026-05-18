/* Home page image slider */
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots   = document.querySelectorAll('.dot');

function showSlide(n) {
  slides[currentSlide].classList.remove('active');
  dots[currentSlide].classList.remove('active');
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');
}

function changeSlide(dir) { showSlide(currentSlide + dir); }
function goToSlide(n) { showSlide(n); }

// Auto-advance every 15 seconds (as per spec)
setInterval(() => changeSlide(1), 15000);
