import React from 'react';
import PropTypes from 'prop-types';
import {ALIGN, Box, COLOR, Layout, Header as AuroraHeader, Panel, Portal} from '@aurora';

import {IconLogo} from '@components/primitives/Icons';
import {useScrollLock} from '@hooks';

import {CreateProfileButton, LoginButton} from './components';
import {Menu} from './components/Menu';
import './PanelContent.css';

const ID = 'panel';

const PanelContent = ({isVisible, onClose}) => {
  useScrollLock({isVisible, id: ID});
  return (
    <Portal id={ID}>
      <Panel
        id={ID}
        isVisible={isVisible}
        align={ALIGN.RIGHT}
        onClose={() => {
          /* @TODO REMOVE PROP_TYPE REQUIRED? REQUIRED FOR AURORA 2.0.125 */
        }}
      >
        <AuroraHeader color={COLOR.INFO} logo={<IconLogo />} onClose={onClose} />
        <Layout alignItems={ALIGN.CENTER} inline={false} customStyle="panel-content">
          <Box size={{L: '1/3'}} customStyle="menu">
            <Menu />
            <CreateProfileButton />
            <LoginButton />
          </Box>
        </Layout>
      </Panel>
    </Portal>
  );
};

PanelContent.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export {PanelContent};
