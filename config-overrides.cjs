/* eslint-disable react-hooks/rules-of-hooks */
const {override, addWebpackAlias, addPostcssPlugins, overrideDevServer} = require('customize-cra');
const postcssPresetEnv = require('postcss-preset-env');
const webpackAliases = require('./webpack-aliases.cjs');
const webpackDevServerProxy = require('./webpack-dev-server-proxy.cjs');

const isProd = process.env.npm_config_mode === 'prod';

module.exports = {
  webpack: override(
    addWebpackAlias(webpackAliases),
    addPostcssPlugins([
      postcssPresetEnv({
        stage: 1,
        features: {
          'nesting-rules': true,
          'custom-selectors': true,
          'custom-media-queries': true,
        },
      }),
    ]),
    config => ({
      ...config,
      devtool: isProd ? false : 'source-map',
    }),
  ),

  devServer: overrideDevServer(config => {
    return {
      ...config,
      contentBase: './public',
      port: '3000',
      proxy: webpackDevServerProxy,
    };
  }),
};
