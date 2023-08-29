const slides = document.querySelectorAll('.slide');
const buttons = document.querySelectorAll('.slider__btn');
const bannerSection = document.getElementById('bannerSection');
const prevButton = document.getElementById('prevBtn');
const nextButton = document.getElementById('nextBtn');
let currentSlide = 0;

buttons[currentSlide].classList.add('active');

prevButton.addEventListener('click', () => {
    changeSlide(-1);
});

nextButton.addEventListener('click', () => {
    changeSlide(1);
});

function changeSlide(direction) {
    slides[currentSlide].classList.remove('active');
    buttons[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
    buttons[currentSlide].classList.add('active');
    
    const backgroundImage = slides[currentSlide].getAttribute('data-bg');
    bannerSection.style.backgroundImage = `linear-gradient(0deg, rgba(41, 59, 43, 0.35) 0%, rgba(41, 59, 43, 0.35) 100%), radial-gradient(58.29% 46.00% at 50.00% 54.00%, rgba(41, 59, 43, 0.00) 50.26%, #293B2B 100%), url('${backgroundImage}')`;
}
