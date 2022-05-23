import React from 'react';
import PropTypes from 'prop-types';

import {Text, View, LAYOUT} from '@aurora';
import {Image} from '@components/atoms';
import {MessageI18n} from '@i18n';

const emptyFn = () => {};

const PersonalShopperInfo = ({name, image, job, onLoadImg = emptyFn}) => {
  return (
    <View customStyle="personal-shopper-slide-item personal-shopper-slide__info" position="relative">
      <Image height="400" width="320" onLoad={onLoadImg} lazyLoad key={image.default.src} src={image} />
      <Text as="p" align="center" customStyle="personal-shopper-slide__info__text" position="absolute">
        <Text as="strong" brand color="base" display="block" level={1}>
          <MessageI18n {...name} />
        </Text>
        <Text as="em" action color="base" display="block" level={3} marginBottom={LAYOUT.S} upperCase>
          <MessageI18n {...job} />
        </Text>
      </Text>
    </View>
  );
};

PersonalShopperInfo.propTypes = {
  name: PropTypes.shape({
    id: PropTypes.string,
    defaultValue: PropTypes.string,
  }).isRequired,
  image: PropTypes.shape({
    avif: PropTypes.shape({
      srcSet: PropTypes.string,
    }),
    webp: PropTypes.shape({
      srcSet: PropTypes.string,
    }),
    default: PropTypes.shape({
      src: PropTypes.string,
      srcSet: PropTypes.string,
    }),
  }).isRequired,
  job: PropTypes.shape({
    id: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
  onLoadImg: PropTypes.func,
};

export {PersonalShopperInfo};
