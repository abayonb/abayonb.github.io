export const lockBodyScroll = () => {
  document.body.classList.add('scroll-lock');
};

export const unlockBodyScroll = () => {
  document.body.classList.remove('scroll-lock');
};
