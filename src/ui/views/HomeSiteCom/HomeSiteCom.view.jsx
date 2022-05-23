import React, {useEffect, useState} from 'react';

import {
  Aurora,
  Box,
  Header,
  Button,
  View,
  Portal,
  Text,
  Layout,
  useDevice,
  COLOR,
  ALIGN,
  DISPLAY,
  POSITION,
  LAYOUT,
} from '@aurora';

import {SEO} from '@bridges';
import {SEOManager} from '@components/atoms';
import {useFeatureFlags} from '@components/contexts';
import {IconLogo} from '@components/primitives/Icons';
import {MessageI18n, useIntl} from '@i18n';

import {loadCountries} from './HomeSiteCom.controller';
import {TEXT} from './HomeSiteCom.definition';
import {SelectCountryModal} from './components/SelectCountryModal';
import './HomeSiteCom.css';

const HomeSiteCom = () => {
  const featureFlags = useFeatureFlags();
  const {formatMessage, loadedMessages} = useIntl();
  const [countries, setCountries] = useState(false);
  const [modalVisibility, setModalVisibility] = useState(false);
  const {screen} = useDevice();

  useEffect(() => {
    const countryList = loadCountries();

    if (!featureFlags) return;
    if (featureFlags['AUSTRIA']) {
      setCountries(countryList);
    } else {
      const filteredCountries = countryList.filter(country => country.code !== 'AT');
      setCountries(filteredCountries);
    }
  }, [featureFlags]);

  return (
    <>
      <SEOManager />
      <SEO>
        <link rel="canonical" href="https://lookiero.com" />
        <link rel="alternate" hrefLang="x-default" href="https://lookiero.com" />
      </SEO>
      <Aurora>
        <Header color={COLOR.INFO} logo={<IconLogo />} customStyle="home-site-com__header" position={POSITION.FIXED} />
        <View
          as="section"
          customStyle="home-site-com"
          backgroundColor={COLOR.INFO}
          alignItems={ALIGN.CENTER}
          justifyContent={ALIGN.CENTER}
          display={DISPLAY.FLEX}
        >
          <Layout justifyContent={ALIGN.CENTER}>
            <Box size="1/3" as="section" customStyle="home-site-com__content" textAlign={ALIGN.CENTER}>
              <Text as="h2" heading level={screen.L ? 1 : 2} marginBottom={LAYOUT.XXS}>
                <MessageI18n {...TEXT.TITLE} />
              </Text>
              <Text as="p" level={2} marginBottom={LAYOUT.XS}>
                <MessageI18n {...TEXT.SUBTITLE} />
              </Text>
              <Button color={COLOR.BASE} outlined onPress={() => setModalVisibility(true)}>
                {formatMessage({...TEXT.CTA})}
              </Button>
            </Box>
          </Layout>
        </View>
        {loadedMessages && countries && (
          <Portal id="modal-country-select">
            <SelectCountryModal
              countries={countries}
              isVisible={modalVisibility}
              onClose={() => setModalVisibility(false)}
            />
          </Portal>
        )}
      </Aurora>
    </>
  );
};

export {HomeSiteCom};
