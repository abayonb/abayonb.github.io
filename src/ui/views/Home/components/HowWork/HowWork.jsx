import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';

import {ALIGN, Box, DISPLAY, Layout, Link, View, Text, COLOR, LAYOUT, useDevice} from '@aurora';
import {Image} from '@components/atoms';
import {useLazyImageIntersection, useObserver, usePresenter} from '@hooks';
import {MessageI18n} from '@i18n';

import {HowWorkPresenter} from './HowWork.presenter';
import {style} from './HowWork.styles';

const HOW_WORK_ID = style.anchor;

const emptyFn = () => {};

const HowWork = ({onLoadImg = emptyFn}) => {
  const {screen} = useDevice();
  const {entries, setElements, unobserve} = useObserver();

  const [steps, setSteps] = useState([]);

  useLazyImageIntersection({
    elementsSelector: `#${HOW_WORK_ID} .image--lazy`,
    entries,
    setElements,
    unobserve,
    condition: steps.length,
  });

  const {onLoadSteps} = usePresenter(() =>
    HowWorkPresenter({
      showSteps: steps => {
        setSteps(steps);
      },
      screen,
    }),
  );

  useEffect(() => {
    onLoadSteps();
  }, [onLoadSteps]);

  return (
    <Layout
      align="center"
      as="section"
      id={HOW_WORK_ID}
      justifyContent="center"
      fullWidth={screen.L ? true : false}
      paddingTop={{L: LAYOUT.L, default: LAYOUT.M}}
    >
      <Box size={{L: '2/3'}}>
        <Layout justifyContent="center" fullWidth>
          <Box marginBottom={{L: LAYOUT.XS, default: LAYOUT.XXS}}>
            <Text align={ALIGN.CENTER} as="h2" heading level={2} color={COLOR.summary}>
              <MessageI18n id="home.how.title" defaultMessage="How it works" />
            </Text>
          </Box>
        </Layout>

        <Layout marginBottom={LAYOUT.S} justifyContent="center" fullWidth>
          <Box size={{L: '1/3'}}>
            <Text align={ALIGN.CENTER} as="p" level={2}>
              <MessageI18n id="home.how.subtitle" defaultMessage="Start your style journey with three simple steps." />
            </Text>
          </Box>
        </Layout>

        <View marginBottom={{L: LAYOUT.XXS}} alignItems={ALIGN.LEFT} display={screen.L ? DISPLAY.FLEX : undefined} wide>
          {steps.map(({title, summary, summary_link, image}, index) => (
            <Box
              key={title.id}
              marginTop={{S: index !== 0 ? LAYOUT.M : null, M: index !== 0 ? LAYOUT.M : null}}
              size={{L: '1/3'}}
              marginLeft={{L: index !== 0 ? LAYOUT.M : null}}
            >
              <View marginHorizontal={{M: LAYOUT.XS, S: LAYOUT.XS}} marginBottom={LAYOUT.XS}>
                <Image height="360" width="288" lazyLoad onLoad={onLoadImg} src={image} easeIn />
              </View>
              <Text align={ALIGN.CENTER} as="h3" level={1} marginBottom={LAYOUT.XXS}>
                <MessageI18n {...title} />
              </Text>
              <Text align={ALIGN.CENTER} as="p" level={3}>
                <MessageI18n
                  {...summary}
                  values={{
                    link: (
                      <Link
                        level={3}
                        color={COLOR.content}
                        key={summary_link.id}
                        href={summary_link.url}
                        target="_blank"
                        underlined
                      >
                        <MessageI18n {...summary_link} />
                      </Link>
                    ),
                  }}
                />
              </Text>
            </Box>
          ))}
        </View>
      </Box>
    </Layout>
  );
};

HowWork.propTypes = {
  onLoadImg: PropTypes.func,
};

export {HowWork, HOW_WORK_ID};
