import {getCookies} from '@core/site/application';
import {cookie as storage} from '@core/storage/infrastructure';

import {TEXT} from './Home.intl';

const HomePresenter = (view, [formatMessage]) => ({
  observeElement: ({element = '', handleIntersection = () => {}}) => {
    const target = document.querySelector(element);
    const observer = new IntersectionObserver(handleIntersection);
    if (target) {
      observer.observe(target);
    }
    return () => observer.disconnect();
  },
  onListenIntersection: entries => {
    entries.forEach(entry => {
      view.saveIntersections(prev => ({
        ...prev,
        ...(entry.target.id !== '' ? {[entry.target.id]: entry.isIntersecting} : {}),
      }));
    });
  },
  onLoadHome: () => {
    const {cookieReferralLandingError: cookie} = getCookies();

    if (storage.get(cookie)) {
      storage.remove(cookie);

      view.showNotification({
        message: formatMessage(TEXT.NOTIFICATION),
      });
    }
  },
  onLoadImg: () => {
    view.saveLoadEvent(prev => {
      prev.push(true);
      return prev;
    });
  },
});

export {HomePresenter};
