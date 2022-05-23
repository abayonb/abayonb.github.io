import React from 'react';

import {Icon, Text, View} from '@aurora';
import {MessageI18n} from '@i18n';

import './HowMuchDoesItCost.css';

const INFOS = [
  {
    icon: 'unboxing',
    textKey: 'willing_to_pay',
  },
  {
    icon: 'moneybox',
    textKey: 'styling_fee',
  },
  {
    icon: 'percentage',
    textKey: 'five_items',
  },
  {
    icon: 'delivery',
    textKey: 'no_subscription_required',
  },
];

const HowMuchDoesItCost = () => {
  return (
    <>
      <Text
        as="h1"
        family="garamond"
        size="XL"
        customStyle="text"
        marginBottom="M"
        color="color-light--xxl"
        weight="regular"
        align="center"
      >
        <MessageI18n id="title_cost" />
      </Text>

      {INFOS.map(({icon, textKey}) => (
        <View key={textKey} customStyle="howMuchRow" paddingBottom="M" paddingHorizontal="S">
          <View customStyle="howMuchIconContainer">
            <Icon name={icon} size="M" color="color-light--xxl" />
          </View>
          <View customStyle="howMuchTextContainer">
            <Text align="center" customStyle="text" color="color-light--xxl">
              <MessageI18n id={textKey} />
            </Text>
          </View>
        </View>
      ))}
    </>
  );
};

export {HowMuchDoesItCost};
