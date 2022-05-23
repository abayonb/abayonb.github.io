import React from 'react';
import PropTypes from 'prop-types';
import {Button, Motion, ALIGN, COLOR, DISPLAY, LAYOUT, POSITION, SIZE, useDevice} from '@aurora';

import {useIntl} from '@i18n';
import {scrollToQuiz} from '@views/Home/modules';

import {TEXT} from './FixedCTA.intl';
import {getBottomPosition, getTopPosition, style} from './FixedCTA.styles';

const FixedCTA = ({isVisible = false, offset}) => {
  const {formatMessage} = useIntl();
  const {screen} = useDevice();

  return (
    <Motion
      as="aside"
      customStyle={style.base}
      display={DISPLAY.FLEX}
      justifyContent={ALIGN.CENTER}
      value={{
        opacity: isVisible ? 1 : 0,
        top: screen.L ? getTopPosition({isVisible, offset}) : 'initial',
        bottom: !screen.L ? getBottomPosition({isVisible}) : 'auto',
      }}
      layer={SIZE.S}
      position={POSITION.FIXED}
      wide
      backgroundColor={COLOR.OVERLAY}
      paddingVertical={screen.L ? LAYOUT.XXS : undefined}
    >
      <Button onPress={scrollToQuiz} small={screen.L ? true : false} wide>
        {formatMessage(TEXT.CTA)}
      </Button>
    </Motion>
  );
};

FixedCTA.propTypes = {
  isVisible: PropTypes.bool,
  offset: PropTypes.bool,
};

export {FixedCTA};
