import React from 'react';
import PropTypes from 'prop-types';
import {useIntl} from './I18nContext';

const MessageI18n = ({id, defaultMessage = '', values = {}}) => {
  const {formatMessage} = useIntl();
  const parsedMessage = formatMessage({id, defaultMessage});
  const pattern = /\{(.*?)\}/g;
  if (!parsedMessage || typeof parsedMessage === 'object') {
    return <>{parsedMessage}</>;
  }
  return (
    <>
      {parsedMessage.split(pattern).map((word, index) => (
        <React.Fragment key={index}>{index % 2 ? values[word] || word : word}</React.Fragment>
      ))}
    </>
  );
};

MessageI18n.propTypes = {
  id: PropTypes.string.isRequired,
  defaultMessage: PropTypes.string,
  values: PropTypes.oneOfType([PropTypes.object, PropTypes.number, PropTypes.string]),
  placeholders: PropTypes.arrayOf(PropTypes.node),
};

export {MessageI18n};
