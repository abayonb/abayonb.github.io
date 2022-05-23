import React from 'react';
import PropTypes from 'prop-types';

import {ALIGN, Text, View, COLOR, LAYOUT} from '@aurora';

import {MessageI18n} from '@i18n';

const PersonalShopperCite = ({cite}) => {
  return (
    <View
      customStyle="personal-shopper-slide-item personal-shopper-slide__cite"
      paddingHorizontal={LAYOUT.S}
      backgroundColor={COLOR.ACCENT}
    >
      <View paddingHorizontal={{S: LAYOUT.S, M: LAYOUT.S}}>
        <Text align={ALIGN.CENTER} as="cite" level={1}>
          <MessageI18n {...cite} />
        </Text>
      </View>
    </View>
  );
};

PersonalShopperCite.propTypes = {
  cite: PropTypes.shape({
    id: PropTypes.string,
    defaultValue: PropTypes.string,
  }),
};

export {PersonalShopperCite};
