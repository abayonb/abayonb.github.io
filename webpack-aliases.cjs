const path = require('path');
module.exports = {
  '@aurora': path.resolve(__dirname, 'node_modules/@lookiero/aurora/web'),
  '@lookiero/user-errorhandler-front': path.resolve(__dirname, 'node_modules/@lookiero/user-errorhandler-front/web'),
  '@lookiero/user-tracking-front': path.resolve(__dirname, 'node_modules/@lookiero/user-tracking-front/web/dist'),
  '@core': path.resolve(__dirname, 'src/core'),
  '@app': path.resolve(__dirname, 'src/ui/app'),
  '@assets': path.resolve(__dirname, 'src/ui/assets'),
  '@bridges': path.resolve(__dirname, 'src/ui/bridges'),
  '@components': path.resolve(__dirname, 'src/ui/components'),
  '@contexts': path.resolve(__dirname, 'src/ui/components/contexts'),
  '@helpers': path.resolve(__dirname, 'src/ui/helpers'),
  '@hocs': path.resolve(__dirname, 'src/ui/components/hocs'),
  '@hooks': path.resolve(__dirname, 'src/ui/hooks'),
  '@i18n': path.resolve(__dirname, 'src/ui/components/contexts/i18n'),
  '@views': path.resolve(__dirname, 'src/ui/views'),
  '@tracking': path.resolve(__dirname, 'src/tracking'),
  react: require.resolve('react'),
};
