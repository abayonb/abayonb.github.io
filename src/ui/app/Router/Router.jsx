import React, {Suspense} from 'react';

import {Route, Router, Switch} from '@bridges';
import {BaseLayout} from '@components/templates';
import {Home, HomeSiteCom, Legal, Faq, NotFound, Unsubscribe, Prime} from './Router.components';
import {RouterEvents} from './helpers';
import {HOME_PATH, LEGAL_PATH, FAQ_PATH, PRIME_PATH} from './Router.config';
import {View} from '@aurora';

const SITE = window.location.hostname.split('.').pop().toUpperCase();

const isSiteCom = SITE === 'COM';

const AppRouter = () => (
  <Router basename="/">
    <RouterEvents />
    <Suspense fallback={<View />}>
      {!isSiteCom ? (
        <Switch>
          <BaseLayout exact path={HOME_PATH} component={Home} />
          <BaseLayout component={Legal} exact path={LEGAL_PATH} />
          <BaseLayout component={Faq} exact path={FAQ_PATH} />
          <BaseLayout component={Prime} exact path={PRIME_PATH} />
          <BaseLayout path="/unsubscribe/:token?" component={Unsubscribe} />
          <Route exact path="/index.com" component={HomeSiteCom} />
          <BaseLayout component={NotFound} />
        </Switch>
      ) : (
        <Switch>
          <Route exact component={HomeSiteCom} />
        </Switch>
      )}
    </Suspense>
  </Router>
);

export {AppRouter};
