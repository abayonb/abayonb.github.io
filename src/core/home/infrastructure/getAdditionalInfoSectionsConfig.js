import {IMAGES_URL} from '@core/config';

const ASSET_URL = `${IMAGES_URL}/additional-info`;

export const getAdditionalInfoSectionsConfig = devicePath => ({
  aboutYourLookiero: {
    title: {defaultMessage: 'In every box', id: 'home.additionalinfo1.title'},
    description: {
      defaultMessage: 'Every Lookiero brings you...',
      id: 'home.additionalinfo1.subtitle',
    },
    content: [
      {
        defaultMessage: 'Discovery. Unwrap five surprising pieces, each one handpicked just for you.',
        id: 'home.additionalinfo1.quote1',
      },
      {
        defaultMessage:
          'Inspiration. Get insights and styling tips on all your pieces. All in your Personal Shopper’s note.',
        id: 'home.additionalinfo1.quote2',
      },
      {
        defaultMessage: 'Ease. Keep what you love and return the rest – free of charge in our prepaid envelope.',
        id: 'home.additionalinfo1.quote3',
      },
    ],
    image: {
      avif: {
        srcSet: `${ASSET_URL}/${devicePath}/01.avif 1x, ${ASSET_URL}/${devicePath}/01@2x.avif 2x`,
      },
      webp: {
        srcSet: `${ASSET_URL}/${devicePath}/01.webp 1x, ${ASSET_URL}/${devicePath}/01@2x.webp 2x`,
      },
      default: {
        src: `${ASSET_URL}/${devicePath}/01.jpg`,
        srcSet: `${ASSET_URL}/${devicePath}/01.jpg 1x, ${ASSET_URL}/${devicePath}/01@2x.jpg 2x`,
      },
    },
  },
  aboutCost: {
    title: {defaultMessage: 'For every budget', id: 'home.additionalinfo2.title'},
    description: {defaultMessage: 'What does Lookiero cost?', id: 'home.additionalinfo2.subtitle'},
    content: [
      {
        defaultMessage: 'Set your own price range. And order as often as you choose. No subscription needed.',
        id: 'home.additionalinfo2.quote1',
      },
      {
        defaultMessage: 'Your personal shopper styles you for £10. But we remove that fee when you keep any piece.',
        id: 'home.additionalinfo2.quote2',
      },
      {
        defaultMessage: 'Keep all five of your pieces and we’ll give you 25% off your entire purchase.',
        id: 'home.additionalinfo2.quote3',
      },
    ],
    image: {
      avif: {
        srcSet: `${ASSET_URL}/${devicePath}/02.avif 1x, ${ASSET_URL}/${devicePath}/02@2x.avif 2x`,
      },
      webp: {
        srcSet: `${ASSET_URL}/${devicePath}/01.webp 1x, ${ASSET_URL}/${devicePath}/02@2x.webp 2x`,
      },
      default: {
        src: `${ASSET_URL}/${devicePath}/02.jpg`,
        srcSet: `${ASSET_URL}/${devicePath}/02.jpg 1x, ${ASSET_URL}/${devicePath}/02@2x.jpg 2x`,
      },
    },
  },
});
