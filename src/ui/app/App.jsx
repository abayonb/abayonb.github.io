import React from 'react';
import '@lookiero/aurora-iconfont';
import {ErrorHandler, ErrorHandlerProvider} from '@lookiero/user-errorhandler-front';
import {version} from '../../../package.json';
import {AppProvider} from '@contexts';
import {I18NProvider} from '@i18n';
import {AppRouter} from './Router/Router';
import {FeatureFlagsProvider} from '@contexts';
import '@tracking';

import './polyfills';
import './App.css';

export const App = () => (
  <ErrorHandlerProvider
    dsn={process.env.REACT_APP_SENTRY_DSN}
    environment={process.env.REACT_APP_ENVIRONMENT}
    release={process.env.REACT_APP_RELEASE || version}
  >
    <ErrorHandler section="usf-app">
      <I18NProvider>
        <AppProvider>
          <FeatureFlagsProvider>
            <AppRouter />
          </FeatureFlagsProvider>
        </AppProvider>
      </I18NProvider>
    </ErrorHandler>
  </ErrorHandlerProvider>
);
