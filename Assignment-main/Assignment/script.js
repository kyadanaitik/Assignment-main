let currentIndex = 0;

function showSlides(index) {
    const slides = document.querySelector('.slides');
    const dots = document.querySelectorAll('.dot');
    const totalSlides = Math.ceil(document.querySelectorAll('.slide').length / 4);
    
    if (index >= totalSlides) { 
        currentIndex = totalSlides - 1;
    } else if (index < 0) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }

    slides.style.transform = `translateX(${-currentIndex * 100}%)`;
    
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentIndex].classList.add('active');
}

function currentSlide(index) {
    showSlides(index);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlides(currentIndex);
});

function changeImage(newSrc) {
    document.getElementById('project-img').src = newSrc;
}