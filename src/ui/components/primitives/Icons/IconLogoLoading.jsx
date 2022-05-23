import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';

import {Image} from '@aurora';

import './IconLogoLoading.css';

const PATH_LOGO = `${process.env.PUBLIC_URL}/assets/lookiero-loading-content.gif`;
const TIME_TO_HIDE = 2000;

const IconLogoLoading = ({isVisible = true}) => {
  const [showLoading, setShowLoading] = useState(true);
  useEffect(() => {
    let idTimeout;
    if (isVisible) {
      idTimeout = setTimeout(() => {
        setShowLoading(false);
      }, TIME_TO_HIDE);
    }

    return () => {
      clearTimeout(idTimeout);
    };
  }, [isVisible]);

  return showLoading ? <Image customStyle="icon-logo-loading" src={PATH_LOGO} /> : null;
};

IconLogoLoading.propTypes = {
  isVisible: PropTypes.bool,
};

export {IconLogoLoading};
