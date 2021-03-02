const path = require('path');
const webpack = require('webpack');

const nodeEnv = process.env.NODE_ENV || 'development';

const isProduction = nodeEnv === 'production';
const isStaging = nodeEnv === 'staging';
const isNeedMinimizeCode = isProduction || isStaging;

const platform = process.env.PLATFORM || 'desktop';
const isMobile = platform === 'mobile';

const plugins = [
  new webpack.DefinePlugin({
    __PROD__: isProduction,
    __STAGING__: isStaging,
    __PLATFORM__: `"${platform}"`,
    __MOBILE__: isMobile,
    __DESKTOP__: !isMobile,
    __DEV__: !isProduction
  })
];

module.exports = {
  entry: './src/client/game/game.ts',
  devtool: 'inline-source-map',
  mode: nodeEnv,
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: `awesome-typescript-loader${getTsConfig()}`,
        exclude: /node_modules/
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  output: {
    filename: 'game.js',
    path: path.resolve(__dirname, 'dist/client/game'),
  },
  plugins
};

function getTsConfig() {
  return isProduction ? `?{configFileName: "./tsconfig.min.json"}` : '';
}
