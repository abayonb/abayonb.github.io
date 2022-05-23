import {siteCountries} from './siteCountriesConfig.js';

export const siteDomainByCountry = country => {
  const sites = siteCountries();
  const site = sites.find(site => site.code === country);
  if (!site) return false;
  return site.value;
};
