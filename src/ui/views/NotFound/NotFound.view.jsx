import React from 'react';
import {useHistory} from 'react-router-dom';

import {Box, Button, Text, Layout, LAYOUT, ALIGN, DISPLAY, FLEX_DIRECTION, POSITION, useDevice} from '@aurora';

import {HOME_PATH} from '@app/Router';
import {SEO} from '@bridges';
import {MessageI18n, useIntl} from '@i18n';

import {TEXT} from './NotFound.definition';

const NotFoundView = () => {
  const history = useHistory();
  const {screen} = useDevice();
  const {formatMessage} = useIntl();
  const handleGoToHome = () => history.push(HOME_PATH);

  return (
    <>
      <SEO>
        <title>{formatMessage({...TEXT.PAGE_TITLE})}</title>
      </SEO>
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
          <Text heading as="h2" level={1} align={ALIGN.CENTER} marginBottom={LAYOUT.XS} marginHorizontal={LAYOUT.M}>
            <MessageI18n {...TEXT.TITLE} />
          </Text>
          <Text as="p" level={3} align={ALIGN.CENTER} marginHorizontal={LAYOUT.M} marginBottom={{L: LAYOUT.M}}>
            <MessageI18n {...TEXT.SUBTITLE} />
          </Text>
        </Box>
        <Box size={{L: '1/3'}} style={!screen.L ? {bottom: 48} : null}>
          <Button onPress={handleGoToHome}>
            <MessageI18n {...TEXT.BTN_BACK_HOME} />
          </Button>
        </Box>
      </Layout>
    </>
  );
};

export {NotFoundView};
