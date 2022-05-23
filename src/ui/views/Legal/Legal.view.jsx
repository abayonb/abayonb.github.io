import React, {useEffect, useState} from 'react';
import {Box, Text, Layout, LAYOUT} from '@aurora';

import {usePresenter} from '@hooks';
import {MessageI18n} from '@i18n';

import {DropDownTopics} from './components/DropDownTopics';
import {ContentsOfTopics} from './components/ContentsOfTopics';
import {LegalPresenter} from './Legal.presenter';

const LegalView = () => {
  const [terms, setTerms] = useState(() => ({topics: [], default: ''}));
  const [topicSelected, setTopicSelected] = useState();

  const {onLoadTerms} = usePresenter(() =>
    LegalPresenter({
      showTerms: terms => {
        setTerms(terms);
      },
      setDefaultTopic: defaultTopic => {
        setTopicSelected(defaultTopic);
      },
    }),
  );

  useEffect(() => {
    onLoadTerms();
  }, [onLoadTerms]);

  const handleOnTopicChanged = topicSelected => {
    setTopicSelected(topicSelected);
  };

  return (
    <Layout flexDirection="column" alignItems="center" paddingBottom={LAYOUT.M}>
      <Box size={{L: '1/2'}} marginVertical={LAYOUT.M}>
        <Text heading as="h2" align="center">
          <MessageI18n id="legal.main.title" />
        </Text>
      </Box>
      <Box size={{L: '1/3'}} marginBottom={LAYOUT.M}>
        <DropDownTopics topics={terms.topics} defaultTopic={topicSelected} onChange={handleOnTopicChanged} />
      </Box>
      <Box size={{L: '1/2'}}>
        <ContentsOfTopics topics={terms.topics} defaultTopic={topicSelected} />
      </Box>
    </Layout>
  );
};

export {LegalView};
