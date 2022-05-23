import {isEmailValid} from './isEmailValid';

export const getFieldError = (id, value = '') => {
  let error = undefined;
  if (id === 'email' && value !== '') error = !isEmailValid(value);

  return error;
};
