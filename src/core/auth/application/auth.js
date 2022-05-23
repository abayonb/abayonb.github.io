import {getAuth} from '@core/auth/infrastructure';

const isLoggedIn = () => {
  return !!getAuth();
};

export {isLoggedIn};
