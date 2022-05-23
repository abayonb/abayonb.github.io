import {getIntroImagesDefinition} from './intro.definition';
import {COUNTRIES} from '@core/site/application';

const getIntroImageBySite = introImage => ({
  [COUNTRIES.DE]: [introImage.WOMAN],
  [COUNTRIES.FR]: [introImage.STILL_LIFE],
  [COUNTRIES.BE]: [introImage.STILL_LIFE],
  [COUNTRIES.IT]: [introImage.WOMAN],
  [COUNTRIES.UK]: [introImage.WOMAN],
  [COUNTRIES.ES]: [introImage.WOMAN],
  [COUNTRIES.PT]: [introImage.WOMAN],
  [COUNTRIES.AT]: [introImage.WOMAN],
});

const getTrustpilotImageBySite = trustpilotImage => ({
  [COUNTRIES.UK]: trustpilotImage,
});

export const getIntroConfig = (countryActive, devicePath) => {
  const {LOGO, STARS, ...sliderImages} = getIntroImagesDefinition(devicePath);
  return {
    content: {
      bullets: [
        {
          defaultMessage: 'Receive 5 curated items handpicked by your personal shopper',
          id: 'home.main.bullet1',
        },
        {defaultMessage: 'Only pay for what you keep', id: 'home.main.bullet2'},
        {defaultMessage: 'Free shipping and returns on all items', id: 'home.main.bullet3'},
      ],
      cta: {defaultMessage: 'Discover yours', id: 'home.main.cta'},
      description: {
        defaultMessage: 'Receive five pieces handpicked for you by your Personal Shopper.',
        id: 'home.main.subtitle',
      },
      title: {defaultMessage: 'Style inpired by you', id: 'home.main.title'},
      trustpilot: {defaultMessage: 'Rated great with over 1700 reviews', id: 'home.main.trustpilot'},
    },
    images: {
      slider: getIntroImageBySite(sliderImages)[countryActive],
      trustpilot: getTrustpilotImageBySite({logo: LOGO, stars: STARS})[countryActive],
    },
  };
};
