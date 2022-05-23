import {getPsIntro} from '@core/home/application';

export const PsIntroPresenter = view => ({
  onLoad: async () => {
    const {content, personal_shoppers} = getPsIntro(view.screen.L);

    view.showPsIntro({content, personal_shoppers});
  },
});
