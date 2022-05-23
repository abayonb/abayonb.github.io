import {getInfluencers} from '@core/influencers/application';

export const InfluencersPresenter = view => ({
  onLoadInfluencers: () => view.showInfluencers(getInfluencers(view.screen.L)),
});
