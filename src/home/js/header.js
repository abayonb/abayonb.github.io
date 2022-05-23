import {lockBodyScroll, unlockBodyScroll} from './helpers/lock-body-scroll';
import {sendAnalyticsEvent} from './helpers/analytics-event';

const panel = document.getElementById('lk-panel');
let panelOpened = false;

const openPanel = () => {
  panel.classList.remove('pointerNone');
  panel.classList.add('panel__wrapper--open');
  panel.setAttribute('aria-hidden', 'false');
  lockBodyScroll();
  document.getElementById('panel').classList.remove('collapse');
  document.getElementById('panel').classList.add('expand');
  if (!panelOpened) {
    sendAnalyticsEvent('BurgerMenu');
    panelOpened = true;
  }
};

const initMenu = () => {
  const menu = document.getElementById('header-burger-menu');
  menu.addEventListener('click', openPanel);
  const panelClose = document.getElementById('panel-button-close');
  panelClose.addEventListener('click', () => {
    panel.classList.add('pointerNone');
    panel.classList.remove('panel__wrapper--open');
    panel.setAttribute('aria-hidden', 'true');
    document.getElementById('panel').classList.remove('expand');
    document.getElementById('panel').classList.add('collapse');
    unlockBodyScroll();
  });
};

const initPanelButtons = () => {
  document
    .getElementById('panel-create-profile-button')
    .addEventListener('click', () => (document.location.href = '/user/quiz'));
  document
    .getElementById('panel-login-button')
    .addEventListener('click', () => (document.location.href = '/user/login'));
};

export const initHeader = () => {
  initMenu();
  initPanelButtons();
};
