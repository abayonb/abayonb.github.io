import {getWhatCanYouExpects} from '@core/home/application/';

export const WhatCanYouExpectPresenter = view => ({
  onLoadCarouselContent: async () => view.showCarousel(await getWhatCanYouExpects()),
});
