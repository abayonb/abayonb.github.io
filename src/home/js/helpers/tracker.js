import Cookies from 'js-cookie';
import {device} from './device';

const CAMPAIGN_TRACKER_COOKIE = 'voyager';
const ATTRIBUTION_COOKIE = 'pathfinder';

const UTM_SOURCE = 'utm_source';
const UTM_KEYS = ['utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
const REGEXP = /(?:www\.)?([a-z0-9\-.]+)(?:\.[a-z.]+[/]?).*/;

const SEARCHER = 'searcher';
const SOCIAL = 'social';
const ATTRIBUTORS = [
  {name: 'google', type: SEARCHER, adParam: 'gclid='},
  {name: 'bing', type: SEARCHER, adParam: 'gclid='},
  {name: 'linkedin', type: SOCIAL, adParam: ''},
  {name: 'facebook', type: SOCIAL, adParam: 'ad_id='},
  {name: 'pinterest', type: SOCIAL, adParam: ''},
  {name: 'twitter', type: SOCIAL, adParam: ''},
  {name: 'instagram', type: SOCIAL, adParam: ''},
  {name: 'yahoo', type: SEARCHER, adParam: ''},
  {name: 'yandex', type: SEARCHER, adParam: ''},
  {name: 'duckduckgo', type: SEARCHER, adParam: ''},
  {name: 'ask.fm', type: SEARCHER, adParam: ''},
  {name: 'ask', type: SEARCHER, adParam: ''},
  {name: 'ecosia', type: SEARCHER, adParam: ''},
  {name: 'baidu', type: SEARCHER, adParam: ''},
];
const DOMAIN = 'lookiero';

const url = {
  get: parameter => (parameter ? new URL(window.location.href).searchParams.get(parameter) || undefined : undefined),
  has: parameter => url.get(parameter) !== undefined,
};

const hasExternalReferrer = (referrer = '') => referrer.indexOf(window.location.hostname) === -1;

const getTld = (url = '') => {
  const tld = hasExternalReferrer(url) ? REGEXP.exec(url) || [] : [];
  return tld[1] || '';
};

const getAttributor = (url = '') => {
  let attributor = {s: '', ad: false};
  const found = ATTRIBUTORS.find(item => url.indexOf(item.name) !== -1);
  if (found) {
    attributor = {
      s: found.type,
      ad: !!found.adParam && url.indexOf(found.adParam) !== -1,
    };
  }
  return attributor;
};

const getCookie = () => {
  const referrer = document.referrer || '';
  const timestamp = new Date().toISOString().split('T').join(' ').split('.')[0];
  const sanitizeReferrer = hasExternalReferrer(referrer) ? referrer.replace(/(^\w+:|^)\/\//, '') : '';
  return {
    ref: sanitizeReferrer,
    tld: getTld(referrer),
    ua: device.mobile ? 'mobile' : 'desktop',
    ts: timestamp,
    ...getAttributor(referrer),
  };
};

const removeDuplicateRefs = (acc, curr) => {
  const accRefs = acc.map(item => item.ref);
  if (!accRefs.includes(curr.ref)) {
    acc.push(curr);
  }
  return acc;
};

const applyStrategy = (values = [], newValue = {}) => {
  if (newValue && newValue.constructor === Object && Object.keys(newValue).length > 0) {
    values.push(newValue);
  }
  const sanitizeValues = values.reduce(removeDuplicateRefs, []);
  const valuesLength = sanitizeValues.length > 0;
  const last = valuesLength ? sanitizeValues[sanitizeValues.length - 1] : {};
  const first = valuesLength ? sanitizeValues[0] : {};

  if (first.constructor !== Object || Object.keys(first).length === 0) {
    return [];
  }
  if (last.ref === first.ref) {
    return [first];
  }
  return [first, last];
};

const getTopLevelDomain = hostname => {
  const hostnameSplit = hostname.split('.');
  const domainPosition = hostnameSplit.indexOf(DOMAIN);
  return hostnameSplit.slice(-(hostnameSplit.length - domainPosition)).join('.');
};

const setCookies = (name, newCookie) => {
  const prevCookies = Cookies.get(name);
  const prevCookiesParse = prevCookies ? JSON.parse(prevCookies) : [];
  const currentCookies = applyStrategy(prevCookiesParse, newCookie);
  Cookies.set(name, JSON.stringify(currentCookies), {
    expires: 365,
    path: '/',
    domain: `.${getTopLevelDomain(window.location.hostname)}`,
  });
};

const campaignTracker = () => {
  const utmSource = url.get(UTM_SOURCE);
  if (!utmSource) return;
  const cookie = {
    utm_source: utmSource,
    ...getCookie(),
  };
  UTM_KEYS.filter(key => url.has(key)).forEach(key => (cookie[key] = url.get(key)));
  setCookies(CAMPAIGN_TRACKER_COOKIE, cookie);
};

const attributionTracker = () => {
  const hasUtmSource = url.has(UTM_SOURCE);
  const referrer = document.referrer || '';
  if (hasUtmSource || !hasExternalReferrer(referrer)) return;
  const cookie = getCookie();
  setCookies(ATTRIBUTION_COOKIE, cookie);
};

export const initTracker = () => {
  campaignTracker();
  attributionTracker();
};
