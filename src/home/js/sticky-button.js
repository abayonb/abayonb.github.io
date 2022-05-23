import {device} from './helpers/device';
import {scrollToElement} from './helpers/scroll-to-element';

const fixedButtonContainer = document.getElementById('discover-sticky-button-container');
const fixedButton = document.getElementById('home-intro__cta');
const fixedButtonHeight = fixedButton.offsetHeight;
const header = document.getElementById('header-container');
const submitButton = document.getElementById('submit-quiz');
const quizTitle = document.querySelector('.home-quiz-title-container');
const wHeight = window.innerHeight;

const isFixedButtonVisible = () => {
  const fixedButtonBCR = fixedButton.getBoundingClientRect();
  return wHeight - fixedButtonBCR.top > 0 && fixedButtonBCR.top + fixedButton.offsetHeight > 0;
};

const isQuizTitleVisible = () => {
  if (device.mobile) {
    return (
      wHeight > quizTitle.getBoundingClientRect().bottom &&
      submitButton.getBoundingClientRect().top + submitButton.offsetHeight > 0
    );
  } else {
    return (
      wHeight - submitButton.getBoundingClientRect().top > 0 &&
      submitButton.getBoundingClientRect().top + submitButton.offsetHeight > 0
    );
  }
};

const isHeaderVisible = () => header.style.top === '0px';

const handleButtonVisibility = () => {
  if (!isQuizTitleVisible() && !isFixedButtonVisible()) {
    const desktopTop = isHeaderVisible() ? '48px' : 0;
    fixedButtonContainer.style.setProperty('opacity', 1);
    fixedButtonContainer.style.setProperty('bottom', device.mobile ? '0px' : 'auto');
    fixedButtonContainer.style.setProperty('top', device.mobile ? 'auto' : desktopTop);
  } else {
    fixedButtonContainer.style.setProperty('opacity', 0);
    fixedButtonContainer.style.setProperty('bottom', device.mobile ? `-${fixedButtonHeight}px` : 'auto');
    fixedButtonContainer.style.setProperty('top', device.mobile ? 'auto' : `-${fixedButtonHeight}px`);
  }
};

export const initStickyButton = () => {
  document.getElementById('sticky-button').addEventListener('click', () => scrollToElement('quiz'));
  window.addEventListener('scroll', handleButtonVisibility);
  handleButtonVisibility();
};
