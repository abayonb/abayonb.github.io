export const inAppBrowser = () =>
  /FB_IAB/.test(navigator.userAgent) ||
  /FBAN/.test(navigator.userAgent) ||
  /FBAV/.test(navigator.userAgent) ||
  /Pinterest/.test(navigator.userAgent);

export const iOSInAppBrowser = () => window.screen.height > 667 && /FBIOS/.test(navigator.userAgent);
