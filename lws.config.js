module.exports = {
  port: 9999,
  rewrite: [
    {from: '/api/(.*)', to: 'https://backend-for-user.dev.envs.lookiero.tech/api/$1'},
    {from: '/api/contact', to: 'https://backend-for-user.dev.envs.lookiero.tech/api/contact'},
    {from: '/api/translations/(.*)', to: 'https://backend-for-user.dev.envs.lookiero.tech/api/translations/$1'},
  ],
};
