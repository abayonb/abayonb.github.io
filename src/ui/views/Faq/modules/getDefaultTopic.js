export const getDefaultTopic = (topics, defaultTopic) => {
  const hashOnLoad = window.location.hash.split('#')[1];

  if (hashOnLoad) {
    const topicByHash = topics.filter(topic => topic.value === hashOnLoad).map(topic => topic.value);
    return topicByHash[0] || defaultTopic;
  }

  return defaultTopic;
};
