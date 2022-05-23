import fs from 'fs';
import xmlbuilder from 'xmlbuilder2';

import {getSiteMapRoutes} from '../src/core/site/infrastructure/siteMapRoutesConfig.js';
import {siteDomainByCountry} from '../src/core/site/infrastructure/siteDomainByCountry.js';

const getDomainByLocale = () => {
  let site = process.env.npm_config_site || false;
  if (site === 'uk') site = 'gb';
  return siteDomainByCountry(site.toUpperCase());
};

const parserUrlsToSitemap = async (domain, siteMapRoutes) => {
  return siteMapRoutes.map(url => {
    if (url) {
      const {path, ...params} = url;
      const site = domain.split('.').pop();
      if (path === '/blog/' && site.match('be|at')) return;
      return {loc: domain + path, ...params};
    }
  });
};

const generateSiteMap = siteMapObject => {
  const obj = {
    urlset: {
      '@att': 'http://www.sitemaps.org/schemas/sitemap/0.9',
      url: [siteMapObject],
    },
  };

  const doc = xmlbuilder.create({version: '1.0', encoding: 'UTF-8'}, obj);
  const xml = doc.end({prettyPrint: true});

  fs.writeFile('./public/sitemap.xml', xml, err => {
    if (err) throw err;

    console.log('The sitemap was succesfully saved!');
  });
};

(async () => {
  const domain = getDomainByLocale();
  const siteMapRoutes = await getSiteMapRoutes(domain);
  const siteMapObject = await parserUrlsToSitemap(domain, siteMapRoutes);
  generateSiteMap(siteMapObject);
})();
