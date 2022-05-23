export const i18nTranslationsStatic = async locale => {
  try {
    const messages = await import(
      `../../../../public/temp/i18n/locales/${locale.language}-${locale.country.toUpperCase()}.json`
    );
    return messages.default;
  } catch (err) {
    console.log('err fetching loales', err);
  }
};
