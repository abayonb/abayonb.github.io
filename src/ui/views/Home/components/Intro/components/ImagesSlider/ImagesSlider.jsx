import React from 'react';
import PropTypes from 'prop-types';

import {Image, View} from '@aurora';

import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Autoplay} from 'swiper';
import 'swiper/swiper-bundle.min.css';

import {SLIDER_PROPS} from './ImagesSlider.definition';
import './ImagesSlider.css';

SwiperCore.use([Autoplay]);

const emptyFn = () => {};

const ImagesSlider = ({images, onLoadImg = emptyFn}) => {
  return (
    <View customStyle="intro-slider">
      <Swiper {...SLIDER_PROPS}>
        {images.map((image, index) => (
          <SwiperSlide key={image.src}>
            <Image
              display="block"
              lazyLoad
              alt={image.name}
              {...(index === 0 ? {onLoad: onLoadImg} : {})}
              src={image.source.src}
              srcSet={image.source.srcSet}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </View>
  );
};

ImagesSlider.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string,
      srcSet: PropTypes.arrayOf(PropTypes.string),
    }),
  ),
  onLoadImg: PropTypes.func,
};

export {ImagesSlider};
