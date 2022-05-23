import {getQuizFunnelUrl} from '@core/quiz/application';

export const CreateProfileButtonPresenter = view => ({
  onLoadFunnelConfig: async () => view.showButtonCreateProfile(await getQuizFunnelUrl()),
});
