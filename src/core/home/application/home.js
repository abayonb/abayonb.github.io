import {getDevicePath} from '@core/helpers';
import {getIntroContent, getPersonalShopperIntro, getWhatCanYouExpects} from './services';
import {getAdditionalInfoSectionsConfig, getHowWorkConfig} from '@core/home/infrastructure';

const getAdditionalInfo = isDesktop => getAdditionalInfoSectionsConfig(getDevicePath(isDesktop));
const getIntro = (country, isDesktop) => getIntroContent(country, getDevicePath(isDesktop));
const getPsIntro = isDesktop => getPersonalShopperIntro(getDevicePath(isDesktop));
const getHowWork = (country, isDesktop) => getHowWorkConfig(country, getDevicePath(isDesktop));

export {getAdditionalInfo, getHowWork, getIntro, getPsIntro, getWhatCanYouExpects};
