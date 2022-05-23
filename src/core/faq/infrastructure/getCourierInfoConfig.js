import {getSiteLocale} from '@core/site/application';

import {COUNTRY_CONFIG} from './config/countryConfig';

export const getCourierInfoConfig = () => {
  const {country} = getSiteLocale();
  const {courierInfo} = COUNTRY_CONFIG[country];

  if (courierInfo) {
    return {
      title: 'contact.courier.info.title',
      content: 'contact.courier.info.content',
    };
  }
};
