import {eventManager} from '@core/event/application';
import {emitUserEvent, initTracking} from '@lookiero/user-tracking-front';
import {EVENT} from './tracking.definition';
import {getSiteLocale} from '@core/site/application';

const subscribeQuizEvent = action => {
  eventManager.subscribe(action, payload => {
    const eventData = {
      event: action,
      eventCategory: 'navigation',
      ...payload,
    };
    emitUserEvent(eventData);
  });
};

const subscribeNavigationEvents = action => {
  eventManager.subscribe(action, payload => {
    const {site} = getSiteLocale();

    initTracking().userTracker({
      event: action,
      eventCategory: 'navigation',
      store: site,
      ...payload,
    });
  });
};

subscribeQuizEvent(EVENT.QUIZ);
subscribeNavigationEvents(EVENT.PAGEVIEW);
