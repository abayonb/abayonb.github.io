import {COUNTRIES} from '@core/site/application';
import {LEGAL_TOPICS} from '../legal.definition';

const DEFAULT_TOPICS = [
  LEGAL_TOPICS.LEGAL_NOTICE,
  LEGAL_TOPICS.PRIVACY_POLICY,
  LEGAL_TOPICS.COOKIES_POLICY,
  LEGAL_TOPICS.GENERAL_CONDITIONS,
];

const LEGAL_TOPICS_BY_COUNTRY = {
  [COUNTRIES.BE]: {
    topics: DEFAULT_TOPICS,
    default: '1',
  },
  [COUNTRIES.DE]: {
    topics: [...DEFAULT_TOPICS, LEGAL_TOPICS.IMPRESSUM],
    default: '1',
  },
  [COUNTRIES.ES]: {
    topics: [...DEFAULT_TOPICS, LEGAL_TOPICS.HELPS],
    default: '1',
  },
  [COUNTRIES.FR]: {
    topics: DEFAULT_TOPICS,
    default: '1',
  },
  [COUNTRIES.IT]: {
    topics: DEFAULT_TOPICS,
    default: '1',
  },
  [COUNTRIES.UK]: {
    topics: DEFAULT_TOPICS,
    default: '1',
  },
  [COUNTRIES.PT]: {
    topics: DEFAULT_TOPICS,
    default: '1',
  },
  [COUNTRIES.AT]: {
    topics: [...DEFAULT_TOPICS, LEGAL_TOPICS.IMPRESSUM],
    default: '1',
  },
};

export {LEGAL_TOPICS_BY_COUNTRY};
