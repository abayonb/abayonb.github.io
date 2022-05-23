import {device} from './helpers/device';
import {scrollToElement} from './helpers/scroll-to-element';

const deviceText = device.platform;

const swapMainImage = () => {
  const img = document.getElementById('home-intro-main-image');
  img.src = `${process.env.REACT_APP_CDN_PATH}/usf/images/intro/${deviceText}/${Lookiero.homeIntroImage}.jpg`;
  img.srcset = `${process.env.REACT_APP_CDN_PATH}/usf/images/intro/${deviceText}/${Lookiero.homeIntroImage}.jpg 1x, ${process.env.REACT_APP_CDN_PATH}/usf/images/intro/${deviceText}/${Lookiero.homeIntroImage}@2x.jpg 2x`;
};

const swapTrustPilotImages = () => {
  const trustPilotLogo = document.getElementById('trustpilot-logo-image');
  const trustPilotStars = document.getElementById('trustpilot-stars-image');
  if (trustPilotLogo && trustPilotStars) {
    trustPilotLogo.src = `${process.env.REACT_APP_CDN_PATH}/usf/images/intro/trustpilot/logo.svg`;
    trustPilotLogo.srcset = `${process.env.REACT_APP_CDN_PATH}/usf/images/intro/trustpilot/logo.svg`;
    trustPilotStars.src = `${process.env.REACT_APP_CDN_PATH}/usf/images/intro/trustpilot/stars.svg`;
    trustPilotStars.srcset = `${process.env.REACT_APP_CDN_PATH}/usf/images/intro/trustpilot/stars.svg`;
  }
};

const swapEmptyImages = () => {
  swapMainImage();
  swapTrustPilotImages();
};

export const initHomeIntro = () => {
  swapEmptyImages();
  document.getElementById('home-intro__cta').addEventListener('click', () => scrollToElement('quiz'));
  document.getElementById('home-intro-to-next-section').addEventListener('click', () => scrollToElement('how'));
};
