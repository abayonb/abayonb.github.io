import {IMAGES_URL} from '@core/config';

const ASSET_URL = `${IMAGES_URL}/intro`;
const ASSET_TRUSTPILOT_URL = `${ASSET_URL}/trustpilot`;

const getIntroImagesDefinition = devicePath => ({
  STILL_LIFE: {
    name: 'Lookiero clothes',
    source: {
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
  WOMAN: {
    name: 'Woman',
    source: {
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
  LOGO: {
    name: 'Logo',
    source: {
      src: `${ASSET_TRUSTPILOT_URL}/logo.svg`,
      srcSet: `${ASSET_TRUSTPILOT_URL}/logo.svg`,
    },
  },
  STARS: {
    name: 'Stars',
    source: {
      src: `${ASSET_TRUSTPILOT_URL}/stars.svg`,
      srcSet: `${ASSET_TRUSTPILOT_URL}/stars.svg`,
    },
  },
});

export {getIntroImagesDefinition};
