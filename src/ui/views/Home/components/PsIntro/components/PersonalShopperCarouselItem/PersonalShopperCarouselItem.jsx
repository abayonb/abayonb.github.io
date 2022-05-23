import React from 'react';
import PropTypes from 'prop-types';

import {PersonalShopperCite, PersonalShopperInfo, PersonalShopperLook} from '../';

const PersonalShopperCarouselItem = ({name, job, image, look, cite}) => {
  return (
    <>
      <PersonalShopperInfo {...{name, image, job}} />
      <PersonalShopperLook {...{look}} />
      <PersonalShopperCite {...{cite}} />
    </>
  );
};

PersonalShopperCarouselItem.propTypes = {
  cite: PropTypes.shape({
    id: PropTypes.string,
    defaultValue: PropTypes.string,
  }),

  image: PropTypes.shape({
    src: PropTypes.string,
    srcSet: PropTypes.string,
  }),
  job: PropTypes.shape({
    id: PropTypes.string,
    description: PropTypes.string,
  }),

  look: PropTypes.shape({
    src: PropTypes.string,
    srcSet: PropTypes.string,
  }),
  name: PropTypes.string,
};

export {PersonalShopperCarouselItem};
