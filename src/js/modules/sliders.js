export default (
  slides,
  direction = 'horizontal',
  prev,
  next,
  interval = 5000,
) => {
  let paused = null;
  let slideIndex = 1;
  const items = document.querySelectorAll(slides);

  const showSlides = (n) => {
    if (n > items.length) {
      slideIndex = 1;
    }

    if (n < 1) {
      slideIndex = items.length;
    }

    items.forEach((item) => {
      item.classList.add('animated');
      item.style.display = 'none';
    });

    items[slideIndex - 1].style.display = 'block';
  };

  showSlides(slideIndex);

  const addSlides = (n) => showSlides((slideIndex += n));

  try {
    const prevBtn = document.querySelector(prev);
    const nextBtn = document.querySelector(next);

    prevBtn.addEventListener('click', () => {
      addSlides(-1);
      items[slideIndex - 1].classList.remove('slideInRight');
      items[slideIndex - 1].classList.add('slideInLeft');
    });
    nextBtn.addEventListener('click', () => {
      addSlides(1);
      items[slideIndex - 1].classList.remove('slideInLeft');
      items[slideIndex - 1].classList.add('slideInRight');
    });
  } catch (err) {}

  const activateAnimation = () => {
    if (direction === 'vertical') {
      paused = setInterval(() => {
        addSlides(1);
        items[slideIndex - 1].classList.add('slideInDown');
      }, interval);
    } else {
      paused = setInterval(() => {
        addSlides(1);
        items[slideIndex - 1].classList.remove('slideInLeft');
        items[slideIndex - 1].classList.add('slideInRight');
      }, interval);
    }
  };

  activateAnimation();

  items[0].parentNode.addEventListener('mouseenter', () => {
    clearInterval(paused);
  });

  items[0].parentNode.addEventListener('mouseleave', () => {
    activateAnimation();
  });
};
