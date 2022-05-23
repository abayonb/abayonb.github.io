import {getDefaultTopic} from './getDefaultTopic';

describe('legal getDefaultTopics', () => {
  const terms = {
    topics: [
      {id: 'key.text.1', title: 'Text 1', hash: 'url-hash-1'},
      {id: 'key.text.2', title: 'Text 2', hash: 'url-hash-2'},
    ],
    default: 'default-key',
  };
  beforeEach(() => {
    window.history.pushState({}, '', '');
  });

  it('should return current hash id it exists', () => {
    window.history.pushState({}, 'Test Title', '#url-hash-2');
    const defaultValue = 'default-hash';
    const expected = 'key.text.2';
    const defaultTopic = getDefaultTopic(terms, defaultValue);
    expect(defaultTopic).toBe(expected);
  });

  it('should return the defaut key when it not exists', () => {
    const defaultValue = 'default-key';
    const defaultTopic = getDefaultTopic(terms, defaultValue);
    expect(defaultTopic).toBe(defaultValue);
  });
});
