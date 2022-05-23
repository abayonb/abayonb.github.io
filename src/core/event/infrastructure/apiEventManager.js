import eventEmitter from 'tiny-emitter/instance';

const emit = (event, ...args) => {
  eventEmitter.emit(event, ...args);
};

const subscribe = (event, callback) => {
  eventEmitter.on(event, callback);
};

const unsubscribe = (event, callback) => {
  eventEmitter.off(event, callback);
};

export const ApiEventManager = {
  emit,
  subscribe,
  unsubscribe,
};
