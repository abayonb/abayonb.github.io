import {siteRoutes} from '@core/site/infrastructure';
import {getSiteLocale} from '@core/site/application';

import {COUNTRY_CONFIG} from './config/countryConfig';

const {LEGAL_PATH, FAQ_PATH} = siteRoutes();

export const siteMainMenuLinks = () => {
  const {country, domain} = getSiteLocale();
  const {blog, giftcard} = COUNTRY_CONFIG[country];

  return [
    ...(blog
      ? [
          {
            title: 'navigation.menu.blog',
            href: `${domain}/blog/`,
          },
        ]
      : []),
    ...(giftcard
      ? [
          {
            title: 'navigation.menu.giftCard',
            href: '/giftcard/',
          },
        ]
      : []),
    {
      title: 'navigation.menu.help',
      to: FAQ_PATH,
    },
    {
      title: 'navigation.menu.tc',
      to: LEGAL_PATH,
    },
  ];
};
