import {IMAGES_URL} from '@core/config';

const ASSET_URL = `${IMAGES_URL}/how-it-works`;

export const getHowWorkConfig = (country, devicePath) => [
  {
    title: {
      defaultMessage: 'Talk to us',
      id: 'home.how.step1_title',
    },
    summary: {
      defaultMessage:
        'The more we know you, the better your can you. Take our short style survey so we can learn how you like to look.',
      id: 'home.how.step1_paragraph',
    },
    summary_link: {
      defaultMessage: 'personal shopper',
      id: 'home.how.PSlink',
      url: `https://lookiero.${country}/${country}/personal-shopper`,
    },
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
  {
    title: {
      defaultMessage: 'Try at home',
      id: 'home.how.step2_title',
    },
    summary: {
      defaultMessage:
        'Relax into your style. Try on your five new pieces in the comfort of your own home. Keep or return in five days. Enjoy.',
      id: 'home.how.step2_paragraph',
    },
    summary_link: {
      defaultMessage: 'personal shopper',
      id: 'home.how.PSlink',
      url: `https://lookiero.${country}/${country}/personal-shopper`,
    },
    image: {
      avif: {
        srcSet: `${ASSET_URL}/${devicePath}/02.avif 1x, ${ASSET_URL}/${devicePath}/02@2x.avif 2x`,
      },
      webp: {
        srcSet: `${ASSET_URL}/${devicePath}/02.webp 1x, ${ASSET_URL}/${devicePath}/02@2x.webp 2x`,
      },
      default: {
        src: `${ASSET_URL}/${devicePath}/02.jpg`,
        srcSet: `${ASSET_URL}/${devicePath}/02.jpg 1x, ${ASSET_URL}/${devicePath}/02@2x.jpg 2x`,
      },
    },
  },
  {
    title: {
      defaultMessage: 'Fall in love',
      id: 'home.how.step3_title',
    },
    summary: {
      defaultMessage:
        'Pay for what you love, return the rest. No obligation. Love all five? Perfect, take 25% off your entire order. You deserve it.',
      id: 'home.how.step3_paragraph',
    },
    summary_link: {
      defaultMessage: 'personal shopper',
      id: 'home.how.PSlink',
    },
    image: {
      avif: {
        srcSet: `${ASSET_URL}/${devicePath}/03.avif 1x, ${ASSET_URL}/${devicePath}/03@2x.avif 2x`,
      },
      webp: {
        srcSet: `${ASSET_URL}/${devicePath}/03.webp 1x, ${ASSET_URL}/${devicePath}/03@2x.webp 2x`,
      },
      default: {
        src: `${ASSET_URL}/${devicePath}/03.jpg`,
        srcSet: `${ASSET_URL}/${devicePath}/03.jpg 1x, ${ASSET_URL}/${devicePath}/03@2x.jpg 2x`,
      },
    },
  },
];
