import {getSiteSocialLinks} from '@core/site/application';

export const FollowUsPresenter = view => ({
  onLoadSocialLinks: async () => view.showSocialLinks(await getSiteSocialLinks()),
});
