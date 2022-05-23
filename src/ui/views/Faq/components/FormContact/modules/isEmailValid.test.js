import {isEmailValid} from './isEmailValid';

describe('isEmailValid', () => {
  it('should return false when the value is not and email valid', () => {
    expect(isEmailValid('11111')).toBe(false);
    expect(isEmailValid('email@aaaa.')).toBe(false);
    expect(isEmailValid('email@aaaa')).toBe(false);
    expect(isEmailValid('emailaaaa.es')).toBe(false);
  });

  it('should return true when the value is and email valid', () => {
    expect(isEmailValid('aaa@aaa.es')).toBe(true);
  });
});
