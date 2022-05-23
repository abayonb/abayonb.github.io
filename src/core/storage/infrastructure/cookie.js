import Cookies from 'js-cookie';

const cookie = {
  set: (name, value, options) => Cookies.set(name, value, options),
  get: name => Cookies.get(name),
  remove: (name, options) => Cookies.remove(name, options),
};

export {cookie};
