import {getInfluencersDefinition, getInfluencersBySite} from './influencers.definition';

const getInfluencers = (countryActive, devicePath) =>
  getInfluencersBySite(getInfluencersDefinition(devicePath))[countryActive];

const getInfluencersConfig = (countryActive, devicePath) => ({
  title: {
    defaultMessage: 'A world of style is yours',
    id: 'home.influencers.title',
  },
  description: {
    defaultMessage: 'Confidence. Inspiration. Freedom. See what style is sparking in over a million women.',
    id: 'home.influencers.subtitle',
  },
  influencers: getInfluencers(countryActive, devicePath),
});

export {getInfluencersConfig};
