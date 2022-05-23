const PADDING = 10;
const NUMBER_OF_CARDS_IN_BLOCK = 3;
const CARDS_TO_LAST_BLOCK = 6;

const initSlider = slider => {
  let isDown = false;
  let startX;
  let scrollLeft;
  const bullets = document.getElementsByClassName('slider-pagination-bullet');
  const scrollItemSize = document.getElementsByClassName('slider-item')[0].offsetWidth;
  slider.addEventListener('scroll', e => {
    const scroll = e.target.scrollLeft;
    if (scroll < scrollItemSize * NUMBER_OF_CARDS_IN_BLOCK - PADDING) {
      bullets[0].classList.add('active');
      bullets[1].classList.remove('active');
      bullets[2].classList.remove('active');
    } else if (scroll > scrollItemSize * CARDS_TO_LAST_BLOCK - PADDING) {
      bullets[2].classList.add('active');
      bullets[0].classList.remove('active');
      bullets[1].classList.remove('active');
    } else {
      bullets[1].classList.add('active');
      bullets[0].classList.remove('active');
      bullets[2].classList.remove('active');
    }
  });

  slider.addEventListener('mousedown', e => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });
  slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
  });
  slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
  });
  slider.addEventListener('mousemove', e => {
    if (!isDown) {
      return;
    }
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const SCROLL_SPEED = 3;
    const walk = (x - startX) * SCROLL_SPEED;
    slider.scrollLeft = scrollLeft - walk;
  });
  // por alguna razón el puto slider hace el scroll al final con lo cual se ve la última foto, queremos que se vea la
  // primera al aterrizar así que le pongo aquí a pelote el scrollLeft y a otra cosa mariposa
  slider.scrollLeft = 0;
};

export const initSliders = () => {
  document.querySelectorAll('.slider').forEach(initSlider);
};
