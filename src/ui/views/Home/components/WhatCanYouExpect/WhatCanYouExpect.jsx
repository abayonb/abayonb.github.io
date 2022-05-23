import React, {useEffect, useState} from 'react';
import {Carousel} from '@components/atoms';
import {Box, Heading, Image, Layout, useDevice, Text, View} from '@aurora';
import {usePresenter} from '@hooks';
import {WhatCanYouExpectPresenter} from './WhatCanYouExpect.presenter';
import {useIntl, MessageI18n} from '@i18n';

import './WhatCanYouExpect.css';

const WhatCanYouExpect = () => {
  const {screen} = useDevice();
  const {formatMessage} = useIntl();

  const [carousel, setCarousel] = useState();

  const {onLoadCarouselContent} = usePresenter(() =>
    WhatCanYouExpectPresenter({
      showCarousel: carouselData => {
        setCarousel(carouselData);
      },
    }),
  );

  useEffect(() => {
    onLoadCarouselContent();
  }, [onLoadCarouselContent]);

  const renderCarouselItem = (carouselItem, id) => {
    return (
      <section className="box-sample" key={id}>
        <div className="box-sample__avatar">
          <Image
            lazyLoad
            src={carouselItem.personal_shopper.avatar.src}
            srcSet={carouselItem.personal_shopper.avatar.srcSet}
          />
          <div className="avatar__personal_info">
            <Text as="strong" customStyle="avatar__personal_info__name" weight="semibold" size="XS">
              {formatMessage({id: carouselItem.personal_shopper.name})}
            </Text>
            <Text as="span" customStyle="avatar__personal_info__position" size="XS">
              {formatMessage({id: carouselItem.personal_shopper.position})}
            </Text>
          </div>
        </div>

        <div className="box-sample__expect">
          <Heading as="h2" small>
            {formatMessage({id: carouselItem.experience.title})}
          </Heading>
          <blockquote>
            <Text as="p" marginBottom="XS" align="center" size="XS" color="color-dark--xxl">
              &ldquo;{formatMessage({id: carouselItem.experience.summary})}&rdquo;
            </Text>
          </blockquote>
        </div>

        <Text
          as="h3"
          align="center"
          small
          marginTop="M"
          family="soleil"
          weight="semibold"
          customStyle="box-sample__title-selection"
          size="XS"
          marginBottom="XS"
        >
          <MessageI18n id="home.expect.selection_title" />
        </Text>

        <ul className="box-sample__content-selection">
          {carouselItem.selections.map((selection, index) => (
            <li key={index}>
              <Text align="center" size="XS" color="color-dark--xxl">
                {formatMessage({id: selection})}
              </Text>
            </li>
          ))}
        </ul>
        <div className="box-sample__media">
          <Image lazyLoad src={carouselItem.image.src} srcSet={carouselItem.image.srcSet} />
        </div>
      </section>
    );
  };

  return (
    <View
      as="section"
      customStyle="what-can-you-expect"
      id="what-can-you-expect"
      paddingBottom={{S: 'L', default: 'XXL'}}
    >
      <Layout paddingTop={{S: 'S', default: 'XXL'}} paddingBottom={{S: 'XS', default: 'XXL'}}>
        <Box>
          <Heading
            as="h2"
            marginBottom={{S: 'S', default: 'XL'}}
            paddingTop="L"
            paddingBottom={{S: 'S', default: 'XL'}}
          >
            <MessageI18n id="home.expect.title" />
          </Heading>
        </Box>
        <Box>
          {carousel && (
            <Carousel draggable={screen.S} className="what-can-you-expect__carousel">
              {carousel.content.map((carouselItem, index) => renderCarouselItem(carouselItem, index))}
            </Carousel>
          )}
        </Box>
      </Layout>
    </View>
  );
};

export {WhatCanYouExpect};
