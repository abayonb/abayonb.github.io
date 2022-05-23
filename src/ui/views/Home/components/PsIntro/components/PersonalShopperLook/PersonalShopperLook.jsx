import React from 'react';
import PropTypes from 'prop-types';

import {View} from '@aurora';
import {Image} from '@components/atoms';

const PersonalShopperLook = ({look}) => {
  return (
    <View customStyle="personal-shopper-slide-item personal-shopper-slide__look">
      <Image height="400" width="320" key={look.src} src={look} lazyLoad />
    </View>
  );
};

PersonalShopperLook.propTypes = {
  look: PropTypes.shape({
    src: PropTypes.string,
    srcSet: PropTypes.string,
  }).isRequired,
};

export {PersonalShopperLook};
