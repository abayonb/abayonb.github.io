import {isSeoRender} from '@core/seo/application';
import {i18nTranslationsApi, i18nTranslationsStatic} from '@core/i18n/infrastructure';

const getI18nTranslations = locale => (isSeoRender ? i18nTranslationsStatic(locale) : i18nTranslationsApi(locale));

export {getI18nTranslations};
