import {handleHeaderScroll} from './sticky-header-behaviour';
import {initHomeIntro} from './home-intro';
import {initHeader} from './header';
import {initLazyImagesLoad} from './helpers/lazy-load-images';
import {initSliders} from './slider';
import {initStyleExperts} from './style-experts';
import {initQuizQuestions} from './quiz-question';
import {initStickyButton} from './sticky-button';
import {sendAnalyticsEvent} from './helpers/analytics-event';
import {initCookiesModal} from './cookies-modal';
import {initHowItWorks} from './how-it-works';
import {initTracker} from './helpers/tracker';

(() => {
  initTracker();
  sendAnalyticsEvent('home');
  handleHeaderScroll();
  initHomeIntro();
  initHeader();
  initLazyImagesLoad();
  initSliders();
  initStyleExperts();
  initQuizQuestions();
  initStickyButton();
  initCookiesModal();
  initHowItWorks();
})();
