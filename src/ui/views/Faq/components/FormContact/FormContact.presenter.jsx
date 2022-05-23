import {getForm, sendMessage} from '@core/contact/application';
import {getSiteLocale} from '@core/site/application';

import {localizeOptions} from '../../modules';
import {getFieldError, isEmailValid} from './modules';

export const FormContactPresenter = view => ({
  onLoadFields: async () => {
    const fields = await getForm();
    view.showForm(fields);
    view.getRequiredFields(fields.map(({id}) => id));
  },
  sendForm: async ({topic: category, ...form}) => {
    const {country: countryCode} = getSiteLocale();
    await sendMessage({...form, category, countryCode});
  },
  getFieldError: getFieldError,
  isEmailValid: isEmailValid,
  localizeOptions: localizeOptions,
});
