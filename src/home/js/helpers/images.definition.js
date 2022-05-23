import {device} from './device';

const platform = device.platform;
const domain = window.location.hostname.split('.').pop();
const country = !domain || domain === 'localhost' ? 'fr' : domain === 'uk' ? 'gb' : domain;
const CDN = `${process.env.REACT_APP_CDN_PATH}`;
const IMAGES_PATH = `${CDN}/usf/images`;
const isMobile = platform === 'mobile';

const INFLUENCERS = [
  '01_mademoisellemodeuse',
  '02_lglora',
  '03_manguepoudree',
  '04_etdieucrea',
  '05_poupeerousse',
  '06_myblondestyle',
  '07_fashionvitaminsantwerp',
  '08_elenavidalrod',
  '09_laura',
  '10_mrsmlmode',
].reduce(
  (prev, current) =>
    Object.assign(prev, {
      [`${current}_avatar`]: {
        src: `${IMAGES_PATH}/influencers/${platform}/avatars/${current}.jpg`,
        srcset: `${IMAGES_PATH}/influencers/${platform}/avatars/${current}.jpg 1x, ${IMAGES_PATH}/influencers/${platform}/avatars/${current}@2x.jpg 2x`,
      },
      [current]: {
        src: `${IMAGES_PATH}/influencers/${platform}/photps/${current}.jpg`,
        srcset: `${IMAGES_PATH}/influencers/${platform}/photos/${current}.jpg 1x, ${IMAGES_PATH}/influencers/${platform}/photos/${current}@2x.jpg 2x`,
      },
    }),
  {},
);

