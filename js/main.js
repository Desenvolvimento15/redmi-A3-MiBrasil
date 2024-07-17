const slides = document.getElementById('slides');
  const dotsContainer = document.getElementById('dots-container');
  const textItem = document.getElementById('text-item');

  const slideTexts = ["Roxa", "Verde", "Preto"];

  let currentSlide = 0;

  function showSlide(index) {
    slides.style.transform = `translateX(${-index * 100}%)`;
    textItem.textContent = slideTexts[index];

    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
  }

  function createDots() {
    for (let i = 0; i < slideTexts.length; i++) {
      const dot = document.createElement('span');
      dot.classList.add('dot');
      dot.addEventListener('click', () => showSlide(i));
      dotsContainer.appendChild(dot);
    }
  }

  function autoPlay() {
    setInterval(() => {
      currentSlide = (currentSlide + 1) % slideTexts.length;
      showSlide(currentSlide);
    }, 3000); // Change slide every 3 seconds
  }

  createDots();
  showSlide(currentSlide);