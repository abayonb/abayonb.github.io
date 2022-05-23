import {iOSInAppBrowser} from '../../../../home/js/helpers/inAppBrowser';

export const scrollToElement = (id = '', {blockEnd = false} = {}) => {
  const el = document.getElementById(id);

  if (!el) {
    return;
  }

  const {height: targetHeight, top: targetTop} = el.getBoundingClientRect();
  let delta = window.pageYOffset + targetTop;

  if (blockEnd) {
    delta = delta + (targetHeight - window.innerHeight);
  }

  if (!blockEnd && iOSInAppBrowser()) {
    delta = delta - 64;
  }
  window.scrollTo({top: delta, behavior: 'smooth'});
};
