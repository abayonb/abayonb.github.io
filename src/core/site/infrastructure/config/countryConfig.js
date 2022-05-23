import {COUNTRIES} from '@core/site/infrastructure';

const COUNTRY_CONFIG = {
  [COUNTRIES.BE]: {
    blog: true,
    giftcard: false,
  },
  [COUNTRIES.DE]: {
    blog: true,
    giftcard: false,
  },
  [COUNTRIES.ES]: {
    blog: true,
    giftcard: true,
  },
  [COUNTRIES.FR]: {
    blog: true,
    giftcard: true,
  },
  [COUNTRIES.IT]: {
    blog: true,
    giftcard: false,
  },
  [COUNTRIES.UK]: {
    blog: true,
    giftcard: true,
  },
  [COUNTRIES.PT]: {
    blog: true,
    giftcard: false,
  },
  [COUNTRIES.AT]: {
    blog: false,
    giftcard: false,
  },
};

export {COUNTRY_CONFIG};
