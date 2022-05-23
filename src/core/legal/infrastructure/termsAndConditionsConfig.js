import {getSiteLocale} from '@core/site/application';

import {LEGAL_TOPICS_BY_COUNTRY} from './config/countryConfig';

export const termsAndConditionsConfig = () => {
  const {country} = getSiteLocale();
  return LEGAL_TOPICS_BY_COUNTRY[country];
};
