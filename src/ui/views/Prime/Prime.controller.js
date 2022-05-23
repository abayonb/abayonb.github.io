import {getSiteLocale} from '@core/site/application';
import {typeformCodesBySite} from './Prime.definition';

const getTypeformCode = () => {
  const {site} = getSiteLocale();
  return typeformCodesBySite()[site.toLowerCase()];
};

export {getTypeformCode};
