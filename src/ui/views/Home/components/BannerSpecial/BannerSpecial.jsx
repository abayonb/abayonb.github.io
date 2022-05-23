import React from 'react';
import PropTypes from 'prop-types';

import {useIntl} from '@i18n';

import './BannerSpecial.css';

const BannerSpecial = ({content, blackFriday}) => {
  const {formatMessage} = useIntl();
  return (
    <div className={`banner-special ${blackFriday ? 'banner-special__bf' : ''}`}>
      <span className={`banner-special__text ${blackFriday ? 'banner-special__bf' : ''}`}>
        {formatMessage({id: content})}
      </span>
    </div>
  );
};

BannerSpecial.propTypes = {
  content: PropTypes.string.isRequired,
  blackFriday: PropTypes.bool.isRequired,
};

export {BannerSpecial};
