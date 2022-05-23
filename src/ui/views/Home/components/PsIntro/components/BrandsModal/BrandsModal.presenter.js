import {getBrands} from '@core/brands/application';

export const BrandsModalPresenter = view => ({
  onLoadBrands: () => {
    const brands = getBrands(view.screen.L);

    view.showBrands(brands);
  },
});
