import {IMAGES_URL} from '@core/config';

const ASSET_URL = `${IMAGES_URL}/legal/helps`;

const LEGAL_TOPICS = {
  LEGAL_NOTICE: {
    id: '1',
    title: 'legal.legalNotice.title',
    i18nContent: 'legal.legalNotice.content',
    hash: 'legal-notice',
  },
  PRIVACY_POLICY: {
    id: '2',
    title: 'legal.privacyPolicy.title',
    i18nContent: 'legal.privacyPolicy.content',
    hash: 'privacy-policy',
  },
  COOKIES_POLICY: {
    id: '3',
    title: 'legal.cookiesPolicy.title',
    i18nContent: 'legal.cookiesPolicy.content',
    hash: 'cookies-policy',
  },
  GENERAL_CONDITIONS: {
    id: '4',
    title: 'legal.generalConditions.title',
    i18nContent: 'legal.generalConditions.content',
    hash: 'general-conditions',
  },
  HELPS: {
    id: '5',
    title: 'legal.helps.title',
    hash: 'helps',
    content: {
      template: 'helps',
      images: [
        {
          source: {
            avif: {
              srcSet: `${ASSET_URL}/hazitek2.avif, ${ASSET_URL}/hazitek2@2x.avif 2x`,
            },
            webp: {
              srcSet: `${ASSET_URL}/hazitek2.webp, ${ASSET_URL}/hazitek2@2x.webp 2x`,
            },
            default: {
              src: `${ASSET_URL}/hazitek2@2x.jpg`,
              srcSet: `${ASSET_URL}/hazitek2.jpg, ${ASSET_URL}/hazitek2@2x.jpg 2x`,
            },
          },
          alt: 'Hazitek2',
        },
        {
          source: {
            avif: {
              srcSet: `${ASSET_URL}/hazitek.avif, ${ASSET_URL}/hazitek@2x.avif 2x`,
            },
            webp: {
              srcSet: `${ASSET_URL}/hazitek.webp, ${ASSET_URL}/hazitek@2x.webp 2x`,
            },
            default: {
              src: `${ASSET_URL}/hazitek@2x.jpg`,
              srcSet: `${ASSET_URL}/hazitek.jpg, ${ASSET_URL}/hazitek@2x.jpg 2x`,
            },
          },
          alt: 'Hazitek',
        },
      ],
    },
  },
  IMPRESSUM: {
    id: '6',
    title: 'legal.impressum.title',
    i18nContent: 'legal.impressum.content',
    hash: 'impressum',
  },
};

export {LEGAL_TOPICS};
