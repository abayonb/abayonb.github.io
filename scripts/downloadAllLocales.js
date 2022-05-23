import * as https from 'https';
import fs from 'fs';
import {execSync as exec} from 'child_process';

const SITES_KEYS = {
  ES: 'es',
  FR: 'fr',
  UK: 'uk',
  BE: 'be',
  LU: 'lu',
  IT: 'it',
  PT: 'pt',
  DE: 'de',
  AT: 'at',
};

const SITES = [
  SITES_KEYS.ES,
  SITES_KEYS.UK,
  SITES_KEYS.FR,
  SITES_KEYS.BE,
  SITES_KEYS.LU,
  SITES_KEYS.PT,
  SITES_KEYS.IT,
  SITES_KEYS.DE,
  SITES_KEYS.AT,
];
const localesDir = './public/temp/i18n/locales';

const LANGUAGES = {
  [SITES_KEYS.ES]: 'es',
  [SITES_KEYS.FR]: 'fr',
  [SITES_KEYS.UK]: 'en',
  [SITES_KEYS.BE]: 'fr',
  [SITES_KEYS.LU]: 'fr',
  [SITES_KEYS.IT]: 'it',
  [SITES_KEYS.PT]: 'pt',
  [SITES_KEYS.DE]: 'de',
  [SITES_KEYS.AT]: 'de',
};

const COUNTRY = {
  [SITES_KEYS.ES]: 'ES',
  [SITES_KEYS.FR]: 'FR',
  [SITES_KEYS.UK]: 'GB',
  [SITES_KEYS.BE]: 'BE',
  [SITES_KEYS.LU]: 'LU',
  [SITES_KEYS.IT]: 'IT',
  [SITES_KEYS.PT]: 'PT',
  [SITES_KEYS.DE]: 'DE',
  [SITES_KEYS.AT]: 'AT',
};

export const fileNameByLocale = {
  [SITES_KEYS.ES]: 'es-ES',
  [SITES_KEYS.FR]: 'fr-FR',
  [SITES_KEYS.UK]: 'en-GB',
  [SITES_KEYS.BE]: 'fr-BE',
  [SITES_KEYS.LU]: 'fr-LU',
  [SITES_KEYS.IT]: 'it-IT',
  [SITES_KEYS.PT]: 'pt-PT',
  [SITES_KEYS.DE]: 'de-DE',
  [SITES_KEYS.AT]: 'de-AT',
};

export const DOMAINS = {
  [SITES_KEYS.BE]: 'be',
  [SITES_KEYS.DE]: 'de',
  [SITES_KEYS.ES]: 'es',
  [SITES_KEYS.FR]: 'fr',
  [SITES_KEYS.IT]: 'it',
  [SITES_KEYS.PT]: 'pt',
  [SITES_KEYS.UK]: 'co.uk',
  [SITES_KEYS.AT]: 'at',
};

const createLocaleDir = () => {
  if (!fs.existsSync(localesDir)) {
    exec(`mkdir -p ${localesDir}`);
  }
};

const createLocaleFile = site => {
  return new Promise(resolve => {
    let file;
    const fileName = fileNameByLocale[site];
    https.get(
      `https://backend-for-user.prod.envs.lookiero.tech/api/v1/translations/${LANGUAGES[site]}/${COUNTRY[site]}?projects=user-site-front`,
      response => {
        console.log(`Downloaded ${fileName}.json`);

        file = fs.createWriteStream(`${localesDir}/${fileName}.json`);
        response.pipe(file);
        response.on('end', () => resolve());
      },
    );
  });
};

export const downloadLocales = () => {
  return new Promise(resolve => {
    console.log('BUILDING SITES');
    console.log('Download messages for all locales:');
    createLocaleDir();
    Promise.all(SITES.map(site => createLocaleFile(site)))
      .then(() => resolve())
      .catch(console.error);
  });
};

export const downloadLocale = site => {
  console.log('Download messages for single locale:', site);
  createLocaleDir();
  createLocaleFile(site)
    .then(() => console.log('Downloaded locale for ', site))
    .catch(console.error);
};
