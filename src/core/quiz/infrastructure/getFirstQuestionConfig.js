import {IMAGES_URL} from '@core/config';

const ASSET_URL = `${IMAGES_URL}/quiz`;

export const getFirstQuestionConfig = (countryActive, devicePath) => ({
  id: 1,
  name: 'leisure',
  questionText: {id: 'style.leisure.title', defaultMessage: 'How do you like to dress in your free time?'},
  urlNextStep: '/user/quiz/work',
  answers: [
    {
      text: 'style.leisure.A',
      title: 'style.leisure.A',
      alias: 'casual',
      value: '1',
      picture: {
        src: `${ASSET_URL}/${countryActive}/${devicePath}/1.jpg`,
        srcSet: `${ASSET_URL}/${countryActive}/${devicePath}/1.jpg, ${ASSET_URL}/${countryActive}/${devicePath}/1_2x.jpg 2x`,
      },
    },
    {
      text: 'style.leisure.B',
      title: 'style.leisure.B',
      alias: 'street',
      value: '2',
      picture: {
        src: `${ASSET_URL}/${countryActive}/${devicePath}/2.jpg`,
        srcSet: `${ASSET_URL}/${countryActive}/${devicePath}/2.jpg, ${ASSET_URL}/${countryActive}/${devicePath}/2_2x.jpg 2x`,
      },
    },

    {
      text: 'style.leisure.C',
      title: 'style.leisure.C',
      alias: 'classic',
      value: '3',
      picture: {
        src: `${ASSET_URL}/${countryActive}/${devicePath}/3.jpg`,
        srcSet: `${ASSET_URL}/${countryActive}/${devicePath}/3.jpg, ${ASSET_URL}/${countryActive}/${devicePath}/3_2x.jpg 2x`,
      },
    },

    {
      text: 'style.leisure.D',
      title: 'style.leisure.D',
      alias: 'femenine',
      value: '4',
      picture: {
        src: `${ASSET_URL}/${countryActive}/${devicePath}/4.jpg`,
        srcSet: `${ASSET_URL}/${countryActive}/${devicePath}/4.jpg, ${ASSET_URL}/${countryActive}/${devicePath}/4_2x.jpg 2x`,
      },
    },
  ],
});
