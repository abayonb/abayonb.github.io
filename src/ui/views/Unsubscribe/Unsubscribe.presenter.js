import {http} from '@core/api/infrastructure';

const url = '/pub/communications/unsubscribe';

const goToHome = () => (window.location.href = '/');

export const UnsubscribePresenter = ({token}) => ({
  goToHome,
  unsubscribe: () => {
    http
      .fetch(`${url}/${decodeURIComponent(token)}`)
      .then(res => {
        if (!res.ok) {
          throw `error unsubscribing user: ${token}`;
        }
      })
      .catch(() => {
        throw `error unsubscribing user: ${token}`;
      })
      .finally(() => {
        goToHome();
      });
  },
});
