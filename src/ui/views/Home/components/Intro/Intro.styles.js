import {ALIGN, DISPLAY} from '@aurora';

import './Intro.css';

const BOX_PROPS = {
  textAlign: ALIGN.CENTER,
  wide: true,
  display: DISPLAY.FLEX,
  justifyContent: ALIGN.CENTER,
  size: {M: '2/3', L: null},
};

const style = {
  base: 'home-intro',
  content: 'home-intro__content',
  contentTop: 'home-intro__content-top',
  contentBullets: 'home-intro__content-top__bullets',
  bullets: 'bullets',
  cta: 'home-intro__cta',
  media: 'home-intro__media',
  trustpilotImage: 'home-intro__trustpilot-image',
  trustpilotText: 'home-intro__trustpilot-text',
  trustpilotWrapper: 'home-intro__trustpilot-wrapper',
};

export {BOX_PROPS, style};
