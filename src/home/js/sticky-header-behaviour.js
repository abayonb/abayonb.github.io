const headerContainer = document.getElementById('header-container');

export const handleHeaderScroll = () => {
  const scrollInfo = {
    lastScrollTop: window.pageYOffset,
    lastDirection: undefined,
  };
  window.addEventListener('scroll', () => {
    if (!scrollInfo.lastDirection) {
      headerContainer.style.opacity = 1;
      headerContainer.style['transition-property'] = 'opacity, top';
    }
    const st = window.pageYOffset || document.documentElement.scrollTop;
    const direction = st > scrollInfo.lastScrollTop ? 'top' : 'down';
    if (direction !== scrollInfo.lastDirection) headerContainer.style.top = direction === 'top' ? '-55px' : 0;
    scrollInfo.lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
    scrollInfo.lastDirection = direction;
  });
};
