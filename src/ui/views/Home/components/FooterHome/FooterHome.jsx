import React from 'react';
import {View, LAYOUT} from '@aurora';
import {FollowUs, PaymentMethods} from '@components/atoms';

import './FooterHome.css';

const FooterHome = () => {
  return (
    <View as="footer" customStyle="footer-home" marginTop={LAYOUT.L} paddingTop={{L: LAYOUT.M, default: LAYOUT.S}}>
      <FollowUs />
      <PaymentMethods />
    </View>
  );
};

export {FooterHome};
