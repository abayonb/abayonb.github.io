import {
  bannerInfoConfig,
  bannerPromoConfig,
  bannerPsLookieroConfig,
  saveUserClosedBannerSessionStorage,
} from '@core/banners/infrastructure';

const getBannerInfo = () => bannerInfoConfig();
const getBannerPromo = () => bannerPromoConfig();
const getBannerPsLookieroConfig = () => bannerPsLookieroConfig();
const saveUserClosedBanner = bannerName => saveUserClosedBannerSessionStorage(bannerName);

export {getBannerInfo, getBannerPromo, getBannerPsLookieroConfig, saveUserClosedBanner};
