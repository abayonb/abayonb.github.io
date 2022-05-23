import {disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks} from 'body-scroll-lock';

const BodyScroll = {
  disable: (targetElement, options) => disableBodyScroll(targetElement, options),
  enable: targetElement => enableBodyScroll(targetElement),
  clearAllLocks: () => clearAllBodyScrollLocks(),
};

export {BodyScroll};
