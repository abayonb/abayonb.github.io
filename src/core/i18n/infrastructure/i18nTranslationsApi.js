import {http} from '@core/api/infrastructure';

export const i18nTranslationsApi = async locale => {
  const {language, country} = locale;
  return await http.fetch(`/api/v1/translations/${language}/${country.toUpperCase()}?projects=user-site-front`);
};
