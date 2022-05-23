import {ApiEventManager} from '@core/event/infrastructure';

export const eventManager = {
  emit: (eventType, args) => ApiEventManager.emit(eventType, args),
  subscribe: (eventType, callback) => ApiEventManager.subscribe(eventType, callback),
  unsubscribe: (eventType, callback) => ApiEventManager.unsubscribe(eventType, callback),
};
