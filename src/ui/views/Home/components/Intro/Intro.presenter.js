import {getSiteLocale} from '@core/site/application';
import {getIntro} from '@core/home/application';
import {getBannerPromo} from '@core/banners/application';

export const IntroPresenter = view => ({
  onLoadResources: () => {
    const {country} = getSiteLocale();
    const {content, images} = getIntro(country, view.screen.L);

    view.showIntro({content, images});
  },
  onLoadBanners: () => {
    const banner = getBannerPromo();
    if (banner) view.showBanner(banner);
  },
});
