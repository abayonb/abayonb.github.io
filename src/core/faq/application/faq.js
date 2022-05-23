import {
  getCourierInfoConfig,
  getDocumentsConfig,
  getTopicsConfig,
  getTopicDefaultConfig,
} from '@core/faq/infrastructure';

const getCourierInfo = () => getCourierInfoConfig();
const getDocuments = () => getDocumentsConfig();
const getTopics = () => getTopicsConfig();
const getTopicDefault = () => getTopicDefaultConfig();

export {getCourierInfo, getDocuments, getTopics, getTopicDefault};
