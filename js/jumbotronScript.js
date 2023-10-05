const rotateBtn = document.querySelector('.rotate-btn');
const slides = document.querySelectorAll('.bg-slide');
const totalSlides = slides.length;
let index = 0;

rotateBtn.addEventListener('click', () => {
    rotateBtn.classList.add('active');
    setTimeout(() => {
        rotateBtn.classList.remove('active');
    }, 2100);

    slides.forEach(slide => {
        if (slide.classList.contains('active')) {
            slide.classList.add('after-active');
        }
        else {
            slide.classList.remove('after-active');
        }
    })

    slides[index].classList.remove('active');

    index++;

    if (index == totalSlides) {
        index = 0;
    }

    slides[index].classList.add('active');
})

// Navbar Scrolled
window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 100) { // Ganti dengan jumlah scroll yang Anda inginkan
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });