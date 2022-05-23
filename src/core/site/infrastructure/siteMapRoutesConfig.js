import fetch from 'cross-fetch';
import convert from 'xml-js';
import {siteRoutes} from './siteRoutesConfig.js';

const {HOME_PATH, FAQ_PATH, LEGAL_PATH} = siteRoutes();
const defaultLastPostMod = '2019-06-27T12:30:00+00:00';

const getBlogLastMod = async domain => {
  try {
    const site = domain.split('.').pop();
    if (site.match('be|at')) return;
    const fetchObjectResponse = await fetch(`${domain}/blog/sitemap.xml`);
    const fetchDataString = await fetchObjectResponse.text();

    const dataAsJson = convert.xml2js(fetchDataString);
    const lastPost = dataAsJson.elements[0].elements[0].elements;
    const lastmod = lastPost.filter(post => post.name === 'lastmod');
    return lastmod[0].elements[0].text;
  } catch (error) {
    return defaultLastPostMod;
  }
};

const getSiteMapRoutes = async domain => {
  const blogLastMod = await getBlogLastMod(domain);
  const siteMapRoutes = [
    {path: HOME_PATH, priority: '1.0'},
    {path: FAQ_PATH, priority: '0.8'},
    {path: LEGAL_PATH, priority: '0.1'},
    {path: '/blog/', lastmod: blogLastMod, changefreq: 'weekly'},
    domain === 'https://lookiero.es' ? {path: '/es/personal-shopper/', priority: '0.7'} : undefined,
    domain === 'https://lookiero.fr' ? {path: '/fr/personal-shopper/', priority: '0.7'} : undefined,
  ];
  return siteMapRoutes;
};

export {getSiteMapRoutes};
