import {getSiteLocale} from '@core/site/application';
import {getHowWork} from '@core/home/application';

export const HowWorkPresenter = view => ({
  onLoadSteps: async () => {
    const {country} = getSiteLocale();
    view.showSteps(await getHowWork(country.toLowerCase(), view.screen.L));
  },
});
