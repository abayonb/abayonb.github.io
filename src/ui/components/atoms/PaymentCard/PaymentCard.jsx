import React from 'react';
import {useDevice, Box, SIZE} from '@aurora';
import {Image} from '../Image/Image';
import './PaymentCard.css';
import PropTypes from 'prop-types';

const PaymentCard = ({card, id}) => {
  const {screen} = useDevice();
  const devicePath = screen.S ? 'mobile' : 'desktop';
  const imageURL = `${process.env.REACT_APP_ASSETS_PATH}/images/payment/${devicePath}`;
  return (
    <Box key={id} marginLeft={id === 0 ? 0 : SIZE.S} customStyle="container-payment_image">
      <Image
        height="32"
        width="48"
        src={{
          default: {
            src: `${imageURL}/${card}.svg`,
          },
        }}
        lazyLoad
        noObserver
      />
    </Box>
  );
};

PaymentCard.propTypes = {
  card: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export {PaymentCard};
