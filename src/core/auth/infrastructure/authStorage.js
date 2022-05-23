import Cookies from 'js-cookie';

const TOKEN_KEY = 'access_token';

export const AuthStorage = {
  get: () => Cookies.get(TOKEN_KEY),
};
