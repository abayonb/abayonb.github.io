import {getDefaultTopic} from './getDefaultTopic';

describe('getDefaultTopics', () => {
  const topics = [
    {id: 'key.text.1', defaultMessage: 'Text 1', value: 'url-hash-1'},
    {id: 'key.text.2', defaultMessage: 'Text 2', value: 'url-hash-2'},
  ];
  beforeEach(() => {
    window.history.pushState({}, '', '');
  });

  it('should return current hash when it exists', () => {
    window.history.pushState({}, 'Test Title', '#url-hash-2');
    const defaultValue = 'default-hash';
    const expected = 'url-hash-2';
    const defaultTopic = getDefaultTopic(topics, defaultValue);
    expect(defaultTopic).toBe(expected);
  });

  it('should return the defautValue when it not exists', () => {
    const defaultValue = 'default-hash';
    const defaultTopic = getDefaultTopic(topics, defaultValue);
    expect(defaultTopic).toBe(defaultValue);
  });
});
