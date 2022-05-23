import {getBannerInfo} from '@core/banners/application';

export const BannerInfoPresenter = view => ({
  onLoadBanner: () => view.showBanner(getBannerInfo()),
});
