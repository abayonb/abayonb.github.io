import {getMainMenuLinks} from '@core/site/application';

export const MenuPresenter = view => ({
  onLoadLinks: async () => {
    const links = await getMainMenuLinks();
    view.showLinks(links);
  },
});
