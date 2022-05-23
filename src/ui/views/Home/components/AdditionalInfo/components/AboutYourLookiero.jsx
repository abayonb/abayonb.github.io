import React from 'react';
import PropTypes from 'prop-types';

import {ALIGN, Box, Layout, View, Text, COLOR, LAYOUT, useDevice} from '@aurora';
import {Image} from '@components/atoms';
import {MessageI18n} from '@i18n';
import {useObserver, useLazyImageIntersection} from '@hooks';

import {style} from './AboutYourLookiero.styles';

const ABOUT_YOUR_LOOKIERO_ID = style.anchor;

const emptyFn = () => {};

const AboutYourLookiero = ({info, onLoadImg = emptyFn}) => {
  const {screen} = useDevice();
  const {entries, setElements, unobserve} = useObserver();
  useLazyImageIntersection({elementsSelector: `#${ABOUT_YOUR_LOOKIERO_ID} .image`, entries, setElements, unobserve});

  return (
    <Layout
      align="center"
      as="section"
      id={ABOUT_YOUR_LOOKIERO_ID}
      justifyContent="center"
      fullWidth
      backgroundColor={COLOR.INFO}
      paddingTop={LAYOUT.M}
      paddingBottom={{L: LAYOUT.M}}
    >
      <Box size={{L: '2/3'}}>
        <View
          alignItems="center"
          display="flex"
          justifyContent="center"
          flexDirection={screen.L ? undefined : 'column'}
        >
          <Box
            size={{L: '1/2'}}
            marginRight={{L: LAYOUT.M}}
            paddingHorizontal={{S: LAYOUT.S, M: LAYOUT.S}}
            paddingBottom={{S: LAYOUT.M, M: LAYOUT.M}}
            marginLeft={{L: LAYOUT.XL}}
          >
            <Text
              align={ALIGN.CENTER}
              as="h2"
              heading
              level={2}
              color={COLOR.content}
              marginBottom={{L: LAYOUT.XS, default: LAYOUT.XXS}}
            >
              <MessageI18n {...info.title} />
            </Text>

            <Text align={ALIGN.CENTER} as="p" level={2} marginBottom={LAYOUT.M}>
              <MessageI18n {...info.description} />
            </Text>

            {info.content.map((text, index) => (
              <Text
                align={ALIGN.CENTER}
                as="p"
                level={3}
                key={index}
                marginTop={index !== 0 ? {L: LAYOUT.S, default: LAYOUT.XS} : undefined}
              >
                <MessageI18n {...text} />
              </Text>
            ))}
          </Box>
          <Box size={{L: '1/2'}} marginRight={{L: LAYOUT.XL}}>
            <Image height="470" width="376" lazyLoad src={info.image} onLoad={onLoadImg} easeIn />
          </Box>
        </View>
      </Box>
    </Layout>
  );
};

AboutYourLookiero.propTypes = {
  info: PropTypes.shape({
    title: PropTypes.shape({
      id: PropTypes.string,
      defaultMessage: PropTypes.string,
    }).isRequired,
    description: PropTypes.shape({
      id: PropTypes.string.isRequired,
      defaultMessage: PropTypes.string,
    }).isRequired,
    content: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        description: PropTypes.number,
      }),
    ).isRequired,
    image: PropTypes.shape({
      src: PropTypes.string,
      srcSet: PropTypes.string,
    }),
  }).isRequired,
  onLoadImg: PropTypes.func,
};

export {AboutYourLookiero};