export const IMAGES_DEFINITION = {
  'how-it-works-1': {
    src: `${IMAGES_PATH}/how-it-works/${platform}/01.jpg`,
    srcset: `${IMAGES_PATH}/how-it-works/${platform}/01.jpg 1x, ${IMAGES_PATH}/how-it-works/${platform}/01@2x.jpg 2x`,
  },
  'how-it-works-2': {
    src: `${IMAGES_PATH}/how-it-works/${platform}/02.jpg`,
    srcset: `${IMAGES_PATH}/how-it-works/${platform}/02.jpg 1x, ${IMAGES_PATH}/how-it-works/${platform}/02@2x.jpg 2x`,
  },
  'how-it-works-3': {
    src: `${IMAGES_PATH}/how-it-works/${platform}/03.jpg`,
    srcset: `${IMAGES_PATH}/how-it-works/${platform}/03.jpg 1x, ${IMAGES_PATH}/how-it-works/${platform}/03@2x.jpg 2x`,
  },
  'psintro-ps1': {
    src: `${IMAGES_PATH}/personal-shopper-intro/${country}/${platform}/ps1.jpg`,
    srcset: `${IMAGES_PATH}/personal-shopper-intro/${country}/${platform}/ps1.jpg, ${IMAGES_PATH}/personal-shopper-intro/${country}/${platform}/ps1.jpg 1x, ${IMAGES_PATH}/personal-shopper-intro/${country}/${platform}/ps1_2x.jpg 2x`,
  },
  'psintro-ps1-look': {
    src: `${IMAGES_PATH}/personal-shopper-intro/${country}/${platform}/ps1_look.jpg`,
    srcset: `${IMAGES_PATH}/personal-shopper-intro/${country}/${platform}/ps1_look.jpg, ${IMAGES_PATH}/personal-shopper-intro/${country}/${platform}/ps1_look.jpg 1x, ${IMAGES_PATH}/personal-shopper-intro/${country}/${platform}/ps1_look_2x.jpg 2x`,
  },
  'psintro-ps2': {
    src: `${IMAGES_PATH}/personal-shopper-intro/${country}/${platform}/ps2.jpg`,
    srcset: `${IMAGES_PATH}/personal-shopper-intro/${country}/${platform}/ps2.jpg, ${IMAGES_PATH}/personal-shopper-intro/${country}/${platform}/ps2.jpg 1x, ${IMAGES_PATH}/personal-shopper-intro/${country}/${platform}/ps2_2x.jpg 2x`,
  },
  'psintro-ps2-look': {
    src: `${IMAGES_PATH}/personal-shopper-intro/${country}/${platform}/ps2_look.jpg`,
    srcset: `${IMAGES_PATH}/personal-shopper-intro/${country}/${platform}/ps2_look.jpg, ${IMAGES_PATH}/personal-shopper-intro/${country}/${platform}/ps2_look.jpg 1x, ${IMAGES_PATH}/personal-shopper-intro/${country}/${platform}/ps2_look_2x.jpg 2x`,
  },
  'psintro-ps3': {
    src: `${IMAGES_PATH}/personal-shopper-intro/${country}/${platform}/ps3.jpg`,
    srcset: `${IMAGES_PATH}/personal-shopper-intro/${country}/${platform}/ps3.jpg, ${IMAGES_PATH}/personal-shopper-intro/${country}/${platform}/ps3.jpg 1x, ${IMAGES_PATH}/personal-shopper-intro/${country}/${platform}/ps3_2x.jpg 2x`,
  },
  'psintro-ps3-look': {
    src: `${IMAGES_PATH}/personal-shopper-intro/${country}/${platform}/ps3_look.jpg`,
    srcset: `${IMAGES_PATH}/personal-shopper-intro/${country}/${platform}/ps3_look.jpg, ${IMAGES_PATH}/personal-shopper-intro/${country}/${platform}/ps3_look.jpg 1x, ${IMAGES_PATH}/personal-shopper-intro/${country}/${platform}/ps3_look_2x.jpg 2x`,
  },
  'inside-image': {
    src: `${IMAGES_PATH}/additional-info/${platform}/01.jpg`,
    srcset: `${IMAGES_PATH}/additional-info/${platform}/01.jpg 1x, ${IMAGES_PATH}/additional-info/${platform}/01@2x.jpg 2x`,
  },
  'price-image': {
    src: `${IMAGES_PATH}/additional-info/${platform}/02.jpg`,
    srcset: `${IMAGES_PATH}/additional-info/${platform}/02.jpg 1x, ${IMAGES_PATH}/additional-info/${platform}/02@2x.jpg 2x`,
  },
  'quiz-question-1': {
    src: `${IMAGES_PATH}/quiz/${country}/${platform}/1.jpg`,
    srcset: `${IMAGES_PATH}/quiz/${country}/${platform}/1.jpg, ${IMAGES_PATH}/quiz/${country}/${platform}/1_2x.jpg 2x`,
  },
  'quiz-question-2': {
    src: `${IMAGES_PATH}/quiz/${country}/${platform}/2.jpg`,
    srcset: `${IMAGES_PATH}/quiz/${country}/${platform}/2.jpg, ${IMAGES_PATH}/quiz/${country}/${platform}/2_2x.jpg 2x`,
  },
  'quiz-question-3': {
    src: `${IMAGES_PATH}/quiz/${country}/${platform}/3.jpg`,
    srcset: `${IMAGES_PATH}/quiz/${country}/${platform}/3.jpg, ${IMAGES_PATH}/quiz/${country}/${platform}/3_2x.jpg 2x`,
  },
  'quiz-question-4': {
    src: `${IMAGES_PATH}/quiz/${country}/${platform}/4.jpg`,
    srcset: `${IMAGES_PATH}/quiz/${country}/${platform}/4.jpg, ${IMAGES_PATH}/quiz/${country}/${platform}/4_2x.jpg 2x`,
  },
  ...INFLUENCERS,
  'social-facebook': {
    src: `${IMAGES_PATH}/social/${platform}/social-facebook${isMobile ? '' : '@2x'}.png`,
    srcSet: `${IMAGES_PATH}/social/${platform}/social-facebook.png 1x, ${IMAGES_PATH}/social/${platform}/social-facebook@2x.png 2x`,
  },
  'social-pinterest': {
    src: `${IMAGES_PATH}/social/${platform}/social-pinterest${isMobile ? '' : '@2x'}.png`,
    srcSet: `${IMAGES_PATH}/social/${platform}/social-pinterest.png 1x, ${IMAGES_PATH}/social/${platform}/social-pinterest@2x.png 2x`,
  },
  'social-instagram': {
    src: `${IMAGES_PATH}/social/${platform}/social-instagram${isMobile ? '' : '@2x'}.png`,
    srcSet: `${IMAGES_PATH}/social/${platform}/social-instagram.png 1x, ${IMAGES_PATH}/social/${platform}/social-instagram@2x.png 2x`,
  },
  'social-twitter': {
    src: `${IMAGES_PATH}/social/${platform}/social-twitter${isMobile ? '' : '@2x'}.png`,
    srcSet: `${IMAGES_PATH}/social/${platform}/social-twitter.png 1x, ${IMAGES_PATH}/social/${platform}/social-twitter@2x.png 2x`,
  },
  'social-tiktok': {
    src: `${IMAGES_PATH}/social/${platform}/social-tiktok${isMobile ? '' : '@2x'}.png`,
    srcSet: `${IMAGES_PATH}/social/${platform}/social-tiktok.png 1x, ${IMAGES_PATH}/social/${platform}/social-tiktok@2x.png 2x`,
  },
  'payment-visa': {
    src: `${IMAGES_PATH}/payment/${platform}/visa.svg`,
    srcSet: `${IMAGES_PATH}/payment/${platform}/visa.png 1x, ${IMAGES_PATH}/payment/${platform}/visa.svg 2x`,
  },
  'payment-mastercard': {
    src: `${IMAGES_PATH}/payment/${platform}/mastercard.svg`,
    srcSet: `${IMAGES_PATH}/payment/${platform}/mastercard.png 1x, ${IMAGES_PATH}/payment/${platform}/mastercard.svg 2x`,
  },
  'payment-paypal': {
    src: `${IMAGES_PATH}/payment/${platform}/paypal.svg`,
    srcSet: `${IMAGES_PATH}/payment/${platform}/paypal.png 1x, ${IMAGES_PATH}/payment/${platform}/paypal.svg 2x`,
  },
  'payment-american': {
    src: `${IMAGES_PATH}/payment/${platform}/american.svg`,
    srcSet: `${IMAGES_PATH}/payment/${platform}/american.png 1x, ${IMAGES_PATH}/payment/${platform}/american.svg 2x`,
  },
  'payment-cartes': {
    src: `${IMAGES_PATH}/payment/${platform}/cartes.svg`,
    srcSet: `${IMAGES_PATH}/payment/${platform}/cartes.png 1x, ${IMAGES_PATH}/payment/${platform}/cartes.svg 2x`,
  },
};
