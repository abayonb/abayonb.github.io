const HOME_PATH = '/';
const FAQ_PATH = '/help-and-contact/';
const LEGAL_PATH = '/terms-and-conds/';
const PRIME_PATH = '/prime/:email/:fullname/:uuid/:lastname?';

export const siteRoutes = () => {
  return {HOME_PATH, FAQ_PATH, LEGAL_PATH, PRIME_PATH};
};
