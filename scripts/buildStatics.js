import {execSync as exec} from 'child_process';
import fs from 'fs';
import path from 'path';
import {buildIndex} from './buildIndex/buildIndex.js';

const ENABLE_COUNTRIES_VANILLA = ['pt', 'it'];
const INDEX_PATH = './public/index.html';
const INDEX_CONTENT = fs.readFileSync(INDEX_PATH).toString();
const CONFIG = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'config', 'site-config.json')).toString());
const downLoadLocaleBySite = site => {
  exec(`npm run --site=${site} i18n:download`, {
    stdio: 'inherit',
  });
};

const clearBuild = (locale, mode) => {
  fs.writeFileSync(INDEX_PATH, INDEX_CONTENT);
  exec(`rm -f ${getPathToBuild(mode)}/${locale}/200.html`);
};

const createSiteMapBySite = site => {
  exec(`npm run --site=${site} build:sitemap`, {
    stdio: 'inherit',
  });
};

const clearLastBuild = () => {
  exec('rm -rf ./build');
};

const getPathToBuild = mode => `./build_multisite-${mode}`;

const clearPreviousBuild = mode => {
  exec('rm -rf ./build');
  exec(`rm -rf ${getPathToBuild(mode)}`);
};

const createSiteBuild = (locale, mode) => {
  process.env.REACT_APP_SITE = locale;
  console.log(`BUILDING DYNAMIC SITE ${locale} for ${mode}`);

  const newContent = Object.keys(CONFIG[locale]).reduce(
    (prev, curr) => prev.replace(new RegExp(`{{{${curr}}}}`, 'g'), CONFIG[locale][curr]),
    INDEX_CONTENT,
  );
  fs.writeFileSync(INDEX_PATH, newContent);

  exec(`yarn build:${mode}`, {
    stdio: 'inherit',
  });
  console.log(`BUILDING STATIC SITE ${locale}`);
  exec(`react-snap`, {
    stdio: 'inherit',
  });
  console.log(`MOVE STATIC SITE ${locale}`);
  exec(`mkdir -p ${getPathToBuild(mode)}/${locale}`);
  exec(`cp -a ./build/* ${getPathToBuild(mode)}/${locale}`);
  clearBuild(locale, mode);
};

const copyPublicFilesOfEnvironment = (mode, site) => {
  exec(`cp -R ./public-${mode}/. ${getPathToBuild(mode)}/${site}`);
};

const createBuild = (sites, mode) => {
  console.log('BUILDING SITES');
  clearPreviousBuild(mode);
  sites.forEach(site => {
    clearLastBuild();
    downLoadLocaleBySite(site);
    createSiteMapBySite(site);
    createSiteBuild(site, mode);
    copyPublicFilesOfEnvironment(mode, site);
  });
  buildIndex({mode, countries: ENABLE_COUNTRIES_VANILLA}).then(() => {
    clearLastBuild();
  });
};

(() => {
  const site = process.env.npm_config_site || 'uk';
  const sites = site.split(',');

  const mode = process.env.npm_config_mode || 'dev';
  createBuild(sites, mode);
})();
