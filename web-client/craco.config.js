/* eslint-disable @typescript-eslint/no-var-requires */
const { CracoDevServer } = require('@mathpresso/devserver');
const CracoAlias = require('craco-alias');

const serverEndpoint = 'https://question-spoke-dev.mathpresso.net/api';

module.exports = {
  eslint: {
    enable: false,
  },
  plugins: [
    {
      plugin: CracoDevServer,
      options: {
        enabled: true,
        endpoint: serverEndpoint,
      },
    },
    {
      plugin: CracoAlias,
      options: {
        source: 'tsconfig',
        baseUrl: './src',
        tsConfigPath: 'tsconfig.paths.json',
      },
    },
  ],
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.module.rules.push({
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-typescript'],
            plugins: ['istanbul'],
          },
        },
      });

      return webpackConfig;
    },
  },
};
