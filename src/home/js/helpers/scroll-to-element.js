import {iOSInAppBrowser} from './inAppBrowser';

export const scrollToElement = (id = '', blockEnd = false) => {
  const el = document.getElementById(id);
  if (!el) {
    return;
  }
  const rectObject = el.getBoundingClientRect();
  let delta = window.pageYOffset + rectObject.top;
  if (blockEnd) {
    delta = delta + (rectObject.height - window.innerHeight);
  }
  if (!blockEnd && iOSInAppBrowser()) {
    delta = delta - 64;
  }
  window.scrollTo({top: delta, behavior: 'smooth'});
};
