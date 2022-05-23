import {IMAGES_URL} from '@core/config';

const ASSET_URL = `${IMAGES_URL}/personal-shopper-intro`;

export const getPsIntroConfig = (countryActive, devicePath) => ({
  content: {
    description: {
      defaultMessage: 'Our personal shoppers search over [], in sizes 34 to 48, creating looks that are uniquely you.',
      id: 'home.psintro.subtitle',
    },
    description_link: {
      defaultMessage: '150 European brands',
      id: 'home.psintro.brandslink',
    },
    title: {defaultMessage: 'The Style Experts', id: 'home.psintro.title'},
  },
  personal_shoppers: [
    {
      name: {
        id: 'home.psintro.name1',
      },
      job: {
        defaultMessage: 'personal shopper',
        id: 'home.psintro.rol',
      },
      cite: {
        defaultMessage: '“This look was all about fun; bold pieces to set Pila’s holiday off to a colourful start!”',
        id: 'home.psintro.quote1',
      },
      image: {
        avif: {
          srcSet: `${ASSET_URL}/${countryActive}/${devicePath}/ps1.avif 1x, ${ASSET_URL}/${countryActive}/${devicePath}/ps1_2x.avif 2x`,
        },
        webp: {
          srcSet: `${ASSET_URL}/${countryActive}/${devicePath}/ps1.webp 1x, ${ASSET_URL}/${countryActive}/${devicePath}/ps1_2x.webp 2x`,
        },
        default: {
          src: `${ASSET_URL}/${countryActive}/${devicePath}/ps1.jpg`,
          srcSet: `${ASSET_URL}/${countryActive}/${devicePath}/ps1.jpg 1x, ${ASSET_URL}/${countryActive}/${devicePath}/ps1_2x.jpg 2x`,
        },
      },
      look: {
        avif: {
          srcSet: `${ASSET_URL}/${countryActive}/${devicePath}/ps1_look.avif 1x, ${ASSET_URL}/${countryActive}/${devicePath}/ps1_look_2x.avif 2x`,
        },
        webp: {
          srcSet: `${ASSET_URL}/${countryActive}/${devicePath}/ps1_look.webp 1x, ${ASSET_URL}/${countryActive}/${devicePath}/ps1_look_2x.webp 2x`,
        },
        default: {
          src: `${ASSET_URL}/${countryActive}/${devicePath}/ps1_look.jpg`,
          srcSet: `${ASSET_URL}/${countryActive}/${devicePath}/ps1_look.jpg 1x, ${ASSET_URL}/${countryActive}/${devicePath}/ps1_look_2x.jpg 2x`,
        },
      },
    },
    {
      name: {
        id: 'home.psintro.name2',
      },
      job: {
        defaultMessage: 'personal shopper',
        id: 'home.psintro.rol',
      },
      cite: {
        defaultMessage: '“This look was all about fun; bold pieces to set Pila’s holiday off to a colourful start!”',
        id: 'home.psintro.quote2',
      },
      image: {
        avif: {
          srcSet: `${ASSET_URL}/${countryActive}/${devicePath}/ps2.avif 1x, ${ASSET_URL}/${countryActive}/${devicePath}/ps2_2x.avif 2x`,
        },
        webp: {
          srcSet: `${ASSET_URL}/${countryActive}/${devicePath}/ps2.webp 1x, ${ASSET_URL}/${countryActive}/${devicePath}/ps2_2x.webp 2x`,
        },
        default: {
          src: `${ASSET_URL}/${countryActive}/${devicePath}/ps2.jpg`,
          srcSet: `${ASSET_URL}/${countryActive}/${devicePath}/ps2.jpg 1x, ${ASSET_URL}/${countryActive}/${devicePath}/ps2_2x.jpg 2x`,
        },
      },
      look: {
        avif: {
          srcSet: `${ASSET_URL}/${countryActive}/${devicePath}/ps2_look.avif 1x, ${ASSET_URL}/${countryActive}/${devicePath}/ps2_look_2x.avif 2x`,
        },
        webp: {
          srcSet: `${ASSET_URL}/${countryActive}/${devicePath}/ps2_look.webp 1x, ${ASSET_URL}/${countryActive}/${devicePath}/ps2_look_2x.webp 2x`,
        },
        default: {
          src: `${ASSET_URL}/${countryActive}/${devicePath}/ps2_look.jpg`,
          srcSet: `${ASSET_URL}/${countryActive}/${devicePath}/ps2_look.jpg 1x, ${ASSET_URL}/${countryActive}/${devicePath}/ps2_look_2x.jpg 2x`,
        },
      },
    },

    {
      name: {
        id: 'home.psintro.name3',
      },
      job: {
        defaultMessage: 'personal shopper',
        id: 'home.psintro.rol',
      },
      cite: {
        defaultMessage: '“This look was all about fun; bold pieces to set Pila’s holiday off to a colourful start!”',
        id: 'home.psintro.quote3',
      },
      image: {
        avif: {
          srcSet: `${ASSET_URL}/${countryActive}/${devicePath}/ps3.avif 1x, ${ASSET_URL}/${countryActive}/${devicePath}/ps3_2x.avif 2x`,
        },
        webp: {
          srcSet: `${ASSET_URL}/${countryActive}/${devicePath}/ps3.webp 1x, ${ASSET_URL}/${countryActive}/${devicePath}/ps3_2x.webp 2x`,
        },
        default: {
          src: `${ASSET_URL}/${countryActive}/${devicePath}/ps3.jpg`,
          srcSet: `${ASSET_URL}/${countryActive}/${devicePath}/ps3.jpg 1x, ${ASSET_URL}/${countryActive}/${devicePath}/ps3_2x.jpg 2x`,
        },
      },
      look: {
        avif: {
          srcSet: `${ASSET_URL}/${countryActive}/${devicePath}/ps3_look.avif 1x, ${ASSET_URL}/${countryActive}/${devicePath}/ps3_look_2x.avif 2x`,
        },
        webp: {
          srcSet: `${ASSET_URL}/${countryActive}/${devicePath}/ps3_look.webp 1x, ${ASSET_URL}/${countryActive}/${devicePath}/ps3_look_2x.webp 2x`,
        },
        default: {
          src: `${ASSET_URL}/${countryActive}/${devicePath}/ps3_look.jpg`,
          srcSet: `${ASSET_URL}/${countryActive}/${devicePath}/ps3_look.jpg 1x, ${ASSET_URL}/${countryActive}/${devicePath}/ps3_look_2x.jpg 2x`,
        },
      },
    },
  ],
});
