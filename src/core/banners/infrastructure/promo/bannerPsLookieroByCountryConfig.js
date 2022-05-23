import {getSiteLocale} from '@core/site/application';

import {COUNTRY_CONFIG} from '../config/countryConfig';
import {userHasClosedBannerSessionStorage} from './userHasClosedBannerSessionStorage';

const BANNER_PS_LOOKIERO = 'hidden_promo_code';

export const bannerPsLookieroConfig = () => {
  const {country} = getSiteLocale();
  const {blackFriday, promo, special} = COUNTRY_CONFIG[country];

  if (special) {
    return {
      type: 'special',
      content: 'banner.campaignWelcome.message',
      blackFriday,
    };
  } else if (promo) {
    return {
      type: 'promo',
      content: 'banner.campaignWelcome.message',
      bannerName: BANNER_PS_LOOKIERO,
      blackFriday,
    };
  }
};

export const bannerPsLookieroByCountryConfig = () =>
  !userHasClosedBannerSessionStorage(BANNER_PS_LOOKIERO) && bannerPsLookieroConfig();
