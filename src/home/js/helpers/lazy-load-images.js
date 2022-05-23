import {IMAGES_DEFINITION} from './images.definition';
import {device} from './device';

const IMAGES = [...document.getElementsByClassName('lazyImage')]
  .filter(img => {
    const onlyDesktop = Boolean(img.getAttribute('data-only-desktop'));
    return (onlyDesktop && device.desktop) || !onlyDesktop;
  })
  .reduce(
    (prev, curr) =>
      Object.assign(prev, {[curr.id]: {element: curr, position: curr.getBoundingClientRect().y + window.scrollY}}),
    {},
  );

const windowHeight = window.innerHeight;

const loadImage = image => {
  const definition = IMAGES_DEFINITION[image.id];
  image.src = definition.src;
  if (definition.srcset) {
    image.srcset = definition.srcset;
  }
  ['lazyImage', 'image--lazy', 'image--ease'].forEach(className => {
    if (Object.values(image.classList).includes(className)) {
      image.classList.remove(className);
    }
  });
  return delete IMAGES[image.id];
};

const handleImages = () => {
  Object.keys(IMAGES).forEach(key => {
    const isQuizImage = key.includes('quiz-question-');
    const showedOnScrollDown = window.scrollY + windowHeight > IMAGES[key].position + 100;
    const showedOnScrollUp = window.scrollY - windowHeight < IMAGES[key].position - 100;
    if (isQuizImage || (showedOnScrollDown && showedOnScrollUp)) {
      loadImage(IMAGES[key].element);
    }
  });
};

export const initLazyImagesLoad = () => {
  window.addEventListener('scroll', handleImages);
  // execute it on startup to load images in case they are in current's visible content
  handleImages();
};
