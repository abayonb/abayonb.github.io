import './FixedCTA.css';

const HEIGHT_BUTTON_L = 72;
const HEIGHT_BUTTON_M_S = 56;
const HEIGHT_HEADER = 48;

const getTopPosition = ({isVisible, offset}) => {
  if (isVisible && offset) {
    return HEIGHT_HEADER;
  } else if (isVisible && !offset) {
    return '0px';
  }
  return `${0 - HEIGHT_BUTTON_L}px`;
};

const getBottomPosition = ({isVisible}) => {
  if (isVisible) {
    return '0px';
  }
  return `${-HEIGHT_BUTTON_M_S}px`;
};

const style = {
  base: 'fixed-cta',
};

export {getBottomPosition, getTopPosition, style};
