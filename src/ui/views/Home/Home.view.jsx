import React, {useEffect, useState, useRef} from 'react';
import PropTypes from 'prop-types';
import {useDevice} from '@aurora';

import {isLoggedIn} from '@core/auth/application';
import {HOME_PRIVATE_PATH} from '@app/Router';
import {suspenseComponents, useLocation} from '@bridges';
import {useNotification} from '@contexts';
import {usePresenter} from '@hooks';
import {useIntl} from '@i18n';
import {scrollToElement} from '@views/Home/modules';

import {FixedCTA, Intro, HowWork, Quiz, HOW_WORK_ID} from './components';
import {HomePresenter} from './Home.presenter';
import {SEO} from '@bridges';

const PsIntro = React.lazy(() => import('./components/PsIntro'));
const AdditionalInfo = React.lazy(() => import('./components/AdditionalInfo'));
const FooterHome = React.lazy(() => import('./components/FooterHome'));
const Influencers = React.lazy(() => import('./components/Influencers'));

const onLoadPage = ({hash}) => {
  scrollToElement(hash.replace('#', ''));
};

const HomeView = ({isHeaderVisible}) => {
  const ref = useRef(null);

  const [loadEvents, setLoadEvent] = useState([]);

  const [isVisible, setVisible] = useState(false);
  const [intersections, setIntersections] = useState({});

  const {formatMessage} = useIntl();
  const {showError} = useNotification();
  const {screen} = useDevice();
  const {hash} = useLocation();

  const {onLoadHome, onLoadImg, onListenIntersection: handleIntersection, observeElement} = usePresenter(() =>
    HomePresenter(
      {
        showNotification: showError,
        saveIntersections: setIntersections,
        saveLoadEvent: setLoadEvent,
      },
      [formatMessage],
    ),
  );

  useEffect(() => {
    onLoadHome();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    onLoadPage({hash});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loadEvents.length]);

  useEffect(() => {
    const canChangeVisible = () => {
      const intersectionsValues = Object.values(intersections);

      if (intersectionsValues.length === 2) {
        setVisible(!intersectionsValues.some(intersection => intersection));
      }
    };

    canChangeVisible();
  }, [intersections, screen.L]);

  if (isLoggedIn()) {
    window.location.href = HOME_PRIVATE_PATH;
    return null;
  }
  return (
    <>
      <SEO>
        <link rel="alternate" hrefLang="x-default" href="https://lookiero.com" />
      </SEO>
      <div ref={ref}>
        <FixedCTA {...{isVisible}} offset={isHeaderVisible} />
        <Intro {...{handleIntersection, observeElement, elementToScroll: HOW_WORK_ID, onLoadImg}} />
        {suspenseComponents(
          <HowWork {...{onLoadImg}} />,
          <PsIntro {...{onLoadImg}} />,
          <AdditionalInfo {...{onLoadImg}} />,
          <Quiz {...{handleIntersection, observeElement, onLoadImg}} />,
          <Influencers {...{onLoadImg}} />,
          <FooterHome />,
        )}
      </div>
    </>
  );
};

HomeView.propTypes = {
  isHeaderVisible: PropTypes.bool,
};

export {HomeView};
