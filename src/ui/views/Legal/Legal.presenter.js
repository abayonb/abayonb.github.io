import {getTermsAndConditions} from '@core/legal/application';
import {getDefaultTopic} from './modules';

export const LegalPresenter = view => ({
  onLoadTerms: async () => {
    const terms = await getTermsAndConditions();
    view.showTerms(terms);
    view.setDefaultTopic(getDefaultTopic(terms));
  },
});
