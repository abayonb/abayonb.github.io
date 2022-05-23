import {downloadLocale, downloadLocales} from './downloadAllLocales.js';

(() => {
  const site = process.env.npm_config_site || false;
  if (site) {
    downloadLocale(site);
  } else {
    downloadLocales();
  }
})();
