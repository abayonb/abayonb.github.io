import {getSiteLocale} from '@core/site/application';

import {COUNTRY_CONFIG} from './config/countryConfig';

const GENERAL_TOPIC = 'how-it-works';
const MY_ACCOUNT_TOPIC = 'my-account-and-subscription';
const PS_TOPIC = 'personalshopper-who-they-are';
const PAY_TOPIC = 'pay-how-it-works';
const PROMOCODES_TOPIC = 'promocodes';
const SHIPPING_TOPIC = 'shipping-how-it-works';
const RETURNS_TOPIC = 'returns-how-it-works';
const RAF_TOPIC = 'referrals-how-it-works';
const GIFTCARD_TOPIC = 'giftcard';

const FAQ_TOPIC = {
  GENERAL: {
    id: 'help.faq.general.title',
    defaultMessage: 'General',
    value: GENERAL_TOPIC,
  },
  GIFTCARD: {
    id: 'help.faq.giftcard.title',
    defaultMessage: 'Giftcard',
    value: GIFTCARD_TOPIC,
  },
  MY_ACCOUNT: {
    id: 'help.faq.myacc.title',
    defaultMessage: 'My Account and supscription',
    value: MY_ACCOUNT_TOPIC,
  },

  PAY: {
    id: 'help.faq.pay.title',
    defaultMessage: 'Pay',
    value: PAY_TOPIC,
  },
  PROMOCODES: {
    id: 'help.faq.promocodes.title',
    defaultMessage: 'Promocodes',
    value: PROMOCODES_TOPIC,
  },
  PS: {
    id: 'help.faq.ps.title',
    defaultMessage: 'Personal Shopper',
    value: PS_TOPIC,
  },
  RAF: {
    id: 'help.faq.mgm.title',
    defaultMessage: 'Referrals',
    value: RAF_TOPIC,
  },
  RETURNS: {
    id: 'help.faq.returns.title',
    defaultMessage: 'Returns',
    value: RETURNS_TOPIC,
  },
  SHIPPING: {
    id: 'help.faq.shipping.title',
    defaultMessage: 'Shipping',
    value: SHIPPING_TOPIC,
  },
};

const SELECT_FAQ_TOPICS = [
  FAQ_TOPIC.GENERAL,
  FAQ_TOPIC.MY_ACCOUNT,
  FAQ_TOPIC.PS,
  FAQ_TOPIC.PAY,
  FAQ_TOPIC.PROMOCODES,
  FAQ_TOPIC.SHIPPING,
  FAQ_TOPIC.RETURNS,
  FAQ_TOPIC.RAF,
];

const getTopicsConfig = () => {
  const {country} = getSiteLocale();
  const {giftcardInfo} = COUNTRY_CONFIG[country];

  return giftcardInfo ? [...SELECT_FAQ_TOPICS, FAQ_TOPIC.GIFTCARD] : SELECT_FAQ_TOPICS;
};

export {
  getTopicsConfig,
  GENERAL_TOPIC,
  MY_ACCOUNT_TOPIC,
  PS_TOPIC,
  PAY_TOPIC,
  PROMOCODES_TOPIC,
  SHIPPING_TOPIC,
  RETURNS_TOPIC,
  RAF_TOPIC,
  GIFTCARD_TOPIC,
};
