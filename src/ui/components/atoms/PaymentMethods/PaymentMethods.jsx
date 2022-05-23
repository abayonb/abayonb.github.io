import React from 'react';
import {Layout, Text, View, ALIGN, LAYOUT, COLOR, SIZE} from '@aurora';
import {MessageI18n} from '@i18n';
import {getSiteLocale} from '@core/site/application';
import {PAYMENT_MAP} from './PaymentMethod.definition';
import './PaymentMethods.css';
import {PaymentCard} from '../PaymentCard/PaymentCard';

const PaymentMethods = ({...others}) => {
  const {country} = getSiteLocale();
  const cardList = PAYMENT_MAP[country] || PAYMENT_MAP.DEFAULT;

  const renderPaymentCards = cards => cards.map((card, index) => <PaymentCard card={card} id={index} key={index} />);

  return (
    <Layout align={ALIGN.CENTER} as="aside" flexDirection="column" marginTop={SIZE.XXS} {...others}>
      <Text align={ALIGN.CENTER} as="p" action level={3} marginBottom={LAYOUT.XS} upperCase color={COLOR.BASE}>
        <MessageI18n id="home.weaccept" defaultMessage="Aceptamos" />
      </Text>
      <View id="payment_images" customStyle="payment-methods__image">
        {renderPaymentCards(cardList)}
      </View>
    </Layout>
  );
};

export {PaymentMethods};
