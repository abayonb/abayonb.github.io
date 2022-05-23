const STORE_ID = {
  ES: 1,
  FR: 2,
  UK: 3,
  PT: 4,
  BE: 5,
  IT: 6,
  DE: 7,
};

const CLIENT_STORAGE_KEY = 'ltmdata';

export const sendAnalyticsEvent = section => {
  const eventData = {
    event: 'pageview',
    eventCategory: 'navigation',
    section,
    store: STORE_ID[window.location.hostname.split('.').pop().toUpperCase()],
    userLogged: false,
  };
  window.dataLayer.push(eventData);
  sessionStorage.setItem(CLIENT_STORAGE_KEY, JSON.stringify(eventData));
};
