const navigateTo = () => {
  const domain = window.location.hostname.split('.').pop();
  window.open(`/${domain}/personal-shopper`, '_blank');
};

const initListeners = () => {
  const psLinks = document.querySelectorAll('.ps-link');

  psLinks?.forEach(link => link.addEventListener('click', navigateTo));
};
export const initHowItWorks = () => {
  initListeners();
};
