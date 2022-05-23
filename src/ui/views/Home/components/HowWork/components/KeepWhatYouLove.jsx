import React from 'react';

import {Heading, Text, useDevice} from '@aurora';
import {MessageI18n} from '@i18n';

const KeepWhatYouLove = () => {
  const {screen} = useDevice();
  return (
    <>
      <Heading as="h1" size="xl" customStyle="text" marginBottom="S" marginTop={{S: 'XL'}} small>
        <MessageI18n id="home.benefits.title" />
      </Heading>
      <Text as="p" align="center" customStyle="text" color={screen.S ? 'color-light--xxl' : 'basic-dark--l'}>
        <MessageI18n id="home.benefits.paragraph" />
      </Text>
    </>
  );
};
export {KeepWhatYouLove};
