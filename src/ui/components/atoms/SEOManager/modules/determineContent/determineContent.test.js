import {determineContent} from '.';

const DEFAULT = 'home';

describe('determineContent', () => {
  test('default', () => {
    expect(determineContent()).toEqual(DEFAULT);
  });

  it('should return an available content', () => {
    expect(determineContent('/')).toEqual('home');
    expect(determineContent('/help-and-contact')).toEqual('helpAndContact');
    expect(determineContent('/terms-and-conds')).toEqual('termsAndConds');
    expect(determineContent('/i/love/hack')).toEqual('notfound');
    expect(determineContent('/prime')).toEqual('prime');
  });
});
