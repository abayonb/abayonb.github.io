import {getDevicePath} from '@core/helpers';
import {getSiteLocale} from '@core/site/application';
import {getInfluencersConfig} from '@core/influencers/infrastructure';

const {country} = getSiteLocale();
let countryActive = country.toLowerCase();

const getInfluencers = devicePath => getInfluencersConfig(countryActive, getDevicePath(devicePath));

export {getInfluencers};
