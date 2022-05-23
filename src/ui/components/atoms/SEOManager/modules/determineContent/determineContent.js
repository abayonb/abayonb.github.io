const AVAILABLE_CONTENTS = {
  // url : key
  home: 'home',
  'terms-and-conds': 'termsAndConds',
  'help-and-contact': 'helpAndContact',
  prime: 'prime',
};

export const determineContent = (path = '') => {
  const content = path.toLowerCase().split('/')[1] || 'home';

  return content in AVAILABLE_CONTENTS ? AVAILABLE_CONTENTS[content] : 'notfound';
};
