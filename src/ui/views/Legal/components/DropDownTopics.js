import React from 'react';
import PropTypes from 'prop-types';
import {useIntl} from '@i18n';
import {InputField} from '@aurora';
import {useDropDown} from '@hooks';

const getOptionsDrowDown = (topics, formatMessage) =>
  topics.map(term => ({
    name: formatMessage({id: term.title}),
    value: term.id,
  }));

const DropDownTopics = ({topics, defaultTopic = '', onChange}) => {
  const {formatMessage} = useIntl();
  const options = getOptionsDrowDown(topics, formatMessage);
  const labelSelect = formatMessage({
    id: 'choose.topic',
    defaultMessage: 'Choose your topic',
  });
  useDropDown(labelSelect);

  const handlerOnChange = event => {
    const topicSelected = event.currentTarget.value;
    onChange(topicSelected);
    setHash(topicSelected);
  };

  const setHash = idTopicSelected => {
    const topic = topics.find(topic => topic.id === idTopicSelected);
    window.location.hash = topic.hash;
  };

  return (
    <InputField
      key={defaultTopic}
      icon="arrow-down"
      label={labelSelect}
      name="topic"
      defaultValue={defaultTopic}
      onChange={handlerOnChange}
      options={options}
    />
  );
};

DropDownTopics.propTypes = {
  topics: PropTypes.array,
  defaultTopic: PropTypes.string,
  onChange: PropTypes.func,
};

export {DropDownTopics};
