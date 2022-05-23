import {isSeoRender} from '@core/seo/application';
import {siteDomainByCountry} from '@core/site/infrastructure';

const SITE = {
  BE: 'BE',
  DE: 'DE',
  ES: 'ES',
  FR: 'FR',
  IT: 'IT',
  PT: 'PT',
  UK: 'UK',
  AT: 'AT',
};

const DOMAIN = {
  [SITE.BE]: 'be',
  [SITE.DE]: 'de',
  [SITE.ES]: 'es',
  [SITE.FR]: 'fr',
  [SITE.IT]: 'it',
  [SITE.PT]: 'pt',
  [SITE.UK]: 'co.uk',
  [SITE.AT]: 'at',
};

const LANGUAGES = {
  [SITE.BE]: 'fr',
  [SITE.DE]: 'de',
  [SITE.ES]: 'es',
  [SITE.FR]: 'fr',
  [SITE.IT]: 'it',
  LU: 'fr',
  [SITE.PT]: 'pt',
  [SITE.UK]: 'en',
  [SITE.AT]: 'de',
};

const COUNTRIES = {
  [SITE.BE]: 'BE',
  [SITE.DE]: 'DE',
  [SITE.ES]: 'ES',
  [SITE.FR]: 'FR',
  [SITE.IT]: 'IT',
  LU: 'LU',
  [SITE.PT]: 'PT',
  [SITE.UK]: 'GB',
  [SITE.AT]: 'AT',
};

const DEFAULT_COUNTRY = COUNTRIES.UK;
const DEFAULT_LANGUAGE = LANGUAGES.UK;
const DEFAULT_SITE = SITE.UK;

const getSiteByDomain = () => {
  if (isSeoRender) {
    return SITE[process.env.REACT_APP_SITE.toUpperCase()] || DEFAULT_SITE;
  }
  const domain = window.location.hostname.split('.');
  const host = domain[domain.length - 1].toUpperCase();

  return SITE[host] || DEFAULT_SITE;
};

const getLanguageBySite = site => LANGUAGES[site] || DEFAULT_LANGUAGE;
const getCountryBySite = site => COUNTRIES[site] || DEFAULT_COUNTRY;

const getLocaleToString = site => `${getLanguageBySite(site)}-${getCountryBySite(site)}`;

const getSiteMetaData = path => {
  return Object.keys(SITE).map(site => ({
    hrefLang: getLocaleToString(site),
    url: `https://lookiero.${DOMAIN[site]}${path}`,
  }));
};

const siteLocaleByDomain = () => {
  const site = getSiteByDomain();
  const country = getCountryBySite(site);
  const language = getLanguageBySite(site);
  const locale = getLocaleToString(site);
  const domain = siteDomainByCountry(country);
  const meta = path => getSiteMetaData(path);
  return {
    locale,
    language,
    country,
    domain,
    meta,
    site,
  };
};

export {COUNTRIES, SITE, siteLocaleByDomain};
