import {LAYOUT, Notification, useStack} from '@aurora';

const NOTIFICATION_TYPES = {
  SUCCESS: 'success',
  ERROR: 'error',
  WARNING: 'warning',
};

const NOTIFICATION_DEFAULTS = {
  marginTop: LAYOUT.XXS,
  marginHorizontal: LAYOUT.XXS,
  motion: 'top',
  timeoutClose: 20000,
};

const useNotification = () => {
  const Stack = useStack();

  const uid = () => new Date().getTime().toString();

  return {
    show: (Component, props) => {
      Stack.show(uid(), Component, props);
    },
    showError: ({message}) => {
      Stack.alert(uid(), Notification, {...NOTIFICATION_DEFAULTS, text: message});
    },
    showSuccess: ({message}) => {
      Stack.success(uid(), Notification, {...NOTIFICATION_DEFAULTS, text: message});
    },
    showWarning: ({message}) => {
      Stack.alert(uid(), Notification, {...NOTIFICATION_DEFAULTS, text: message});
    },
  };
};

export {useNotification, NOTIFICATION_TYPES};
