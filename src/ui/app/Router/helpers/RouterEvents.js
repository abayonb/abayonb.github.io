import {useEffect} from 'react';
import {initTracking} from '@lookiero/user-tracking-front';

import {useLocation} from '@bridges';
import {getSiteLocale} from '@core/site/application';
import {scrollToTop} from '.';

const {userTracker} = initTracking();
const {site} = getSiteLocale();

const RouterEvents = () => {
  const {pathname} = useLocation();

  useEffect(() => {
    let section = pathname.split('/')[1] || '';
    if (section === '') section = 'home';

    userTracker({section, store: site});
    scrollToTop();
  }, [pathname]);

  return null;
};

export {RouterEvents};
