import React, {useEffect, useState} from 'react';

import PropTypes from 'prop-types';

import {
  Box,
  Button,
  Layout,
  OptionImage,
  Text,
  View,
  ALIGN,
  COLOR,
  DISPLAY,
  FLEX_DIRECTION,
  FLEX_WRAP,
  LAYOUT,
  useDevice,
} from '@aurora';

import {useIntl} from '@i18n';

import {usePresenter, useBackButton} from '@hooks';
import {scrollToElement} from '@views/Home/modules';

import {QuizPresenter} from './Quiz.presenter';
import {TEXT} from './Quiz.intl';
import {ASPECT_RATIO, CONTENT_PROPS, getMarginBottom, getWidth, style} from './Quiz.styles';

const QUIZ_ID = style.anchor;

const emptyFn = () => {};

const Quiz = ({handleIntersection = emptyFn, observeElement = emptyFn, onLoadImg = emptyFn}) => {
  const {formatMessage} = useIntl();
  const {screen} = useDevice();
  const [question, setQuestion] = useState(false);
  const [answer, setAnswer] = useState(false);
  const [error, setError] = useState(false);
  const [busy, setBusy] = useState(false);

  const {onLoadQuestion, onSaveQuestionQuiz, validateAnswer} = usePresenter(() =>
    QuizPresenter({
      showQuestion: question => {
        setQuestion(question);
      },
      setError: status => setError(status),
      setBusy: () => setBusy(false),
      screen,
    }),
  );

  useBackButton(() => setBusy(false));

  useEffect(() => {
    onLoadQuestion();
  }, [onLoadQuestion]);

  const onChangeAnswer = answerValue => {
    setError(false);
    setAnswer(answerValue);

    scrollToElement(QUIZ_ID, {blockEnd: true});
  };

  const handleOnChangeQuestion = () => {
    setBusy(true);
    validateAnswer(answer);
    if (answer) {
      onSaveQuestionQuiz(question, answer);
      window.location.href = question.urlNextStep;
    }
  };

  useEffect(() => {
    observeElement({
      element: `.${style.main}`,
      handleIntersection,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [screen.L, question]);

  const width = getWidth({screen});
  const height = width * ASPECT_RATIO;

  return question && question.answers ? (
    <View
      backgroundColor={COLOR.OVERLAY}
      customStyle={style.base}
      id={QUIZ_ID}
      marginTop={{L: LAYOUT.L, default: LAYOUT.M}}
    >
      <Layout
        alignItems={ALIGN.CENTER}
        fullWidth={screen.L ? true : false}
        inline={false}
        paddingBottom={LAYOUT.M}
        paddingTop={screen.L ? LAYOUT.M : LAYOUT.XS}
      >
        <Box alignItems={ALIGN.CENTER} display={DISPLAY.FLEX} flexDirection={FLEX_DIRECTION.COLUMN} size={{L: '1/2'}}>
          <Text align={ALIGN.CENTER} detail level={3} marginBottom={LAYOUT.XS} upperCase>
            {formatMessage(TEXT.HEADING)}
          </Text>
          <Text align={ALIGN.CENTER} as="p" heading level={screen.L ? 2 : 3}>
            {formatMessage(question.questionText)}
          </Text>
        </Box>

        <View
          alignItems={ALIGN.CENTER}
          {...(!screen.L ? {id: style.main, customStyle: style.main} : {})}
          paddingTop={LAYOUT.M}
          display={DISPLAY.FLEX}
          flexDirection={FLEX_DIRECTION.COLUMN}
          wide
        >
          <Box
            alignItems={ALIGN.START}
            display={DISPLAY.FLEX}
            flexDirection={FLEX_DIRECTION.ROW}
            flexWrap={FLEX_WRAP.WRAP}
            justifyContent={ALIGN.BETWEEN}
            marginBottom={screen.L ? LAYOUT.M : LAYOUT.S}
            size={{L: '2/3'}}
          >
            {question.answers.map(({picture: {src, srcSet}, text, title, value}, index) => (
              <View key={value} style={{marginBottom: getMarginBottom({index, screen})}}>
                <OptionImage
                  checked={value === answer}
                  data-testid={`leisure-${value}`}
                  name={text}
                  onChange={onChangeAnswer}
                  onLoad={onLoadImg}
                  {...{src, srcSet, value, width, height, title}}
                />
              </View>
            ))}
          </Box>

          {error && (
            <Box {...CONTENT_PROPS} marginBottom={LAYOUT.XS}>
              <Text as="p" align={ALIGN.CENTER} color={COLOR.PRIMARY} detail level={1}>
                {formatMessage(TEXT.ERROR)}
              </Text>
            </Box>
          )}
          <Box {...CONTENT_PROPS} display={DISPLAY.FLEX} justifyContent={ALIGN.CENTER}>
            <Button
              busy={busy}
              {...(screen.L ? {id: style.main, customStyle: style.main} : {})}
              onPress={handleOnChangeQuestion}
            >
              {formatMessage(TEXT.CTA)}
            </Button>
          </Box>
        </View>
      </Layout>
    </View>
  ) : null;
};

Quiz.propTypes = {
  handleIntersection: PropTypes.func,
  observeElement: PropTypes.func,
  onLoadImg: PropTypes.func,
};

export {Quiz, QUIZ_ID};
