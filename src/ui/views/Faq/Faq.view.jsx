import React, {useEffect, useState} from 'react';

import {isSeoRender} from '@views/Views.presenter';
import {
  Accordion,
  AccordionContainer,
  Box,
  InputField,
  Layout,
  Text,
  View,
  ALIGN,
  FLEX_DIRECTION,
  LAYOUT,
} from '@aurora';
import {usePresenter, useDropDown} from '@hooks';
import {MessageI18n, useIntl} from '@i18n';
import {Wysiwyg} from '@components/atoms';

import {FaqPresenter} from './Faq.presenter';

import {FormContact, CourierInfoTile} from './components';
import './Faq.view.css';

const FaqView = () => {
  const {formatMessage} = useIntl();
  const [topic, setTopic] = useState(undefined);
  const [docs, setDocs] = useState([]);
  const [topics, setTopics] = useState([]);
  const [courierInfo, setCourierInfo] = useState();

  const {onLoadDocuments, onLoadTopics, localizeOptions, onLoadCourierInfo} = usePresenter(() =>
    FaqPresenter({
      showDocuments: docs => {
        setDocs(docs);
      },
      showTopics: topics => {
        setTopics(topics);
      },
      setDefaultTopic: defaultTopic => {
        setTopic(defaultTopic);
      },
      loadCourierInfo: courierInfo => {
        setCourierInfo(courierInfo);
      },
    }),
  );

  useEffect(() => {
    onLoadDocuments();
  }, [onLoadDocuments]);

  useEffect(() => {
    onLoadTopics();
  }, [onLoadTopics]);

  useEffect(() => {
    onLoadCourierInfo();
  }, [onLoadCourierInfo]);

  const labelSelect = formatMessage({
    id: 'choose.topic',
    defaultMessage: 'Choose your topic',
  });
  useDropDown(labelSelect);

  const handleOnTopicChanged = event => {
    const topicSelected = event.currentTarget.value;
    window.location.hash = topicSelected;
    setTopic(topicSelected);
  };

  const hasCourierInfo =
    courierInfo && formatMessage({id: courierInfo.title}) && formatMessage({id: courierInfo.content});

  return (
    <View customStyle="faq-view">
      <Layout customStyle="faq-view" flexDirection={FLEX_DIRECTION.COLUMN} alignItems={ALIGN.CENTER}>
        <Box size={{L: '1/2'}} marginTop={LAYOUT.M} marginBottom={LAYOUT.S} textAlign={ALIGN.CENTER}>
          <Text heading as="h2" level={3} align={ALIGN.CENTER} marginHorizontal={LAYOUT.XS} marginBottom={LAYOUT.XS}>
            <MessageI18n id="help.contact.title" defaultMessage="What can we help you with?" />
          </Text>
          <Text as="h3" level={2}>
            <MessageI18n id="help.faq.title" defaultMessage="Frequently Asked Questions:" />
          </Text>
        </Box>
        <Box size={{L: '1/3'}} marginBottom={LAYOUT.S}>
          <InputField
            defaultValue={topic}
            icon="arrow-down"
            key={topic}
            label={labelSelect}
            name="topic"
            onChange={handleOnTopicChanged}
            options={localizeOptions(topics, {formatMessage})}
          />
        </Box>
        <Box size={{L: '1/2'}}>
          <Text as="p" customStyle="faq-title" level={3} marginBottom={LAYOUT.M} align={ALIGN.CENTER}>
            <MessageI18n id="help.contact.help.title" defaultMessage="We think this could help you:" />
          </Text>
          <AccordionContainer>
            {docs
              .filter(doc => !topic || topic === doc.topic)
              .filter(({question = []} = {}) => {
                const questionContent = formatMessage({id: question});
                return questionContent.length > 0 && questionContent !== question;
              })
              .map(({question, answer = []} = {}) => (
                <Accordion forceRender={isSeoRender} key={question} title={formatMessage({id: question})}>
                  <View paddingVertical={LAYOUT.S}>
                    {answer
                      .filter(answerKey => {
                        const answerContent = formatMessage({id: answerKey});
                        return answerContent.length > 0 && answerContent !== answerKey;
                      })
                      .map((answerKey, index) => (
                        <View key={answerKey}>
                          <Wysiwyg>
                            <Text detail level={1} marginTop={index !== 0 ? LAYOUT.S : undefined} display="block">
                              <MessageI18n id={answerKey} />
                            </Text>
                          </Wysiwyg>
                        </View>
                      ))}
                  </View>
                </Accordion>
              ))}
          </AccordionContainer>
        </Box>
      </Layout>

      {hasCourierInfo && (
        <CourierInfoTile
          title={formatMessage({id: courierInfo.title})}
          content={formatMessage({id: courierInfo.content})}
        />
      )}

      <FormContact topic={topic} topics={topics} />
    </View>
  );
};

export {FaqView};
