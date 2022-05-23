import {GetEnvVars} from 'env-cmd';
import path from 'path';
import {DOMAINS, downloadLocales, fileNameByLocale} from '../../downloadAllLocales.js';
import fs from 'fs-extra';

export const getEnvConfiguration = async mode => {
  const configurationFile = mode === 'dev' ? '.env' : '.env.production';
  return GetEnvVars({
    envFile: {
      filePath: path.join(process.cwd(), configurationFile),
    },
  });
};

const getTranslations = (country = 'uk') => {
  const translationsPath = path.join(process.cwd(), `public/temp/i18n/locales/${fileNameByLocale[country]}.json`);
  try {
    return JSON.parse(fs.readFileSync(translationsPath).toString());
  } catch (e) {
    console.error(`error getting translations for ${country}`, e);
  }
  return {};
};

const COUNTRIES_CONFIG = fs.readJsonSync(path.join(process.cwd(), 'src', 'home', 'config', 'config.json'));

const getCountrySpecificConfig = country => {
  return {...COUNTRIES_CONFIG.default, ...COUNTRIES_CONFIG.countrySpecific[country]};
};

export const buildConfig = async mode => {
  const [config] = await Promise.all([getEnvConfiguration(mode), downloadLocales()]); // ignore locales, but download them
  Object.keys(fileNameByLocale).forEach(
    country =>
      (config[country] = {
        translations: getTranslations(country),
        config: getCountrySpecificConfig(country),
        domain: DOMAINS[country],
      }),
  );

  config.buildVersionHash = Buffer.from(`${new Date().getTime()}`, 'binary').toString('base64').replace('==', '');
  return config;
};
