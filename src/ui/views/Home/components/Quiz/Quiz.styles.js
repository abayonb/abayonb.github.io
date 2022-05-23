import './Quiz.css';

const ASPECT_RATIO = 1.25;

const SPACES_BETWEEN = {L: 48, M: 3, S: 3};
const OFFSET = {L: 0, M: 40, S: 32};
const SCREEN_PERCENT = {L: 2 / 3, M: 1, S: 1};
const ITEM_PERCENT = {L: 0.25, M: 0.5, S: 0.5};
const ITEM_PER_COLUMN = {L: 4, M: 2, S: 2};

const CONTENT_PROPS = {
  size: {M: '2/3', L: '1/3'},
};

const getMarginBottom = ({index, screen: {L}}) =>
  !L && index < ITEM_PER_COLUMN.S ? `${SPACES_BETWEEN.S}px` : undefined;

const getWidth = ({screen: {L, M, width}}) => {
  const keyByScreen = L ? 'L' : M ? 'M' : 'S';

  return (
    width * SCREEN_PERCENT[keyByScreen] * ITEM_PERCENT[keyByScreen] -
    (SPACES_BETWEEN[keyByScreen] * (ITEM_PER_COLUMN[keyByScreen] - 1)) / ITEM_PER_COLUMN[keyByScreen] -
    OFFSET[keyByScreen]
  );
};

const style = {
  anchor: 'quiz',
  base: 'home-quiz',
  main: 'home-quiz__main',
};

export {ASPECT_RATIO, CONTENT_PROPS, getMarginBottom, getWidth, style};
