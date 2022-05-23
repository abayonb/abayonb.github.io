export const getDefaultTopic = terms => {
  const hashOnLoad = window.location.hash.split('#')[1];

  if (hashOnLoad) {
    const topicByHash = terms.topics.filter(topic => topic.hash === hashOnLoad).map(topic => topic.id);
    if (topicByHash[0]) {
      return topicByHash[0];
    }
  }
  return terms.default;
};
