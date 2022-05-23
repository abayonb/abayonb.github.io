import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';

import {ALIGN, Box, Layout, Link, Text, Portal, View, COLOR, LAYOUT, useDevice} from '@aurora';
import {MessageI18n} from '@i18n';

import SwiperCore, {Pagination} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/swiper-bundle.min.css';

import {useLazyImageIntersection, useObserver, usePresenter} from '@hooks';
import {BrandsModal, PersonalShopperCite, PersonalShopperInfo, PersonalShopperLook} from './components';
import {PsIntroPresenter} from './PsIntro.presenter';
import {style} from './PsIntro.styles';

import './PsIntro.css';

const PS_ID = style.anchor;

SwiperCore.use([Pagination]);

const NUM_SLIDES_PER_VIEW_MOBILE = 3;
const NUM_SLIDES_PER_VIEW_DESKTOP = 1;

const emptyFn = () => {};

const PsIntro = ({onLoadImg = emptyFn}) => {
  const {entries, setElements, unobserve} = useObserver();
  const {screen} = useDevice();

  const [content, setContent] = useState();
  const [slides, setSlides] = useState([]);
  const [isModalVisible, setModalVisibility] = useState(false);
  useLazyImageIntersection({elementsSelector: `#${PS_ID} .image`, entries, setElements, unobserve, condition: content});

  const {onLoad} = usePresenter(() =>
    PsIntroPresenter({
      showPsIntro: ({content, personal_shoppers}) => {
        setContent(content);
        setSlides(personal_shoppers);
      },
      screen,
    }),
  );

  useEffect(() => {
    onLoad();
  }, [onLoad]);

  const handleOnPressLink = event => {
    event.preventDefault();
    setModalVisibility(true);
  };

  const selectPaginateButton = swiper => {
    if (!screen.L) {
      const desiredActive = Math.floor(swiper.activeIndex / NUM_SLIDES_PER_VIEW_MOBILE) * NUM_SLIDES_PER_VIEW_MOBILE;
      const bullets = swiper.pagination.bullets;
      const bulletActive = bullets[desiredActive];
      const activeCustomClass = 'swiper-pagination-bullet-active-index';
      bullets.each(element => {
        if (element) element.classList.remove(activeCustomClass);
      });
      if (bulletActive) bulletActive.classList.add(activeCustomClass);
    }
  };

  return (
    <Layout
      align="center"
      as="section"
      customStyle={style.base}
      id={PS_ID}
      justifyContent="center"
      fullWidth
      paddingTop={LAYOUT.L}
    >
      {content && (
        <Box size={{L: '2/3'}}>
          <Layout as="section" customStyle={style.title} marginBottom={LAYOUT.S} justifyContent="center" fullWidth>
            <Box size={{L: '2/3'}} marginHorizontal={{M: LAYOUT.S, S: LAYOUT.S}}>
              <Text align={ALIGN.CENTER} as="h2" heading level={2} color={COLOR.content}>
                <MessageI18n {...content.title} />
              </Text>
            </Box>
          </Layout>

          <View as="section" customStyle={style.slides}>
            <Swiper
              speed={400}
              slidesPerView={screen.L ? NUM_SLIDES_PER_VIEW_MOBILE : 'auto'}
              slidesPerGroup={screen.L ? NUM_SLIDES_PER_VIEW_MOBILE : NUM_SLIDES_PER_VIEW_DESKTOP}
              grabCursor={true}
              centeredSlides={screen.L ? false : true}
              onSlideChange={selectPaginateButton}
              pagination={{clickable: true}}
            >
              {slides.map(({name, job, image, look, cite}) => (
                <React.Fragment key={`${cite.id}_slide`}>
                  <SwiperSlide key={`${cite.id}_info`}>
                    <PersonalShopperInfo {...{name, image, job, onLoadImg}} />
                  </SwiperSlide>
                  <SwiperSlide key={`${cite.id}_look`}>
                    <PersonalShopperLook {...{look}} />
                  </SwiperSlide>
                  <SwiperSlide key={`${cite.id}_cite`}>
                    <PersonalShopperCite {...{cite}} />
                  </SwiperSlide>
                </React.Fragment>
              ))}
            </Swiper>
          </View>

          <Layout
            as="section"
            customStyle={style.description}
            justifyContent="center"
            fullWidth
            paddingHorizontal={{M: LAYOUT.S, S: LAYOUT.S}}
          >
            <Box size={{L: '1/2'}}>
              <Text align={ALIGN.CENTER} as="p" level={2} color={COLOR.content}>
                <MessageI18n
                  {...content.description}
                  values={{
                    link: (
                      <Link
                        level={2}
                        color={COLOR.content}
                        onPress={handleOnPressLink}
                        key={content.description_link.id}
                        href="#"
                        underlined
                      >
                        <MessageI18n {...content.description_link} />
                      </Link>
                    ),
                  }}
                />
              </Text>
            </Box>
          </Layout>
        </Box>
      )}
      <Portal id="modal-brands">
        <BrandsModal isVisible={isModalVisible} onClose={() => setModalVisibility(false)} />
      </Portal>
    </Layout>
  );
};

PsIntro.propTypes = {
  onLoadImg: PropTypes.func,
};

export {PsIntro};
