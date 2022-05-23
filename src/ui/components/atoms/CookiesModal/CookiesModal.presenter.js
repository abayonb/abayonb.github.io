import {getCookies} from '@core/site/application';
import {getRoutes} from '@core/site/application';
import {getTermsAndConditions} from '@core/legal/application';
import {Cookies} from '@bridges';

const {cookieAgreement} = getCookies();

const getState = () => Cookies.get(cookieAgreement) !== 'true';

const setAcceptCookieAgreement = () => {
  Cookies.set(cookieAgreement, true, {expires: 365});
};

const getCookiesPath = formatMessage => {
  const {LEGAL_PATH} = getRoutes();
  const data = getTermsAndConditions();
  const cookiesObject = data.topics.find(topic => topic.title === 'legal.cookiesPolicy.title');
  const cookiesHashPath = formatMessage({id: cookiesObject.hash});
  return `${LEGAL_PATH}#${cookiesHashPath}`;
};

export {setAcceptCookieAgreement, getState, getCookiesPath};
