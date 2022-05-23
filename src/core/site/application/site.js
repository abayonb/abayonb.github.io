import {
  COUNTRIES,
  SITE,
  siteCountries,
  siteCookies,
  siteMainMenuLinks,
  siteRoutes,
  siteComResources,
  siteLocaleByDomain,
  siteSettingsApi,
  siteSocialLinks,
  userRoutes,
} from '@core/site/infrastructure';

const getCountries = () => siteCountries();
const getCookies = () => siteCookies();
const getMainMenuLinks = () => siteMainMenuLinks();
const getPrivateRoutes = () => userRoutes();
const getRoutes = () => siteRoutes();
const getSiteComResources = () => siteComResources();
const getSiteLocale = () => siteLocaleByDomain();
const getSiteSettings = country => siteSettingsApi(country);
const getSiteSocialLinks = () => siteSocialLinks();

export {
  COUNTRIES,
  SITE,
  getCountries,
  getCookies,
  getMainMenuLinks,
  getPrivateRoutes,
  getRoutes,
  getSiteComResources,
  getSiteLocale,
  getSiteSettings,
  getSiteSocialLinks,
};
