import {getAdditionalInfo} from '@core/home/application';

export const AdditionalInfoPresenter = view => ({
  onLoadInfo: () => view.showAdditionalInfo(getAdditionalInfo(view.screen.L)),
});
