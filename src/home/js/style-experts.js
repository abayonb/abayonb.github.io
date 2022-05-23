import {lockBodyScroll, unlockBodyScroll} from './helpers/lock-body-scroll';
import {device} from './helpers/device';

const modal = document.getElementById('brands-modal');
const modalContainer = modal.getElementsByClassName('brands-modal-container')[0];
const modalOverlay = document.getElementById('brands-modal-overlay');
const modalSection = document.getElementById('brands-modal-section');

const platform = device.platform;
const isDesktop = platform === 'desktop';
let imagesLoaded = false;

const imagePictures = {
  carmakoma: 'Carmakoma',
  espirit: 'esprit',
  'garcia-jeans': 'garcia',
  'grace-mila': 'Grace&Mila',
  ichi: 'ICHI',
  lee: 'lee',
  nafnaf: 'NAFNAF',
  only: 'Only',
  pieces: 'pieces',
  'scotch-soda': 'SCOTCH_SODA',
  'soft-rebels': 'SOFT_REBELS',
  'street-one': 'street_one',
  tiffossi: 'tiffosi',
  'vero-moda': 'Vero_moda',
  vila: 'vila',
};

const loadImages = () => {
  if (!imagesLoaded) {
    Object.keys(imagePictures).forEach(k => {
      const img = document.getElementById(k);
      img.src = `${process.env.REACT_APP_CDN_PATH}/usf/images/brands/${platform}/${imagePictures[k]}.png`;
      img.srcset = `${process.env.REACT_APP_CDN_PATH}/usf/images/brands/${platform}/${imagePictures[k]}.png 1x, ${process.env.REACT_APP_CDN_PATH}/usf/images/brands/${platform}/${imagePictures[k]}_2x.png 2x`;
    });
  }
  imagesLoaded = true;
};

const addTransformStyle = () => {
  modalSection.style['transform'] = isDesktop ? 'scale(0.9)' : 'translateY(120%)';
};

const setStyle = (section, classToRemove, classToAdd) => {
  section.classList.remove(classToRemove);
  section.classList.add(classToAdd);
};

const openModal = () => {
  loadImages();
  modalOverlay.style['opacity'] = 1;
  setStyle(modalOverlay, 'collapse', 'expand');
  modalSection.style['opacity'] = 1;
  modalSection.style['transform'] = isDesktop ? 'scale(1)' : 'translateY(0%)';
  setStyle(modalSection, 'collapse', 'expand');
  modal.classList.remove('pointerNone');
  modalContainer.style['max-height'] = `${window.innerHeight}px`;
  lockBodyScroll();
};

const closeModal = () => {
  modalOverlay.style['opacity'] = 0;
  setStyle(modalOverlay, 'expand', 'collapse');
  modalSection.style['opacity'] = 0;
  addTransformStyle();
  setStyle(modalSection, 'expand', 'collapse');
  modal.classList.add('pointerNone');
  unlockBodyScroll();
};

export const initStyleExperts = () => {
  if (isDesktop) {
    modalSection.classList.add('timing-spring');
  }
  addTransformStyle();
  document.getElementById('brands-modal-link').addEventListener('click', openModal);
  document.getElementById('brands-modal-close').addEventListener('click', closeModal);
  document.getElementById('brands-modal-overlay').addEventListener('click', closeModal);
};
