import {getCourierInfo, getDocuments, getTopics, getTopicDefault} from '@core/faq/application';
import {getDefaultTopic, localizeOptions} from './modules';

export const FaqPresenter = view => ({
  onLoadTopics: async () => {
    const topics = await getTopics();
    const defaultTopic = await getTopicDefault();
    view.showTopics(topics);
    view.setDefaultTopic(getDefaultTopic(topics, defaultTopic));
  },

  onLoadDocuments: async () => {
    view.showDocuments(await getDocuments());
  },
  localizeOptions: localizeOptions,

  onLoadCourierInfo: () => {
    const courierInfo = getCourierInfo();
    if (courierInfo) {
      view.loadCourierInfo(courierInfo);
    }
  },
});
