import {COUNTRIES} from '@core/site/application';

const COUNTRY_CONFIG = {
  [COUNTRIES.BE]: {
    courierInfo: false,
    giftcardInfo: true,
  },
  [COUNTRIES.DE]: {
    courierInfo: false,
    giftcardInfo: false,
  },
  [COUNTRIES.ES]: {
    courierInfo: false,
    giftcardInfo: true,
  },
  [COUNTRIES.FR]: {
    courierInfo: false,
    giftcardInfo: true,
  },
  [COUNTRIES.IT]: {
    courierInfo: false,
    giftcardInfo: false,
  },
  [COUNTRIES.UK]: {
    courierInfo: true,
    giftcardInfo: true,
  },
  [COUNTRIES.PT]: {
    courierInfo: false,
    giftcardInfo: false,
  },
  [COUNTRIES.AT]: {
    courierInfo: false,
    giftcardInfo: false,
  },
};

export {COUNTRY_CONFIG};
