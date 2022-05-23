import React, {useContext, useEffect, useState, useMemo, useCallback} from 'react';
import PropTypes from 'prop-types';

import {isSeoRender} from '@core/seo/application';
import {getSiteLocale} from '@core/site/application';
import {getI18nTranslations} from '@core/i18n/application';
import {htmlParser} from '@bridges';

const I18nInitialValue = {};

const I18nContext = React.createContext({
  messages: I18nInitialValue,
});

const getMessages = async ({setMessages, locale}) => {
  const messages = await getI18nTranslations(locale);
  setMessages(messages);
};

const I18NProvider = ({children}) => {
  const sitelocaleConfig = useMemo(() => getSiteLocale(), []);
  const [messages, setMessages] = useState(I18nInitialValue);

  useEffect(() => {
    if (!Object.keys(messages).length) {
      if (!isSeoRender) {
        const el = document.querySelector('html');
        el.classList.add('pr-in');
      }

      getMessages({setMessages: setMessages, locale: sitelocaleConfig});
    }
  }, [sitelocaleConfig, messages]);

  const getMessageById = useCallback(
    ({id, defaultMessage}) => {
      return messages[id] || defaultMessage;
    },
    [messages],
  );

  const value = {
    loadedMessages: Object.keys(messages).length > 0,
    getMessage: id => getMessageById(id),
    formatMessage: ({...options}) => {
      const message = getMessageById(options);
      if (!message) {
        return '';
      }
      const parseMessage = htmlParser(message);
      return parseMessage;
    },
  };

  return value.loadedMessages && <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

I18NProvider.propTypes = {
  children: PropTypes.node,
};

const useIntl = () => useContext(I18nContext) || {};

export {useIntl, I18NProvider};
