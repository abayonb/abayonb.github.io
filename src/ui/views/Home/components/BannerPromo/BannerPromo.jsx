import React from 'react';
import PropTypes from 'prop-types';

import {ButtonIcon} from '@aurora';

import {useIntl} from '@i18n';
import {saveUserClosedBanner} from '@core/banners/application';

import './BannerPromo.css';

// TODO Duplicated in bannerPsLookieroByCountryConfig
const BANNER_PS_LOOKIERO = 'hidden_promo_code';

const BannerPromo = ({blackFriday, canClose = false, content}) => {
  const {formatMessage} = useIntl();

  const handleOnCloseBanner = () => {
    saveUserClosedBanner(BANNER_PS_LOOKIERO);
  };

  return (
    <div className={`banner-promo ${blackFriday ? 'banner-promo__bf' : ''}`}>
      <span className={`banner-promo__text ${blackFriday ? 'banner-promo__bf' : ''}`}>
        {formatMessage({id: content})}
      </span>
      {canClose && (
        <ButtonIcon
          onPress={handleOnCloseBanner}
          aria-label={formatMessage({id: 'a11y.text.close'})}
          name="close"
          position="absolute"
          style={{top: 14, right: 14}}
        />
      )}
    </div>
  );
};

BannerPromo.propTypes = {
  blackFriday: PropTypes.bool.isRequired,
  canClose: PropTypes.bool,
  content: PropTypes.string,
};

export {BannerPromo};
