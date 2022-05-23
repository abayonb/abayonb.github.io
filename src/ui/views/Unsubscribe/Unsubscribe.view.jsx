import React from 'react';
import {useLocation} from 'react-router-dom';

import {Box, Button, Text, Layout, LAYOUT, ALIGN, DISPLAY, FLEX_DIRECTION, POSITION, useDevice} from '@aurora';

import {usePresenter} from '@hooks';
import {MessageI18n} from '@i18n';

import {UnsubscribePresenter} from './Unsubscribe.presenter';
import {TEXT} from './Unsubscribe.definition';

const Unsubscribe = () => {
  const {search} = useLocation();
  const params = new URLSearchParams(search);
  const {screen} = useDevice();
  const {goToHome, unsubscribe} = usePresenter(() => UnsubscribePresenter({token: params.get('token')}));

  return (
    <Layout
      flexDirection={FLEX_DIRECTION.COLUMN}
      alignItems={ALIGN.CENTER}
      justifyContent={{L: ALIGN.CENTER, default: ALIGN.END}}
      paddingBottom={LAYOUT.M}
      style={{height: screen.L ? '80%' : '100%'}}
      position={POSITION.RELATIVE}
    >
      <Box
        size={{L: '1/3'}}
        marginVertical={LAYOUT.M}
        display={{S: DISPLAY.FLEX, M: DISPLAY.FLEX}}
        justifyContent={{S: ALIGN.CENTER, M: ALIGN.CENTER}}
        flexDirection={{S: FLEX_DIRECTION.COLUMN, M: FLEX_DIRECTION.COLUMN}}
        style={!screen.L ? {height: '100%', flex: '1'} : null}
      >
        <Text heading as="h2" level={3} align={ALIGN.CENTER} marginBottom={LAYOUT.XS}>
          <MessageI18n {...TEXT.TITLE} />
        </Text>
        <Text as="p" level={3} align={ALIGN.CENTER} marginHorizontal={LAYOUT.M}>
          <MessageI18n {...TEXT.DESCRIPTION} />
        </Text>
      </Box>
      <Box size={{L: '1/3'}} style={!screen.L ? {bottom: 48} : null}>
        <Button onPress={unsubscribe} marginBottom={LAYOUT.XS} outlined>
          <MessageI18n {...TEXT.CTA_YES} />
        </Button>
        <Button onPress={goToHome}>
          <MessageI18n {...TEXT.CTA_NO} />
        </Button>
      </Box>
    </Layout>
  );
};
export {Unsubscribe};
