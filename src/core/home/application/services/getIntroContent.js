import {getIntroConfig} from '@core/home/infrastructure';

const getIntroContent = (country, devicePath) => getIntroConfig(country, devicePath);

export {getIntroContent};
