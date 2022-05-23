import {getSiteLocale} from '@core/site/application';
import {getPsIntroConfig} from '@core/home/infrastructure';

const {country} = getSiteLocale();
let countryActive = country.toLowerCase();

const getPersonalShopperIntro = devicePath => getPsIntroConfig(countryActive, devicePath);

export {getPersonalShopperIntro};
