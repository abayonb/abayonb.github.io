import {getDevicePath} from '@core/helpers';
import {getSiteLocale} from '@core/site/application';
import {getBrandsConfig} from '@core/brands/infrastructure';

const {country} = getSiteLocale();
let countryActive = country.toLowerCase();

const getBrands = devicePath => getBrandsConfig(countryActive, getDevicePath(devicePath));

export {getBrands};
