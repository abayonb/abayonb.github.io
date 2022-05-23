import React, {useEffect, useState} from 'react';

import PropTypes from 'prop-types';

import {
  Box,
  Button,
  ButtonIcon,
  Icon,
  Layout,
  Text,
  View,
  ALIGN,
  COLOR,
  DISPLAY,
  FLEX_DIRECTION,
  LAYOUT,
  SIZE,
  useDevice,
} from '@aurora';

import {isSeoRender} from '@core/seo/application';
import {MessageI18n} from '@i18n';
import {usePresenter} from '@hooks';
import {scrollToElement, scrollToQuiz} from '@views/Home/modules';

import {IntroPresenter} from './Intro.presenter';
import {BOX_PROPS, style} from './Intro.styles';
import {BannerPromo, BannerSpecial, BannerInfo} from '../../components';
import {ImagesSlider} from './components';
import {Image} from '@components/atoms';

const emptyFn = () => {};

const Intro = ({elementToScroll = '', observeElement = emptyFn, handleIntersection = emptyFn, onLoadImg = emptyFn}) => {
  const [content, setContent] = useState();
  const [images, setImages] = useState();

  const [banner, setBanner] = useState({type: undefined, content: ''});
  const {screen} = useDevice();

  const {onLoadBanners, onLoadResources} = usePresenter(() =>
    IntroPresenter({
      showIntro: ({content, images}) => {
        setContent(content);
        setImages(images);
      },
      showBanner: banner => {
        setBanner(banner);
      },
      screen,
    }),
  );

  useEffect(() => {
    onLoadResources();
  }, [onLoadResources]);

  useEffect(() => {
    onLoadBanners();
  }, [onLoadBanners]);

  useEffect(() => {
    observeElement({element: `.${style.cta}`, handleIntersection});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [content]);

  return (
    <View as="section" customStyle={style.base} position="relative">
      {content && (
        <>
          <View
            as="section"
            customStyle={style.content}
            align="center"
            {...(screen.L
              ? {
                  alignItems: ALIGN.CENTER,
                  display: DISPLAY.FLEX,
                  flexDirection: FLEX_DIRECTION.COLUMN,
                  justifyContent: ALIGN.BETWEEN,
                }
              : {})}
          >
            {!isSeoRender && (
              <>
                {banner.type === 'promo' && <BannerPromo content={banner.content} blackFriday={banner.blackFriday} />}
                {banner.type === 'special' && (
                  <BannerSpecial content={banner.content} blackFriday={banner.blackFriday} />
                )}
              </>
            )}
            <Layout
              customStyle={style.contentTop}
              marginBottom={images.trustpilot ? {S: 0, M: 0} : {S: LAYOUT.M, M: LAYOUT.M}}
              marginTop={{S: LAYOUT.M, M: LAYOUT.M}}
              {...(screen.L
                ? {
                    alignItems: ALIGN.CENTER,
                    display: DISPLAY.FLEX,
                    flex: SIZE.XS,
                    flexDirection: FLEX_DIRECTION.COLUMN,
                    justifyContent: ALIGN.CENTER,
                  }
                : {})}
              size={{L: '2/3'}}
            >
              <Text
                as="h1"
                color={COLOR.CONTENT}
                heading
                level={screen.L ? 1 : 2}
                marginBottom={{L: LAYOUT.S, default: LAYOUT.S}}
              >
                <MessageI18n {...content.title} />
              </Text>
              <View customStyle={style.contentBullets}>
                {content.bullets.map(bullet => {
                  return (
                    <>
                      <View customStyle={style.bullets}>
                        <Icon name="rounded-tick" />
                        <MessageI18n {...bullet} />
                      </View>
                    </>
                  );
                })}
              </View>
              <Button color={COLOR.PRIMARY} id={style.cta} customStyle={style.cta} onPress={scrollToQuiz} wide>
                <MessageI18n {...content.cta} />
              </Button>
              {images.trustpilot && (
                <View
                  customStyle={style.trustpilotWrapper}
                  display={DISPLAY.FLEX}
                  paddingVertical={LAYOUT.S}
                  textAlign={ALIGN.LEFT}
                >
                  <Text
                    as="p"
                    color={COLOR.GRAYSCALE_XL}
                    customStyle={style.trustpilotText}
                    marginBottom={SIZE.XXS}
                    marginTop={SIZE.S}
                    marginRight={SIZE.M}
                  >
                    <MessageI18n {...content.trustpilot} />
                  </Text>

                  <View
                    alignItems={ALIGN.CENTER}
                    customStyle={style.trustpilotImage}
                    display={DISPLAY.FLEX}
                    flexDirection={FLEX_DIRECTION.COLUMN}
                    justifyContent={ALIGN.BETWEEN}
                  >
                    <Image
                      alt={images.trustpilot.logo.name}
                      height="24"
                      width="98"
                      {...{...images.trustpilot.logo.source, onLoad: onLoadImg}}
                    />
                    <Image
                      alt={images.trustpilot.stars.name}
                      height="18"
                      width="98"
                      {...{...images.trustpilot.stars.source, onLoad: onLoadImg}}
                    />
                  </View>
                </View>
              )}
            </Layout>
            {screen.L ? (
              <View>
                <Layout justifyContent={ALIGN.CENTER}>
                  <Box {...BOX_PROPS} marginBottom={LAYOUT.S}>
                    <ButtonIcon
                      color={COLOR.CONTENT}
                      name="arrow-down"
                      onPress={() => scrollToElement(elementToScroll)}
                    />
                  </Box>
                </Layout>
              </View>
            ) : null}
            <BannerInfo />
          </View>

          {images.slider && (
            <aside className="home-intro__media">
              {images.slider.length > 1 ? (
                <ImagesSlider {...{images: images.slider, onLoadImg}} />
              ) : (
                <Image
                  height="900"
                  width="720"
                  alt={images.slider[0].name}
                  src={images.slider[0].source}
                  {...{onLoad: onLoadImg}}
                />
              )}
            </aside>
          )}
        </>
      )}
    </View>
  );
};

Intro.propTypes = {
  elementToScroll: PropTypes.string,
  handleIntersection: PropTypes.func,
  observeElement: PropTypes.func,
  onLoadImg: PropTypes.func,
};

export {Intro};
