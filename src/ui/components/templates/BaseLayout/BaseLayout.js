import React, {Suspense, useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {useHistory} from 'react-router-dom';

import {Aurora, DISPLAY, FLEX_DIRECTION, LAYOUT, View} from '@aurora';

import {HOME_PATH} from '@app/Router';
import {Route} from '@bridges';
import {IconLogoLoading} from '@components/primitives/Icons';
import {SEOManager} from '@components/atoms';
import {Header, PanelContent} from '@components/organisms';
import {eventManager} from '@core/event/application';
import {isSeoRender} from '@core/seo/application';
import {getSiteLocale} from '@core/site/application';
import {useScrollDirection, SCROLL} from '@hooks';
import {useIntl} from '@i18n';
import {EVENT, SECTION} from '@tracking/tracking.definition';
import {SITE} from '@core/site/infrastructure/siteLocaleByDomain';

const CookiesModal = React.lazy(() => import('@components/atoms/CookiesModal/CookiesModal'));

const HEADER_HEIGHT = 48;

const domain = window.location.hostname.split('.').pop();
const domainsBanned = ['pt', 'be'];
const showCookiesModal = !(domainsBanned.indexOf(domain) > -1);

const BaseLayout = ({component: Component, path, ...props}) => {
  const {loadedMessages} = useIntl();
  const history = useHistory();
  const {direction, offsetReached} = useScrollDirection(HEADER_HEIGHT);

  const [isVisible, setVisible] = useState(true);
  const [panelVisible, setPanelVisible] = useState(false);
  const {site} = getSiteLocale();

  useEffect(() => {
    const handleHeaderVisibility = () => {
      if (direction === SCROLL.DOWN && offsetReached && isVisible) {
        setVisible(false);
      } else if (direction === SCROLL.UP && !isVisible) {
        setVisible(true);
      }
    };

    handleHeaderVisibility();
  }, [isVisible, direction, offsetReached]);

  useEffect(
    () =>
      history.listen(() => {
        if (panelVisible) setPanelVisible(false);
      }),
    [history, panelVisible],
  );

  useEffect(() => {
    if (panelVisible) {
      eventManager.emit(EVENT.PAGEVIEW, {section: SECTION.OPEN_MENU, store: site, userLogged: false});
    }
  }, [panelVisible, site]);

  const navigateTo = () => {
    const enableHomeVanilla = [SITE.PT, SITE.IT].some(country => country === site);
    return enableHomeVanilla ? window.open('/', '_self') : history.push(HOME_PATH);
  };

  return (
    <Aurora>
      <IconLogoLoading isVisible={loadedMessages} />
      <View
        display={DISPLAY.FLEX}
        flexDirection={FLEX_DIRECTION.COLUMN}
        wide
        customStyle="viewport-height main-content"
        style={{visibility: !loadedMessages ? 'hidden' : 'visible'}}
      >
        <SEOManager path={path} />
        <Header isVisible={isVisible} openPanel={() => setPanelVisible(true)} goHome={navigateTo} />
        {!isSeoRender && <PanelContent isVisible={panelVisible} onClose={() => setPanelVisible(false)} />}
        <View marginTop={LAYOUT.M}>
          <Route path={path} {...props}>
            <Component pathTo={path} isHeaderVisible={isVisible} />
          </Route>
        </View>
        {showCookiesModal && (
          <Suspense fallback={<div />}>
            <CookiesModal />
          </Suspense>
        )}
      </View>
    </Aurora>
  );
};

BaseLayout.propTypes = {
  component: PropTypes.func,
  path: PropTypes.string,
};

export {BaseLayout};
