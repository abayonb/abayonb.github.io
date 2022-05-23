import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';

import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/swiper-bundle.min.css';

import {ALIGN, Box, Layout, View, Text, COLOR, LAYOUT, useDevice} from '@aurora';
import {Image} from '@components/atoms';
import {useLazyImageIntersection, useObserver, usePresenter} from '@hooks';
import {MessageI18n} from '@i18n';
import {InfluencersPresenter} from './Influencers.presenter';

import {style} from './Influencers.styles';

const INFLUENCERS_ID = style.anchor;

const emptyFn = () => {};

const Influencers = ({onLoadImg = emptyFn}) => {
  const [content, setContent] = useState();
  const {screen} = useDevice();
  const {entries, setElements, unobserve} = useObserver();

  useLazyImageIntersection({
    elementsSelector: `#${INFLUENCERS_ID} .image--lazy`,
    entries,
    setElements,
    unobserve,
    condition: content,
  });

  const {onLoadInfluencers} = usePresenter(() =>
    InfluencersPresenter({
      showInfluencers: content => {
        setContent(content);
      },
      screen,
    }),
  );

  useEffect(() => {
    onLoadInfluencers();
  }, [onLoadInfluencers]);

  return (
    <Layout
      align="center"
      as="section"
      customStyle={style.base}
      id={INFLUENCERS_ID}
      justifyContent="center"
      fullWidth
      paddingTop={{L: LAYOUT.L, default: LAYOUT.M}}
    >
      {content && (
        <View marginHorizontal={{M: LAYOUT.S, S: LAYOUT.S}} wide>
          <Layout justifyContent="center">
            <Box marginBottom={{L: LAYOUT.XS, default: LAYOUT.XXS}}>
              <Text align={ALIGN.CENTER} as="h2" heading level={2} color={COLOR.content}>
                <MessageI18n {...content.title} />
              </Text>
            </Box>
          </Layout>

          <Layout marginBottom={LAYOUT.S} justifyContent="center">
            <Box size={{L: '1/3'}}>
              <Text align={ALIGN.CENTER} as="p" level={2}>
                <MessageI18n {...content.description} />
              </Text>
            </Box>
          </Layout>

          <Layout alignItems="left" customStyle={style.slider} fullWidth>
            <Swiper
              speed={400}
              spaceBetween={screen.L ? 48 : 24}
              slidesPerView={'auto'}
              centeredSlides={screen.L ? false : true}
              grabCursor={true}
            >
              {content.influencers.map(({avatar, name, post}, index) => (
                <SwiperSlide key={name}>
                  <div className="influencers-slider__header">
                    <div className="avatar-wrapper">
                      <Image height="32" width="32" src={avatar} lazyLoad />
                    </div>
                    <Text as="strong" detail level={2}>
                      {name}
                    </Text>
                  </div>
                  <Image height="360" width="288" lazyLoad src={post} {...(index === 0 ? {onLoad: onLoadImg} : {})} />
                </SwiperSlide>
              ))}
            </Swiper>
          </Layout>
        </View>
      )}
    </Layout>
  );
};

Influencers.propTypes = {
  onLoadImg: PropTypes.func,
};

export {Influencers};
