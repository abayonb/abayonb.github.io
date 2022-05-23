import {isSeoRender} from '@core/seo/application';

const API_HOST = isSeoRender ? process.env.REACT_APP_API_HOST_PROXY_BUNDLE : '';

const request = (url, options) =>
  new Promise((resolve, reject) => {
    fetch(`${API_HOST}${url}`, options)
      .then(async response => {
        if (response.status >= 400) {
          response.text().then(function (text) {
            reject({code: response.status, message: text});
          });
        } else {
          const json = await response.json();
          resolve(json);
        }
      })
      .catch(({message = 'Something wrong happened. Try again.', response} = {}) => {
        reject({
          code: response ? response.status : 500,
          message,
        });
      });
  });

export const http = {
  fetch: url => request(url),

  post: async (url, data) =>
    request(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        Accept: 'application/json',
      },
      body: JSON.stringify(data),
    }),
};
