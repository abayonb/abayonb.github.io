import {getBrandsDefinition, getBrandsBySite} from './brands.definition';

const getBrands = (countryActive, devicePath) => getBrandsBySite(getBrandsDefinition(devicePath))[countryActive];

const getBrandsConfig = (countryActive, devicePath) => getBrands(countryActive, devicePath);

export {getBrandsConfig};
