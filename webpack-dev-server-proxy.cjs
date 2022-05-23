/* eslint-disable-next-line no-unused-vars */
const LOCALHOST = 'http://localhost:8080';
/* eslint-disable-next-line no-unused-vars */
const STUBS = 'http://localhost:9876/';
const DEV_SERVER = 'https://backend-for-user.dev.envs.lookiero.tech/';
/* eslint-disable-next-line no-unused-vars */
const LEGACY_LOCALHOST = 'http://localhost:8090';
const LEGACY_LK = 'https://web.dev.aws.lookiero.es/';

module.exports = {
  /*
    reference: https://webpack.js.org/configuration/dev-server/
  */
  '/api/*': {
    secure: false,
    changeOrigin: true,
    target: DEV_SERVER,
  },
  '/mendel/*': {
    target: DEV_SERVER,
    secure: false,
  },
  '/pub/*': {
    secure: false,
    changeOrigin: true,
    target: LEGACY_LK,
  },
};
