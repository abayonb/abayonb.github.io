import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Image.css';

const Image = ({alt, easeIn, height, onLoad, src, width, lazyLoad, noObserver, ...others}) => {
  return (
    <div className="image-container" style={{paddingTop: `${(height / width) * 100}%`}}>
      <picture>
        {src.avif && <source type="image/avif" {...src.avif} />}
        {src.webp && <source type="image/webp" {...src.webp} />}
        <img
          onLoad={onLoad}
          alt={alt}
          className={classNames('image', {'image--lazy': lazyLoad && !noObserver, 'image--ease': easeIn})}
          {...{height, width}}
          {...src.default}
          {...others}
          loading={lazyLoad ? 'lazy' : undefined}
        />
      </picture>
    </div>
  );
};

Image.propTypes = {
  alt: PropTypes.string,
  easeIn: PropTypes.bool,
  height: PropTypes.string,
  lazyLoad: PropTypes.bool,
  noObserver: PropTypes.bool,
  onLoad: PropTypes.func,
  src: PropTypes.shape({
    avif: PropTypes.shape({
      srcSet: PropTypes.string,
    }),
    webp: PropTypes.shape({
      srcSet: PropTypes.string,
    }),
    default: PropTypes.shape({
      src: PropTypes.string,
      srcSet: PropTypes.string,
    }),
  }).isRequired,
  width: PropTypes.string,
};

export {Image};
