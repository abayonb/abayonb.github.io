import {getSiteLocale} from '@core/site/application';

import {COUNTRY_CONFIG} from '../config/countryConfig';

export const bannerInfoConfig = () => {
  const {country} = getSiteLocale();
  const {info} = COUNTRY_CONFIG[country];
  if (info) {
    return {
      content: {
        text: 'bannerinfo.covid.content',
        link: 'bannerinfo.covid.link',
      },
      modal: {
        title: 'bannerinfo.covid.modal.title',
        content: 'bannerinfo.covid.modal.content',
      },
      logo: true,
    };
  }
};
