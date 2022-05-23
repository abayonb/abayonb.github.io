import {cookies} from './helpers/cookies';

const COOKIE_AGREEMENT_KEY = 'cookiesAgreement';

const toggleModal = isVisible => {
  const modalElement = document.getElementById('cookies-modal');

  if (isVisible) {
    modalElement?.classList.remove('hidden-component');
  } else {
    modalElement?.classList.add('hidden-component');
  }
};

const initCookieModalVisibility = () => {
  const hasCookie = cookies.getItem(COOKIE_AGREEMENT_KEY);
  if (!hasCookie) {
    toggleModal(true);
  }
};

/**
 * Cookies acceptance
 *
 */
const acceptCookies = () => {
  cookies.setItem(COOKIE_AGREEMENT_KEY, true);
  toggleModal(false);
};

/**
 * Handler for clicking the close button on cookies modal
 *
 */
const onCloseModal = () => {
  acceptCookies();
};

/**
 * Handler for clicking the "more info" link on cookies modal
 *
 */
const onNavigateToTermsAndConds = () => {
  acceptCookies();
  document.location.href = '/terms-and-conds';
};

const initModalButtons = () => {
  // In case the modal doesn't exists, we force a nullish element to avoid triggering an error of addEventListener to null
  const nullishElement = {
    addEventListener: () => {},
  };

  (document.getElementById('cookie-modal-close-btn') || nullishElement).addEventListener('click', onCloseModal);
  (document.getElementById('cookies-modal-link') || nullishElement).addEventListener(
    'click',
    onNavigateToTermsAndConds,
  );
};

export const initCookiesModal = () => {
  initCookieModalVisibility();
  initModalButtons();
};
