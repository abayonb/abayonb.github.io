import {getSiteLocale} from '@core/site/application';
import {getWhatCanYouExpectConfig} from '@core/home/infrastructure';

const {country} = getSiteLocale();
let countryActive = country.toLowerCase();

const getWhatCanYouExpects = () => getWhatCanYouExpectConfig(countryActive);

export {getWhatCanYouExpects};
