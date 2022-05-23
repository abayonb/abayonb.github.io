import React from 'react';
import PropTypes from 'prop-types';

import {useApp} from '@contexts';
import {DISPLAY, Link, Header as AuroraHeader, Motion, useDevice, LAYOUT, POSITION, SIZE} from '@aurora';

import {LOGIN_PATH} from '@app/Router';
import {MessageI18n} from '@i18n';
import {IconLogo} from '@components/primitives/Icons';
import {style} from './Header.styles';

const HEADER_HEIGHT = 48;

const Header = ({isVisible, goHome, openPanel}) => {
  const {header: {showMenu = true, showTopNav = true} = {}} = useApp();
  const {screen} = useDevice();

  return (
    <Motion
      customStyle={style.base}
      value={{
        opacity: isVisible ? 1 : 0,
        top: isVisible ? '0px' : `${0 - HEADER_HEIGHT}px`,
      }}
      layer={SIZE.M}
      position={POSITION.FIXED}
      wide
    >
      <AuroraHeader
        customStyle={style.header}
        layer={SIZE.S}
        logo={
          <Link display={DISPLAY.BLOCK} action level={1} onPress={goHome}>
            <IconLogo />
          </Link>
        }
        onMenu={showMenu ? openPanel : undefined}
      >
        {screen.L && showTopNav && (
          <Link action customStyle={style.login} level={3} href={LOGIN_PATH} marginRight={LAYOUT.S} upperCase>
            <MessageI18n id="home.login" />
          </Link>
        )}
      </AuroraHeader>
    </Motion>
  );
};

Header.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  goHome: PropTypes.func.isRequired,
  openPanel: PropTypes.func.isRequired,
};

export {Header};
