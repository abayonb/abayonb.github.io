import {getSiteLocale} from '@core/site/application';
import {getFirstQuestionConfig} from '@core/quiz/infrastructure';

const {country} = getSiteLocale();
let countryActive = country.toLowerCase();

const getFirstQuestion = devicePath => getFirstQuestionConfig(countryActive, devicePath);

export {getFirstQuestion};
